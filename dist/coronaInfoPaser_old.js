"use strict";

const apiResponse = `731
11036
5.15.
은평구
-
이태원 클럽 관련
서울의료원

730
11035
5.15.
강남구
-
이태원 클럽 관련
순천향병원

729
11034
5.15.
은평구
-
확인 중
서북병원`;
const whatYouWant = apiResponse.split('\n').reduce((acc, cur) => {
  if (cur !== '') {
    switch (acc.currentMenu) {
      case 0:
        return { ...acc,
          parsedData: { ...acc.parsedData,
            [acc.currentIndex]: { ...acc.parsedData[acc.currentIndex],
              환자번호: cur
            }
          },
          currentMenu: acc.currentMenu + 1
        };

      case 1:
        return { ...acc,
          parsedData: { ...acc.parsedData,
            [acc.currentIndex]: { ...acc.parsedData[acc.currentIndex],
              확진자수: cur
            }
          },
          currentMenu: acc.currentMenu + 1
        };

      case 2:
        return { ...acc,
          parsedData: { ...acc.parsedData,
            [acc.currentIndex]: { ...acc.parsedData[acc.currentIndex],
              걸린날: cur
            }
          },
          currentMenu: acc.currentMenu + 1
        };

      case 3:
        return { ...acc,
          parsedData: { ...acc.parsedData,
            [acc.currentIndex]: { ...acc.parsedData[acc.currentIndex],
              구: cur
            }
          },
          currentMenu: acc.currentMenu + 1
        };

      case 4:
        return { ...acc,
          currentMenu: acc.currentMenu + 1
        };

      case 5:
        return { ...acc,
          parsedData: { ...acc.parsedData,
            [acc.currentIndex]: { ...acc.parsedData[acc.currentIndex],
              어디서걸렸대: cur
            }
          },
          currentMenu: acc.currentMenu + 1
        };

      case 6:
        return { ...acc,
          parsedData: { ...acc.parsedData,
            [acc.currentIndex]: { ...acc.parsedData[acc.currentIndex],
              이송병원: cur
            }
          },
          currentMenu: acc.currentMenu + 1
        };
    }
  }

  return {
    parsedData: { ...acc.parsedData,
      [acc.currentIndex + 1]: {}
    },
    currentIndex: acc.currentIndex + 1,
    currentMenu: 0
  };
}, {
  parsedData: {
    0: {}
  },
  currentIndex: 0,
  currentMenu: 0
});
console.log(whatYouWant);