import { Injectable } from '@angular/core';

@Injectable()
export class FinancialDataService {
  public getData(): any[] {
    return [
      {
        time: new Date(2013, 1, 1),
        open: 268.93,
        high: 268.93,
        low: 262.8,
        close: 265.0,
        volume: 6118146
      },
      {
        time: new Date(2013, 1, 4),
        open: 262.78,
        high: 264.68,
        low: 259.07,
        close: 259.98,
        volume: 3723793
      },
      {
        time: new Date(2013, 1, 5),
        open: 262.0,
        high: 268.03,
        low: 261.46,
        close: 266.89,
        volume: 4013780
      },
      {
        time: new Date(2013, 1, 6),
        open: 265.16,
        high: 266.89,
        low: 261.11,
        close: 262.22,
        volume: 2772204
      },
      {
        time: new Date(2013, 1, 7),
        open: 264.1,
        high: 264.1,
        low: 255.11,
        close: 260.23,
        volume: 3977065
      },
      {
        time: new Date(2013, 1, 8),
        open: 261.4,
        high: 265.25,
        low: 260.56,
        close: 261.95,
        volume: 3879628
      },
      {
        time: new Date(2013, 1, 11),
        open: 263.2,
        high: 263.25,
        low: 256.6,
        close: 257.21,
        volume: 3407457
      },
      {
        time: new Date(2013, 1, 12),
        open: 259.19,
        high: 260.16,
        low: 257.0,
        close: 258.7,
        volume: 2944730
      },
      {
        time: new Date(2013, 1, 13),
        open: 261.53,
        high: 269.96,
        low: 260.3,
        close: 269.47,
        volume: 5295786
      },
      {
        time: new Date(2013, 1, 14),
        open: 267.37,
        high: 270.65,
        low: 265.4,
        close: 269.24,
        volume: 3464080
      },
      {
        time: new Date(2013, 1, 15),
        open: 267.63,
        high: 268.92,
        low: 263.11,
        close: 265.09,
        volume: 3981233
      }
    ];
  }
  public getMulti(): any[] {
    return [this.getAmzn(), this.getGoog(), this.getMsft(), this.getTsla()];
  }
  public getThree(): any[] {
    return [this.getAmzn(), this.getMsft(), this.getTsla()];
  }
  public getAmzn(): any[] {
    const result: any = [
      {
        time: new Date(2018, 0, 2),
        open: 1172.0,
        high: 1190.0,
        low: 1170.51,
        close: 1189.01,
        volume: 2694494
      },
      {
        time: new Date(2018, 0, 3),
        open: 1188.3,
        high: 1205.49,
        low: 1188.3,
        close: 1204.2,
        volume: 3108793
      },
      {
        time: new Date(2018, 0, 4),
        open: 1205.0,
        high: 1215.87,
        low: 1204.66,
        close: 1209.59,
        volume: 3022089
      },
      {
        time: new Date(2018, 0, 5),
        open: 1217.51,
        high: 1229.14,
        low: 1210.0,
        close: 1229.14,
        volume: 3544743
      },
      {
        time: new Date(2018, 0, 8),
        open: 1236.0,
        high: 1253.08,
        low: 1232.03,
        close: 1246.87,
        volume: 4279475
      },
      {
        time: new Date(2018, 0, 9),
        open: 1256.9,
        high: 1259.33,
        low: 1241.76,
        close: 1252.7,
        volume: 3661316
      },
      {
        time: new Date(2018, 0, 10),
        open: 1245.15,
        high: 1254.33,
        low: 1237.23,
        close: 1254.33,
        volume: 2686017
      },
      {
        time: new Date(2018, 0, 11),
        open: 1259.74,
        high: 1276.77,
        low: 1256.46,
        close: 1276.68,
        volume: 3125048
      },
      {
        time: new Date(2018, 0, 12),
        open: 1273.39,
        high: 1305.76,
        low: 1273.39,
        close: 1305.2,
        volume: 5443730
      },
      {
        time: new Date(2018, 0, 16),
        open: 1323.0,
        high: 1339.94,
        low: 1292.3,
        close: 1304.86,
        volume: 7220701
      },
      {
        time: new Date(2018, 0, 17),
        open: 1312.24,
        high: 1314.0,
        low: 1280.88,
        close: 1295.0,
        volume: 5253754
      },
      {
        time: new Date(2018, 0, 18),
        open: 1293.95,
        high: 1304.6,
        low: 1284.02,
        close: 1293.32,
        volume: 4026915
      },
      {
        time: new Date(2018, 0, 19),
        open: 1312.0,
        high: 1313.0,
        low: 1292.99,
        close: 1294.58,
        volume: 4578536
      },
      {
        time: new Date(2018, 0, 22),
        open: 1297.17,
        high: 1327.45,
        low: 1296.66,
        close: 1327.31,
        volume: 4140061
      },
      {
        time: new Date(2018, 0, 23),
        open: 1338.09,
        high: 1364.9,
        low: 1337.34,
        close: 1362.54,
        volume: 5169306
      },
      {
        time: new Date(2018, 0, 24),
        open: 1374.82,
        high: 1388.16,
        low: 1338.0,
        close: 1357.51,
        volume: 6807457
      },
      {
        time: new Date(2018, 0, 25),
        open: 1368.0,
        high: 1378.34,
        low: 1357.62,
        close: 1377.95,
        volume: 4753012
      },
      {
        time: new Date(2018, 0, 26),
        open: 1392.01,
        high: 1402.53,
        low: 1380.91,
        close: 1402.05,
        volume: 4857310
      },
      {
        time: new Date(2018, 0, 29),
        open: 1409.18,
        high: 1431.39,
        low: 1400.44,
        close: 1417.68,
        volume: 5701898
      },
      {
        time: new Date(2018, 0, 30),
        open: 1403.17,
        high: 1439.25,
        low: 1392.0,
        close: 1437.82,
        volume: 5871942
      },
      {
        time: new Date(2018, 0, 31),
        open: 1451.3,
        high: 1472.58,
        low: 1450.04,
        close: 1450.89,
        volume: 6424693
      }
    ];
    result.title = 'Amazon (AMZN)';
    return result;
  }
  public getGoog(): any {
    const result: any = [
      {
        time: new Date(2018, 0, 2),
        open: 1048.34,
        high: 1066.94,
        low: 1045.23,
        close: 1065.0,
        volume: 1237564
      },
      {
        time: new Date(2018, 0, 3),
        open: 1064.31,
        high: 1086.29,
        low: 1063.21,
        close: 1082.48,
        volume: 1430170
      },
      {
        time: new Date(2018, 0, 4),
        open: 1088.0,
        high: 1093.57,
        low: 1084.0,
        close: 1086.4,
        volume: 1004605
      },
      {
        time: new Date(2018, 0, 5),
        open: 1094.0,
        high: 1104.25,
        low: 1092.0,
        close: 1102.23,
        volume: 1279123
      },
      {
        time: new Date(2018, 0, 8),
        open: 1102.23,
        high: 1111.27,
        low: 1101.62,
        close: 1106.94,
        volume: 1047603
      },
      {
        time: new Date(2018, 0, 9),
        open: 1109.4,
        high: 1110.57,
        low: 1101.23,
        close: 1106.26,
        volume: 902541
      },
      {
        time: new Date(2018, 0, 10),
        open: 1097.1,
        high: 1104.6,
        low: 1096.11,
        close: 1102.61,
        volume: 1042793
      },
      {
        time: new Date(2018, 0, 11),
        open: 1106.3,
        high: 1106.52,
        low: 1099.59,
        close: 1105.52,
        volume: 978292
      },
      {
        time: new Date(2018, 0, 12),
        open: 1102.41,
        high: 1124.29,
        low: 1101.15,
        close: 1122.26,
        volume: 1720533
      },
      {
        time: new Date(2018, 0, 16),
        open: 1132.51,
        high: 1139.91,
        low: 1117.83,
        close: 1121.76,
        volume: 1575261
      },
      {
        time: new Date(2018, 0, 17),
        open: 1126.22,
        high: 1132.6,
        low: 1117.01,
        close: 1131.98,
        volume: 1202639
      },
      {
        time: new Date(2018, 0, 18),
        open: 1131.41,
        high: 1132.51,
        low: 1117.5,
        close: 1129.79,
        volume: 1198234
      },
      {
        time: new Date(2018, 0, 19),
        open: 1131.83,
        high: 1137.86,
        low: 1128.3,
        close: 1137.51,
        volume: 1778229
      },
      {
        time: new Date(2018, 0, 22),
        open: 1137.49,
        high: 1159.88,
        low: 1135.11,
        close: 1155.81,
        volume: 1617975
      },
      {
        time: new Date(2018, 0, 23),
        open: 1159.85,
        high: 1171.63,
        low: 1158.75,
        close: 1169.97,
        volume: 1333056
      },
      {
        time: new Date(2018, 0, 24),
        open: 1177.33,
        high: 1179.86,
        low: 1161.05,
        close: 1164.24,
        volume: 1416625
      },
      {
        time: new Date(2018, 0, 25),
        open: 1172.53,
        high: 1175.94,
        low: 1162.76,
        close: 1170.37,
        volume: 1480540
      },
      {
        time: new Date(2018, 0, 26),
        open: 1175.08,
        high: 1175.84,
        low: 1158.11,
        close: 1175.84,
        volume: 2018755
      },
      {
        time: new Date(2018, 0, 29),
        open: 1176.48,
        high: 1186.89,
        low: 1171.98,
        close: 1175.58,
        volume: 1378913
      },
      {
        time: new Date(2018, 0, 30),
        open: 1167.83,
        high: 1176.52,
        low: 1163.52,
        close: 1163.69,
        volume: 1556346
      },
      {
        time: new Date(2018, 0, 31),
        open: 1170.57,
        high: 1173.0,
        low: 1159.13,
        close: 1169.94,
        volume: 1538688
      }
    ];
    result.title = 'Google (GOOG)';
    return result;
  }
  public getMsft(): any {
    const result: any = [
      {
        time: new Date(2018, 0, 2),
        open: 86.12,
        high: 86.31,
        low: 85.5,
        close: 85.95,
        volume: 22483797
      },
      {
        time: new Date(2018, 0, 3),
        open: 86.06,
        high: 86.51,
        low: 85.97,
        close: 86.35,
        volume: 26061439
      },
      {
        time: new Date(2018, 0, 4),
        open: 86.59,
        high: 87.66,
        low: 86.57,
        close: 87.11,
        volume: 21911974
      },
      {
        time: new Date(2018, 0, 5),
        open: 87.66,
        high: 88.41,
        low: 87.43,
        close: 88.19,
        volume: 23407110
      },
      {
        time: new Date(2018, 0, 8),
        open: 88.2,
        high: 88.58,
        low: 87.6,
        close: 88.28,
        volume: 22113049
      },
      {
        time: new Date(2018, 0, 9),
        open: 88.65,
        high: 88.73,
        low: 87.86,
        close: 88.22,
        volume: 19484317
      },
      {
        time: new Date(2018, 0, 10),
        open: 87.86,
        high: 88.19,
        low: 87.41,
        close: 87.82,
        volume: 18652201
      },
      {
        time: new Date(2018, 0, 11),
        open: 88.13,
        high: 88.13,
        low: 87.24,
        close: 88.08,
        volume: 17808877
      },
      {
        time: new Date(2018, 0, 12),
        open: 88.67,
        high: 89.78,
        low: 88.45,
        close: 89.6,
        volume: 24271531
      },
      {
        time: new Date(2018, 0, 16),
        open: 90.1,
        high: 90.79,
        low: 88.01,
        close: 88.35,
        volume: 36599736
      },
      {
        time: new Date(2018, 0, 17),
        open: 89.08,
        high: 90.28,
        low: 88.75,
        close: 90.14,
        volume: 25621164
      },
      {
        time: new Date(2018, 0, 18),
        open: 89.8,
        high: 90.67,
        low: 89.66,
        close: 90.1,
        volume: 24159683
      },
      {
        time: new Date(2018, 0, 19),
        open: 90.14,
        high: 90.61,
        low: 89.66,
        close: 90.0,
        volume: 36875013
      },
      {
        time: new Date(2018, 0, 22),
        open: 90.0,
        high: 91.62,
        low: 89.74,
        close: 91.61,
        volume: 23601555
      },
      {
        time: new Date(2018, 0, 23),
        open: 91.9,
        high: 92.3,
        low: 91.54,
        close: 91.9,
        volume: 23412841
      },
      {
        time: new Date(2018, 0, 24),
        open: 92.55,
        high: 93.43,
        low: 91.58,
        close: 91.82,
        volume: 33277483
      },
      {
        time: new Date(2018, 0, 25),
        open: 92.46,
        high: 93.24,
        low: 91.93,
        close: 92.33,
        volume: 26383238
      },
      {
        time: new Date(2018, 0, 26),
        open: 93.12,
        high: 94.06,
        low: 92.58,
        close: 94.06,
        volume: 29172167
      },
      {
        time: new Date(2018, 0, 29),
        open: 95.14,
        high: 95.45,
        low: 93.72,
        close: 93.92,
        volume: 31569940
      },
      {
        time: new Date(2018, 0, 30),
        open: 93.3,
        high: 93.66,
        low: 92.1,
        close: 92.74,
        volume: 38635053
      },
      {
        time: new Date(2018, 0, 31),
        open: 93.75,
        high: 95.4,
        low: 93.51,
        close: 95.01,
        volume: 48756338
      }
    ];
    result.title = 'Microsoft (MSFT)';
    return result;
  }
  public getTsla(): any {
    const result: any = [
      {
        time: new Date(2018, 0, 2),
        open: 312.0,
        high: 322.11,
        low: 311.0,
        close: 320.53,
        volume: 4352241
      },
      {
        time: new Date(2018, 0, 3),
        open: 321.0,
        high: 325.25,
        low: 315.55,
        close: 317.25,
        volume: 4521527
      },
      {
        time: new Date(2018, 0, 4),
        open: 312.87,
        high: 318.55,
        low: 305.68,
        close: 314.62,
        volume: 9946304
      },
      {
        time: new Date(2018, 0, 5),
        open: 316.62,
        high: 317.24,
        low: 312.0,
        close: 316.58,
        volume: 4591180
      },
      {
        time: new Date(2018, 0, 8),
        open: 316.0,
        high: 337.02,
        low: 315.5,
        close: 336.41,
        volume: 9859435
      },
      {
        time: new Date(2018, 0, 9),
        open: 335.16,
        high: 338.8,
        low: 327.4,
        close: 333.69,
        volume: 7146631
      },
      {
        time: new Date(2018, 0, 10),
        open: 332.2,
        high: 337.0,
        low: 330.0,
        close: 334.8,
        volume: 4309926
      },
      {
        time: new Date(2018, 0, 11),
        open: 335.24,
        high: 344.81,
        low: 333.26,
        close: 337.95,
        volume: 6645484
      },
      {
        time: new Date(2018, 0, 12),
        open: 338.63,
        high: 340.41,
        low: 333.67,
        close: 336.22,
        volume: 4825059
      },
      {
        time: new Date(2018, 0, 16),
        open: 337.54,
        high: 345.0,
        low: 334.8,
        close: 340.06,
        volume: 6474251
      },
      {
        time: new Date(2018, 0, 17),
        open: 340.47,
        high: 349.0,
        low: 339.75,
        close: 347.16,
        volume: 7103505
      },
      {
        time: new Date(2018, 0, 18),
        open: 345.67,
        high: 352.3,
        low: 343.74,
        close: 344.57,
        volume: 5685845
      },
      {
        time: new Date(2018, 0, 19),
        open: 345.0,
        high: 350.59,
        low: 342.6,
        close: 350.02,
        volume: 4888303
      },
      {
        time: new Date(2018, 0, 22),
        open: 349.4,
        high: 357.83,
        low: 349.2,
        close: 351.56,
        volume: 6210360
      },
      {
        time: new Date(2018, 0, 23),
        open: 360.0,
        high: 360.5,
        low: 351.0,
        close: 352.79,
        volume: 5465414
      },
      {
        time: new Date(2018, 0, 24),
        open: 354.58,
        high: 354.75,
        low: 343.52,
        close: 345.89,
        volume: 5287478
      },
      {
        time: new Date(2018, 0, 25),
        open: 348.27,
        high: 349.2,
        low: 336.4,
        close: 337.64,
        volume: 6740303
      },
      {
        time: new Date(2018, 0, 26),
        open: 341.5,
        high: 344.0,
        low: 335.71,
        close: 342.85,
        volume: 4539356
      },
      {
        time: new Date(2018, 0, 29),
        open: 339.85,
        high: 350.85,
        low: 338.28,
        close: 349.53,
        volume: 4747149
      },
      {
        time: new Date(2018, 0, 30),
        open: 345.14,
        high: 348.27,
        low: 342.17,
        close: 345.82,
        volume: 4717700
      },
      {
        time: new Date(2018, 0, 31),
        open: 347.51,
        high: 356.19,
        low: 345.19,
        close: 354.31,
        volume: 6214069
      }
    ];
    result.title = 'TESLA';
    // setting data intent for Series Title
    result.__dataIntents = {
      open: ['SeriesTitle/TESLA']
    };
    return result;
  }
}
