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
      },
      {
        time: new Date(2013, 1, 19),
        open: 265.91,
        high: 270.11,
        low: 264.5,
        close: 269.75,
        volume: 2856410
      },
      {
        time: new Date(2013, 1, 20),
        open: 270.2,
        high: 274.3,
        low: 266.37,
        close: 266.41,
        volume: 3530656
      },
      {
        time: new Date(2013, 1, 21),
        open: 265.12,
        high: 269.48,
        low: 263.25,
        close: 265.94,
        volume: 3638795
      },
      {
        time: new Date(2013, 1, 22),
        open: 266.62,
        high: 267.11,
        low: 261.61,
        close: 265.42,
        volume: 3125202
      },
      {
        time: new Date(2013, 1, 25),
        open: 266.94,
        high: 268.69,
        low: 259.65,
        close: 259.87,
        volume: 3032709
      },
      {
        time: new Date(2013, 1, 26),
        open: 260.89,
        high: 262.04,
        low: 255.73,
        close: 259.36,
        volume: 3348760
      },
      {
        time: new Date(2013, 1, 27),
        open: 259.4,
        high: 265.83,
        low: 256.86,
        close: 263.25,
        volume: 2908410
      },
      {
        time: new Date(2013, 1, 28),
        open: 261.81,
        high: 267.0,
        low: 260.63,
        close: 264.27,
        volume: 2668154
      },
      {
        time: new Date(2013, 2, 1),
        open: 263.27,
        high: 266.6,
        low: 261.04,
        close: 265.74,
        volume: 2958799
      },
      {
        time: new Date(2013, 2, 4),
        open: 265.36,
        high: 273.3,
        low: 264.14,
        close: 273.11,
        volume: 3457519
      },
      {
        time: new Date(2013, 2, 5),
        open: 274.0,
        high: 276.68,
        low: 269.99,
        close: 275.59,
        volume: 3688583
      },
      {
        time: new Date(2013, 2, 6),
        open: 275.76,
        high: 276.49,
        low: 271.83,
        close: 273.79,
        volume: 2051552
      },
      {
        time: new Date(2013, 2, 7),
        open: 274.1,
        high: 274.8,
        low: 271.85,
        close: 273.88,
        volume: 1939787
      },
      {
        time: new Date(2013, 2, 8),
        open: 275.0,
        high: 275.44,
        low: 271.5,
        close: 274.19,
        volume: 1880117
      },
      {
        time: new Date(2013, 2, 11),
        open: 273.43,
        high: 273.99,
        low: 270.4,
        close: 271.24,
        volume: 1905076
      },
      {
        time: new Date(2013, 2, 12),
        open: 271.0,
        high: 277.4,
        low: 270.36,
        close: 274.13,
        volume: 3246856
      },
      {
        time: new Date(2013, 2, 13),
        open: 275.24,
        high: 276.5,
        low: 272.64,
        close: 275.1,
        volume: 1884215
      },
      {
        time: new Date(2013, 2, 14),
        open: 269.67,
        high: 270.0,
        low: 263.53,
        close: 265.74,
        volume: 5227305
      },
      {
        time: new Date(2013, 2, 15),
        open: 264.98,
        high: 267.26,
        low: 260.05,
        close: 261.82,
        volume: 4866472
      },
      {
        time: new Date(2013, 2, 18),
        open: 259.3,
        high: 261.49,
        low: 257.12,
        close: 257.89,
        volume: 2721496
      },
      {
        time: new Date(2013, 2, 19),
        open: 258.4,
        high: 259.5,
        low: 252.62,
        close: 256.41,
        volume: 3739566
      },
      {
        time: new Date(2013, 2, 20),
        open: 258.05,
        high: 259.76,
        low: 254.55,
        close: 257.28,
        volume: 2738970
      },
      {
        time: new Date(2013, 2, 21),
        open: 256.11,
        high: 257.0,
        low: 252.68,
        close: 253.39,
        volume: 2806446
      },
      {
        time: new Date(2013, 2, 22),
        open: 254.55,
        high: 257.77,
        low: 252.07,
        close: 257.75,
        volume: 3126299
      },
      {
        time: new Date(2013, 2, 25),
        open: 258.58,
        high: 259.43,
        low: 254.5,
        close: 256.02,
        volume: 2515058
      },
      {
        time: new Date(2013, 2, 26),
        open: 257.05,
        high: 261.48,
        low: 256.28,
        close: 260.31,
        volume: 2421160
      },
      {
        time: new Date(2013, 2, 27),
        open: 258.75,
        high: 265.93,
        low: 257.9,
        close: 265.3,
        volume: 2874924
      },
      {
        time: new Date(2013, 2, 28),
        open: 265.82,
        high: 267.38,
        low: 264.06,
        close: 266.49,
        volume: 2473857
      },
      {
        time: new Date(2013, 3, 1),
        open: 266.98,
        high: 267.4,
        low: 261.01,
        close: 261.61,
        volume: 2525200
      },
      {
        time: new Date(2013, 3, 2),
        open: 262.4,
        high: 265.89,
        low: 260.55,
        close: 263.32,
        volume: 2632338
      },
      {
        time: new Date(2013, 3, 3),
        open: 262.12,
        high: 263.67,
        low: 257.75,
        close: 259.03,
        volume: 2414484
      },
      {
        time: new Date(2013, 3, 4),
        open: 259.23,
        high: 260.41,
        low: 256.12,
        close: 259.08,
        volume: 1964612
      },
      {
        time: new Date(2013, 3, 5),
        open: 255.72,
        high: 256.18,
        low: 253.67,
        close: 255.48,
        volume: 2558157
      },
      {
        time: new Date(2013, 3, 8),
        open: 255.92,
        high: 259.68,
        low: 255.63,
        close: 258.95,
        volume: 2296823
      },
      {
        time: new Date(2013, 3, 9),
        open: 258.85,
        high: 262.61,
        low: 257.0,
        close: 261.14,
        volume: 2158332
      },
      {
        time: new Date(2013, 3, 10),
        open: 261.78,
        high: 265.98,
        low: 259.32,
        close: 264.77,
        volume: 2322707
      },
      {
        time: new Date(2013, 3, 11),
        open: 264.74,
        high: 270.97,
        low: 264.74,
        close: 269.85,
        volume: 3092065
      },
      {
        time: new Date(2013, 3, 12),
        open: 270.12,
        high: 273.27,
        low: 267.02,
        close: 272.87,
        volume: 2868165
      },
      {
        time: new Date(2013, 3, 15),
        open: 271.08,
        high: 275.12,
        low: 267.1,
        close: 267.72,
        volume: 3325919
      },
      {
        time: new Date(2013, 3, 16),
        open: 269.31,
        high: 272.8,
        low: 268.06,
        close: 272.34,
        volume: 2138618
      },
      {
        time: new Date(2013, 3, 17),
        open: 270.8,
        high: 270.85,
        low: 264.25,
        close: 267.4,
        volume: 3135291
      },
      {
        time: new Date(2013, 3, 18),
        open: 266.81,
        high: 266.99,
        low: 256.6,
        close: 259.42,
        volume: 3138006
      },
      {
        time: new Date(2013, 3, 19),
        open: 258.16,
        high: 262.88,
        low: 257.5,
        close: 260.32,
        volume: 2602870
      },
      {
        time: new Date(2013, 3, 22),
        open: 259.35,
        high: 264.6,
        low: 258.03,
        close: 263.55,
        volume: 2119351
      },
      {
        time: new Date(2013, 3, 23),
        open: 264.5,
        high: 269.87,
        low: 264.5,
        close: 268.9,
        volume: 2274694
      },
      {
        time: new Date(2013, 3, 24),
        open: 269.5,
        high: 271.47,
        low: 266.81,
        close: 268.78,
        volume: 1855081
      },
      {
        time: new Date(2013, 3, 25),
        open: 271.53,
        high: 275.8,
        low: 270.5,
        close: 274.7,
        volume: 6116498
      },
      {
        time: new Date(2013, 3, 26),
        open: 269.97,
        high: 272.02,
        low: 252.81,
        close: 254.81,
        volume: 14035877
      },
      {
        time: new Date(2013, 3, 29),
        open: 254.9,
        high: 257.01,
        low: 249.15,
        close: 249.74,
        volume: 7120310
      },
      {
        time: new Date(2013, 3, 30),
        open: 249.37,
        high: 254.68,
        low: 248.56,
        close: 253.81,
        volume: 4250210
      },
      {
        time: new Date(2013, 4, 1),
        open: 253.9,
        high: 254.2,
        low: 245.75,
        close: 248.23,
        volume: 4392202
      },
      {
        time: new Date(2013, 4, 2),
        open: 248.94,
        high: 252.93,
        low: 245.78,
        close: 252.55,
        volume: 3936170
      },
      {
        time: new Date(2013, 4, 3),
        open: 256.14,
        high: 259.25,
        low: 254.7,
        close: 258.05,
        volume: 3514674
      },
      {
        time: new Date(2013, 4, 6),
        open: 258.09,
        high: 259.5,
        low: 253.42,
        close: 255.72,
        volume: 2349545
      },
      {
        time: new Date(2013, 4, 7),
        open: 256.31,
        high: 259.74,
        low: 252.91,
        close: 257.73,
        volume: 3134069
      },
      {
        time: new Date(2013, 4, 8),
        open: 256.87,
        high: 260.3,
        low: 255.33,
        close: 258.68,
        volume: 2677086
      },
      {
        time: new Date(2013, 4, 9),
        open: 258.73,
        high: 263.55,
        low: 256.88,
        close: 260.16,
        volume: 2769255
      },
      {
        time: new Date(2013, 4, 10),
        open: 260.88,
        high: 263.65,
        low: 260.21,
        close: 263.63,
        volume: 3145869
      },
      {
        time: new Date(2013, 4, 13),
        open: 262.77,
        high: 265.88,
        low: 262.0,
        close: 264.51,
        volume: 2149498
      },
      {
        time: new Date(2013, 4, 14),
        open: 264.5,
        high: 269.4,
        low: 264.03,
        close: 268.33,
        volume: 2700674
      },
      {
        time: new Date(2013, 4, 15),
        open: 267.07,
        high: 269.05,
        low: 264.56,
        close: 266.56,
        volume: 2721687
      },
      {
        time: new Date(2013, 4, 16),
        open: 265.96,
        high: 268.43,
        low: 263.85,
        close: 264.12,
        volume: 1643668
      },
      {
        time: new Date(2013, 4, 17),
        open: 265.83,
        high: 269.98,
        low: 265.0,
        close: 269.9,
        volume: 2528227
      },
      {
        time: new Date(2013, 4, 20),
        open: 269.0,
        high: 271.79,
        low: 266.5,
        close: 267.63,
        volume: 2209034
      },
      {
        time: new Date(2013, 4, 21),
        open: 268.74,
        high: 270.77,
        low: 267.66,
        close: 268.86,
        volume: 1741466
      },
      {
        time: new Date(2013, 4, 22),
        open: 267.39,
        high: 267.59,
        low: 260.8,
        close: 262.96,
        volume: 3332597
      },
      {
        time: new Date(2013, 4, 23),
        open: 260.49,
        high: 263.17,
        low: 259.59,
        close: 261.8,
        volume: 2007811
      },
      {
        time: new Date(2013, 4, 24),
        open: 259.85,
        high: 261.93,
        low: 258.34,
        close: 261.74,
        volume: 1696415
      },
      {
        time: new Date(2013, 4, 28),
        open: 266.48,
        high: 271.1,
        low: 266.0,
        close: 267.29,
        volume: 3471096
      },
      {
        time: new Date(2013, 4, 29),
        open: 265.46,
        high: 268.25,
        low: 264.84,
        close: 265.53,
        volume: 1903590
      },
      {
        time: new Date(2013, 4, 30),
        open: 265.71,
        high: 268.57,
        low: 265.62,
        close: 266.83,
        volume: 1668469
      },
      {
        time: new Date(2013, 4, 31),
        open: 266.0,
        high: 271.91,
        low: 265.94,
        close: 269.2,
        volume: 3374919
      },
      {
        time: new Date(2013, 5, 3),
        open: 265.38,
        high: 269.11,
        low: 262.95,
        close: 266.88,
        volume: 2545284
      },
      {
        time: new Date(2013, 5, 4),
        open: 267.0,
        high: 268.88,
        low: 263.02,
        close: 265.7,
        volume: 2088972
      },
      {
        time: new Date(2013, 5, 5),
        open: 265.81,
        high: 271.66,
        low: 265.02,
        close: 267.17,
        volume: 3512867
      },
      {
        time: new Date(2013, 5, 6),
        open: 267.75,
        high: 270.5,
        low: 264.21,
        close: 267.83,
        volume: 2476368
      },
      {
        time: new Date(2013, 5, 7),
        open: 269.74,
        high: 280.1,
        low: 269.13,
        close: 276.87,
        volume: 4632539
      },
      {
        time: new Date(2013, 5, 10),
        open: 276.68,
        high: 282.47,
        low: 275.24,
        close: 281.07,
        volume: 3088355
      },
      {
        time: new Date(2013, 5, 11),
        open: 276.0,
        high: 278.41,
        low: 274.24,
        close: 274.78,
        volume: 3094367
      },
      {
        time: new Date(2013, 5, 12),
        open: 276.6,
        high: 276.8,
        low: 270.45,
        close: 271.67,
        volume: 2239259
      },
      {
        time: new Date(2013, 5, 13),
        open: 271.5,
        high: 276.8,
        low: 270.29,
        close: 275.79,
        volume: 2651715
      },
      {
        time: new Date(2013, 5, 14),
        open: 275.0,
        high: 277.07,
        low: 273.44,
        close: 273.99,
        volume: 2147223
      },
      {
        time: new Date(2013, 5, 17),
        open: 276.35,
        high: 280.2,
        low: 275.65,
        close: 278.06,
        volume: 2885680
      },
      {
        time: new Date(2013, 5, 18),
        open: 279.08,
        high: 282.91,
        low: 278.11,
        close: 281.76,
        volume: 2147649
      },
      {
        time: new Date(2013, 5, 19),
        open: 281.26,
        high: 283.34,
        low: 277.87,
        close: 278.16,
        volume: 2828375
      },
      {
        time: new Date(2013, 5, 20),
        open: 275.14,
        high: 278.6,
        low: 272.39,
        close: 273.44,
        volume: 2985196
      },
      {
        time: new Date(2013, 5, 21),
        open: 274.57,
        high: 275.84,
        low: 269.79,
        close: 273.36,
        volume: 4202058
      },
      {
        time: new Date(2013, 5, 24),
        open: 271.29,
        high: 273.16,
        low: 265.0,
        close: 270.61,
        volume: 3866168
      },
      {
        time: new Date(2013, 5, 25),
        open: 272.3,
        high: 273.47,
        low: 269.0,
        close: 272.09,
        volume: 2452910
      },
      {
        time: new Date(2013, 5, 26),
        open: 273.98,
        high: 277.98,
        low: 273.5,
        close: 277.57,
        volume: 3029816
      },
      {
        time: new Date(2013, 5, 27),
        open: 279.18,
        high: 280.2,
        low: 274.54,
        close: 277.55,
        volume: 2520422
      },
      {
        time: new Date(2013, 5, 28),
        open: 276.19,
        high: 279.83,
        low: 276.19,
        close: 277.69,
        volume: 3193515
      },
      {
        time: new Date(2013, 6, 1),
        open: 279.0,
        high: 283.29,
        low: 277.16,
        close: 282.1,
        volume: 2890065
      },
      {
        time: new Date(2013, 6, 2),
        open: 281.04,
        high: 286.58,
        low: 280.59,
        close: 283.73,
        volume: 3238618
      },
      {
        time: new Date(2013, 6, 3),
        open: 282.0,
        high: 285.4,
        low: 282.0,
        close: 284.03,
        volume: 1380205
      },
      {
        time: new Date(2013, 6, 5),
        open: 285.0,
        high: 286.38,
        low: 282.07,
        close: 285.88,
        volume: 1985923
      },
      {
        time: new Date(2013, 6, 8),
        open: 286.42,
        high: 291.67,
        low: 286.14,
        close: 290.59,
        volume: 3047197
      },
      {
        time: new Date(2013, 6, 9),
        open: 291.0,
        high: 292.57,
        low: 288.01,
        close: 291.53,
        volume: 2775516
      },
      {
        time: new Date(2013, 6, 10),
        open: 291.41,
        high: 293.34,
        low: 289.4,
        close: 292.33,
        volume: 1810122
      },
      {
        time: new Date(2013, 6, 11),
        open: 294.99,
        high: 300.69,
        low: 292.1,
        close: 299.66,
        volume: 4007601
      },
      {
        time: new Date(2013, 6, 12),
        open: 298.69,
        high: 307.55,
        low: 298.5,
        close: 307.55,
        volume: 4543264
      },
      {
        time: new Date(2013, 6, 15),
        open: 307.27,
        high: 307.99,
        low: 304.35,
        close: 306.57,
        volume: 2245687
      },
      {
        time: new Date(2013, 6, 16),
        open: 307.3,
        high: 309.39,
        low: 305.51,
        close: 306.87,
        volume: 2660597
      },
      {
        time: new Date(2013, 6, 17),
        open: 306.97,
        high: 308.8,
        low: 305.69,
        close: 308.69,
        volume: 2031626
      },
      {
        time: new Date(2013, 6, 18),
        open: 306.27,
        high: 306.34,
        low: 301.87,
        close: 304.11,
        volume: 3064359
      },
      {
        time: new Date(2013, 6, 19),
        open: 304.39,
        high: 305.79,
        low: 301.91,
        close: 305.23,
        volume: 2973181
      },
      {
        time: new Date(2013, 6, 22),
        open: 309.25,
        high: 309.25,
        low: 302.0,
        close: 303.48,
        volume: 2522023
      },
      {
        time: new Date(2013, 6, 23),
        open: 303.16,
        high: 305.06,
        low: 300.56,
        close: 301.06,
        volume: 1999624
      },
      {
        time: new Date(2013, 6, 24),
        open: 303.02,
        high: 303.84,
        low: 298.04,
        close: 298.94,
        volume: 2002745
      },
      {
        time: new Date(2013, 6, 25),
        open: 299.0,
        high: 304.5,
        low: 296.75,
        close: 303.4,
        volume: 5484465
      },
      {
        time: new Date(2013, 6, 26),
        open: 299.55,
        high: 313.62,
        low: 295.55,
        close: 312.01,
        volume: 8819755
      },
      {
        time: new Date(2013, 6, 29),
        open: 311.07,
        high: 313.0,
        low: 305.9,
        close: 306.1,
        volume: 3213115
      },
      {
        time: new Date(2013, 6, 30),
        open: 307.72,
        high: 309.78,
        low: 301.57,
        close: 302.41,
        volume: 3053775
      },
      {
        time: new Date(2013, 6, 31),
        open: 303.91,
        high: 305.15,
        low: 301.0,
        close: 301.22,
        volume: 1891514
      },
      {
        time: new Date(2013, 7, 1),
        open: 303.08,
        high: 306.21,
        low: 298.9,
        close: 305.57,
        volume: 2971659
      },
      {
        time: new Date(2013, 7, 2),
        open: 304.63,
        high: 305.33,
        low: 301.5,
        close: 304.21,
        volume: 2508358
      },
      {
        time: new Date(2013, 7, 5),
        open: 303.4,
        high: 303.62,
        low: 298.3,
        close: 300.99,
        volume: 2233258
      },
      {
        time: new Date(2013, 7, 6),
        open: 300.51,
        high: 301.36,
        low: 297.52,
        close: 300.75,
        volume: 1849796
      },
      {
        time: new Date(2013, 7, 7),
        open: 300.15,
        high: 300.99,
        low: 296.15,
        close: 296.91,
        volume: 1963110
      },
      {
        time: new Date(2013, 7, 8),
        open: 298.52,
        high: 298.52,
        low: 292.55,
        close: 295.74,
        volume: 2346335
      },
      {
        time: new Date(2013, 7, 9),
        open: 295.68,
        high: 299.27,
        low: 294.3,
        close: 297.26,
        volume: 1950386
      },
      {
        time: new Date(2013, 7, 12),
        open: 295.79,
        high: 299.08,
        low: 295.26,
        close: 296.69,
        volume: 1504625
      },
      {
        time: new Date(2013, 7, 13),
        open: 295.88,
        high: 296.37,
        low: 290.67,
        close: 293.97,
        volume: 2355093
      },
      {
        time: new Date(2013, 7, 14),
        open: 294.29,
        high: 294.29,
        low: 290.54,
        close: 291.34,
        volume: 1415476
      },
      {
        time: new Date(2013, 7, 15),
        open: 288.79,
        high: 289.3,
        low: 285.15,
        close: 286.47,
        volume: 2261493
      },
      {
        time: new Date(2013, 7, 16),
        open: 286.55,
        high: 288.33,
        low: 284.5,
        close: 284.82,
        volume: 2423056
      },
      {
        time: new Date(2013, 7, 19),
        open: 285.19,
        high: 289.56,
        low: 283.48,
        close: 285.57,
        volume: 2479612
      },
      {
        time: new Date(2013, 7, 20),
        open: 285.88,
        high: 289.52,
        low: 285.74,
        close: 287.09,
        volume: 1586236
      },
      {
        time: new Date(2013, 7, 21),
        open: 285.09,
        high: 288.5,
        low: 283.83,
        close: 284.57,
        volume: 1816344
      },
      {
        time: new Date(2013, 7, 22),
        open: 284.8,
        high: 289.87,
        low: 284.8,
        close: 289.73,
        volume: 1422672
      },
      {
        time: new Date(2013, 7, 23),
        open: 291.21,
        high: 291.5,
        low: 287.9,
        close: 290.01,
        volume: 1968285
      },
      {
        time: new Date(2013, 7, 26),
        open: 290.43,
        high: 291.05,
        low: 285.62,
        close: 286.21,
        volume: 1718213
      },
      {
        time: new Date(2013, 7, 27),
        open: 283.87,
        high: 285.28,
        low: 279.74,
        close: 280.93,
        volume: 2475991
      },
      {
        time: new Date(2013, 7, 28),
        open: 280.36,
        high: 283.0,
        low: 279.33,
        close: 281.58,
        volume: 1457461
      },
      {
        time: new Date(2013, 7, 29),
        open: 281.45,
        high: 285.98,
        low: 280.0,
        close: 283.98,
        volume: 1566544
      },
      {
        time: new Date(2013, 7, 30),
        open: 284.59,
        high: 284.87,
        low: 280.0,
        close: 280.98,
        volume: 1534706
      },
      {
        time: new Date(2013, 8, 3),
        open: 284.73,
        high: 291.39,
        low: 284.17,
        close: 288.8,
        volume: 2898422
      },
      {
        time: new Date(2013, 8, 4),
        open: 288.33,
        high: 295.23,
        low: 287.58,
        close: 293.64,
        volume: 2439351
      },
      {
        time: new Date(2013, 8, 5),
        open: 293.63,
        high: 297.0,
        low: 292.71,
        close: 294.1,
        volume: 1819790
      },
      {
        time: new Date(2013, 8, 6),
        open: 295.33,
        high: 298.88,
        low: 290.8,
        close: 295.86,
        volume: 2293345
      },
      {
        time: new Date(2013, 8, 9),
        open: 297.22,
        high: 299.96,
        low: 296.6,
        close: 299.71,
        volume: 1646244
      },
      {
        time: new Date(2013, 8, 10),
        open: 300.55,
        high: 301.0,
        low: 297.22,
        close: 300.36,
        volume: 1781037
      },
      {
        time: new Date(2013, 8, 11),
        open: 298.91,
        high: 301.86,
        low: 297.84,
        close: 299.64,
        volume: 1742264
      },
      {
        time: new Date(2013, 8, 12),
        open: 299.39,
        high: 302.0,
        low: 297.66,
        close: 298.86,
        volume: 1606393
      },
      {
        time: new Date(2013, 8, 13),
        open: 300.14,
        high: 300.22,
        low: 296.2,
        close: 297.92,
        volume: 1350645
      },
      {
        time: new Date(2013, 8, 16),
        open: 299.82,
        high: 301.0,
        low: 295.26,
        close: 296.06,
        volume: 1818400
      },
      {
        time: new Date(2013, 8, 17),
        open: 297.63,
        high: 304.65,
        low: 296.01,
        close: 304.17,
        volume: 2297381
      },
      {
        time: new Date(2013, 8, 18),
        open: 304.06,
        high: 312.74,
        low: 302.91,
        close: 312.03,
        volume: 2946988
      },
      {
        time: new Date(2013, 8, 19),
        open: 313.77,
        high: 314.54,
        low: 311.04,
        close: 312.06,
        volume: 2350946
      },
      {
        time: new Date(2013, 8, 20),
        open: 312.54,
        high: 320.57,
        low: 312.41,
        close: 316.34,
        volume: 5306003
      },
      {
        time: new Date(2013, 8, 23),
        open: 314.01,
        high: 315.9,
        low: 308.77,
        close: 311.49,
        volume: 1885197
      },
      {
        time: new Date(2013, 8, 24),
        open: 312.43,
        high: 318.08,
        low: 311.28,
        close: 314.13,
        volume: 2033546
      },
      {
        time: new Date(2013, 8, 25),
        open: 314.53,
        high: 316.71,
        low: 310.75,
        close: 312.65,
        volume: 2010249
      },
      {
        time: new Date(2013, 8, 26),
        open: 313.9,
        high: 319.37,
        low: 313.26,
        close: 318.12,
        volume: 1990982
      },
      {
        time: new Date(2013, 8, 27),
        open: 316.92,
        high: 317.21,
        low: 313.35,
        close: 316.01,
        volume: 1658435
      },
      {
        time: new Date(2013, 8, 30),
        open: 313.41,
        high: 315.31,
        low: 311.06,
        close: 312.64,
        volume: 1625844
      },
      {
        time: new Date(2013, 9, 1),
        open: 314.22,
        high: 321.0,
        low: 313.65,
        close: 320.95,
        volume: 2398999
      },
      {
        time: new Date(2013, 9, 2),
        open: 318.04,
        high: 321.73,
        low: 317.52,
        close: 320.51,
        volume: 2224623
      },
      {
        time: new Date(2013, 9, 3),
        open: 320.39,
        high: 322.92,
        low: 313.02,
        close: 314.76,
        volume: 2679440
      },
      {
        time: new Date(2013, 9, 4),
        open: 315.13,
        high: 319.2,
        low: 312.62,
        close: 319.04,
        volume: 1814976
      },
      {
        time: new Date(2013, 9, 7),
        open: 315.24,
        high: 315.34,
        low: 309.74,
        close: 310.03,
        volume: 2085725
      },
      {
        time: new Date(2013, 9, 8),
        open: 311.5,
        high: 311.54,
        low: 300.27,
        close: 303.23,
        volume: 3171592
      },
      {
        time: new Date(2013, 9, 9),
        open: 303.42,
        high: 303.5,
        low: 296.5,
        close: 298.23,
        volume: 3252771
      },
      {
        time: new Date(2013, 9, 10),
        open: 304.63,
        high: 306.7,
        low: 302.59,
        close: 305.17,
        volume: 2557138
      },
      {
        time: new Date(2013, 9, 11),
        open: 304.77,
        high: 310.93,
        low: 303.84,
        close: 310.89,
        volume: 2163093
      },
      {
        time: new Date(2013, 9, 14),
        open: 309.22,
        high: 311.64,
        low: 307.0,
        close: 310.7,
        volume: 1939092
      },
      {
        time: new Date(2013, 9, 15),
        open: 309.87,
        high: 310.79,
        low: 305.26,
        close: 306.4,
        volume: 2261554
      },
      {
        time: new Date(2013, 9, 16),
        open: 308.38,
        high: 310.8,
        low: 305.55,
        close: 310.49,
        volume: 2180521
      },
      {
        time: new Date(2013, 9, 17),
        open: 307.07,
        high: 311.0,
        low: 305.24,
        close: 310.77,
        volume: 2648384
      },
      {
        time: new Date(2013, 9, 18),
        open: 319.36,
        high: 331.89,
        low: 316.75,
        close: 328.93,
        volume: 5969814
      },
      {
        time: new Date(2013, 9, 21),
        open: 329.89,
        high: 330.0,
        low: 323.8,
        close: 326.44,
        volume: 2527617
      },
      {
        time: new Date(2013, 9, 22),
        open: 327.72,
        high: 337.11,
        low: 325.68,
        close: 332.54,
        volume: 3942953
      },
      {
        time: new Date(2013, 9, 23),
        open: 330.84,
        high: 331.72,
        low: 324.06,
        close: 326.76,
        volume: 2818158
      },
      {
        time: new Date(2013, 9, 24),
        open: 329.63,
        high: 332.65,
        low: 326.75,
        close: 332.21,
        volume: 5884655
      },
      {
        time: new Date(2013, 9, 25),
        open: 358.6,
        high: 368.4,
        low: 352.62,
        close: 363.39,
        volume: 12043903
      },
      {
        time: new Date(2013, 9, 28),
        open: 359.92,
        high: 362.75,
        low: 357.2,
        close: 358.16,
        volume: 3635848
      },
      {
        time: new Date(2013, 9, 29),
        open: 358.96,
        high: 362.89,
        low: 356.29,
        close: 362.7,
        volume: 2190763
      },
      {
        time: new Date(2013, 9, 30),
        open: 362.62,
        high: 365.0,
        low: 358.65,
        close: 361.08,
        volume: 4505005
      },
      {
        time: new Date(2013, 9, 31),
        open: 361.73,
        high: 366.0,
        low: 359.0,
        close: 364.03,
        volume: 2466937
      },
      {
        time: new Date(2013, 10, 1),
        open: 365.63,
        high: 365.77,
        low: 356.1,
        close: 359.0,
        volume: 3332126
      },
      {
        time: new Date(2013, 10, 4),
        open: 360.12,
        high: 361.0,
        low: 354.4,
        close: 358.74,
        volume: 1940496
      },
      {
        time: new Date(2013, 10, 5),
        open: 356.78,
        high: 360.17,
        low: 354.84,
        close: 358.89,
        volume: 2007275
      },
      {
        time: new Date(2013, 10, 6),
        open: 360.45,
        high: 362.87,
        low: 354.5,
        close: 356.18,
        volume: 2288077
      },
      {
        time: new Date(2013, 10, 7),
        open: 355.86,
        high: 357.9,
        low: 341.88,
        close: 343.56,
        volume: 4250065
      },
      {
        time: new Date(2013, 10, 8),
        open: 345.95,
        high: 351.05,
        low: 344.04,
        close: 350.31,
        volume: 2656865
      },
      {
        time: new Date(2013, 10, 11),
        open: 350.59,
        high: 355.37,
        low: 348.06,
        close: 354.38,
        volume: 2262538
      },
      {
        time: new Date(2013, 10, 12),
        open: 352.99,
        high: 355.48,
        low: 347.28,
        close: 349.53,
        volume: 2344304
      },
      {
        time: new Date(2013, 10, 13),
        open: 347.4,
        high: 356.22,
        low: 345.68,
        close: 356.22,
        volume: 2777832
      },
      {
        time: new Date(2013, 10, 14),
        open: 357.39,
        high: 368.94,
        low: 356.43,
        close: 367.4,
        volume: 4164128
      },
      {
        time: new Date(2013, 10, 15),
        open: 367.63,
        high: 372.9,
        low: 365.55,
        close: 369.17,
        volume: 4494773
      },
      {
        time: new Date(2013, 10, 18),
        open: 370.28,
        high: 373.49,
        low: 364.67,
        close: 366.18,
        volume: 2738214
      },
      {
        time: new Date(2013, 10, 19),
        open: 365.82,
        high: 368.78,
        low: 362.5,
        close: 364.94,
        volume: 1904797
      },
      {
        time: new Date(2013, 10, 20),
        open: 367.56,
        high: 367.56,
        low: 360.45,
        close: 362.57,
        volume: 1772984
      },
      {
        time: new Date(2013, 10, 21),
        open: 364.05,
        high: 369.25,
        low: 363.3,
        close: 368.92,
        volume: 1967041
      },
      {
        time: new Date(2013, 10, 22),
        open: 370.0,
        high: 374.5,
        low: 366.31,
        close: 372.31,
        volume: 2967833
      },
      {
        time: new Date(2013, 10, 25),
        open: 373.82,
        high: 377.79,
        low: 373.18,
        close: 376.64,
        volume: 2972546
      },
      {
        time: new Date(2013, 10, 26),
        open: 377.61,
        high: 382.5,
        low: 374.82,
        close: 381.37,
        volume: 2730689
      },
      {
        time: new Date(2013, 10, 27),
        open: 383.5,
        high: 387.0,
        low: 382.61,
        close: 386.71,
        volume: 2269656
      },
      {
        time: new Date(2013, 10, 29),
        open: 389.1,
        high: 394.1,
        low: 388.62,
        close: 393.62,
        volume: 2405985
      },
      {
        time: new Date(2013, 11, 2),
        open: 399.0,
        high: 399.0,
        low: 389.1,
        close: 392.3,
        volume: 4718883
      },
      {
        time: new Date(2013, 11, 3),
        open: 390.11,
        high: 390.95,
        low: 383.1,
        close: 384.66,
        volume: 3707536
      },
      {
        time: new Date(2013, 11, 4),
        open: 383.5,
        high: 389.69,
        low: 381.49,
        close: 385.96,
        volume: 2355719
      },
      {
        time: new Date(2013, 11, 5),
        open: 386.65,
        high: 386.65,
        low: 381.37,
        close: 384.49,
        volume: 1906452
      },
      {
        time: new Date(2013, 11, 6),
        open: 388.35,
        high: 388.35,
        low: 383.83,
        close: 386.95,
        volume: 1987762
      },
      {
        time: new Date(2013, 11, 9),
        open: 388.21,
        high: 388.21,
        low: 382.57,
        close: 384.89,
        volume: 2766573
      },
      {
        time: new Date(2013, 11, 10),
        open: 383.5,
        high: 389.06,
        low: 383.02,
        close: 387.78,
        volume: 2739875
      },
      {
        time: new Date(2013, 11, 11),
        open: 387.71,
        high: 388.98,
        low: 382.0,
        close: 382.19,
        volume: 2451254
      },
      {
        time: new Date(2013, 11, 12),
        open: 381.55,
        high: 385.0,
        low: 379.5,
        close: 381.25,
        volume: 2123652
      },
      {
        time: new Date(2013, 11, 13),
        open: 384.62,
        high: 389.42,
        low: 383.8,
        close: 384.24,
        volume: 3025145
      },
      {
        time: new Date(2013, 11, 16),
        open: 385.5,
        high: 391.7,
        low: 385.0,
        close: 388.97,
        volume: 2258884
      },
      {
        time: new Date(2013, 11, 17),
        open: 391.0,
        high: 391.36,
        low: 386.5,
        close: 387.65,
        volume: 2348377
      },
      {
        time: new Date(2013, 11, 18),
        open: 389.56,
        high: 396.3,
        low: 383.1,
        close: 395.96,
        volume: 3493635
      },
      {
        time: new Date(2013, 11, 19),
        open: 394.36,
        high: 397.29,
        low: 392.6,
        close: 395.19,
        volume: 2429598
      },
      {
        time: new Date(2013, 11, 20),
        open: 396.84,
        high: 404.72,
        low: 395.78,
        close: 402.2,
        volume: 5038537
      },
      {
        time: new Date(2013, 11, 23),
        open: 403.69,
        high: 405.0,
        low: 399.2,
        close: 402.92,
        volume: 2661823
      },
      {
        time: new Date(2013, 11, 24),
        open: 402.52,
        high: 403.72,
        low: 396.37,
        close: 399.2,
        volume: 1380373
      },
      {
        time: new Date(2013, 11, 26),
        open: 401.79,
        high: 404.52,
        low: 396.81,
        close: 404.39,
        volume: 1871590
      },
      {
        time: new Date(2013, 11, 27),
        open: 404.65,
        high: 405.63,
        low: 396.25,
        close: 398.08,
        volume: 1987280
      },
      {
        time: new Date(2013, 11, 30),
        open: 399.41,
        high: 399.92,
        low: 392.45,
        close: 393.37,
        volume: 2487812
      },
      {
        time: new Date(2013, 11, 31),
        open: 394.58,
        high: 398.83,
        low: 393.8,
        close: 398.79,
        volume: 1997051
      },
      {
        time: new Date(2014, 0, 2),
        open: 398.8,
        high: 399.36,
        low: 394.02,
        close: 397.97,
        volume: 2140246
      },
      {
        time: new Date(2014, 0, 3),
        open: 398.29,
        high: 402.71,
        low: 396.22,
        close: 396.44,
        volume: 2213512
      },
      {
        time: new Date(2014, 0, 6),
        open: 395.85,
        high: 397.0,
        low: 388.42,
        close: 393.63,
        volume: 3172207
      },
      {
        time: new Date(2014, 0, 7),
        open: 395.04,
        high: 398.47,
        low: 394.29,
        close: 398.03,
        volume: 1916684
      },
      {
        time: new Date(2014, 0, 8),
        open: 398.47,
        high: 403.0,
        low: 396.04,
        close: 401.92,
        volume: 2316903
      },
      {
        time: new Date(2014, 0, 9),
        open: 403.71,
        high: 406.89,
        low: 398.44,
        close: 401.01,
        volume: 2103793
      },
      {
        time: new Date(2014, 0, 10),
        open: 402.53,
        high: 403.76,
        low: 393.8,
        close: 397.66,
        volume: 2681701
      },
      {
        time: new Date(2014, 0, 13),
        open: 397.98,
        high: 399.78,
        low: 388.45,
        close: 390.98,
        volume: 2846507
      },
      {
        time: new Date(2014, 0, 14),
        open: 392.13,
        high: 398.63,
        low: 391.29,
        close: 397.54,
        volume: 2340401
      },
      {
        time: new Date(2014, 0, 15),
        open: 398.94,
        high: 399.31,
        low: 392.53,
        close: 395.87,
        volume: 2678794
      },
      {
        time: new Date(2014, 0, 16),
        open: 393.68,
        high: 399.29,
        low: 389.41,
        close: 395.8,
        volume: 2602506
      },
      {
        time: new Date(2014, 0, 17),
        open: 394.26,
        high: 403.49,
        low: 393.66,
        close: 399.61,
        volume: 4508791
      },
      {
        time: new Date(2014, 0, 21),
        open: 403.0,
        high: 407.8,
        low: 401.6,
        close: 407.05,
        volume: 3122705
      },
      {
        time: new Date(2014, 0, 22),
        open: 408.0,
        high: 408.06,
        low: 402.0,
        close: 404.54,
        volume: 2069759
      },
      {
        time: new Date(2014, 0, 23),
        open: 401.0,
        high: 406.17,
        low: 397.79,
        close: 399.87,
        volume: 3026272
      },
      {
        time: new Date(2014, 0, 24),
        open: 398.16,
        high: 400.2,
        low: 387.27,
        close: 387.6,
        volume: 4513038
      },
      {
        time: new Date(2014, 0, 27),
        open: 390.5,
        high: 394.1,
        low: 380.49,
        close: 386.28,
        volume: 3944752
      },
      {
        time: new Date(2014, 0, 28),
        open: 387.4,
        high: 394.74,
        low: 387.12,
        close: 394.43,
        volume: 2901611
      },
      {
        time: new Date(2014, 0, 29),
        open: 392.16,
        high: 392.85,
        low: 383.24,
        close: 384.2,
        volume: 3399294
      },
      {
        time: new Date(2014, 0, 30),
        open: 393.77,
        high: 406.25,
        low: 387.7,
        close: 403.01,
        volume: 10900116
      },
      {
        time: new Date(2014, 0, 31),
        open: 371.76,
        high: 375.45,
        low: 357.76,
        close: 358.69,
        volume: 16181519
      },
      {
        time: new Date(2014, 1, 3),
        open: 358.98,
        high: 360.85,
        low: 340.1,
        close: 346.15,
        volume: 10290934
      },
      {
        time: new Date(2014, 1, 4),
        open: 349.59,
        high: 354.0,
        low: 344.02,
        close: 347.95,
        volume: 4821177
      },
      {
        time: new Date(2014, 1, 5),
        open: 346.0,
        high: 349.37,
        low: 337.73,
        close: 346.45,
        volume: 4439010
      },
      {
        time: new Date(2014, 1, 6),
        open: 347.4,
        high: 354.82,
        low: 347.4,
        close: 354.59,
        volume: 3340542
      },
      {
        time: new Date(2014, 1, 7),
        open: 358.98,
        high: 361.8,
        low: 352.49,
        close: 361.08,
        volume: 4347189
      },
      {
        time: new Date(2014, 1, 10),
        open: 361.61,
        high: 365.0,
        low: 359.35,
        close: 360.87,
        volume: 3451093
      },
      {
        time: new Date(2014, 1, 11),
        open: 361.84,
        high: 363.61,
        low: 356.25,
        close: 361.79,
        volume: 3225200
      },
      {
        time: new Date(2014, 1, 12),
        open: 356.43,
        high: 357.75,
        low: 346.32,
        close: 349.25,
        volume: 6599199
      },
      {
        time: new Date(2014, 1, 13),
        open: 347.7,
        high: 357.2,
        low: 346.5,
        close: 357.2,
        volume: 4181445
      },
      {
        time: new Date(2014, 1, 14),
        open: 359.34,
        high: 359.34,
        low: 353.35,
        close: 357.35,
        volume: 3524570
      },
      {
        time: new Date(2014, 1, 18),
        open: 355.28,
        high: 355.73,
        low: 349.45,
        close: 353.65,
        volume: 5000493
      },
      {
        time: new Date(2014, 1, 19),
        open: 352.64,
        high: 354.54,
        low: 346.1,
        close: 347.38,
        volume: 4175393
      },
      {
        time: new Date(2014, 1, 20),
        open: 348.8,
        high: 350.46,
        low: 344.38,
        close: 349.8,
        volume: 3496663
      },
      {
        time: new Date(2014, 1, 21),
        open: 352.44,
        high: 354.14,
        low: 346.75,
        close: 346.76,
        volume: 4212144
      },
      {
        time: new Date(2014, 1, 24),
        open: 345.19,
        high: 353.0,
        low: 343.29,
        close: 351.78,
        volume: 3647182
      },
      {
        time: new Date(2014, 1, 25),
        open: 353.0,
        high: 361.08,
        low: 351.58,
        close: 358.32,
        volume: 3747076
      },
      {
        time: new Date(2014, 1, 26),
        open: 359.86,
        high: 364.75,
        low: 357.17,
        close: 359.8,
        volume: 3622506
      },
      {
        time: new Date(2014, 1, 27),
        open: 357.22,
        high: 360.59,
        low: 355.5,
        close: 360.13,
        volume: 3105442
      },
      {
        time: new Date(2014, 1, 28),
        open: 360.6,
        high: 365.86,
        low: 357.08,
        close: 362.1,
        volume: 3885207
      },
      {
        time: new Date(2014, 2, 3),
        open: 358.74,
        high: 360.96,
        low: 354.48,
        close: 359.78,
        volume: 2804261
      },
      {
        time: new Date(2014, 2, 4),
        open: 363.9,
        high: 365.68,
        low: 362.46,
        close: 363.9,
        volume: 2706843
      },
      {
        time: new Date(2014, 2, 5),
        open: 364.13,
        high: 372.73,
        low: 363.9,
        close: 372.37,
        volume: 3862706
      },
      {
        time: new Date(2014, 2, 6),
        open: 374.05,
        high: 375.33,
        low: 368.9,
        close: 372.16,
        volume: 2927497
      },
      {
        time: new Date(2014, 2, 7),
        open: 374.58,
        high: 374.99,
        low: 369.53,
        close: 372.06,
        volume: 2280358
      },
      {
        time: new Date(2014, 2, 10),
        open: 372.69,
        high: 372.73,
        low: 367.0,
        close: 370.53,
        volume: 2107820
      },
      {
        time: new Date(2014, 2, 11),
        open: 370.99,
        high: 372.8,
        low: 367.28,
        close: 368.82,
        volume: 2248019
      },
      {
        time: new Date(2014, 2, 12),
        open: 366.4,
        high: 371.16,
        low: 363.61,
        close: 370.64,
        volume: 2219663
      },
      {
        time: new Date(2014, 2, 13),
        open: 376.62,
        high: 383.11,
        low: 368.08,
        close: 371.51,
        volume: 6829047
      },
      {
        time: new Date(2014, 2, 14),
        open: 372.8,
        high: 378.57,
        low: 371.55,
        close: 373.74,
        volume: 4402220
      },
      {
        time: new Date(2014, 2, 17),
        open: 375.72,
        high: 378.85,
        low: 374.88,
        close: 375.04,
        volume: 2306821
      },
      {
        time: new Date(2014, 2, 18),
        open: 377.32,
        high: 379.0,
        low: 375.0,
        close: 378.77,
        volume: 2483508
      },
      {
        time: new Date(2014, 2, 19),
        open: 378.77,
        high: 379.0,
        low: 369.42,
        close: 373.23,
        volume: 2646687
      },
      {
        time: new Date(2014, 2, 20),
        open: 370.64,
        high: 373.0,
        low: 366.22,
        close: 368.97,
        volume: 2558460
      },
      {
        time: new Date(2014, 2, 21),
        open: 371.0,
        high: 372.84,
        low: 358.4,
        close: 360.62,
        volume: 5417935
      },
      {
        time: new Date(2014, 2, 24),
        open: 360.09,
        high: 361.5,
        low: 348.6,
        close: 351.85,
        volume: 4879627
      },
      {
        time: new Date(2014, 2, 25),
        open: 354.03,
        high: 358.97,
        low: 348.84,
        close: 354.71,
        volume: 4455703
      },
      {
        time: new Date(2014, 2, 26),
        open: 357.13,
        high: 357.6,
        low: 343.4,
        close: 343.41,
        volume: 4120665
      },
      {
        time: new Date(2014, 2, 27),
        open: 343.15,
        high: 344.0,
        low: 330.88,
        close: 338.47,
        volume: 5770462
      },
      {
        time: new Date(2014, 2, 28),
        open: 340.05,
        high: 347.0,
        low: 336.08,
        close: 338.29,
        volume: 3986782
      },
      {
        time: new Date(2014, 2, 31),
        open: 342.4,
        high: 346.29,
        low: 334.06,
        close: 336.36,
        volume: 4297487
      },
      {
        time: new Date(2014, 3, 1),
        open: 338.09,
        high: 344.43,
        low: 338.0,
        close: 342.99,
        volume: 3602899
      },
      {
        time: new Date(2014, 3, 2),
        open: 345.99,
        high: 348.3,
        low: 340.38,
        close: 341.96,
        volume: 4475523
      },
      {
        time: new Date(2014, 3, 3),
        open: 341.82,
        high: 342.5,
        low: 328.46,
        close: 333.62,
        volume: 6399299
      },
      {
        time: new Date(2014, 3, 4),
        open: 335.15,
        high: 335.44,
        low: 315.61,
        close: 323.0,
        volume: 12534578
      },
      {
        time: new Date(2014, 3, 7),
        open: 320.99,
        high: 324.94,
        low: 313.13,
        close: 317.76,
        volume: 7077360
      },
      {
        time: new Date(2014, 3, 8),
        open: 321.88,
        high: 328.0,
        low: 318.44,
        close: 327.07,
        volume: 6585583
      },
      {
        time: new Date(2014, 3, 9),
        open: 328.47,
        high: 332.18,
        low: 322.5,
        close: 331.8,
        volume: 5058664
      },
      {
        time: new Date(2014, 3, 10),
        open: 330.6,
        high: 331.0,
        low: 316.5,
        close: 317.11,
        volume: 6133376
      },
      {
        time: new Date(2014, 3, 11),
        open: 314.0,
        high: 316.5,
        low: 309.5,
        close: 311.73,
        volume: 7292028
      },
      {
        time: new Date(2014, 3, 14),
        open: 317.67,
        high: 320.48,
        low: 311.28,
        close: 315.91,
        volume: 4293532
      },
      {
        time: new Date(2014, 3, 15),
        open: 316.7,
        high: 318.28,
        low: 305.5,
        close: 316.08,
        volume: 5399337
      },
      {
        time: new Date(2014, 3, 16),
        open: 321.17,
        high: 324.0,
        low: 314.71,
        close: 323.68,
        volume: 4285901
      },
      {
        time: new Date(2014, 3, 17),
        open: 319.76,
        high: 328.66,
        low: 319.76,
        close: 324.91,
        volume: 4300378
      },
      {
        time: new Date(2014, 3, 21),
        open: 323.97,
        high: 331.15,
        low: 322.31,
        close: 330.87,
        volume: 3000598
      },
      {
        time: new Date(2014, 3, 22),
        open: 332.0,
        high: 337.5,
        low: 328.94,
        close: 329.32,
        volume: 3714288
      },
      {
        time: new Date(2014, 3, 23),
        open: 333.06,
        high: 333.13,
        low: 323.39,
        close: 324.58,
        volume: 3604586
      },
      {
        time: new Date(2014, 3, 24),
        open: 329.67,
        high: 337.4,
        low: 322.95,
        close: 337.15,
        volume: 9293735
      },
      {
        time: new Date(2014, 3, 25),
        open: 316.25,
        high: 316.49,
        low: 302.71,
        close: 303.83,
        volume: 16186737
      },
      {
        time: new Date(2014, 3, 28),
        open: 304.0,
        high: 304.39,
        low: 288.0,
        close: 296.58,
        volume: 14479803
      },
      {
        time: new Date(2014, 3, 29),
        open: 296.44,
        high: 301.84,
        low: 290.45,
        close: 300.38,
        volume: 6510591
      },
      {
        time: new Date(2014, 3, 30),
        open: 298.1,
        high: 304.56,
        low: 298.1,
        close: 304.13,
        volume: 4090006
      },
      {
        time: new Date(2014, 4, 1),
        open: 304.13,
        high: 310.48,
        low: 304.0,
        close: 307.89,
        volume: 4329167
      },
      {
        time: new Date(2014, 4, 2),
        open: 310.42,
        high: 313.29,
        low: 304.31,
        close: 308.01,
        volume: 3995218
      },
      {
        time: new Date(2014, 4, 5),
        open: 306.37,
        high: 310.23,
        low: 305.0,
        close: 310.05,
        volume: 2520300
      },
      {
        time: new Date(2014, 4, 6),
        open: 309.53,
        high: 309.81,
        low: 297.04,
        close: 297.38,
        volume: 4682327
      },
      {
        time: new Date(2014, 4, 7),
        open: 295.56,
        high: 296.4,
        low: 286.68,
        close: 292.71,
        volume: 7016937
      },
      {
        time: new Date(2014, 4, 8),
        open: 290.82,
        high: 295.88,
        low: 287.23,
        close: 288.32,
        volume: 3848996
      },
      {
        time: new Date(2014, 4, 9),
        open: 290.57,
        high: 293.68,
        low: 284.38,
        close: 292.24,
        volume: 4062984
      },
      {
        time: new Date(2014, 4, 12),
        open: 294.3,
        high: 303.34,
        low: 294.16,
        close: 302.86,
        volume: 3735443
      },
      {
        time: new Date(2014, 4, 13),
        open: 302.6,
        high: 305.6,
        low: 300.75,
        close: 304.64,
        volume: 3509937
      },
      {
        time: new Date(2014, 4, 14),
        open: 302.5,
        high: 304.64,
        low: 296.66,
        close: 297.62,
        volume: 3328414
      },
      {
        time: new Date(2014, 4, 15),
        open: 298.02,
        high: 299.2,
        low: 290.38,
        close: 295.19,
        volume: 4299530
      },
      {
        time: new Date(2014, 4, 16),
        open: 292.8,
        high: 298.88,
        low: 291.55,
        close: 297.7,
        volume: 3637649
      },
      {
        time: new Date(2014, 4, 19),
        open: 295.76,
        high: 299.0,
        low: 293.81,
        close: 296.76,
        volume: 2286313
      },
      {
        time: new Date(2014, 4, 20),
        open: 297.1,
        high: 304.46,
        low: 296.75,
        close: 301.19,
        volume: 4096308
      },
      {
        time: new Date(2014, 4, 21),
        open: 302.21,
        high: 305.96,
        low: 301.52,
        close: 305.01,
        volume: 3409200
      },
      {
        time: new Date(2014, 4, 22),
        open: 305.05,
        high: 308.54,
        low: 303.01,
        close: 304.91,
        volume: 2576888
      },
      {
        time: new Date(2014, 4, 23),
        open: 305.46,
        high: 312.35,
        low: 304.9,
        close: 312.24,
        volume: 3055997
      },
      {
        time: new Date(2014, 4, 27),
        open: 314.41,
        high: 314.63,
        low: 307.38,
        close: 310.82,
        volume: 4864163
      },
      {
        time: new Date(2014, 4, 28),
        open: 309.5,
        high: 313.82,
        low: 307.42,
        close: 310.16,
        volume: 2726803
      },
      {
        time: new Date(2014, 4, 29),
        open: 310.42,
        high: 314.87,
        low: 310.2,
        close: 313.78,
        volume: 2365679
      },
      {
        time: new Date(2014, 4, 30),
        open: 314.43,
        high: 314.65,
        low: 307.57,
        close: 312.55,
        volume: 4260624
      },
      {
        time: new Date(2014, 5, 2),
        open: 312.59,
        high: 312.6,
        low: 307.0,
        close: 308.84,
        volume: 2205909
      },
      {
        time: new Date(2014, 5, 3),
        open: 305.75,
        high: 307.92,
        low: 305.07,
        close: 307.19,
        volume: 2379273
      },
      {
        time: new Date(2014, 5, 4),
        open: 306.85,
        high: 309.5,
        low: 303.84,
        close: 306.78,
        volume: 2111176
      },
      {
        time: new Date(2014, 5, 5),
        open: 308.1,
        high: 327.94,
        low: 306.9,
        close: 323.57,
        volume: 7803760
      },
      {
        time: new Date(2014, 5, 6),
        open: 325.0,
        high: 330.88,
        low: 324.93,
        close: 329.67,
        volume: 5246723
      },
      {
        time: new Date(2014, 5, 9),
        open: 331.57,
        high: 333.0,
        low: 325.65,
        close: 327.5,
        volume: 3212755
      },
      {
        time: new Date(2014, 5, 10),
        open: 327.65,
        high: 335.5,
        low: 327.5,
        close: 332.41,
        volume: 3668904
      },
      {
        time: new Date(2014, 5, 11),
        open: 336.0,
        high: 340.72,
        low: 333.88,
        close: 335.2,
        volume: 4439178
      },
      {
        time: new Date(2014, 5, 12),
        open: 335.55,
        high: 335.55,
        low: 324.66,
        close: 325.91,
        volume: 4276316
      },
      {
        time: new Date(2014, 5, 13),
        open: 327.05,
        high: 329.3,
        low: 323.53,
        close: 326.27,
        volume: 2766909
      },
      {
        time: new Date(2014, 5, 16),
        open: 324.86,
        high: 328.69,
        low: 323.52,
        close: 327.62,
        volume: 2449843
      },
      {
        time: new Date(2014, 5, 17),
        open: 327.54,
        high: 331.34,
        low: 325.23,
        close: 325.62,
        volume: 2924058
      },
      {
        time: new Date(2014, 5, 18),
        open: 328.0,
        high: 335.75,
        low: 325.0,
        close: 334.38,
        volume: 6409334
      },
      {
        time: new Date(2014, 5, 19),
        open: 335.26,
        high: 338.9,
        low: 325.98,
        close: 327.0,
        volume: 5327002
      },
      {
        time: new Date(2014, 5, 20),
        open: 327.76,
        high: 328.22,
        low: 320.42,
        close: 324.2,
        volume: 6056210
      },
      {
        time: new Date(2014, 5, 23),
        open: 323.33,
        high: 327.55,
        low: 321.41,
        close: 327.24,
        volume: 2609628
      },
      {
        time: new Date(2014, 5, 24),
        open: 327.54,
        high: 329.73,
        low: 322.74,
        close: 324.16,
        volume: 2627978
      },
      {
        time: new Date(2014, 5, 25),
        open: 324.33,
        high: 328.15,
        low: 321.74,
        close: 327.44,
        volume: 2328006
      },
      {
        time: new Date(2014, 5, 26),
        open: 328.49,
        high: 328.65,
        low: 322.13,
        close: 325.69,
        volume: 2699908
      },
      {
        time: new Date(2014, 5, 27),
        open: 325.88,
        high: 326.52,
        low: 323.27,
        close: 324.57,
        volume: 2419626
      },
      {
        time: new Date(2014, 5, 30),
        open: 324.98,
        high: 326.98,
        low: 322.24,
        close: 324.78,
        volume: 2672165
      },
      {
        time: new Date(2014, 6, 1),
        open: 325.86,
        high: 333.2,
        low: 325.1,
        close: 332.39,
        volume: 3178548
      },
      {
        time: new Date(2014, 6, 2),
        open: 333.2,
        high: 336.76,
        low: 331.66,
        close: 332.85,
        volume: 2681578
      },
      {
        time: new Date(2014, 6, 3),
        open: 334.83,
        high: 338.3,
        low: 333.08,
        close: 337.49,
        volume: 1944300
      },
      {
        time: new Date(2014, 6, 7),
        open: 337.5,
        high: 337.55,
        low: 332.52,
        close: 333.55,
        volume: 2130028
      },
      {
        time: new Date(2014, 6, 8),
        open: 333.1,
        high: 333.74,
        low: 321.4,
        close: 323.81,
        volume: 4275447
      },
      {
        time: new Date(2014, 6, 9),
        open: 324.71,
        high: 330.2,
        low: 323.15,
        close: 329.97,
        volume: 3167133
      },
      {
        time: new Date(2014, 6, 10),
        open: 324.34,
        high: 329.98,
        low: 322.65,
        close: 327.92,
        volume: 2665753
      },
      {
        time: new Date(2014, 6, 11),
        open: 334.71,
        high: 347.0,
        low: 334.71,
        close: 346.2,
        volume: 8309079
      },
      {
        time: new Date(2014, 6, 14),
        open: 347.03,
        high: 355.77,
        low: 345.36,
        close: 355.32,
        volume: 5615482
      },
      {
        time: new Date(2014, 6, 15),
        open: 353.72,
        high: 355.59,
        low: 349.4,
        close: 354.44,
        volume: 4176758
      },
      {
        time: new Date(2014, 6, 16),
        open: 355.62,
        high: 359.32,
        low: 353.0,
        close: 355.9,
        volume: 3505023
      },
      {
        time: new Date(2014, 6, 17),
        open: 353.44,
        high: 356.96,
        low: 351.38,
        close: 352.45,
        volume: 3640290
      },
      {
        time: new Date(2014, 6, 18),
        open: 354.4,
        high: 359.68,
        low: 352.08,
        close: 358.66,
        volume: 3410032
      },
      {
        time: new Date(2014, 6, 21),
        open: 358.1,
        high: 361.71,
        low: 356.72,
        close: 359.76,
        volume: 2282741
      },
      {
        time: new Date(2014, 6, 22),
        open: 355.25,
        high: 362.93,
        low: 355.25,
        close: 360.84,
        volume: 2889366
      },
      {
        time: new Date(2014, 6, 23),
        open: 359.05,
        high: 360.63,
        low: 356.62,
        close: 358.14,
        volume: 2688761
      },
      {
        time: new Date(2014, 6, 24),
        open: 359.98,
        high: 364.85,
        low: 358.52,
        close: 358.61,
        volume: 7088655
      },
      {
        time: new Date(2014, 6, 25),
        open: 317.3,
        high: 324.87,
        low: 314.76,
        close: 324.01,
        volume: 17855141
      },
      {
        time: new Date(2014, 6, 28),
        open: 324.25,
        high: 324.82,
        low: 316.5,
        close: 320.41,
        volume: 5933999
      },
      {
        time: new Date(2014, 6, 29),
        open: 321.98,
        high: 322.9,
        low: 319.5,
        close: 320.0,
        volume: 2885644
      },
      {
        time: new Date(2014, 6, 30),
        open: 321.45,
        high: 322.73,
        low: 318.5,
        close: 322.51,
        volume: 3973213
      },
      {
        time: new Date(2014, 6, 31),
        open: 320.01,
        high: 320.68,
        low: 311.86,
        close: 312.99,
        volume: 5193770
      },
      {
        time: new Date(2014, 7, 1),
        open: 313.69,
        high: 315.83,
        low: 304.59,
        close: 307.06,
        volume: 7443091
      },
      {
        time: new Date(2014, 7, 4),
        open: 308.84,
        high: 316.18,
        low: 308.5,
        close: 313.65,
        volume: 4208660
      },
      {
        time: new Date(2014, 7, 5),
        open: 313.65,
        high: 314.55,
        low: 310.06,
        close: 312.32,
        volume: 2856294
      },
      {
        time: new Date(2014, 7, 6),
        open: 310.83,
        high: 315.78,
        low: 310.2,
        close: 313.89,
        volume: 2297476
      },
      {
        time: new Date(2014, 7, 7),
        open: 315.21,
        high: 315.88,
        low: 309.66,
        close: 311.45,
        volume: 2936913
      },
      {
        time: new Date(2014, 7, 8),
        open: 311.94,
        high: 317.32,
        low: 310.66,
        close: 316.8,
        volume: 2708416
      },
      {
        time: new Date(2014, 7, 11),
        open: 318.48,
        high: 320.38,
        low: 316.88,
        close: 318.33,
        volume: 2472819
      },
      {
        time: new Date(2014, 7, 12),
        open: 318.89,
        high: 321.31,
        low: 316.95,
        close: 319.32,
        volume: 1916143
      },
      {
        time: new Date(2014, 7, 13),
        open: 327.6,
        high: 331.72,
        low: 326.14,
        close: 326.28,
        volume: 4945094
      },
      {
        time: new Date(2014, 7, 14),
        open: 327.8,
        high: 334.09,
        low: 326.71,
        close: 333.21,
        volume: 3420646
      },
      {
        time: new Date(2014, 7, 15),
        open: 334.0,
        high: 335.0,
        low: 328.32,
        close: 333.63,
        volume: 3897928
      },
      {
        time: new Date(2014, 7, 18),
        open: 335.48,
        high: 337.8,
        low: 333.77,
        close: 334.53,
        volume: 2488186
      },
      {
        time: new Date(2014, 7, 19),
        open: 334.87,
        high: 335.81,
        low: 333.01,
        close: 335.13,
        volume: 1714120
      },
      {
        time: new Date(2014, 7, 20),
        open: 334.68,
        high: 337.16,
        low: 334.02,
        close: 335.78,
        volume: 1811462
      },
      {
        time: new Date(2014, 7, 21),
        open: 336.48,
        high: 336.58,
        low: 332.23,
        close: 332.91,
        volume: 1975792
      },
      {
        time: new Date(2014, 7, 22),
        open: 332.99,
        high: 334.08,
        low: 330.8,
        close: 331.59,
        volume: 2212965
      },
      {
        time: new Date(2014, 7, 25),
        open: 333.21,
        high: 336.77,
        low: 332.71,
        close: 334.02,
        volume: 1960978
      },
      {
        time: new Date(2014, 7, 26),
        open: 337.0,
        high: 344.36,
        low: 334.55,
        close: 341.83,
        volume: 3654702
      },
      {
        time: new Date(2014, 7, 27),
        open: 342.09,
        high: 346.67,
        low: 341.34,
        close: 343.18,
        volume: 2961767
      },
      {
        time: new Date(2014, 7, 28),
        open: 340.0,
        high: 341.79,
        low: 338.8,
        close: 340.02,
        volume: 2254725
      },
      {
        time: new Date(2014, 7, 29),
        open: 341.76,
        high: 341.82,
        low: 337.68,
        close: 339.04,
        volume: 1939848
      },
      {
        time: new Date(2014, 8, 2),
        open: 339.98,
        high: 342.5,
        low: 337.16,
        close: 342.38,
        volume: 2328881
      },
      {
        time: new Date(2014, 8, 3),
        open: 342.54,
        high: 343.27,
        low: 337.55,
        close: 339.0,
        volume: 1998540
      },
      {
        time: new Date(2014, 8, 4),
        open: 343.69,
        high: 349.38,
        low: 343.58,
        close: 345.95,
        volume: 3965557
      },
      {
        time: new Date(2014, 8, 5),
        open: 346.3,
        high: 346.83,
        low: 342.5,
        close: 346.38,
        volume: 2111220
      },
      {
        time: new Date(2014, 8, 8),
        open: 344.54,
        high: 345.81,
        low: 339.04,
        close: 342.34,
        volume: 2960693
      },
      {
        time: new Date(2014, 8, 9),
        open: 341.61,
        high: 341.76,
        low: 329.18,
        close: 329.75,
        volume: 4646832
      },
      {
        time: new Date(2014, 8, 10),
        open: 334.3,
        high: 334.98,
        low: 328.82,
        close: 331.33,
        volume: 3798904
      },
      {
        time: new Date(2014, 8, 11),
        open: 329.94,
        high: 333.01,
        low: 326.39,
        close: 330.52,
        volume: 2721893
      },
      {
        time: new Date(2014, 8, 12),
        open: 329.56,
        high: 332.89,
        low: 328.79,
        close: 331.19,
        volume: 3429727
      },
      {
        time: new Date(2014, 8, 15),
        open: 330.91,
        high: 331.33,
        low: 319.0,
        close: 323.89,
        volume: 4006918
      },
      {
        time: new Date(2014, 8, 16),
        open: 321.07,
        high: 329.48,
        low: 320.1,
        close: 327.76,
        volume: 3265860
      },
      {
        time: new Date(2014, 8, 17),
        open: 327.76,
        high: 328.0,
        low: 321.52,
        close: 324.0,
        volume: 4138950
      },
      {
        time: new Date(2014, 8, 18),
        open: 325.44,
        high: 327.1,
        low: 323.71,
        close: 325.0,
        volume: 2577706
      },
      {
        time: new Date(2014, 8, 19),
        open: 327.6,
        high: 332.76,
        low: 325.57,
        close: 331.32,
        volume: 6886382
      },
      {
        time: new Date(2014, 8, 22),
        open: 328.49,
        high: 329.49,
        low: 321.06,
        close: 324.5,
        volume: 3118649
      },
      {
        time: new Date(2014, 8, 23),
        open: 322.46,
        high: 327.6,
        low: 321.25,
        close: 323.63,
        volume: 2353590
      },
      {
        time: new Date(2014, 8, 24),
        open: 324.17,
        high: 329.44,
        low: 319.56,
        close: 328.21,
        volume: 2647232
      },
      {
        time: new Date(2014, 8, 25),
        open: 327.99,
        high: 328.54,
        low: 321.4,
        close: 321.93,
        volume: 2934944
      },
      {
        time: new Date(2014, 8, 26),
        open: 320.6,
        high: 323.5,
        low: 317.64,
        close: 323.21,
        volume: 3639155
      },
      {
        time: new Date(2014, 8, 29),
        open: 320.5,
        high: 323.75,
        low: 319.0,
        close: 321.82,
        volume: 1929589
      },
      {
        time: new Date(2014, 8, 30),
        open: 321.36,
        high: 323.43,
        low: 318.51,
        close: 322.44,
        volume: 2639967
      },
      {
        time: new Date(2014, 9, 1),
        open: 322.04,
        high: 322.16,
        low: 315.55,
        close: 317.46,
        volume: 3096735
      },
      {
        time: new Date(2014, 9, 2),
        open: 316.92,
        high: 318.53,
        low: 311.31,
        close: 318.41,
        volume: 3553944
      },
      {
        time: new Date(2014, 9, 3),
        open: 320.36,
        high: 325.16,
        low: 319.53,
        close: 322.74,
        volume: 3037891
      },
      {
        time: new Date(2014, 9, 6),
        open: 323.5,
        high: 324.13,
        low: 319.6,
        close: 322.2,
        volume: 2294194
      },
      {
        time: new Date(2014, 9, 7),
        open: 319.43,
        high: 322.0,
        low: 316.67,
        close: 316.98,
        volume: 2365698
      },
      {
        time: new Date(2014, 9, 8),
        open: 316.58,
        high: 324.11,
        low: 314.14,
        close: 322.7,
        volume: 3458960
      },
      {
        time: new Date(2014, 9, 9),
        open: 321.49,
        high: 322.27,
        low: 314.52,
        close: 315.37,
        volume: 3589464
      },
      {
        time: new Date(2014, 9, 10),
        open: 314.02,
        high: 317.77,
        low: 311.38,
        close: 311.39,
        volume: 3684314
      },
      {
        time: new Date(2014, 9, 13),
        open: 309.87,
        high: 313.2,
        low: 303.47,
        close: 306.45,
        volume: 4369850
      },
      {
        time: new Date(2014, 9, 14),
        open: 308.0,
        high: 312.24,
        low: 305.75,
        close: 308.31,
        volume: 3385809
      },
      {
        time: new Date(2014, 9, 15),
        open: 304.35,
        high: 307.9,
        low: 299.1,
        close: 305.97,
        volume: 5348254
      },
      {
        time: new Date(2014, 9, 16),
        open: 293.83,
        high: 306.82,
        low: 293.83,
        close: 302.86,
        volume: 4731866
      },
      {
        time: new Date(2014, 9, 17),
        open: 307.15,
        high: 309.2,
        low: 302.72,
        close: 303.64,
        volume: 4409218
      },
      {
        time: new Date(2014, 9, 20),
        open: 302.95,
        high: 306.53,
        low: 302.02,
        close: 306.21,
        volume: 3239490
      },
      {
        time: new Date(2014, 9, 21),
        open: 309.9,
        high: 315.64,
        low: 307.07,
        close: 315.33,
        volume: 3563351
      },
      {
        time: new Date(2014, 9, 22),
        open: 315.43,
        high: 318.98,
        low: 312.64,
        close: 312.97,
        volume: 3130049
      },
      {
        time: new Date(2014, 9, 23),
        open: 313.4,
        high: 316.8,
        low: 311.4,
        close: 313.18,
        volume: 9038193
      },
      {
        time: new Date(2014, 9, 24),
        open: 284.4,
        high: 293.81,
        low: 284.0,
        close: 287.06,
        volume: 19805911
      },
      {
        time: new Date(2014, 9, 27),
        open: 285.7,
        high: 290.42,
        low: 285.02,
        close: 289.97,
        volume: 5950594
      },
      {
        time: new Date(2014, 9, 28),
        open: 289.76,
        high: 298.0,
        low: 289.76,
        close: 295.59,
        volume: 5576646
      },
      {
        time: new Date(2014, 9, 29),
        open: 299.11,
        high: 299.61,
        low: 293.07,
        close: 294.12,
        volume: 4883259
      },
      {
        time: new Date(2014, 9, 30),
        open: 293.98,
        high: 299.74,
        low: 292.36,
        close: 299.07,
        volume: 4055155
      },
      {
        time: new Date(2014, 9, 31),
        open: 305.15,
        high: 305.72,
        low: 301.5,
        close: 305.46,
        volume: 4551795
      },
      {
        time: new Date(2014, 10, 3),
        open: 306.24,
        high: 308.01,
        low: 303.24,
        close: 305.72,
        volume: 3244150
      },
      {
        time: new Date(2014, 10, 4),
        open: 303.99,
        high: 304.25,
        low: 300.17,
        close: 302.81,
        volume: 3427384
      },
      {
        time: new Date(2014, 10, 5),
        open: 303.01,
        high: 304.0,
        low: 294.16,
        close: 296.52,
        volume: 4674492
      },
      {
        time: new Date(2014, 10, 6),
        open: 296.69,
        high: 297.0,
        low: 292.29,
        close: 296.64,
        volume: 3758121
      },
      {
        time: new Date(2014, 10, 7),
        open: 297.82,
        high: 299.99,
        low: 296.29,
        close: 299.86,
        volume: 2647352
      },
      {
        time: new Date(2014, 10, 10),
        open: 300.0,
        high: 305.8,
        low: 300.0,
        close: 305.11,
        volume: 2809056
      },
      {
        time: new Date(2014, 10, 11),
        open: 305.94,
        high: 312.38,
        low: 303.65,
        close: 312.01,
        volume: 3807333
      },
      {
        time: new Date(2014, 10, 12),
        open: 310.75,
        high: 312.58,
        low: 308.79,
        close: 311.51,
        volume: 2182982
      },
      {
        time: new Date(2014, 10, 13),
        open: 312.0,
        high: 317.89,
        low: 311.51,
        close: 316.48,
        volume: 3686428
      },
      {
        time: new Date(2014, 10, 14),
        open: 317.12,
        high: 332.88,
        low: 316.4,
        close: 327.82,
        volume: 8877785
      },
      {
        time: new Date(2014, 10, 17),
        open: 326.44,
        high: 328.0,
        low: 318.03,
        close: 323.05,
        volume: 4784933
      },
      {
        time: new Date(2014, 10, 18),
        open: 323.99,
        high: 329.56,
        low: 323.25,
        close: 324.93,
        volume: 3551161
      },
      {
        time: new Date(2014, 10, 19),
        open: 327.25,
        high: 328.4,
        low: 324.02,
        close: 326.54,
        volume: 3281614
      },
      {
        time: new Date(2014, 10, 20),
        open: 324.0,
        high: 332.67,
        low: 323.33,
        close: 330.54,
        volume: 3436721
      },
      {
        time: new Date(2014, 10, 21),
        open: 335.42,
        high: 338.33,
        low: 331.47,
        close: 332.63,
        volume: 4466587
      },
      {
        time: new Date(2014, 10, 24),
        open: 334.78,
        high: 337.39,
        low: 333.6,
        close: 335.64,
        volume: 2754186
      },
      {
        time: new Date(2014, 10, 25),
        open: 335.27,
        high: 336.33,
        low: 331.28,
        close: 335.04,
        volume: 2564989
      },
      {
        time: new Date(2014, 10, 26),
        open: 333.78,
        high: 334.65,
        low: 331.75,
        close: 333.57,
        volume: 1985949
      },
      {
        time: new Date(2014, 10, 28),
        open: 336.03,
        high: 341.26,
        low: 336.03,
        close: 338.64,
        volume: 3051798
      },
      {
        time: new Date(2014, 11, 1),
        open: 338.12,
        high: 340.64,
        low: 325.93,
        close: 326.0,
        volume: 4944861
      },
      {
        time: new Date(2014, 11, 2),
        open: 327.5,
        high: 327.93,
        low: 323.25,
        close: 326.31,
        volume: 2790257
      },
      {
        time: new Date(2014, 11, 3),
        open: 325.73,
        high: 326.77,
        low: 314.36,
        close: 316.5,
        volume: 5689904
      },
      {
        time: new Date(2014, 11, 4),
        open: 315.53,
        high: 318.59,
        low: 313.47,
        close: 316.93,
        volume: 3296642
      },
      {
        time: new Date(2014, 11, 5),
        open: 316.8,
        high: 316.93,
        low: 310.84,
        close: 312.63,
        volume: 3265214
      },
      {
        time: new Date(2014, 11, 8),
        open: 311.57,
        high: 316.56,
        low: 304.82,
        close: 306.64,
        volume: 3639180
      },
      {
        time: new Date(2014, 11, 9),
        open: 302.99,
        high: 313.64,
        low: 301.14,
        close: 312.5,
        volume: 4049506
      },
      {
        time: new Date(2014, 11, 10),
        open: 312.0,
        high: 313.19,
        low: 304.68,
        close: 305.84,
        volume: 3245890
      },
      {
        time: new Date(2014, 11, 11),
        open: 307.89,
        high: 312.64,
        low: 306.01,
        close: 307.36,
        volume: 3272919
      },
      {
        time: new Date(2014, 11, 12),
        open: 303.99,
        high: 310.64,
        low: 303.01,
        close: 307.32,
        volume: 3162322
      },
      {
        time: new Date(2014, 11, 15),
        open: 308.87,
        high: 310.86,
        low: 302.15,
        close: 306.07,
        volume: 3841577
      },
      {
        time: new Date(2014, 11, 16),
        open: 304.35,
        high: 304.49,
        low: 295.01,
        close: 295.06,
        volume: 6501252
      },
      {
        time: new Date(2014, 11, 17),
        open: 296.37,
        high: 299.67,
        low: 293.03,
        close: 298.88,
        volume: 4433505
      },
      {
        time: new Date(2014, 11, 18),
        open: 304.01,
        high: 304.5,
        low: 293.25,
        close: 297.73,
        volume: 7738067
      },
      {
        time: new Date(2014, 11, 19),
        open: 296.91,
        high: 301.54,
        low: 295.52,
        close: 299.9,
        volume: 8709129
      },
      {
        time: new Date(2014, 11, 22),
        open: 301.94,
        high: 307.36,
        low: 301.94,
        close: 306.54,
        volume: 4003827
      },
      {
        time: new Date(2014, 11, 23),
        open: 306.98,
        high: 307.49,
        low: 303.25,
        close: 306.28,
        volume: 2718359
      },
      {
        time: new Date(2014, 11, 24),
        open: 306.38,
        high: 307.0,
        low: 302.88,
        close: 303.03,
        volume: 1518107
      },
      {
        time: new Date(2014, 11, 26),
        open: 305.0,
        high: 310.78,
        low: 303.81,
        close: 309.09,
        volume: 2893801
      },
      {
        time: new Date(2014, 11, 29),
        open: 307.85,
        high: 314.27,
        low: 306.58,
        close: 312.04,
        volume: 3009046
      },
      {
        time: new Date(2014, 11, 30),
        open: 309.91,
        high: 313.94,
        low: 309.34,
        close: 310.3,
        volume: 2093023
      },
      {
        time: new Date(2014, 11, 31),
        open: 311.55,
        high: 312.98,
        low: 310.01,
        close: 310.35,
        volume: 2057766
      },
      {
        time: new Date(2015, 0, 2),
        open: 312.58,
        high: 314.75,
        low: 306.96,
        close: 308.52,
        volume: 2788101
      },
      {
        time: new Date(2015, 0, 5),
        open: 307.01,
        high: 308.38,
        low: 300.85,
        close: 302.19,
        volume: 2774231
      },
      {
        time: new Date(2015, 0, 6),
        open: 302.24,
        high: 303.0,
        low: 292.38,
        close: 295.29,
        volume: 3519034
      },
      {
        time: new Date(2015, 0, 7),
        open: 297.5,
        high: 301.28,
        low: 295.33,
        close: 298.42,
        volume: 2640349
      },
      {
        time: new Date(2015, 0, 8),
        open: 300.32,
        high: 303.14,
        low: 296.11,
        close: 300.46,
        volume: 3088398
      },
      {
        time: new Date(2015, 0, 9),
        open: 301.48,
        high: 302.87,
        low: 296.68,
        close: 296.93,
        volume: 2592360
      },
      {
        time: new Date(2015, 0, 12),
        open: 297.56,
        high: 298.51,
        low: 289.28,
        close: 291.41,
        volume: 3421392
      },
      {
        time: new Date(2015, 0, 13),
        open: 297.48,
        high: 301.5,
        low: 293.23,
        close: 294.74,
        volume: 4136442
      },
      {
        time: new Date(2015, 0, 14),
        open: 291.93,
        high: 295.91,
        low: 286.5,
        close: 293.27,
        volume: 5538666
      },
      {
        time: new Date(2015, 0, 15),
        open: 294.0,
        high: 296.0,
        low: 286.82,
        close: 286.95,
        volume: 4419196
      },
      {
        time: new Date(2015, 0, 16),
        open: 286.28,
        high: 290.79,
        low: 285.25,
        close: 290.74,
        volume: 3478176
      },
      {
        time: new Date(2015, 0, 20),
        open: 292.59,
        high: 293.36,
        low: 286.39,
        close: 289.44,
        volume: 3075081
      },
      {
        time: new Date(2015, 0, 21),
        open: 289.64,
        high: 306.0,
        low: 287.26,
        close: 297.25,
        volume: 10065076
      },
      {
        time: new Date(2015, 0, 22),
        open: 300.0,
        high: 312.25,
        low: 300.0,
        close: 310.32,
        volume: 5362640
      },
      {
        time: new Date(2015, 0, 23),
        open: 308.08,
        high: 316.93,
        low: 307.72,
        close: 312.39,
        volume: 4496419
      },
      {
        time: new Date(2015, 0, 26),
        open: 311.82,
        high: 313.0,
        low: 307.52,
        close: 309.66,
        volume: 3169665
      },
      {
        time: new Date(2015, 0, 27),
        open: 306.3,
        high: 310.24,
        low: 302.62,
        close: 306.75,
        volume: 2920315
      },
      {
        time: new Date(2015, 0, 28),
        open: 309.81,
        high: 311.51,
        low: 303.8,
        close: 303.91,
        volume: 3063774
      },
      {
        time: new Date(2015, 0, 29),
        open: 304.73,
        high: 312.8,
        low: 299.33,
        close: 311.78,
        volume: 8656567
      },
      {
        time: new Date(2015, 0, 30),
        open: 346.32,
        high: 359.5,
        low: 340.74,
        close: 354.53,
        volume: 23856060
      },
      {
        time: new Date(2015, 1, 2),
        open: 350.05,
        high: 365.0,
        low: 350.01,
        close: 364.47,
        volume: 10231914
      },
      {
        time: new Date(2015, 1, 3),
        open: 360.29,
        high: 367.82,
        low: 360.21,
        close: 363.55,
        volume: 6212565
      },
      {
        time: new Date(2015, 1, 4),
        open: 358.38,
        high: 367.5,
        low: 358.23,
        close: 364.75,
        volume: 4169927
      },
      {
        time: new Date(2015, 1, 5),
        open: 366.0,
        high: 378.8,
        low: 365.9,
        close: 373.89,
        volume: 7247605
      },
      {
        time: new Date(2015, 1, 6),
        open: 374.87,
        high: 375.99,
        low: 371.01,
        close: 374.28,
        volume: 3892382
      },
      {
        time: new Date(2015, 1, 9),
        open: 371.0,
        high: 374.41,
        low: 367.2,
        close: 370.56,
        volume: 2724630
      },
      {
        time: new Date(2015, 1, 10),
        open: 371.19,
        high: 374.3,
        low: 368.51,
        close: 373.0,
        volume: 2287232
      },
      {
        time: new Date(2015, 1, 11),
        open: 371.23,
        high: 377.1,
        low: 371.1,
        close: 375.14,
        volume: 2786523
      },
      {
        time: new Date(2015, 1, 12),
        open: 375.1,
        high: 378.51,
        low: 373.15,
        close: 377.17,
        volume: 2791050
      },
      {
        time: new Date(2015, 1, 13),
        open: 378.41,
        high: 383.0,
        low: 377.01,
        close: 381.83,
        volume: 3475069
      },
      {
        time: new Date(2015, 1, 17),
        open: 377.72,
        high: 379.98,
        low: 372.67,
        close: 375.43,
        volume: 3673208
      },
      {
        time: new Date(2015, 1, 18),
        open: 375.42,
        high: 376.74,
        low: 372.85,
        close: 373.37,
        volume: 2650610
      },
      {
        time: new Date(2015, 1, 19),
        open: 373.49,
        high: 381.88,
        low: 373.43,
        close: 379.0,
        volume: 2953752
      },
      {
        time: new Date(2015, 1, 20),
        open: 378.62,
        high: 383.7,
        low: 375.84,
        close: 383.66,
        volume: 3258023
      },
      {
        time: new Date(2015, 1, 23),
        open: 383.44,
        high: 384.54,
        low: 378.0,
        close: 380.14,
        volume: 2176989
      },
      {
        time: new Date(2015, 1, 24),
        open: 378.65,
        high: 380.48,
        low: 376.16,
        close: 378.59,
        volume: 1921850
      },
      {
        time: new Date(2015, 1, 25),
        open: 377.27,
        high: 387.85,
        low: 376.54,
        close: 385.37,
        volume: 3174495
      },
      {
        time: new Date(2015, 1, 26),
        open: 384.07,
        high: 389.37,
        low: 383.28,
        close: 384.8,
        volume: 2687107
      },
      {
        time: new Date(2015, 1, 27),
        open: 384.0,
        high: 385.99,
        low: 379.79,
        close: 380.16,
        volume: 2532309
      },
      {
        time: new Date(2015, 2, 2),
        open: 380.85,
        high: 385.9,
        low: 379.48,
        close: 385.66,
        volume: 2139205
      },
      {
        time: new Date(2015, 2, 3),
        open: 383.95,
        high: 386.1,
        low: 381.6,
        close: 384.61,
        volume: 1946498
      },
      {
        time: new Date(2015, 2, 4),
        open: 385.71,
        high: 387.9,
        low: 382.19,
        close: 382.72,
        volume: 2259141
      },
      {
        time: new Date(2015, 2, 5),
        open: 385.61,
        high: 388.42,
        low: 383.89,
        close: 387.83,
        volume: 2693518
      },
      {
        time: new Date(2015, 2, 6),
        open: 385.52,
        high: 387.0,
        low: 378.88,
        close: 380.09,
        volume: 2627042
      },
      {
        time: new Date(2015, 2, 9),
        open: 378.4,
        high: 379.33,
        low: 375.28,
        close: 378.56,
        volume: 2311390
      },
      {
        time: new Date(2015, 2, 10),
        open: 377.45,
        high: 377.77,
        low: 369.18,
        close: 369.51,
        volume: 3120972
      },
      {
        time: new Date(2015, 2, 11),
        open: 370.61,
        high: 373.35,
        low: 366.26,
        close: 366.37,
        volume: 2495097
      },
      {
        time: new Date(2015, 2, 12),
        open: 368.82,
        high: 375.5,
        low: 367.52,
        close: 374.24,
        volume: 2810001
      },
      {
        time: new Date(2015, 2, 13),
        open: 371.52,
        high: 373.99,
        low: 366.68,
        close: 370.58,
        volume: 2611658
      },
      {
        time: new Date(2015, 2, 16),
        open: 370.38,
        high: 373.94,
        low: 366.72,
        close: 373.35,
        volume: 2354059
      },
      {
        time: new Date(2015, 2, 17),
        open: 371.11,
        high: 374.5,
        low: 369.64,
        close: 371.92,
        volume: 2036961
      },
      {
        time: new Date(2015, 2, 18),
        open: 369.97,
        high: 375.99,
        low: 366.7,
        close: 375.14,
        volume: 2654135
      },
      {
        time: new Date(2015, 2, 19),
        open: 373.87,
        high: 377.11,
        low: 372.19,
        close: 373.24,
        volume: 1915671
      },
      {
        time: new Date(2015, 2, 20),
        open: 376.29,
        high: 379.37,
        low: 375.92,
        close: 378.49,
        volume: 3763553
      },
      {
        time: new Date(2015, 2, 23),
        open: 378.07,
        high: 381.77,
        low: 374.94,
        close: 375.11,
        volume: 2239343
      },
      {
        time: new Date(2015, 2, 24),
        open: 373.99,
        high: 375.24,
        low: 372.27,
        close: 374.09,
        volume: 2228214
      },
      {
        time: new Date(2015, 2, 25),
        open: 375.17,
        high: 380.5,
        low: 370.28,
        close: 370.96,
        volume: 3429497
      },
      {
        time: new Date(2015, 2, 26),
        open: 369.59,
        high: 371.4,
        low: 365.65,
        close: 367.35,
        volume: 2929962
      },
      {
        time: new Date(2015, 2, 27),
        open: 367.11,
        high: 373.17,
        low: 366.57,
        close: 370.56,
        volume: 2609774
      },
      {
        time: new Date(2015, 2, 30),
        open: 371.87,
        high: 376.12,
        low: 371.55,
        close: 374.59,
        volume: 1820933
      },
      {
        time: new Date(2015, 2, 31),
        open: 373.24,
        high: 377.7,
        low: 371.51,
        close: 372.1,
        volume: 2506122
      },
      {
        time: new Date(2015, 3, 1),
        open: 372.1,
        high: 373.16,
        low: 368.34,
        close: 370.26,
        volume: 2458095
      },
      {
        time: new Date(2015, 3, 2),
        open: 370.5,
        high: 373.28,
        low: 369.0,
        close: 372.25,
        volume: 1875279
      },
      {
        time: new Date(2015, 3, 6),
        open: 370.1,
        high: 380.2,
        low: 369.36,
        close: 377.04,
        volume: 3050709
      },
      {
        time: new Date(2015, 3, 7),
        open: 376.15,
        high: 379.31,
        low: 374.03,
        close: 374.41,
        volume: 1954902
      },
      {
        time: new Date(2015, 3, 8),
        open: 374.66,
        high: 381.58,
        low: 374.65,
        close: 381.2,
        volume: 2636434
      },
      {
        time: new Date(2015, 3, 9),
        open: 380.66,
        high: 384.42,
        low: 378.8,
        close: 383.54,
        volume: 2392328
      },
      {
        time: new Date(2015, 3, 10),
        open: 384.31,
        high: 387.12,
        low: 381.32,
        close: 382.65,
        volume: 2573519
      },
      {
        time: new Date(2015, 3, 13),
        open: 383.53,
        high: 385.28,
        low: 380.14,
        close: 382.36,
        volume: 1894453
      },
      {
        time: new Date(2015, 3, 14),
        open: 383.51,
        high: 387.81,
        low: 381.21,
        close: 385.11,
        volume: 2583575
      },
      {
        time: new Date(2015, 3, 15),
        open: 384.65,
        high: 385.78,
        low: 381.64,
        close: 383.45,
        volume: 1933229
      },
      {
        time: new Date(2015, 3, 16),
        open: 383.69,
        high: 387.45,
        low: 383.55,
        close: 386.04,
        volume: 2080418
      },
      {
        time: new Date(2015, 3, 17),
        open: 382.63,
        high: 383.56,
        low: 374.4,
        close: 375.56,
        volume: 3839664
      },
      {
        time: new Date(2015, 3, 20),
        open: 378.55,
        high: 391.94,
        low: 377.0,
        close: 389.51,
        volume: 5016148
      },
      {
        time: new Date(2015, 3, 21),
        open: 391.31,
        high: 394.6,
        low: 386.8,
        close: 391.18,
        volume: 4643524
      },
      {
        time: new Date(2015, 3, 22),
        open: 391.91,
        high: 394.28,
        low: 388.0,
        close: 389.8,
        volume: 3474724
      },
      {
        time: new Date(2015, 3, 23),
        open: 390.21,
        high: 391.88,
        low: 386.15,
        close: 389.99,
        volume: 7979985
      },
      {
        time: new Date(2015, 3, 24),
        open: 439.0,
        high: 452.65,
        low: 439.0,
        close: 445.1,
        volume: 17176904
      },
      {
        time: new Date(2015, 3, 27),
        open: 443.86,
        high: 446.99,
        low: 437.41,
        close: 438.56,
        volume: 5430949
      },
      {
        time: new Date(2015, 3, 28),
        open: 438.51,
        high: 439.0,
        low: 428.04,
        close: 429.31,
        volume: 4140483
      },
      {
        time: new Date(2015, 3, 29),
        open: 426.75,
        high: 434.24,
        low: 426.03,
        close: 429.37,
        volume: 3621688
      },
      {
        time: new Date(2015, 3, 30),
        open: 427.11,
        high: 431.75,
        low: 419.24,
        close: 421.78,
        volume: 3647877
      },
      {
        time: new Date(2015, 4, 1),
        open: 423.82,
        high: 425.64,
        low: 416.0,
        close: 422.87,
        volume: 3565824
      },
      {
        time: new Date(2015, 4, 4),
        open: 424.8,
        high: 429.77,
        low: 422.42,
        close: 423.04,
        volume: 2270448
      },
      {
        time: new Date(2015, 4, 5),
        open: 422.85,
        high: 427.51,
        low: 421.02,
        close: 421.19,
        volume: 2856386
      },
      {
        time: new Date(2015, 4, 6),
        open: 421.43,
        high: 422.72,
        low: 414.55,
        close: 419.1,
        volume: 2552474
      },
      {
        time: new Date(2015, 4, 7),
        open: 424.15,
        high: 428.5,
        low: 422.85,
        close: 426.88,
        volume: 2766132
      },
      {
        time: new Date(2015, 4, 8),
        open: 430.75,
        high: 435.2,
        low: 430.17,
        close: 433.69,
        volume: 2908838
      },
      {
        time: new Date(2015, 4, 11),
        open: 432.51,
        high: 439.0,
        low: 431.37,
        close: 432.85,
        volume: 2393737
      },
      {
        time: new Date(2015, 4, 12),
        open: 431.08,
        high: 433.25,
        low: 426.71,
        close: 431.02,
        volume: 1947822
      },
      {
        time: new Date(2015, 4, 13),
        open: 429.98,
        high: 433.53,
        low: 425.8,
        close: 426.87,
        volume: 1996328
      },
      {
        time: new Date(2015, 4, 14),
        open: 429.45,
        high: 433.0,
        low: 427.01,
        close: 432.28,
        volume: 1888477
      },
      {
        time: new Date(2015, 4, 15),
        open: 428.0,
        high: 430.4,
        low: 424.3,
        close: 426.0,
        volume: 4240306
      },
      {
        time: new Date(2015, 4, 18),
        open: 426.0,
        high: 427.27,
        low: 421.46,
        close: 425.24,
        volume: 2390229
      },
      {
        time: new Date(2015, 4, 19),
        open: 424.87,
        high: 428.24,
        low: 420.63,
        close: 421.71,
        volume: 2465240
      },
      {
        time: new Date(2015, 4, 20),
        open: 420.6,
        high: 427.1,
        low: 418.36,
        close: 423.86,
        volume: 2196159
      },
      {
        time: new Date(2015, 4, 21),
        open: 428.0,
        high: 436.9,
        low: 428.0,
        close: 431.63,
        volume: 4121401
      },
      {
        time: new Date(2015, 4, 22),
        open: 431.55,
        high: 432.44,
        low: 427.61,
        close: 427.63,
        volume: 2020629
      },
      {
        time: new Date(2015, 4, 26),
        open: 426.2,
        high: 427.0,
        low: 422.0,
        close: 425.47,
        volume: 2244185
      },
      {
        time: new Date(2015, 4, 27),
        open: 427.45,
        high: 431.85,
        low: 425.01,
        close: 431.42,
        volume: 2231088
      },
      {
        time: new Date(2015, 4, 28),
        open: 429.71,
        high: 431.35,
        low: 425.47,
        close: 426.57,
        volume: 1912436
      },
      {
        time: new Date(2015, 4, 29),
        open: 427.23,
        high: 432.5,
        low: 427.23,
        close: 429.23,
        volume: 3016060
      },
      {
        time: new Date(2015, 5, 1),
        open: 430.4,
        high: 433.16,
        low: 426.2,
        close: 430.92,
        volume: 2253264
      },
      {
        time: new Date(2015, 5, 2),
        open: 430.07,
        high: 433.23,
        low: 426.25,
        close: 430.99,
        volume: 1669845
      },
      {
        time: new Date(2015, 5, 3),
        open: 434.4,
        high: 438.39,
        low: 432.75,
        close: 436.59,
        volume: 2727914
      },
      {
        time: new Date(2015, 5, 4),
        open: 434.4,
        high: 436.76,
        low: 429.26,
        close: 430.78,
        volume: 2510761
      },
      {
        time: new Date(2015, 5, 5),
        open: 429.66,
        high: 430.8,
        low: 426.5,
        close: 426.95,
        volume: 1907855
      },
      {
        time: new Date(2015, 5, 8),
        open: 425.62,
        high: 426.8,
        low: 421.42,
        close: 423.5,
        volume: 2172525
      },
      {
        time: new Date(2015, 5, 9),
        open: 422.96,
        high: 427.49,
        low: 419.14,
        close: 425.48,
        volume: 2288663
      },
      {
        time: new Date(2015, 5, 10),
        open: 426.46,
        high: 432.2,
        low: 425.66,
        close: 430.77,
        volume: 2172333
      },
      {
        time: new Date(2015, 5, 11),
        open: 432.29,
        high: 438.89,
        low: 431.47,
        close: 432.97,
        volume: 2922459
      },
      {
        time: new Date(2015, 5, 12),
        open: 431.25,
        high: 432.36,
        low: 428.26,
        close: 429.92,
        volume: 2054385
      },
      {
        time: new Date(2015, 5, 15),
        open: 427.66,
        high: 428.05,
        low: 422.64,
        close: 423.67,
        volume: 2050987
      },
      {
        time: new Date(2015, 5, 16),
        open: 424.15,
        high: 427.97,
        low: 422.67,
        close: 427.26,
        volume: 2297469
      },
      {
        time: new Date(2015, 5, 17),
        open: 428.36,
        high: 431.35,
        low: 424.75,
        close: 427.81,
        volume: 2185869
      },
      {
        time: new Date(2015, 5, 18),
        open: 430.3,
        high: 439.73,
        low: 429.4,
        close: 439.39,
        volume: 3378360
      },
      {
        time: new Date(2015, 5, 19),
        open: 440.26,
        high: 444.99,
        low: 433.24,
        close: 434.92,
        volume: 4495087
      },
      {
        time: new Date(2015, 5, 22),
        open: 437.0,
        high: 439.24,
        low: 434.18,
        close: 436.29,
        volume: 1823572
      },
      {
        time: new Date(2015, 5, 23),
        open: 435.59,
        high: 447.04,
        low: 433.69,
        close: 445.99,
        volume: 3245049
      },
      {
        time: new Date(2015, 5, 24),
        open: 444.97,
        high: 446.47,
        low: 440.23,
        close: 440.84,
        volume: 2620827
      },
      {
        time: new Date(2015, 5, 25),
        open: 438.07,
        high: 443.47,
        low: 436.39,
        close: 440.1,
        volume: 2237458
      },
      {
        time: new Date(2015, 5, 26),
        open: 441.76,
        high: 443.49,
        low: 435.06,
        close: 438.1,
        volume: 2624479
      },
      {
        time: new Date(2015, 5, 29),
        open: 434.98,
        high: 437.0,
        low: 429.0,
        close: 429.86,
        volume: 2753193
      },
      {
        time: new Date(2015, 5, 30),
        open: 434.2,
        high: 435.57,
        low: 430.46,
        close: 434.09,
        volume: 2596873
      },
      {
        time: new Date(2015, 6, 1),
        open: 439.35,
        high: 440.0,
        low: 435.58,
        close: 437.39,
        volume: 1987076
      },
      {
        time: new Date(2015, 6, 2),
        open: 437.0,
        high: 438.2,
        low: 433.48,
        close: 437.71,
        volume: 1343397
      },
      {
        time: new Date(2015, 6, 6),
        open: 435.23,
        high: 439.73,
        low: 433.52,
        close: 436.04,
        volume: 1903161
      },
      {
        time: new Date(2015, 6, 7),
        open: 435.68,
        high: 437.73,
        low: 425.57,
        close: 436.72,
        volume: 3454248
      },
      {
        time: new Date(2015, 6, 8),
        open: 434.35,
        high: 435.99,
        low: 428.83,
        close: 429.7,
        volume: 2383130
      },
      {
        time: new Date(2015, 6, 9),
        open: 434.9,
        high: 438.72,
        low: 434.15,
        close: 434.39,
        volume: 2271395
      },
      {
        time: new Date(2015, 6, 10),
        open: 440.49,
        high: 444.72,
        low: 439.0,
        close: 443.51,
        volume: 2400981
      },
      {
        time: new Date(2015, 6, 13),
        open: 448.29,
        high: 457.87,
        low: 447.54,
        close: 455.57,
        volume: 3956802
      },
      {
        time: new Date(2015, 6, 14),
        open: 462.32,
        high: 469.6,
        low: 458.16,
        close: 465.57,
        volume: 4736215
      },
      {
        time: new Date(2015, 6, 15),
        open: 463.04,
        high: 464.7,
        low: 460.2,
        close: 461.19,
        volume: 2987399
      },
      {
        time: new Date(2015, 6, 16),
        open: 465.5,
        high: 475.88,
        low: 464.8,
        close: 475.48,
        volume: 4095581
      },
      {
        time: new Date(2015, 6, 17),
        open: 477.7,
        high: 485.42,
        low: 477.25,
        close: 483.01,
        volume: 4932176
      },
      {
        time: new Date(2015, 6, 20),
        open: 492.57,
        high: 493.2,
        low: 485.4,
        close: 488.1,
        volume: 4752491
      },
      {
        time: new Date(2015, 6, 21),
        open: 487.9,
        high: 488.88,
        low: 482.55,
        close: 488.0,
        volume: 3181831
      },
      {
        time: new Date(2015, 6, 22),
        open: 485.99,
        high: 492.5,
        low: 484.9,
        close: 488.27,
        volume: 3114898
      },
      {
        time: new Date(2015, 6, 23),
        open: 491.66,
        high: 491.66,
        low: 475.7,
        close: 482.18,
        volume: 9374431
      },
      {
        time: new Date(2015, 6, 24),
        open: 578.99,
        high: 580.57,
        low: 529.35,
        close: 529.42,
        volume: 21909381
      },
      {
        time: new Date(2015, 6, 27),
        open: 527.75,
        high: 544.95,
        low: 526.6,
        close: 531.41,
        volume: 7490960
      },
      {
        time: new Date(2015, 6, 28),
        open: 536.0,
        high: 536.39,
        low: 523.12,
        close: 526.03,
        volume: 5273092
      },
      {
        time: new Date(2015, 6, 29),
        open: 530.92,
        high: 532.97,
        low: 525.02,
        close: 529.0,
        volume: 3752634
      },
      {
        time: new Date(2015, 6, 30),
        open: 527.65,
        high: 539.2,
        low: 524.29,
        close: 536.76,
        volume: 3743065
      },
      {
        time: new Date(2015, 6, 31),
        open: 539.09,
        high: 542.84,
        low: 534.52,
        close: 536.15,
        volume: 3025598
      },
      {
        time: new Date(2015, 7, 3),
        open: 537.45,
        high: 540.44,
        low: 529.36,
        close: 535.03,
        volume: 3014236
      },
      {
        time: new Date(2015, 7, 4),
        open: 529.69,
        high: 536.95,
        low: 529.16,
        close: 531.9,
        volume: 2934590
      },
      {
        time: new Date(2015, 7, 5),
        open: 538.8,
        high: 539.14,
        low: 534.12,
        close: 537.01,
        volume: 2889350
      },
      {
        time: new Date(2015, 7, 6),
        open: 539.3,
        high: 542.74,
        low: 527.52,
        close: 529.46,
        volume: 3820453
      },
      {
        time: new Date(2015, 7, 7),
        open: 529.16,
        high: 529.46,
        low: 518.21,
        close: 522.62,
        volume: 3969215
      },
      {
        time: new Date(2015, 7, 10),
        open: 528.52,
        high: 532.28,
        low: 523.0,
        close: 524.0,
        volume: 2615926
      },
      {
        time: new Date(2015, 7, 11),
        open: 523.65,
        high: 528.98,
        low: 522.0,
        close: 527.46,
        volume: 2676600
      },
      {
        time: new Date(2015, 7, 12),
        open: 523.75,
        high: 527.5,
        low: 513.06,
        close: 525.91,
        volume: 4014684
      },
      {
        time: new Date(2015, 7, 13),
        open: 527.37,
        high: 534.66,
        low: 525.48,
        close: 529.66,
        volume: 2895238
      },
      {
        time: new Date(2015, 7, 14),
        open: 528.25,
        high: 534.11,
        low: 528.25,
        close: 531.52,
        volume: 1994799
      },
      {
        time: new Date(2015, 7, 17),
        open: 531.29,
        high: 538.74,
        low: 527.12,
        close: 535.22,
        volume: 2581680
      },
      {
        time: new Date(2015, 7, 18),
        open: 535.04,
        high: 539.49,
        low: 533.0,
        close: 535.02,
        volume: 2071342
      },
      {
        time: new Date(2015, 7, 19),
        open: 533.74,
        high: 537.25,
        low: 529.0,
        close: 532.92,
        volume: 2324040
      },
      {
        time: new Date(2015, 7, 20),
        open: 530.39,
        high: 533.25,
        low: 515.77,
        close: 515.78,
        volume: 4374857
      },
      {
        time: new Date(2015, 7, 21),
        open: 507.36,
        high: 512.33,
        low: 494.47,
        close: 494.47,
        volume: 6636405
      },
      {
        time: new Date(2015, 7, 24),
        open: 463.58,
        high: 489.76,
        low: 451.0,
        close: 463.37,
        volume: 10063882
      },
      {
        time: new Date(2015, 7, 25),
        open: 487.49,
        high: 489.44,
        low: 466.25,
        close: 466.37,
        volume: 5643973
      },
      {
        time: new Date(2015, 7, 26),
        open: 484.02,
        high: 503.72,
        low: 478.76,
        close: 500.77,
        volume: 6323581
      },
      {
        time: new Date(2015, 7, 27),
        open: 513.71,
        high: 522.69,
        low: 507.26,
        close: 518.37,
        volume: 6064885
      },
      {
        time: new Date(2015, 7, 28),
        open: 517.5,
        high: 521.5,
        low: 513.04,
        close: 518.01,
        volume: 2733815
      },
      {
        time: new Date(2015, 7, 31),
        open: 516.44,
        high: 519.41,
        low: 509.07,
        close: 512.89,
        volume: 2982995
      },
      {
        time: new Date(2015, 8, 1),
        open: 499.14,
        high: 510.0,
        low: 493.43,
        close: 496.54,
        volume: 3824035
      },
      {
        time: new Date(2015, 8, 2),
        open: 505.09,
        high: 510.86,
        low: 497.72,
        close: 510.55,
        volume: 3689628
      },
      {
        time: new Date(2015, 8, 3),
        open: 514.5,
        high: 515.84,
        low: 502.57,
        close: 504.72,
        volume: 3098941
      },
      {
        time: new Date(2015, 8, 4),
        open: 497.65,
        high: 502.85,
        low: 495.64,
        close: 499.0,
        volume: 2666341
      },
      {
        time: new Date(2015, 8, 8),
        open: 508.69,
        high: 518.35,
        low: 508.51,
        close: 517.54,
        volume: 3777499
      },
      {
        time: new Date(2015, 8, 9),
        open: 524.0,
        high: 529.95,
        low: 515.06,
        close: 516.89,
        volume: 4338714
      },
      {
        time: new Date(2015, 8, 10),
        open: 515.15,
        high: 526.13,
        low: 514.78,
        close: 522.24,
        volume: 2562832
      },
      {
        time: new Date(2015, 8, 11),
        open: 521.07,
        high: 529.44,
        low: 520.6,
        close: 529.44,
        volume: 3218563
      },
      {
        time: new Date(2015, 8, 14),
        open: 529.44,
        high: 532.45,
        low: 518.58,
        close: 521.38,
        volume: 3127107
      },
      {
        time: new Date(2015, 8, 15),
        open: 523.25,
        high: 527.92,
        low: 517.2,
        close: 522.37,
        volume: 2845635
      },
      {
        time: new Date(2015, 8, 16),
        open: 521.98,
        high: 528.3,
        low: 518.52,
        close: 527.39,
        volume: 2248046
      },
      {
        time: new Date(2015, 8, 17),
        open: 526.98,
        high: 546.97,
        low: 526.57,
        close: 538.87,
        volume: 4124870
      },
      {
        time: new Date(2015, 8, 18),
        open: 534.62,
        high: 546.24,
        low: 531.35,
        close: 540.26,
        volume: 6125617
      },
      {
        time: new Date(2015, 8, 21),
        open: 544.33,
        high: 549.78,
        low: 539.59,
        close: 548.39,
        volume: 3265264
      },
      {
        time: new Date(2015, 8, 22),
        open: 539.71,
        high: 543.55,
        low: 532.66,
        close: 538.4,
        volume: 3824240
      },
      {
        time: new Date(2015, 8, 23),
        open: 538.3,
        high: 541.21,
        low: 534.0,
        close: 536.07,
        volume: 2228055
      },
      {
        time: new Date(2015, 8, 24),
        open: 530.55,
        high: 534.56,
        low: 522.87,
        close: 533.75,
        volume: 3481804
      },
      {
        time: new Date(2015, 8, 25),
        open: 542.57,
        high: 542.8,
        low: 521.4,
        close: 524.25,
        volume: 3910275
      },
      {
        time: new Date(2015, 8, 28),
        open: 520.02,
        high: 520.28,
        low: 494.33,
        close: 504.06,
        volume: 5383198
      },
      {
        time: new Date(2015, 8, 29),
        open: 506.0,
        high: 511.48,
        low: 490.5,
        close: 496.07,
        volume: 4443224
      },
      {
        time: new Date(2015, 8, 30),
        open: 505.44,
        high: 512.8,
        low: 501.67,
        close: 511.89,
        volume: 3990425
      },
      {
        time: new Date(2015, 9, 1),
        open: 511.0,
        high: 520.8,
        low: 506.0,
        close: 520.72,
        volume: 3741058
      },
      {
        time: new Date(2015, 9, 2),
        open: 512.99,
        high: 532.6,
        low: 508.1,
        close: 532.54,
        volume: 4576555
      },
      {
        time: new Date(2015, 9, 5),
        open: 536.99,
        high: 545.91,
        low: 536.0,
        close: 543.68,
        volume: 3352397
      },
      {
        time: new Date(2015, 9, 6),
        open: 545.5,
        high: 551.5,
        low: 533.33,
        close: 537.48,
        volume: 4502815
      },
      {
        time: new Date(2015, 9, 7),
        open: 541.79,
        high: 542.0,
        low: 529.0,
        close: 541.94,
        volume: 3788801
      },
      {
        time: new Date(2015, 9, 8),
        open: 536.71,
        high: 539.39,
        low: 519.89,
        close: 533.16,
        volume: 4648953
      },
      {
        time: new Date(2015, 9, 9),
        open: 534.48,
        high: 541.79,
        low: 530.27,
        close: 539.8,
        volume: 3527237
      },
      {
        time: new Date(2015, 9, 12),
        open: 539.96,
        high: 550.82,
        low: 539.8,
        close: 550.19,
        volume: 2761080
      },
      {
        time: new Date(2015, 9, 13),
        open: 546.26,
        high: 553.2,
        low: 543.1,
        close: 548.9,
        volume: 2737089
      },
      {
        time: new Date(2015, 9, 14),
        open: 551.34,
        high: 552.25,
        low: 539.68,
        close: 544.83,
        volume: 3561089
      },
      {
        time: new Date(2015, 9, 15),
        open: 547.75,
        high: 563.0,
        low: 547.0,
        close: 562.44,
        volume: 4914627
      },
      {
        time: new Date(2015, 9, 16),
        open: 565.27,
        high: 570.94,
        low: 560.31,
        close: 570.76,
        volume: 4218101
      },
      {
        time: new Date(2015, 9, 19),
        open: 570.76,
        high: 579.0,
        low: 567.38,
        close: 573.15,
        volume: 4326293
      },
      {
        time: new Date(2015, 9, 20),
        open: 572.0,
        high: 573.0,
        low: 555.28,
        close: 560.88,
        volume: 4327920
      },
      {
        time: new Date(2015, 9, 21),
        open: 563.87,
        high: 565.25,
        low: 552.52,
        close: 555.77,
        volume: 3343551
      },
      {
        time: new Date(2015, 9, 22),
        open: 562.7,
        high: 569.15,
        low: 556.67,
        close: 563.91,
        volume: 7250534
      },
      {
        time: new Date(2015, 9, 23),
        open: 617.68,
        high: 619.45,
        low: 595.36,
        close: 599.03,
        volume: 10671575
      },
      {
        time: new Date(2015, 9, 26),
        open: 602.3,
        high: 609.85,
        low: 596.29,
        close: 608.61,
        volume: 4259250
      },
      {
        time: new Date(2015, 9, 27),
        open: 608.6,
        high: 614.71,
        low: 605.53,
        close: 611.01,
        volume: 3721355
      },
      {
        time: new Date(2015, 9, 28),
        open: 612.3,
        high: 617.23,
        low: 609.5,
        close: 617.1,
        volume: 3911944
      },
      {
        time: new Date(2015, 9, 29),
        open: 617.7,
        high: 627.54,
        low: 615.39,
        close: 626.55,
        volume: 3858609
      },
      {
        time: new Date(2015, 9, 30),
        open: 626.01,
        high: 630.72,
        low: 625.28,
        close: 625.9,
        volume: 3840398
      },
      {
        time: new Date(2015, 10, 2),
        open: 627.13,
        high: 628.63,
        low: 620.41,
        close: 628.35,
        volume: 2792454
      },
      {
        time: new Date(2015, 10, 3),
        open: 629.53,
        high: 629.89,
        low: 622.0,
        close: 625.31,
        volume: 3242365
      },
      {
        time: new Date(2015, 10, 4),
        open: 627.76,
        high: 645.93,
        low: 627.35,
        close: 640.95,
        volume: 4831843
      },
      {
        time: new Date(2015, 10, 5),
        open: 647.1,
        high: 657.0,
        low: 643.09,
        close: 655.65,
        volume: 4707393
      },
      {
        time: new Date(2015, 10, 6),
        open: 655.0,
        high: 662.26,
        low: 652.0,
        close: 659.37,
        volume: 4082524
      },
      {
        time: new Date(2015, 10, 9),
        open: 658.65,
        high: 661.96,
        low: 647.85,
        close: 655.49,
        volume: 4040181
      },
      {
        time: new Date(2015, 10, 10),
        open: 653.0,
        high: 660.0,
        low: 647.26,
        close: 659.68,
        volume: 3464933
      },
      {
        time: new Date(2015, 10, 11),
        open: 663.25,
        high: 675.96,
        low: 663.25,
        close: 673.25,
        volume: 5373772
      },
      {
        time: new Date(2015, 10, 12),
        open: 673.0,
        high: 675.64,
        low: 664.22,
        close: 665.6,
        volume: 4246218
      },
      {
        time: new Date(2015, 10, 13),
        open: 663.57,
        high: 667.0,
        low: 640.45,
        close: 642.35,
        volume: 6213880
      },
      {
        time: new Date(2015, 10, 16),
        open: 640.92,
        high: 649.99,
        low: 622.29,
        close: 647.81,
        volume: 7403464
      },
      {
        time: new Date(2015, 10, 17),
        open: 650.65,
        high: 653.25,
        low: 641.0,
        close: 643.3,
        volume: 4291990
      },
      {
        time: new Date(2015, 10, 18),
        open: 646.51,
        high: 664.88,
        low: 646.37,
        close: 663.54,
        volume: 4315747
      },
      {
        time: new Date(2015, 10, 19),
        open: 664.99,
        high: 672.86,
        low: 659.0,
        close: 661.27,
        volume: 4674078
      },
      {
        time: new Date(2015, 10, 20),
        open: 663.95,
        high: 668.87,
        low: 657.57,
        close: 668.45,
        volume: 3860188
      },
      {
        time: new Date(2015, 10, 23),
        open: 671.5,
        high: 682.77,
        low: 670.12,
        close: 678.99,
        volume: 4367129
      },
      {
        time: new Date(2015, 10, 24),
        open: 674.14,
        high: 675.8,
        low: 661.21,
        close: 671.15,
        volume: 4533750
      },
      {
        time: new Date(2015, 10, 25),
        open: 675.0,
        high: 679.7,
        low: 671.24,
        close: 675.34,
        volume: 2697889
      },
      {
        time: new Date(2015, 10, 27),
        open: 680.8,
        high: 680.99,
        low: 672.1,
        close: 673.26,
        volume: 1966551
      },
      {
        time: new Date(2015, 10, 30),
        open: 675.9,
        high: 681.29,
        low: 664.6,
        close: 664.8,
        volume: 5474105
      },
      {
        time: new Date(2015, 11, 1),
        open: 673.75,
        high: 681.0,
        low: 667.86,
        close: 679.06,
        volume: 4739462
      },
      {
        time: new Date(2015, 11, 2),
        open: 681.0,
        high: 684.82,
        low: 674.25,
        close: 676.01,
        volume: 4259104
      },
      {
        time: new Date(2015, 11, 3),
        open: 679.44,
        high: 682.79,
        low: 661.48,
        close: 666.25,
        volume: 5064736
      },
      {
        time: new Date(2015, 11, 4),
        open: 666.0,
        high: 674.78,
        low: 661.4,
        close: 672.64,
        volume: 4534796
      },
      {
        time: new Date(2015, 11, 7),
        open: 674.74,
        high: 675.46,
        low: 660.5,
        close: 669.83,
        volume: 3732814
      },
      {
        time: new Date(2015, 11, 8),
        open: 663.13,
        high: 679.99,
        low: 659.79,
        close: 677.33,
        volume: 3651908
      },
      {
        time: new Date(2015, 11, 9),
        open: 678.0,
        high: 679.0,
        low: 655.68,
        close: 664.79,
        volume: 5158172
      },
      {
        time: new Date(2015, 11, 10),
        open: 665.59,
        high: 668.53,
        low: 659.56,
        close: 662.32,
        volume: 3455472
      },
      {
        time: new Date(2015, 11, 11),
        open: 651.23,
        high: 657.88,
        low: 639.62,
        close: 640.15,
        volume: 5474420
      },
      {
        time: new Date(2015, 11, 14),
        open: 641.75,
        high: 658.58,
        low: 635.27,
        close: 657.91,
        volume: 4329653
      },
      {
        time: new Date(2015, 11, 15),
        open: 665.03,
        high: 671.5,
        low: 657.35,
        close: 658.64,
        volume: 4753415
      },
      {
        time: new Date(2015, 11, 16),
        open: 663.56,
        high: 677.35,
        low: 659.32,
        close: 675.77,
        volume: 3964470
      },
      {
        time: new Date(2015, 11, 17),
        open: 680.0,
        high: 682.5,
        low: 670.65,
        close: 670.65,
        volume: 3681645
      },
      {
        time: new Date(2015, 11, 18),
        open: 668.65,
        high: 676.84,
        low: 664.13,
        close: 664.14,
        volume: 6841304
      },
      {
        time: new Date(2015, 11, 21),
        open: 668.5,
        high: 669.9,
        low: 658.93,
        close: 664.51,
        volume: 3250900
      },
      {
        time: new Date(2015, 11, 22),
        open: 666.83,
        high: 668.49,
        low: 659.26,
        close: 663.15,
        volume: 2667795
      },
      {
        time: new Date(2015, 11, 23),
        open: 666.5,
        high: 666.6,
        low: 656.63,
        close: 663.7,
        volume: 2722922
      },
      {
        time: new Date(2015, 11, 24),
        open: 663.35,
        high: 664.68,
        low: 660.6,
        close: 662.79,
        volume: 1092970
      },
      {
        time: new Date(2015, 11, 28),
        open: 665.56,
        high: 675.5,
        low: 665.5,
        close: 675.2,
        volume: 3783555
      },
      {
        time: new Date(2015, 11, 29),
        open: 677.98,
        high: 696.44,
        low: 677.89,
        close: 693.97,
        volume: 5734996
      },
      {
        time: new Date(2015, 11, 30),
        open: 691.89,
        high: 695.49,
        low: 686.38,
        close: 689.07,
        volume: 3519003
      },
      {
        time: new Date(2015, 11, 31),
        open: 686.08,
        high: 687.75,
        low: 675.89,
        close: 675.89,
        volume: 3749560
      },
      {
        time: new Date(2016, 0, 4),
        open: 656.29,
        high: 657.72,
        low: 627.51,
        close: 636.99,
        volume: 9280761
      },
      {
        time: new Date(2016, 0, 5),
        open: 646.86,
        high: 646.91,
        low: 627.65,
        close: 633.79,
        volume: 5822603
      },
      {
        time: new Date(2016, 0, 6),
        open: 622.0,
        high: 639.79,
        low: 620.31,
        close: 632.65,
        volume: 5329197
      },
      {
        time: new Date(2016, 0, 7),
        open: 621.8,
        high: 630.0,
        low: 605.21,
        close: 607.94,
        volume: 7074915
      },
      {
        time: new Date(2016, 0, 8),
        open: 619.66,
        high: 624.14,
        low: 606.0,
        close: 607.05,
        volume: 5512915
      },
      {
        time: new Date(2016, 0, 11),
        open: 612.48,
        high: 619.85,
        low: 598.57,
        close: 617.74,
        volume: 4891551
      },
      {
        time: new Date(2016, 0, 12),
        open: 625.25,
        high: 625.99,
        low: 612.24,
        close: 617.89,
        volume: 4724100
      },
      {
        time: new Date(2016, 0, 13),
        open: 620.88,
        high: 620.88,
        low: 579.16,
        close: 581.81,
        volume: 7599968
      },
      {
        time: new Date(2016, 0, 14),
        open: 580.25,
        high: 602.25,
        low: 569.88,
        close: 593.0,
        volume: 7203038
      },
      {
        time: new Date(2016, 0, 15),
        open: 572.24,
        high: 584.62,
        low: 565.3,
        close: 570.18,
        volume: 7754464
      },
      {
        time: new Date(2016, 0, 19),
        open: 577.09,
        high: 584.0,
        low: 566.45,
        close: 574.48,
        volume: 4782763
      },
      {
        time: new Date(2016, 0, 20),
        open: 564.36,
        high: 578.45,
        low: 547.18,
        close: 571.77,
        volume: 7944703
      },
      {
        time: new Date(2016, 0, 21),
        open: 573.58,
        high: 588.81,
        low: 568.22,
        close: 575.02,
        volume: 4932633
      },
      {
        time: new Date(2016, 0, 22),
        open: 588.73,
        high: 600.1,
        low: 584.11,
        close: 596.38,
        volume: 5101123
      },
      {
        time: new Date(2016, 0, 25),
        open: 597.99,
        high: 608.5,
        low: 594.56,
        close: 596.53,
        volume: 4376653
      },
      {
        time: new Date(2016, 0, 26),
        open: 603.45,
        high: 604.5,
        low: 590.38,
        close: 601.25,
        volume: 3743213
      },
      {
        time: new Date(2016, 0, 27),
        open: 601.99,
        high: 603.39,
        low: 578.78,
        close: 583.35,
        volume: 5029472
      },
      {
        time: new Date(2016, 0, 28),
        open: 608.37,
        high: 638.06,
        low: 597.55,
        close: 635.35,
        volume: 12615917
      },
      {
        time: new Date(2016, 0, 29),
        open: 571.98,
        high: 593.0,
        low: 570.0,
        close: 587.0,
        volume: 14622317
      },
      {
        time: new Date(2016, 1, 1),
        open: 578.15,
        high: 581.8,
        low: 570.31,
        close: 574.81,
        volume: 6313793
      },
      {
        time: new Date(2016, 1, 2),
        open: 570.0,
        high: 571.56,
        low: 550.09,
        close: 552.1,
        volume: 6281425
      },
      {
        time: new Date(2016, 1, 3),
        open: 553.5,
        high: 556.0,
        low: 521.9,
        close: 531.07,
        volume: 10037222
      },
      {
        time: new Date(2016, 1, 4),
        open: 525.0,
        high: 538.99,
        low: 519.22,
        close: 536.26,
        volume: 6176558
      },
      {
        time: new Date(2016, 1, 5),
        open: 529.28,
        high: 529.45,
        low: 499.19,
        close: 502.13,
        volume: 9639606
      },
      {
        time: new Date(2016, 1, 8),
        open: 486.47,
        high: 493.5,
        low: 475.21,
        close: 488.1,
        volume: 9808766
      },
      {
        time: new Date(2016, 1, 9),
        open: 478.01,
        high: 498.38,
        low: 474.0,
        close: 482.07,
        volume: 7045885
      },
      {
        time: new Date(2016, 1, 10),
        open: 491.76,
        high: 504.66,
        low: 486.0,
        close: 490.48,
        volume: 6746103
      },
      {
        time: new Date(2016, 1, 11),
        open: 491.17,
        high: 509.3,
        low: 484.0,
        close: 503.82,
        volume: 7372686
      },
      {
        time: new Date(2016, 1, 12),
        open: 510.7,
        high: 516.75,
        low: 501.49,
        close: 507.08,
        volume: 5357247
      },
      {
        time: new Date(2016, 1, 16),
        open: 519.48,
        high: 524.45,
        low: 511.66,
        close: 521.1,
        volume: 5080654
      },
      {
        time: new Date(2016, 1, 17),
        open: 528.74,
        high: 537.48,
        low: 519.39,
        close: 534.1,
        volume: 4777467
      },
      {
        time: new Date(2016, 1, 18),
        open: 541.19,
        high: 541.2,
        low: 523.73,
        close: 525.0,
        volume: 4704237
      },
      {
        time: new Date(2016, 1, 19),
        open: 520.71,
        high: 535.95,
        low: 515.35,
        close: 534.9,
        volume: 4941120
      },
      {
        time: new Date(2016, 1, 22),
        open: 542.2,
        high: 560.65,
        low: 541.08,
        close: 559.5,
        volume: 5541066
      },
      {
        time: new Date(2016, 1, 23),
        open: 555.55,
        high: 556.91,
        low: 545.33,
        close: 552.94,
        volume: 4035929
      },
      {
        time: new Date(2016, 1, 24),
        open: 545.75,
        high: 554.27,
        low: 533.15,
        close: 554.04,
        volume: 6207285
      },
      {
        time: new Date(2016, 1, 25),
        open: 555.52,
        high: 559.39,
        low: 545.29,
        close: 555.15,
        volume: 4510534
      },
      {
        time: new Date(2016, 1, 26),
        open: 560.12,
        high: 562.5,
        low: 553.17,
        close: 555.23,
        volume: 4858230
      },
      {
        time: new Date(2016, 1, 29),
        open: 554.0,
        high: 564.81,
        low: 552.51,
        close: 552.52,
        volume: 4013368
      },
      {
        time: new Date(2016, 2, 1),
        open: 556.29,
        high: 579.25,
        low: 556.0,
        close: 579.04,
        volume: 5014414
      },
      {
        time: new Date(2016, 2, 2),
        open: 581.75,
        high: 585.0,
        low: 573.7,
        close: 580.21,
        volume: 4576922
      },
      {
        time: new Date(2016, 2, 3),
        open: 577.96,
        high: 579.87,
        low: 573.11,
        close: 577.49,
        volume: 2736673
      },
      {
        time: new Date(2016, 2, 4),
        open: 581.07,
        high: 581.4,
        low: 571.06,
        close: 575.14,
        volume: 3405070
      },
      {
        time: new Date(2016, 2, 7),
        open: 573.54,
        high: 573.63,
        low: 555.55,
        close: 562.8,
        volume: 4926936
      },
      {
        time: new Date(2016, 2, 8),
        open: 557.87,
        high: 571.35,
        low: 554.74,
        close: 560.26,
        volume: 4709432
      },
      {
        time: new Date(2016, 2, 9),
        open: 559.56,
        high: 560.35,
        low: 550.12,
        close: 559.47,
        volume: 4373282
      },
      {
        time: new Date(2016, 2, 10),
        open: 566.74,
        high: 567.0,
        low: 547.9,
        close: 558.93,
        volume: 3914343
      },
      {
        time: new Date(2016, 2, 11),
        open: 566.95,
        high: 570.06,
        low: 562.73,
        close: 569.61,
        volume: 3755372
      },
      {
        time: new Date(2016, 2, 14),
        open: 567.0,
        high: 576.89,
        low: 563.05,
        close: 573.37,
        volume: 3451873
      },
      {
        time: new Date(2016, 2, 15),
        open: 571.0,
        high: 581.52,
        low: 567.0,
        close: 577.02,
        volume: 3876821
      },
      {
        time: new Date(2016, 2, 16),
        open: 576.64,
        high: 581.32,
        low: 571.14,
        close: 574.27,
        volume: 3474570
      },
      {
        time: new Date(2016, 2, 17),
        open: 569.51,
        high: 571.4,
        low: 555.01,
        close: 559.44,
        volume: 5918200
      },
      {
        time: new Date(2016, 2, 18),
        open: 560.94,
        high: 562.33,
        low: 546.09,
        close: 552.08,
        volume: 7263345
      },
      {
        time: new Date(2016, 2, 21),
        open: 548.91,
        high: 555.24,
        low: 538.58,
        close: 553.98,
        volume: 5146137
      },
      {
        time: new Date(2016, 2, 22),
        open: 545.11,
        high: 562.76,
        low: 545.05,
        close: 560.48,
        volume: 3990902
      },
      {
        time: new Date(2016, 2, 23),
        open: 561.0,
        high: 572.48,
        low: 558.1,
        close: 569.63,
        volume: 3966131
      },
      {
        time: new Date(2016, 2, 24),
        open: 567.11,
        high: 583.55,
        low: 567.08,
        close: 582.95,
        volume: 5141569
      },
      {
        time: new Date(2016, 2, 28),
        open: 584.4,
        high: 584.75,
        low: 575.56,
        close: 579.87,
        volume: 3118032
      },
      {
        time: new Date(2016, 2, 29),
        open: 580.15,
        high: 595.85,
        low: 576.5,
        close: 593.86,
        volume: 4167059
      },
      {
        time: new Date(2016, 2, 30),
        open: 596.71,
        high: 603.24,
        low: 595.0,
        close: 598.69,
        volume: 3887968
      },
      {
        time: new Date(2016, 2, 31),
        open: 599.28,
        high: 600.75,
        low: 592.21,
        close: 593.64,
        volume: 2673617
      },
      {
        time: new Date(2016, 3, 1),
        open: 590.49,
        high: 599.03,
        low: 588.3,
        close: 598.5,
        volume: 2912350
      },
      {
        time: new Date(2016, 3, 4),
        open: 599.0,
        high: 599.5,
        low: 590.55,
        close: 593.19,
        volume: 2466710
      },
      {
        time: new Date(2016, 3, 5),
        open: 590.77,
        high: 593.47,
        low: 585.25,
        close: 586.14,
        volume: 2277169
      },
      {
        time: new Date(2016, 3, 6),
        open: 587.52,
        high: 602.39,
        low: 587.5,
        close: 602.08,
        volume: 2833480
      },
      {
        time: new Date(2016, 3, 7),
        open: 598.76,
        high: 599.6,
        low: 589.08,
        close: 591.43,
        volume: 3153717
      },
      {
        time: new Date(2016, 3, 8),
        open: 594.32,
        high: 597.86,
        low: 589.0,
        close: 594.6,
        volume: 2589156
      },
      {
        time: new Date(2016, 3, 11),
        open: 596.14,
        high: 604.0,
        low: 594.91,
        close: 595.93,
        volume: 2696498
      },
      {
        time: new Date(2016, 3, 12),
        open: 598.4,
        high: 604.06,
        low: 592.31,
        close: 603.17,
        volume: 2636315
      },
      {
        time: new Date(2016, 3, 13),
        open: 607.68,
        high: 616.81,
        low: 605.29,
        close: 614.82,
        volume: 4209763
      },
      {
        time: new Date(2016, 3, 14),
        open: 615.07,
        high: 624.38,
        low: 615.07,
        close: 620.75,
        volume: 3474327
      },
      {
        time: new Date(2016, 3, 15),
        open: 621.92,
        high: 626.77,
        low: 618.11,
        close: 625.89,
        volume: 2880881
      },
      {
        time: new Date(2016, 3, 18),
        open: 625.35,
        high: 637.64,
        low: 624.96,
        close: 635.35,
        volume: 4336419
      },
      {
        time: new Date(2016, 3, 19),
        open: 637.14,
        high: 638.01,
        low: 620.8,
        close: 627.9,
        volume: 4048806
      },
      {
        time: new Date(2016, 3, 20),
        open: 630.0,
        high: 636.55,
        low: 623.0,
        close: 632.99,
        volume: 2601549
      },
      {
        time: new Date(2016, 3, 21),
        open: 631.0,
        high: 637.82,
        low: 628.5,
        close: 631.0,
        volume: 2550919
      },
      {
        time: new Date(2016, 3, 22),
        open: 624.47,
        high: 628.25,
        low: 611.56,
        close: 620.5,
        volume: 5069891
      },
      {
        time: new Date(2016, 3, 25),
        open: 616.61,
        high: 626.98,
        low: 616.25,
        close: 626.2,
        volume: 2666702
      },
      {
        time: new Date(2016, 3, 26),
        open: 626.17,
        high: 626.75,
        low: 614.88,
        close: 616.88,
        volume: 2492620
      },
      {
        time: new Date(2016, 3, 27),
        open: 611.8,
        high: 615.95,
        low: 601.28,
        close: 606.57,
        volume: 4020813
      },
      {
        time: new Date(2016, 3, 28),
        open: 615.54,
        high: 626.8,
        low: 599.2,
        close: 602.0,
        volume: 7142090
      },
      {
        time: new Date(2016, 3, 29),
        open: 666.0,
        high: 669.98,
        low: 654.0,
        close: 659.59,
        volume: 10291785
      },
      {
        time: new Date(2016, 4, 2),
        open: 663.92,
        high: 685.5,
        low: 662.03,
        close: 683.85,
        volume: 6560872
      },
      {
        time: new Date(2016, 4, 3),
        open: 677.36,
        high: 680.3,
        low: 670.43,
        close: 671.32,
        volume: 4902099
      },
      {
        time: new Date(2016, 4, 4),
        open: 662.59,
        high: 674.0,
        low: 662.14,
        close: 670.9,
        volume: 4574490
      },
      {
        time: new Date(2016, 4, 5),
        open: 673.31,
        high: 676.49,
        low: 656.0,
        close: 659.09,
        volume: 4875480
      },
      {
        time: new Date(2016, 4, 6),
        open: 656.05,
        high: 676.95,
        low: 656.01,
        close: 673.95,
        volume: 4347214
      },
      {
        time: new Date(2016, 4, 9),
        open: 673.95,
        high: 686.98,
        low: 671.41,
        close: 679.75,
        volume: 3972272
      },
      {
        time: new Date(2016, 4, 10),
        open: 694.0,
        high: 704.55,
        low: 693.5,
        close: 703.07,
        volume: 6087032
      },
      {
        time: new Date(2016, 4, 11),
        open: 705.79,
        high: 719.0,
        low: 701.65,
        close: 713.23,
        volume: 7315995
      },
      {
        time: new Date(2016, 4, 12),
        open: 717.38,
        high: 722.45,
        low: 711.51,
        close: 717.93,
        volume: 5034666
      },
      {
        time: new Date(2016, 4, 13),
        open: 714.64,
        high: 719.25,
        low: 706.51,
        close: 709.92,
        volume: 4746626
      },
      {
        time: new Date(2016, 4, 16),
        open: 710.13,
        high: 713.25,
        low: 700.28,
        close: 710.66,
        volume: 5425097
      },
      {
        time: new Date(2016, 4, 17),
        open: 709.9,
        high: 714.47,
        low: 693.91,
        close: 695.27,
        volume: 5093930
      },
      {
        time: new Date(2016, 4, 18),
        open: 689.56,
        high: 702.54,
        low: 688.76,
        close: 697.45,
        volume: 4272357
      },
      {
        time: new Date(2016, 4, 19),
        open: 691.88,
        high: 699.4,
        low: 689.56,
        close: 698.52,
        volume: 3014968
      },
      {
        time: new Date(2016, 4, 20),
        open: 701.05,
        high: 707.24,
        low: 700.0,
        close: 702.8,
        volume: 2867442
      },
      {
        time: new Date(2016, 4, 23),
        open: 704.25,
        high: 706.0,
        low: 696.42,
        close: 696.75,
        volume: 2579171
      },
      {
        time: new Date(2016, 4, 24),
        open: 698.01,
        high: 707.5,
        low: 698.0,
        close: 704.2,
        volume: 2851442
      },
      {
        time: new Date(2016, 4, 25),
        open: 708.0,
        high: 710.86,
        low: 705.52,
        close: 708.35,
        volume: 3267686
      },
      {
        time: new Date(2016, 4, 26),
        open: 708.33,
        high: 715.0,
        low: 707.29,
        close: 714.91,
        volume: 2436846
      },
      {
        time: new Date(2016, 4, 27),
        open: 715.0,
        high: 716.6,
        low: 711.1,
        close: 712.24,
        volume: 2246353
      },
      {
        time: new Date(2016, 4, 31),
        open: 712.33,
        high: 724.23,
        low: 711.32,
        close: 722.79,
        volume: 3618323
      },
      {
        time: new Date(2016, 5, 1),
        open: 720.9,
        high: 726.43,
        low: 718.22,
        close: 719.44,
        volume: 3263107
      },
      {
        time: new Date(2016, 5, 2),
        open: 720.97,
        high: 728.28,
        low: 715.5,
        close: 728.24,
        volume: 3026583
      },
      {
        time: new Date(2016, 5, 3),
        open: 726.74,
        high: 727.0,
        low: 718.43,
        close: 725.54,
        volume: 3367306
      },
      {
        time: new Date(2016, 5, 6),
        open: 726.5,
        high: 731.5,
        low: 724.42,
        close: 726.73,
        volume: 2704806
      },
      {
        time: new Date(2016, 5, 7),
        open: 729.89,
        high: 730.0,
        low: 720.55,
        close: 723.74,
        volume: 2732463
      },
      {
        time: new Date(2016, 5, 8),
        open: 726.4,
        high: 729.42,
        low: 721.6,
        close: 726.64,
        volume: 2223366
      },
      {
        time: new Date(2016, 5, 9),
        open: 723.1,
        high: 728.91,
        low: 722.3,
        close: 727.65,
        volume: 2170318
      },
      {
        time: new Date(2016, 5, 10),
        open: 722.35,
        high: 724.98,
        low: 714.21,
        close: 717.91,
        volume: 3425718
      },
      {
        time: new Date(2016, 5, 13),
        open: 714.01,
        high: 721.99,
        low: 711.16,
        close: 715.24,
        volume: 3352201
      },
      {
        time: new Date(2016, 5, 14),
        open: 712.33,
        high: 720.8,
        low: 712.27,
        close: 719.3,
        volume: 2506922
      },
      {
        time: new Date(2016, 5, 15),
        open: 722.0,
        high: 722.56,
        low: 713.35,
        close: 714.26,
        volume: 2709447
      },
      {
        time: new Date(2016, 5, 16),
        open: 712.05,
        high: 718.0,
        low: 705.3,
        close: 717.51,
        volume: 3097961
      },
      {
        time: new Date(2016, 5, 17),
        open: 718.19,
        high: 718.2,
        low: 699.18,
        close: 706.39,
        volume: 5897788
      },
      {
        time: new Date(2016, 5, 20),
        open: 713.5,
        high: 721.31,
        low: 710.81,
        close: 714.01,
        volume: 3677162
      },
      {
        time: new Date(2016, 5, 21),
        open: 715.72,
        high: 718.4,
        low: 712.72,
        close: 715.82,
        volume: 2137534
      },
      {
        time: new Date(2016, 5, 22),
        open: 716.58,
        high: 717.0,
        low: 707.56,
        close: 710.6,
        volume: 2260454
      },
      {
        time: new Date(2016, 5, 23),
        open: 715.5,
        high: 722.12,
        low: 712.5,
        close: 722.08,
        volume: 2824974
      },
      {
        time: new Date(2016, 5, 24),
        open: 693.0,
        high: 712.53,
        low: 692.2,
        close: 698.96,
        volume: 7632511
      },
      {
        time: new Date(2016, 5, 27),
        open: 692.01,
        high: 696.82,
        low: 682.12,
        close: 691.36,
        volume: 5584037
      },
      {
        time: new Date(2016, 5, 28),
        open: 700.0,
        high: 708.0,
        low: 698.17,
        close: 707.95,
        volume: 4036957
      },
      {
        time: new Date(2016, 5, 29),
        open: 715.75,
        high: 719.5,
        low: 713.54,
        close: 715.6,
        volume: 3070052
      },
      {
        time: new Date(2016, 5, 30),
        open: 717.2,
        high: 719.37,
        low: 712.54,
        close: 715.62,
        volume: 2855142
      },
      {
        time: new Date(2016, 6, 1),
        open: 717.32,
        high: 728.0,
        low: 716.54,
        close: 725.68,
        volume: 2920423
      },
      {
        time: new Date(2016, 6, 5),
        open: 722.8,
        high: 728.11,
        low: 719.61,
        close: 728.1,
        volume: 2431431
      },
      {
        time: new Date(2016, 6, 6),
        open: 725.71,
        high: 737.77,
        low: 722.58,
        close: 737.61,
        volume: 3938249
      },
      {
        time: new Date(2016, 6, 7),
        open: 739.33,
        high: 739.55,
        low: 731.63,
        close: 736.57,
        volume: 2945783
      },
      {
        time: new Date(2016, 6, 8),
        open: 740.14,
        high: 746.1,
        low: 738.0,
        close: 745.81,
        volume: 3429217
      },
      {
        time: new Date(2016, 6, 11),
        open: 750.0,
        high: 755.9,
        low: 747.0,
        close: 753.78,
        volume: 3195272
      },
      {
        time: new Date(2016, 6, 12),
        open: 756.86,
        high: 757.34,
        low: 740.33,
        close: 748.21,
        volume: 5623657
      },
      {
        time: new Date(2016, 6, 13),
        open: 746.76,
        high: 756.87,
        low: 741.25,
        close: 742.63,
        volume: 4142265
      },
      {
        time: new Date(2016, 6, 14),
        open: 748.86,
        high: 749.04,
        low: 739.02,
        close: 741.2,
        volume: 2390472
      },
      {
        time: new Date(2016, 6, 15),
        open: 746.55,
        high: 746.55,
        low: 734.05,
        close: 735.44,
        volume: 3121385
      },
      {
        time: new Date(2016, 6, 18),
        open: 735.49,
        high: 741.6,
        low: 728.72,
        close: 736.07,
        volume: 2954914
      },
      {
        time: new Date(2016, 6, 19),
        open: 732.5,
        high: 743.33,
        low: 732.31,
        close: 739.95,
        volume: 2216820
      },
      {
        time: new Date(2016, 6, 20),
        open: 744.0,
        high: 746.25,
        low: 740.7,
        close: 745.72,
        volume: 2214023
      },
      {
        time: new Date(2016, 6, 21),
        open: 747.5,
        high: 749.36,
        low: 742.79,
        close: 744.43,
        volume: 2317072
      },
      {
        time: new Date(2016, 6, 22),
        open: 747.79,
        high: 751.28,
        low: 743.53,
        close: 744.86,
        volume: 2277711
      },
      {
        time: new Date(2016, 6, 25),
        open: 746.55,
        high: 748.5,
        low: 735.35,
        close: 739.61,
        volume: 2679290
      },
      {
        time: new Date(2016, 6, 26),
        open: 742.71,
        high: 743.13,
        low: 732.75,
        close: 735.59,
        volume: 2529692
      },
      {
        time: new Date(2016, 6, 27),
        open: 737.97,
        high: 740.94,
        low: 733.86,
        close: 736.67,
        volume: 2913134
      },
      {
        time: new Date(2016, 6, 28),
        open: 745.98,
        high: 753.36,
        low: 739.7,
        close: 752.61,
        volume: 7617580
      },
      {
        time: new Date(2016, 6, 29),
        open: 765.0,
        high: 766.0,
        low: 755.0,
        close: 758.81,
        volume: 6777050
      },
      {
        time: new Date(2016, 7, 1),
        open: 759.87,
        high: 770.5,
        low: 757.06,
        close: 767.74,
        volume: 3578205
      },
      {
        time: new Date(2016, 7, 2),
        open: 763.81,
        high: 765.01,
        low: 757.02,
        close: 760.58,
        volume: 3603280
      },
      {
        time: new Date(2016, 7, 3),
        open: 757.06,
        high: 758.89,
        low: 752.25,
        close: 754.64,
        volume: 3581525
      },
      {
        time: new Date(2016, 7, 4),
        open: 753.7,
        high: 765.0,
        low: 750.35,
        close: 760.77,
        volume: 3178208
      },
      {
        time: new Date(2016, 7, 5),
        open: 764.81,
        high: 768.47,
        low: 763.09,
        close: 765.98,
        volume: 2704391
      },
      {
        time: new Date(2016, 7, 8),
        open: 766.81,
        high: 767.0,
        low: 761.02,
        close: 766.56,
        volume: 1986272
      },
      {
        time: new Date(2016, 7, 9),
        open: 767.39,
        high: 772.6,
        low: 766.9,
        close: 768.31,
        volume: 1876091
      },
      {
        time: new Date(2016, 7, 10),
        open: 769.8,
        high: 772.1,
        low: 766.19,
        close: 768.56,
        volume: 1604280
      },
      {
        time: new Date(2016, 7, 11),
        open: 769.94,
        high: 773.75,
        low: 769.12,
        close: 771.24,
        volume: 2019740
      },
      {
        time: new Date(2016, 7, 12),
        open: 768.46,
        high: 773.15,
        low: 768.42,
        close: 772.56,
        volume: 1563318
      },
      {
        time: new Date(2016, 7, 15),
        open: 771.9,
        high: 772.04,
        low: 767.71,
        close: 768.49,
        volume: 2118521
      },
      {
        time: new Date(2016, 7, 16),
        open: 768.62,
        high: 768.73,
        low: 763.82,
        close: 764.04,
        volume: 1604561
      },
      {
        time: new Date(2016, 7, 17),
        open: 764.41,
        high: 765.22,
        low: 759.2,
        close: 764.63,
        volume: 1891116
      },
      {
        time: new Date(2016, 7, 18),
        open: 764.0,
        high: 765.17,
        low: 760.6,
        close: 764.46,
        volume: 1458834
      },
      {
        time: new Date(2016, 7, 19),
        open: 761.9,
        high: 762.49,
        low: 756.89,
        close: 757.31,
        volume: 2343237
      },
      {
        time: new Date(2016, 7, 22),
        open: 757.5,
        high: 759.85,
        low: 752.1,
        close: 759.48,
        volume: 1679251
      },
      {
        time: new Date(2016, 7, 23),
        open: 763.31,
        high: 764.7,
        low: 761.0,
        close: 762.45,
        volume: 1524131
      },
      {
        time: new Date(2016, 7, 24),
        open: 763.0,
        high: 763.41,
        low: 755.36,
        close: 757.25,
        volume: 1744107
      },
      {
        time: new Date(2016, 7, 25),
        open: 756.0,
        high: 760.56,
        low: 754.74,
        close: 759.22,
        volume: 1622992
      },
      {
        time: new Date(2016, 7, 26),
        open: 760.05,
        high: 770.0,
        low: 759.8,
        close: 769.0,
        volume: 2776830
      },
      {
        time: new Date(2016, 7, 29),
        open: 768.72,
        high: 774.98,
        low: 768.6,
        close: 771.29,
        volume: 2198560
      },
      {
        time: new Date(2016, 7, 30),
        open: 771.05,
        high: 771.84,
        low: 765.56,
        close: 767.58,
        volume: 1709158
      },
      {
        time: new Date(2016, 7, 31),
        open: 766.6,
        high: 769.64,
        low: 764.0,
        close: 769.16,
        volume: 1633789
      },
      {
        time: new Date(2016, 8, 1),
        open: 770.9,
        high: 772.04,
        low: 766.75,
        close: 770.62,
        volume: 1792271
      },
      {
        time: new Date(2016, 8, 2),
        open: 774.11,
        high: 776.0,
        low: 771.7,
        close: 772.44,
        volume: 2157422
      },
      {
        time: new Date(2016, 8, 6),
        open: 774.04,
        high: 789.48,
        low: 770.22,
        close: 788.87,
        volume: 3719788
      },
      {
        time: new Date(2016, 8, 7),
        open: 789.53,
        high: 790.79,
        low: 784.33,
        close: 784.48,
        volume: 2424622
      },
      {
        time: new Date(2016, 8, 8),
        open: 783.89,
        high: 786.5,
        low: 781.44,
        close: 784.06,
        volume: 2030511
      },
      {
        time: new Date(2016, 8, 9),
        open: 779.36,
        high: 781.0,
        low: 760.11,
        close: 760.14,
        volume: 4257344
      },
      {
        time: new Date(2016, 8, 12),
        open: 757.35,
        high: 772.66,
        low: 756.0,
        close: 771.49,
        volume: 3124704
      },
      {
        time: new Date(2016, 8, 13),
        open: 768.77,
        high: 769.89,
        low: 759.05,
        close: 761.01,
        volume: 3117224
      },
      {
        time: new Date(2016, 8, 14),
        open: 762.2,
        high: 767.5,
        low: 758.85,
        close: 761.09,
        volume: 2531822
      },
      {
        time: new Date(2016, 8, 15),
        open: 762.0,
        high: 770.87,
        low: 757.58,
        close: 769.69,
        volume: 3043534
      },
      {
        time: new Date(2016, 8, 16),
        open: 773.28,
        high: 780.46,
        low: 771.66,
        close: 778.52,
        volume: 5499182
      },
      {
        time: new Date(2016, 8, 19),
        open: 779.97,
        high: 781.94,
        low: 771.0,
        close: 775.1,
        volume: 2297221
      },
      {
        time: new Date(2016, 8, 20),
        open: 776.0,
        high: 781.37,
        low: 776.0,
        close: 780.22,
        volume: 1937164
      },
      {
        time: new Date(2016, 8, 21),
        open: 783.25,
        high: 790.69,
        low: 779.01,
        close: 789.74,
        volume: 2718644
      },
      {
        time: new Date(2016, 8, 22),
        open: 794.27,
        high: 805.89,
        low: 794.27,
        close: 804.7,
        volume: 4078910
      },
      {
        time: new Date(2016, 8, 23),
        open: 803.13,
        high: 807.75,
        low: 802.12,
        close: 805.75,
        volume: 2353511
      },
      {
        time: new Date(2016, 8, 26),
        open: 801.8,
        high: 805.93,
        low: 797.14,
        close: 799.16,
        volume: 2651397
      },
      {
        time: new Date(2016, 8, 27),
        open: 801.85,
        high: 816.64,
        low: 801.11,
        close: 816.11,
        volume: 3819600
      },
      {
        time: new Date(2016, 8, 28),
        open: 818.0,
        high: 830.14,
        low: 817.03,
        close: 828.72,
        volume: 4422078
      },
      {
        time: new Date(2016, 8, 29),
        open: 828.26,
        high: 837.5,
        low: 824.63,
        close: 829.05,
        volume: 4922248
      },
      {
        time: new Date(2016, 8, 30),
        open: 832.61,
        high: 839.95,
        low: 832.4,
        close: 837.31,
        volume: 4430566
      },
      {
        time: new Date(2016, 9, 3),
        open: 836.0,
        high: 839.86,
        low: 831.25,
        close: 836.74,
        volume: 2769448
      },
      {
        time: new Date(2016, 9, 4),
        open: 840.91,
        high: 842.36,
        low: 830.26,
        close: 834.03,
        volume: 2950314
      },
      {
        time: new Date(2016, 9, 5),
        open: 838.0,
        high: 845.67,
        low: 836.12,
        close: 844.36,
        volume: 3469055
      },
      {
        time: new Date(2016, 9, 6),
        open: 843.7,
        high: 847.21,
        low: 840.6,
        close: 841.66,
        volume: 2684013
      },
      {
        time: new Date(2016, 9, 7),
        open: 845.79,
        high: 845.95,
        low: 837.45,
        close: 839.43,
        volume: 2426228
      },
      {
        time: new Date(2016, 9, 10),
        open: 843.25,
        high: 845.2,
        low: 840.27,
        close: 841.71,
        volume: 1827143
      },
      {
        time: new Date(2016, 9, 11),
        open: 841.02,
        high: 841.29,
        low: 828.35,
        close: 831.0,
        volume: 3588180
      },
      {
        time: new Date(2016, 9, 12),
        open: 834.0,
        high: 837.67,
        low: 830.1,
        close: 834.09,
        volume: 2380416
      },
      {
        time: new Date(2016, 9, 13),
        open: 829.0,
        high: 831.8,
        low: 821.21,
        close: 829.28,
        volume: 3091387
      },
      {
        time: new Date(2016, 9, 14),
        open: 835.08,
        high: 835.74,
        low: 822.96,
        close: 822.96,
        volume: 2999814
      },
      {
        time: new Date(2016, 9, 17),
        open: 821.5,
        high: 822.0,
        low: 811.68,
        close: 812.95,
        volume: 3361492
      },
      {
        time: new Date(2016, 9, 18),
        open: 822.11,
        high: 823.26,
        low: 815.02,
        close: 817.65,
        volume: 2512504
      },
      {
        time: new Date(2016, 9, 19),
        open: 820.4,
        high: 820.67,
        low: 815.17,
        close: 817.69,
        volume: 2090706
      },
      {
        time: new Date(2016, 9, 20),
        open: 813.99,
        high: 815.71,
        low: 803.1,
        close: 810.32,
        volume: 3151954
      },
      {
        time: new Date(2016, 9, 21),
        open: 809.36,
        high: 819.42,
        low: 809.0,
        close: 818.99,
        volume: 2793015
      },
      {
        time: new Date(2016, 9, 24),
        open: 824.95,
        high: 838.3,
        low: 822.21,
        close: 838.09,
        volume: 4060899
      },
      {
        time: new Date(2016, 9, 25),
        open: 839.3,
        high: 843.09,
        low: 833.22,
        close: 835.18,
        volume: 3248358
      },
      {
        time: new Date(2016, 9, 26),
        open: 832.76,
        high: 833.44,
        low: 820.0,
        close: 822.59,
        volume: 3998102
      },
      {
        time: new Date(2016, 9, 27),
        open: 831.24,
        high: 831.72,
        low: 815.43,
        close: 818.36,
        volume: 7406385
      },
      {
        time: new Date(2016, 9, 28),
        open: 782.0,
        high: 789.49,
        low: 774.61,
        close: 776.32,
        volume: 10841073
      },
      {
        time: new Date(2016, 9, 31),
        open: 781.03,
        high: 793.7,
        low: 780.11,
        close: 789.82,
        volume: 5413326
      },
      {
        time: new Date(2016, 10, 1),
        open: 799.0,
        high: 800.84,
        low: 776.71,
        close: 785.41,
        volume: 5305428
      },
      {
        time: new Date(2016, 10, 2),
        open: 783.93,
        high: 784.75,
        low: 763.55,
        close: 765.56,
        volume: 5026504
      },
      {
        time: new Date(2016, 10, 3),
        open: 765.05,
        high: 777.0,
        low: 764.0,
        close: 767.03,
        volume: 3872496
      },
      {
        time: new Date(2016, 10, 4),
        open: 762.79,
        high: 766.0,
        low: 753.23,
        close: 755.05,
        volume: 5122103
      },
      {
        time: new Date(2016, 10, 7),
        open: 771.64,
        high: 787.73,
        low: 770.94,
        close: 784.93,
        volume: 5984354
      },
      {
        time: new Date(2016, 10, 8),
        open: 784.97,
        high: 791.74,
        low: 779.1,
        close: 787.75,
        volume: 3412629
      },
      {
        time: new Date(2016, 10, 9),
        open: 764.0,
        high: 777.5,
        low: 760.09,
        close: 771.88,
        volume: 8562892
      },
      {
        time: new Date(2016, 10, 10),
        open: 778.81,
        high: 778.83,
        low: 717.7,
        close: 742.38,
        volume: 12746994
      },
      {
        time: new Date(2016, 10, 11),
        open: 735.73,
        high: 743.26,
        low: 728.9,
        close: 739.01,
        volume: 6622784
      },
      {
        time: new Date(2016, 10, 14),
        open: 745.51,
        high: 746.0,
        low: 710.1,
        close: 719.07,
        volume: 7321344
      },
      {
        time: new Date(2016, 10, 15),
        open: 730.0,
        high: 746.78,
        low: 725.99,
        close: 743.24,
        volume: 6755785
      },
      {
        time: new Date(2016, 10, 16),
        open: 739.88,
        high: 749.87,
        low: 735.61,
        close: 746.49,
        volume: 3648791
      },
      {
        time: new Date(2016, 10, 17),
        open: 749.32,
        high: 757.5,
        low: 748.0,
        close: 756.4,
        volume: 3651345
      },
      {
        time: new Date(2016, 10, 18),
        open: 761.0,
        high: 767.74,
        low: 757.64,
        close: 760.16,
        volume: 4373408
      },
      {
        time: new Date(2016, 10, 21),
        open: 766.0,
        high: 780.35,
        low: 765.11,
        close: 780.0,
        volume: 4614574
      },
      {
        time: new Date(2016, 10, 22),
        open: 788.17,
        high: 792.4,
        low: 781.0,
        close: 785.33,
        volume: 5311320
      },
      {
        time: new Date(2016, 10, 23),
        open: 781.73,
        high: 781.75,
        low: 773.12,
        close: 780.12,
        volume: 3540263
      },
      {
        time: new Date(2016, 10, 25),
        open: 786.5,
        high: 786.75,
        low: 777.9,
        close: 780.37,
        volume: 1837068
      },
      {
        time: new Date(2016, 10, 28),
        open: 776.99,
        high: 777.0,
        low: 764.24,
        close: 766.77,
        volume: 4438828
      },
      {
        time: new Date(2016, 10, 29),
        open: 768.0,
        high: 769.89,
        low: 761.32,
        close: 762.52,
        volume: 3272344
      },
      {
        time: new Date(2016, 10, 30),
        open: 762.0,
        high: 768.09,
        low: 750.25,
        close: 750.57,
        volume: 4625946
      },
      {
        time: new Date(2016, 11, 1),
        open: 752.41,
        high: 753.37,
        low: 738.03,
        close: 743.65,
        volume: 4665993
      },
      {
        time: new Date(2016, 11, 2),
        open: 743.4,
        high: 748.49,
        low: 736.7,
        close: 740.34,
        volume: 3561307
      },
      {
        time: new Date(2016, 11, 5),
        open: 745.0,
        high: 761.49,
        low: 742.0,
        close: 759.36,
        volume: 4314723
      },
      {
        time: new Date(2016, 11, 6),
        open: 763.99,
        high: 768.24,
        low: 757.25,
        close: 764.72,
        volume: 3794746
      },
      {
        time: new Date(2016, 11, 7),
        open: 764.55,
        high: 770.42,
        low: 755.82,
        close: 770.42,
        volume: 3684906
      },
      {
        time: new Date(2016, 11, 8),
        open: 771.87,
        high: 773.79,
        low: 765.19,
        close: 767.33,
        volume: 3189608
      },
      {
        time: new Date(2016, 11, 9),
        open: 770.0,
        high: 770.25,
        low: 765.34,
        close: 768.66,
        volume: 2470923
      },
      {
        time: new Date(2016, 11, 12),
        open: 766.4,
        high: 766.89,
        low: 757.2,
        close: 760.12,
        volume: 2963945
      },
      {
        time: new Date(2016, 11, 13),
        open: 764.96,
        high: 782.46,
        low: 762.0,
        close: 774.34,
        volume: 5285288
      },
      {
        time: new Date(2016, 11, 14),
        open: 778.25,
        high: 780.86,
        low: 762.81,
        close: 768.82,
        volume: 5454836
      },
      {
        time: new Date(2016, 11, 15),
        open: 766.28,
        high: 769.1,
        low: 760.31,
        close: 761.0,
        volume: 3801927
      },
      {
        time: new Date(2016, 11, 16),
        open: 765.0,
        high: 765.13,
        low: 754.0,
        close: 757.77,
        volume: 4848219
      },
      {
        time: new Date(2016, 11, 19),
        open: 758.89,
        high: 770.5,
        low: 756.16,
        close: 766.0,
        volume: 3113240
      },
      {
        time: new Date(2016, 11, 20),
        open: 768.65,
        high: 774.39,
        low: 767.71,
        close: 771.22,
        volume: 2703629
      },
      {
        time: new Date(2016, 11, 21),
        open: 770.0,
        high: 771.22,
        low: 765.7,
        close: 770.6,
        volume: 2044629
      },
      {
        time: new Date(2016, 11, 22),
        open: 768.12,
        high: 771.21,
        low: 763.02,
        close: 766.34,
        volume: 2543551
      },
      {
        time: new Date(2016, 11, 23),
        open: 764.55,
        high: 766.5,
        low: 757.99,
        close: 760.59,
        volume: 1981616
      },
      {
        time: new Date(2016, 11, 27),
        open: 763.4,
        high: 774.65,
        low: 761.2,
        close: 771.4,
        volume: 2638725
      },
      {
        time: new Date(2016, 11, 28),
        open: 776.25,
        high: 780.0,
        low: 770.5,
        close: 772.13,
        volume: 3301025
      },
      {
        time: new Date(2016, 11, 29),
        open: 772.4,
        high: 773.4,
        low: 760.85,
        close: 765.15,
        volume: 3158299
      },
      {
        time: new Date(2016, 11, 30),
        open: 766.47,
        high: 767.4,
        low: 748.28,
        close: 749.87,
        volume: 4139449
      },
      {
        time: new Date(2017, 0, 3),
        open: 757.92,
        high: 758.76,
        low: 747.7,
        close: 753.67,
        volume: 3521066
      },
      {
        time: new Date(2017, 0, 4),
        open: 758.39,
        high: 759.68,
        low: 754.2,
        close: 757.18,
        volume: 2510526
      },
      {
        time: new Date(2017, 0, 5),
        open: 761.55,
        high: 782.4,
        low: 760.26,
        close: 780.45,
        volume: 5830068
      },
      {
        time: new Date(2017, 0, 6),
        open: 782.36,
        high: 799.44,
        low: 778.48,
        close: 795.99,
        volume: 5986234
      },
      {
        time: new Date(2017, 0, 9),
        open: 798.0,
        high: 801.77,
        low: 791.77,
        close: 796.92,
        volume: 3446109
      },
      {
        time: new Date(2017, 0, 10),
        open: 796.6,
        high: 798.0,
        low: 789.54,
        close: 795.9,
        volume: 2558369
      },
      {
        time: new Date(2017, 0, 11),
        open: 793.66,
        high: 799.5,
        low: 789.51,
        close: 799.02,
        volume: 2992791
      },
      {
        time: new Date(2017, 0, 12),
        open: 800.31,
        high: 814.13,
        low: 799.5,
        close: 813.64,
        volume: 4873922
      },
      {
        time: new Date(2017, 0, 13),
        open: 814.32,
        high: 821.65,
        low: 811.4,
        close: 817.14,
        volume: 3791945
      },
      {
        time: new Date(2017, 0, 17),
        open: 815.7,
        high: 816.0,
        low: 803.44,
        close: 809.72,
        volume: 3670529
      },
      {
        time: new Date(2017, 0, 18),
        open: 809.5,
        high: 811.73,
        low: 804.27,
        close: 807.48,
        volume: 2354201
      },
      {
        time: new Date(2017, 0, 19),
        open: 810.0,
        high: 813.51,
        low: 807.32,
        close: 809.04,
        volume: 2540784
      },
      {
        time: new Date(2017, 0, 20),
        open: 815.28,
        high: 816.02,
        low: 806.26,
        close: 808.33,
        volume: 3376196
      },
      {
        time: new Date(2017, 0, 23),
        open: 806.8,
        high: 818.5,
        low: 805.08,
        close: 817.88,
        volume: 2797474
      },
      {
        time: new Date(2017, 0, 24),
        open: 822.0,
        high: 823.99,
        low: 814.5,
        close: 822.44,
        volume: 2971740
      },
      {
        time: new Date(2017, 0, 25),
        open: 825.79,
        high: 837.42,
        low: 825.29,
        close: 836.52,
        volume: 4023078
      },
      {
        time: new Date(2017, 0, 26),
        open: 835.53,
        high: 843.84,
        low: 833.0,
        close: 839.15,
        volume: 3586323
      },
      {
        time: new Date(2017, 0, 27),
        open: 839.0,
        high: 839.7,
        low: 829.44,
        close: 835.77,
        volume: 2998700
      },
      {
        time: new Date(2017, 0, 30),
        open: 833.0,
        high: 833.5,
        low: 816.38,
        close: 830.38,
        volume: 3747336
      },
      {
        time: new Date(2017, 0, 31),
        open: 823.75,
        high: 826.99,
        low: 819.56,
        close: 823.48,
        volume: 3137196
      },
      {
        time: new Date(2017, 1, 1),
        open: 829.21,
        high: 833.78,
        low: 824.94,
        close: 832.35,
        volume: 3850181
      },
      {
        time: new Date(2017, 1, 2),
        open: 836.59,
        high: 842.49,
        low: 828.26,
        close: 839.95,
        volume: 7350492
      },
      {
        time: new Date(2017, 1, 3),
        open: 806.72,
        high: 818.3,
        low: 804.0,
        close: 810.2,
        volume: 10868773
      },
      {
        time: new Date(2017, 1, 6),
        open: 809.8,
        high: 810.72,
        low: 803.0,
        close: 807.64,
        volume: 3897301
      },
      {
        time: new Date(2017, 1, 7),
        open: 809.31,
        high: 816.16,
        low: 807.5,
        close: 812.5,
        volume: 3466091
      },
      {
        time: new Date(2017, 1, 8),
        open: 812.69,
        high: 821.48,
        low: 812.5,
        close: 819.71,
        volume: 2857985
      },
      {
        time: new Date(2017, 1, 9),
        open: 821.6,
        high: 825.0,
        low: 819.71,
        close: 821.36,
        volume: 2484948
      },
      {
        time: new Date(2017, 1, 10),
        open: 823.82,
        high: 828.0,
        low: 822.85,
        close: 827.46,
        volume: 2429609
      },
      {
        time: new Date(2017, 1, 13),
        open: 831.62,
        high: 843.0,
        low: 828.55,
        close: 836.53,
        volume: 4172618
      },
      {
        time: new Date(2017, 1, 14),
        open: 837.0,
        high: 838.31,
        low: 831.45,
        close: 836.39,
        volume: 2792442
      },
      {
        time: new Date(2017, 1, 15),
        open: 834.0,
        high: 842.81,
        low: 832.82,
        close: 842.7,
        volume: 2968853
      },
      {
        time: new Date(2017, 1, 16),
        open: 841.84,
        high: 845.0,
        low: 839.38,
        close: 844.14,
        volume: 2714667
      },
      {
        time: new Date(2017, 1, 17),
        open: 842.0,
        high: 847.27,
        low: 840.73,
        close: 845.07,
        volume: 3112275
      },
      {
        time: new Date(2017, 1, 21),
        open: 848.84,
        high: 857.98,
        low: 847.25,
        close: 856.44,
        volume: 3507742
      },
      {
        time: new Date(2017, 1, 22),
        open: 856.95,
        high: 858.43,
        low: 852.18,
        close: 855.61,
        volume: 2616971
      },
      {
        time: new Date(2017, 1, 23),
        open: 857.57,
        high: 860.86,
        low: 848.0,
        close: 852.19,
        volume: 3461984
      },
      {
        time: new Date(2017, 1, 24),
        open: 844.69,
        high: 845.81,
        low: 837.75,
        close: 845.24,
        volume: 3687963
      },
      {
        time: new Date(2017, 1, 27),
        open: 842.38,
        high: 852.5,
        low: 839.67,
        close: 848.64,
        volume: 2713627
      },
      {
        time: new Date(2017, 1, 28),
        open: 851.45,
        high: 854.09,
        low: 842.05,
        close: 845.04,
        volume: 2793709
      },
      {
        time: new Date(2017, 2, 1),
        open: 853.05,
        high: 854.83,
        low: 849.01,
        close: 853.08,
        volume: 2760083
      },
      {
        time: new Date(2017, 2, 2),
        open: 853.08,
        high: 854.82,
        low: 847.28,
        close: 848.91,
        volume: 2132098
      },
      {
        time: new Date(2017, 2, 3),
        open: 847.2,
        high: 851.98,
        low: 846.27,
        close: 849.88,
        volume: 1951575
      },
      {
        time: new Date(2017, 2, 6),
        open: 845.23,
        high: 848.49,
        low: 841.12,
        close: 846.61,
        volume: 2610370
      },
      {
        time: new Date(2017, 2, 7),
        open: 845.48,
        high: 848.46,
        low: 843.75,
        close: 846.02,
        volume: 2247554
      },
      {
        time: new Date(2017, 2, 8),
        open: 848.0,
        high: 853.07,
        low: 846.79,
        close: 850.5,
        volume: 2288317
      },
      {
        time: new Date(2017, 2, 9),
        open: 851.0,
        high: 856.4,
        low: 850.31,
        close: 853.0,
        volume: 2048187
      },
      {
        time: new Date(2017, 2, 10),
        open: 857.0,
        high: 857.35,
        low: 851.72,
        close: 852.46,
        volume: 2436434
      },
      {
        time: new Date(2017, 2, 13),
        open: 851.77,
        high: 855.69,
        low: 851.71,
        close: 854.59,
        volume: 1909672
      },
      {
        time: new Date(2017, 2, 14),
        open: 853.55,
        high: 853.75,
        low: 847.55,
        close: 852.53,
        volume: 2130586
      },
      {
        time: new Date(2017, 2, 15),
        open: 854.33,
        high: 854.45,
        low: 847.11,
        close: 852.97,
        volume: 2562176
      },
      {
        time: new Date(2017, 2, 16),
        open: 855.3,
        high: 855.5,
        low: 850.51,
        close: 853.42,
        volume: 1842296
      },
      {
        time: new Date(2017, 2, 17),
        open: 853.49,
        high: 853.83,
        low: 850.64,
        close: 852.31,
        volume: 3384403
      },
      {
        time: new Date(2017, 2, 20),
        open: 851.51,
        high: 857.8,
        low: 851.01,
        close: 856.97,
        volume: 2282727
      },
      {
        time: new Date(2017, 2, 21),
        open: 858.84,
        high: 862.8,
        low: 841.31,
        close: 843.2,
        volume: 4382852
      },
      {
        time: new Date(2017, 2, 22),
        open: 840.43,
        high: 849.37,
        low: 839.05,
        close: 848.06,
        volume: 2658669
      },
      {
        time: new Date(2017, 2, 23),
        open: 848.2,
        high: 850.89,
        low: 844.8,
        close: 847.38,
        volume: 1952964
      },
      {
        time: new Date(2017, 2, 24),
        open: 851.68,
        high: 851.8,
        low: 843.53,
        close: 845.61,
        volume: 2138269
      },
      {
        time: new Date(2017, 2, 27),
        open: 838.07,
        high: 850.3,
        low: 833.5,
        close: 846.82,
        volume: 2755775
      },
      {
        time: new Date(2017, 2, 28),
        open: 851.75,
        high: 858.46,
        low: 850.1,
        close: 856.0,
        volume: 3041633
      },
      {
        time: new Date(2017, 2, 29),
        open: 859.05,
        high: 876.44,
        low: 859.02,
        close: 874.32,
        volume: 4485770
      },
      {
        time: new Date(2017, 2, 30),
        open: 874.95,
        high: 877.06,
        low: 871.66,
        close: 876.34,
        volume: 2762730
      },
      {
        time: new Date(2017, 2, 31),
        open: 877.0,
        high: 890.35,
        low: 876.65,
        close: 886.54,
        volume: 3957612
      },
      {
        time: new Date(2017, 3, 3),
        open: 888.0,
        high: 893.49,
        low: 885.42,
        close: 891.51,
        volume: 3422328
      },
      {
        time: new Date(2017, 3, 4),
        open: 891.5,
        high: 908.54,
        low: 890.28,
        close: 906.83,
        volume: 4984656
      },
      {
        time: new Date(2017, 3, 5),
        open: 910.82,
        high: 923.72,
        low: 905.62,
        close: 909.28,
        volume: 7508370
      },
      {
        time: new Date(2017, 3, 6),
        open: 913.8,
        high: 917.19,
        low: 894.49,
        close: 898.28,
        volume: 6344065
      },
      {
        time: new Date(2017, 3, 7),
        open: 899.65,
        high: 900.09,
        low: 889.31,
        close: 894.88,
        volume: 3710922
      },
      {
        time: new Date(2017, 3, 10),
        open: 899.63,
        high: 908.51,
        low: 899.0,
        close: 907.04,
        volume: 3184301
      },
      {
        time: new Date(2017, 3, 11),
        open: 907.04,
        high: 911.24,
        low: 897.5,
        close: 902.36,
        volume: 3012743
      },
      {
        time: new Date(2017, 3, 12),
        open: 903.09,
        high: 904.09,
        low: 895.25,
        close: 896.23,
        volume: 2456140
      },
      {
        time: new Date(2017, 3, 13),
        open: 891.45,
        high: 894.97,
        low: 884.49,
        close: 884.67,
        volume: 3174583
      },
      {
        time: new Date(2017, 3, 17),
        open: 887.5,
        high: 902.38,
        low: 887.5,
        close: 901.99,
        volume: 2854673
      },
      {
        time: new Date(2017, 3, 18),
        open: 900.99,
        high: 909.61,
        low: 900.78,
        close: 903.78,
        volume: 2999238
      },
      {
        time: new Date(2017, 3, 19),
        open: 907.84,
        high: 910.5,
        low: 897.37,
        close: 899.2,
        volume: 2870242
      },
      {
        time: new Date(2017, 3, 20),
        open: 899.7,
        high: 905.32,
        low: 896.29,
        close: 902.06,
        volume: 2814441
      },
      {
        time: new Date(2017, 3, 21),
        open: 902.67,
        high: 903.65,
        low: 896.77,
        close: 898.53,
        volume: 2420494
      },
      {
        time: new Date(2017, 3, 24),
        open: 908.68,
        high: 909.99,
        low: 903.82,
        close: 907.41,
        volume: 3122893
      },
      {
        time: new Date(2017, 3, 25),
        open: 907.04,
        high: 909.48,
        low: 903.0,
        close: 907.62,
        volume: 3380639
      },
      {
        time: new Date(2017, 3, 26),
        open: 910.3,
        high: 915.75,
        low: 907.56,
        close: 909.29,
        volume: 2608948
      },
      {
        time: new Date(2017, 3, 27),
        open: 914.39,
        high: 921.86,
        low: 912.11,
        close: 918.38,
        volume: 5305543
      },
      {
        time: new Date(2017, 3, 28),
        open: 948.83,
        high: 949.59,
        low: 924.33,
        close: 924.99,
        volume: 7364681
      },
      {
        time: new Date(2017, 4, 1),
        open: 927.8,
        high: 954.4,
        low: 927.8,
        close: 948.23,
        volume: 5466544
      },
      {
        time: new Date(2017, 4, 2),
        open: 946.64,
        high: 950.1,
        low: 941.41,
        close: 946.94,
        volume: 3848835
      },
      {
        time: new Date(2017, 4, 3),
        open: 946.0,
        high: 946.0,
        low: 935.9,
        close: 941.03,
        volume: 3582686
      },
      {
        time: new Date(2017, 4, 4),
        open: 944.75,
        high: 945.0,
        low: 934.22,
        close: 937.53,
        volume: 2418381
      },
      {
        time: new Date(2017, 4, 5),
        open: 940.52,
        high: 940.79,
        low: 930.3,
        close: 934.15,
        volume: 2866397
      },
      {
        time: new Date(2017, 4, 8),
        open: 940.95,
        high: 949.05,
        low: 939.21,
        close: 949.04,
        volume: 3415731
      },
      {
        time: new Date(2017, 4, 9),
        open: 952.8,
        high: 957.89,
        low: 950.2,
        close: 952.82,
        volume: 3262113
      },
      {
        time: new Date(2017, 4, 10),
        open: 953.5,
        high: 953.75,
        low: 945.0,
        close: 948.95,
        volume: 2096512
      },
      {
        time: new Date(2017, 4, 11),
        open: 945.11,
        high: 950.29,
        low: 940.78,
        close: 947.62,
        volume: 2194070
      },
      {
        time: new Date(2017, 4, 12),
        open: 954.5,
        high: 962.79,
        low: 951.53,
        close: 961.35,
        volume: 3625857
      },
      {
        time: new Date(2017, 4, 15),
        open: 958.73,
        high: 963.15,
        low: 956.06,
        close: 957.97,
        volume: 4270625
      },
      {
        time: new Date(2017, 4, 16),
        open: 961.0,
        high: 970.06,
        low: 960.91,
        close: 966.07,
        volume: 3126051
      },
      {
        time: new Date(2017, 4, 17),
        open: 954.7,
        high: 960.4,
        low: 944.12,
        close: 944.76,
        volume: 5145578
      },
      {
        time: new Date(2017, 4, 18),
        open: 944.8,
        high: 962.75,
        low: 944.76,
        close: 958.49,
        volume: 3939347
      },
      {
        time: new Date(2017, 4, 19),
        open: 962.84,
        high: 968.92,
        low: 959.72,
        close: 959.84,
        volume: 3972089
      },
      {
        time: new Date(2017, 4, 22),
        open: 964.0,
        high: 971.38,
        low: 962.9,
        close: 970.67,
        volume: 2642217
      },
      {
        time: new Date(2017, 4, 23),
        open: 975.02,
        high: 975.2,
        low: 966.85,
        close: 971.54,
        volume: 2415594
      },
      {
        time: new Date(2017, 4, 24),
        open: 976.0,
        high: 981.0,
        low: 970.23,
        close: 980.35,
        volume: 2463052
      },
      {
        time: new Date(2017, 4, 25),
        open: 984.85,
        high: 999.0,
        low: 982.11,
        close: 993.38,
        volume: 4822032
      },
      {
        time: new Date(2017, 4, 26),
        open: 995.0,
        high: 998.65,
        low: 989.25,
        close: 995.78,
        volume: 3469154
      },
      {
        time: new Date(2017, 4, 30),
        open: 996.51,
        high: 1001.2,
        low: 995.52,
        close: 996.7,
        volume: 3263069
      },
      {
        time: new Date(2017, 4, 31),
        open: 1000.0,
        high: 1000.12,
        low: 982.16,
        close: 994.62,
        volume: 3913115
      },
      {
        time: new Date(2017, 5, 1),
        open: 998.59,
        high: 998.99,
        low: 991.37,
        close: 995.95,
        volume: 2454841
      },
      {
        time: new Date(2017, 5, 2),
        open: 998.99,
        high: 1008.48,
        low: 995.67,
        close: 1006.73,
        volume: 3752328
      },
      {
        time: new Date(2017, 5, 5),
        open: 1007.23,
        high: 1013.21,
        low: 1003.51,
        close: 1011.34,
        volume: 2719859
      },
      {
        time: new Date(2017, 5, 6),
        open: 1012.0,
        high: 1016.5,
        low: 1001.25,
        close: 1003.0,
        volume: 3346432
      },
      {
        time: new Date(2017, 5, 7),
        open: 1005.95,
        high: 1010.25,
        low: 1002.0,
        close: 1010.07,
        volume: 2823041
      },
      {
        time: new Date(2017, 5, 8),
        open: 1012.06,
        high: 1013.61,
        low: 1006.11,
        close: 1010.27,
        volume: 2767857
      },
      {
        time: new Date(2017, 5, 9),
        open: 1012.5,
        high: 1012.99,
        low: 927.0,
        close: 978.31,
        volume: 7647692
      },
      {
        time: new Date(2017, 5, 12),
        open: 967.0,
        high: 975.95,
        low: 945.0,
        close: 964.91,
        volume: 9447233
      },
      {
        time: new Date(2017, 5, 13),
        open: 977.99,
        high: 984.5,
        low: 966.1,
        close: 980.79,
        volume: 4580011
      },
      {
        time: new Date(2017, 5, 14),
        open: 988.59,
        high: 990.34,
        low: 966.71,
        close: 976.47,
        volume: 3974900
      },
      {
        time: new Date(2017, 5, 15),
        open: 958.7,
        high: 965.73,
        low: 950.86,
        close: 964.17,
        volume: 5373865
      },
      {
        time: new Date(2017, 5, 16),
        open: 996.0,
        high: 999.75,
        low: 982.0,
        close: 987.71,
        volume: 11472662
      },
      {
        time: new Date(2017, 5, 19),
        open: 1017.0,
        high: 1017.0,
        low: 989.9,
        close: 995.17,
        volume: 5043408
      },
      {
        time: new Date(2017, 5, 20),
        open: 998.0,
        high: 1004.88,
        low: 992.02,
        close: 992.59,
        volume: 4076828
      },
      {
        time: new Date(2017, 5, 21),
        open: 998.7,
        high: 1002.72,
        low: 992.65,
        close: 1002.23,
        volume: 2922473
      },
      {
        time: new Date(2017, 5, 22),
        open: 1002.23,
        high: 1006.96,
        low: 997.2,
        close: 1001.3,
        volume: 2253433
      },
      {
        time: new Date(2017, 5, 23),
        open: 1002.54,
        high: 1004.62,
        low: 998.02,
        close: 1003.74,
        volume: 2879145
      },
      {
        time: new Date(2017, 5, 26),
        open: 1008.5,
        high: 1009.8,
        low: 992.0,
        close: 993.98,
        volume: 3386157
      },
      {
        time: new Date(2017, 5, 27),
        open: 990.69,
        high: 998.8,
        low: 976.0,
        close: 976.78,
        volume: 3782389
      },
      {
        time: new Date(2017, 5, 28),
        open: 978.55,
        high: 990.68,
        low: 969.21,
        close: 990.33,
        volume: 3737567
      },
      {
        time: new Date(2017, 5, 29),
        open: 979.0,
        high: 987.56,
        low: 965.25,
        close: 975.93,
        volume: 4302968
      },
      {
        time: new Date(2017, 5, 30),
        open: 980.12,
        high: 983.47,
        low: 967.61,
        close: 968.0,
        volume: 3390345
      },
      {
        time: new Date(2017, 6, 3),
        open: 972.79,
        high: 974.49,
        low: 951.0,
        close: 953.66,
        volume: 2909108
      },
      {
        time: new Date(2017, 6, 5),
        open: 961.53,
        high: 975.0,
        low: 955.25,
        close: 971.4,
        volume: 3652955
      },
      {
        time: new Date(2017, 6, 6),
        open: 964.66,
        high: 974.4,
        low: 959.02,
        close: 965.14,
        volume: 3259613
      },
      {
        time: new Date(2017, 6, 7),
        open: 969.55,
        high: 980.11,
        low: 969.14,
        close: 978.76,
        volume: 2643387
      },
      {
        time: new Date(2017, 6, 10),
        open: 985.0,
        high: 999.44,
        low: 983.5,
        close: 996.47,
        volume: 3546268
      },
      {
        time: new Date(2017, 6, 11),
        open: 993.0,
        high: 995.99,
        low: 983.72,
        close: 994.13,
        volume: 2982726
      },
      {
        time: new Date(2017, 6, 12),
        open: 1000.65,
        high: 1008.55,
        low: 998.1,
        close: 1006.51,
        volume: 3608574
      },
      {
        time: new Date(2017, 6, 13),
        open: 1004.62,
        high: 1006.88,
        low: 995.9,
        close: 1000.63,
        volume: 2880769
      },
      {
        time: new Date(2017, 6, 14),
        open: 1002.4,
        high: 1004.45,
        low: 996.89,
        close: 1001.81,
        volume: 2102469
      },
      {
        time: new Date(2017, 6, 17),
        open: 1004.69,
        high: 1014.75,
        low: 1003.81,
        close: 1010.04,
        volume: 3712587
      },
      {
        time: new Date(2017, 6, 18),
        open: 1006.0,
        high: 1026.03,
        low: 1004.0,
        close: 1024.45,
        volume: 4007624
      },
      {
        time: new Date(2017, 6, 19),
        open: 1025.0,
        high: 1031.59,
        low: 1022.5,
        close: 1026.87,
        volume: 2963964
      },
      {
        time: new Date(2017, 6, 20),
        open: 1031.59,
        high: 1034.97,
        low: 1022.52,
        close: 1028.7,
        volume: 3097487
      },
      {
        time: new Date(2017, 6, 21),
        open: 1021.28,
        high: 1026.1,
        low: 1011.0,
        close: 1025.67,
        volume: 2734577
      },
      {
        time: new Date(2017, 6, 24),
        open: 1028.34,
        high: 1043.01,
        low: 1027.43,
        close: 1038.95,
        volume: 3288020
      },
      {
        time: new Date(2017, 6, 25),
        open: 1038.05,
        high: 1043.33,
        low: 1032.48,
        close: 1039.87,
        volume: 2447629
      },
      {
        time: new Date(2017, 6, 26),
        open: 1043.2,
        high: 1053.2,
        low: 1043.2,
        close: 1052.8,
        volume: 2921253
      },
      {
        time: new Date(2017, 6, 27),
        open: 1069.55,
        high: 1083.31,
        low: 1040.18,
        close: 1046.0,
        volume: 10991715
      },
      {
        time: new Date(2017, 6, 28),
        open: 1012.14,
        high: 1032.85,
        low: 1001.0,
        close: 1020.04,
        volume: 7709420
      },
      {
        time: new Date(2017, 6, 31),
        open: 1019.05,
        high: 1019.05,
        low: 987.02,
        close: 987.78,
        volume: 7352063
      },
      {
        time: new Date(2017, 7, 1),
        open: 996.11,
        high: 1006.4,
        low: 991.58,
        close: 996.19,
        volume: 4572576
      },
      {
        time: new Date(2017, 7, 2),
        open: 1001.77,
        high: 1003.21,
        low: 981.73,
        close: 995.89,
        volume: 4069993
      },
      {
        time: new Date(2017, 7, 3),
        open: 999.47,
        high: 999.5,
        low: 984.59,
        close: 986.92,
        volume: 3255764
      },
      {
        time: new Date(2017, 7, 4),
        open: 989.68,
        high: 991.67,
        low: 982.0,
        close: 987.58,
        volume: 2730308
      },
      {
        time: new Date(2017, 7, 7),
        open: 990.65,
        high: 995.0,
        low: 987.14,
        close: 992.27,
        volume: 2676607
      },
      {
        time: new Date(2017, 7, 8),
        open: 994.35,
        high: 996.28,
        low: 985.79,
        close: 989.84,
        volume: 2902815
      },
      {
        time: new Date(2017, 7, 9),
        open: 982.6,
        high: 988.0,
        low: 975.27,
        close: 982.01,
        volume: 3569731
      },
      {
        time: new Date(2017, 7, 10),
        open: 976.3,
        high: 979.86,
        low: 954.68,
        close: 956.92,
        volume: 5684068
      },
      {
        time: new Date(2017, 7, 11),
        open: 960.0,
        high: 970.39,
        low: 951.38,
        close: 967.99,
        volume: 3468017
      },
      {
        time: new Date(2017, 7, 14),
        open: 978.41,
        high: 985.5,
        low: 976.19,
        close: 983.3,
        volume: 3172892
      },
      {
        time: new Date(2017, 7, 15),
        open: 988.9,
        high: 991.74,
        low: 982.0,
        close: 982.74,
        volume: 2549295
      },
      {
        time: new Date(2017, 7, 16),
        open: 981.65,
        high: 986.46,
        low: 973.22,
        close: 978.18,
        volume: 3132066
      },
      {
        time: new Date(2017, 7, 17),
        open: 977.84,
        high: 977.84,
        low: 960.32,
        close: 960.57,
        volume: 3512397
      },
      {
        time: new Date(2017, 7, 18),
        open: 961.4,
        high: 965.43,
        low: 954.65,
        close: 958.47,
        volume: 3284821
      },
      {
        time: new Date(2017, 7, 21),
        open: 957.57,
        high: 961.2,
        low: 945.46,
        close: 953.29,
        volume: 3164483
      },
      {
        time: new Date(2017, 7, 22),
        open: 955.52,
        high: 967.93,
        low: 955.5,
        close: 966.9,
        volume: 2749970
      },
      {
        time: new Date(2017, 7, 23),
        open: 959.38,
        high: 962.0,
        low: 954.2,
        close: 958.0,
        volume: 2668264
      },
      {
        time: new Date(2017, 7, 24),
        open: 957.42,
        high: 959.0,
        low: 941.14,
        close: 952.45,
        volume: 5195726
      },
      {
        time: new Date(2017, 7, 25),
        open: 956.0,
        high: 957.62,
        low: 944.1,
        close: 945.26,
        volume: 3324791
      },
      {
        time: new Date(2017, 7, 28),
        open: 946.54,
        high: 953.0,
        low: 942.25,
        close: 946.02,
        volume: 2596737
      },
      {
        time: new Date(2017, 7, 29),
        open: 940.0,
        high: 956.0,
        low: 936.33,
        close: 954.06,
        volume: 2874299
      },
      {
        time: new Date(2017, 7, 30),
        open: 958.44,
        high: 969.41,
        low: 956.91,
        close: 967.59,
        volume: 2904604
      },
      {
        time: new Date(2017, 7, 31),
        open: 974.7,
        high: 981.0,
        low: 972.76,
        close: 980.6,
        volume: 3331488
      },
      {
        time: new Date(2017, 8, 1),
        open: 984.2,
        high: 984.5,
        low: 976.88,
        close: 978.25,
        volume: 2535917
      },
      {
        time: new Date(2017, 8, 5),
        open: 975.4,
        high: 976.77,
        low: 960.37,
        close: 965.27,
        volume: 2998649
      },
      {
        time: new Date(2017, 8, 6),
        open: 968.32,
        high: 971.84,
        low: 960.6,
        close: 967.8,
        volume: 2129861
      },
      {
        time: new Date(2017, 8, 7),
        open: 974.0,
        high: 980.59,
        low: 972.55,
        close: 979.47,
        volume: 2566794
      },
      {
        time: new Date(2017, 8, 8),
        open: 979.1,
        high: 979.88,
        low: 963.47,
        close: 965.9,
        volume: 2605322
      },
      {
        time: new Date(2017, 8, 11),
        open: 974.46,
        high: 981.94,
        low: 974.22,
        close: 977.96,
        volume: 2186666
      },
      {
        time: new Date(2017, 8, 12),
        open: 983.27,
        high: 984.67,
        low: 975.52,
        close: 982.58,
        volume: 2481066
      },
      {
        time: new Date(2017, 8, 13),
        open: 983.97,
        high: 1000.0,
        low: 979.42,
        close: 999.6,
        volume: 3374650
      },
      {
        time: new Date(2017, 8, 14),
        open: 996.8,
        high: 998.56,
        low: 987.74,
        close: 992.21,
        volume: 3913263
      },
      {
        time: new Date(2017, 8, 15),
        open: 993.01,
        high: 996.25,
        low: 984.03,
        close: 986.79,
        volume: 3760183
      },
      {
        time: new Date(2017, 8, 18),
        open: 990.4,
        high: 992.79,
        low: 968.17,
        close: 974.19,
        volume: 3411324
      },
      {
        time: new Date(2017, 8, 19),
        open: 977.25,
        high: 978.24,
        low: 967.46,
        close: 969.86,
        volume: 2671054
      },
      {
        time: new Date(2017, 8, 20),
        open: 971.79,
        high: 974.81,
        low: 962.16,
        close: 973.21,
        volume: 2888795
      },
      {
        time: new Date(2017, 8, 21),
        open: 971.31,
        high: 971.7,
        low: 962.02,
        close: 964.65,
        volume: 2337576
      },
      {
        time: new Date(2017, 8, 22),
        open: 961.01,
        high: 965.61,
        low: 954.42,
        close: 955.1,
        volume: 2641787
      },
      {
        time: new Date(2017, 8, 25),
        open: 949.31,
        high: 949.42,
        low: 932.89,
        close: 939.79,
        volume: 5123997
      },
      {
        time: new Date(2017, 8, 26),
        open: 945.49,
        high: 948.63,
        low: 931.75,
        close: 938.6,
        volume: 3564848
      },
      {
        time: new Date(2017, 8, 27),
        open: 948.0,
        high: 955.3,
        low: 943.3,
        close: 950.87,
        volume: 3124726
      },
      {
        time: new Date(2017, 8, 28),
        open: 951.86,
        high: 959.7,
        low: 950.1,
        close: 956.4,
        volume: 2522567
      },
      {
        time: new Date(2017, 8, 29),
        open: 960.11,
        high: 964.83,
        low: 958.38,
        close: 961.35,
        volume: 2543759
      },
      {
        time: new Date(2017, 9, 2),
        open: 964.0,
        high: 967.3,
        low: 952.12,
        close: 959.19,
        volume: 2442937
      },
      {
        time: new Date(2017, 9, 3),
        open: 958.0,
        high: 963.69,
        low: 950.37,
        close: 957.1,
        volume: 2666574
      },
      {
        time: new Date(2017, 9, 4),
        open: 954.21,
        high: 967.79,
        low: 954.05,
        close: 965.45,
        volume: 2527352
      },
      {
        time: new Date(2017, 9, 5),
        open: 970.0,
        high: 981.51,
        low: 969.64,
        close: 980.85,
        volume: 3229224
      },
      {
        time: new Date(2017, 9, 6),
        open: 975.64,
        high: 995.75,
        low: 975.64,
        close: 989.58,
        volume: 3782067
      },
      {
        time: new Date(2017, 9, 9),
        open: 993.24,
        high: 998.5,
        low: 987.5,
        close: 990.99,
        volume: 2938586
      },
      {
        time: new Date(2017, 9, 10),
        open: 996.67,
        high: 997.95,
        low: 980.1,
        close: 987.2,
        volume: 3084921
      },
      {
        time: new Date(2017, 9, 11),
        open: 991.27,
        high: 995.5,
        low: 986.7,
        close: 995.0,
        volume: 2337113
      },
      {
        time: new Date(2017, 9, 12),
        open: 996.81,
        high: 1008.44,
        low: 992.4,
        close: 1000.93,
        volume: 4067317
      },
      {
        time: new Date(2017, 9, 13),
        open: 1007.0,
        high: 1007.77,
        low: 1001.03,
        close: 1002.94,
        volume: 2431462
      },
      {
        time: new Date(2017, 9, 16),
        open: 1008.44,
        high: 1009.57,
        low: 1001.04,
        close: 1006.34,
        volume: 2008908
      },
      {
        time: new Date(2017, 9, 17),
        open: 1005.59,
        high: 1011.47,
        low: 1004.38,
        close: 1009.13,
        volume: 2319742
      },
      {
        time: new Date(2017, 9, 18),
        open: 1009.27,
        high: 1022.31,
        low: 996.55,
        close: 997.0,
        volume: 2499681
      },
      {
        time: new Date(2017, 9, 19),
        open: 990.0,
        high: 991.05,
        low: 980.24,
        close: 986.61,
        volume: 3108197
      },
      {
        time: new Date(2017, 9, 20),
        open: 993.53,
        high: 994.62,
        low: 982.0,
        close: 982.91,
        volume: 2365122
      },
      {
        time: new Date(2017, 9, 23),
        open: 986.73,
        high: 986.78,
        low: 962.5,
        close: 966.3,
        volume: 3494100
      },
      {
        time: new Date(2017, 9, 24),
        open: 969.0,
        high: 979.85,
        low: 965.0,
        close: 975.9,
        volume: 2723935
      },
      {
        time: new Date(2017, 9, 25),
        open: 978.0,
        high: 984.44,
        low: 966.24,
        close: 972.91,
        volume: 3033113
      },
      {
        time: new Date(2017, 9, 26),
        open: 980.33,
        high: 982.9,
        low: 968.55,
        close: 972.43,
        volume: 5618675
      },
      {
        time: new Date(2017, 9, 27),
        open: 1058.14,
        high: 1105.58,
        low: 1050.55,
        close: 1100.95,
        volume: 16565021
      },
      {
        time: new Date(2017, 9, 30),
        open: 1095.01,
        high: 1122.79,
        low: 1093.56,
        close: 1110.85,
        volume: 6613064
      },
      {
        time: new Date(2017, 9, 31),
        open: 1109.0,
        high: 1110.54,
        low: 1101.12,
        close: 1105.28,
        volume: 3476967
      },
      {
        time: new Date(2017, 10, 1),
        open: 1105.4,
        high: 1108.97,
        low: 1096.74,
        close: 1103.68,
        volume: 3755511
      },
      {
        time: new Date(2017, 10, 2),
        open: 1097.81,
        high: 1101.94,
        low: 1086.87,
        close: 1094.22,
        volume: 3684876
      },
      {
        time: new Date(2017, 10, 3),
        open: 1091.15,
        high: 1112.68,
        low: 1088.52,
        close: 1111.6,
        volume: 3751480
      },
      {
        time: new Date(2017, 10, 6),
        open: 1109.15,
        high: 1125.41,
        low: 1108.77,
        close: 1120.66,
        volume: 3381138
      },
      {
        time: new Date(2017, 10, 7),
        open: 1124.74,
        high: 1130.6,
        low: 1117.5,
        close: 1123.17,
        volume: 2688977
      },
      {
        time: new Date(2017, 10, 8),
        open: 1122.82,
        high: 1135.54,
        low: 1119.11,
        close: 1132.88,
        volume: 2581451
      },
      {
        time: new Date(2017, 10, 9),
        open: 1125.96,
        high: 1129.62,
        low: 1115.77,
        close: 1129.13,
        volume: 3732732
      },
      {
        time: new Date(2017, 10, 10),
        open: 1126.1,
        high: 1131.75,
        low: 1124.06,
        close: 1125.35,
        volume: 2179937
      },
      {
        time: new Date(2017, 10, 13),
        open: 1123.0,
        high: 1139.9,
        low: 1122.34,
        close: 1129.17,
        volume: 2918439
      },
      {
        time: new Date(2017, 10, 14),
        open: 1130.11,
        high: 1138.0,
        low: 1123.89,
        close: 1136.84,
        volume: 3138423
      },
      {
        time: new Date(2017, 10, 15),
        open: 1127.01,
        high: 1131.75,
        low: 1121.63,
        close: 1126.69,
        volume: 3928680
      },
      {
        time: new Date(2017, 10, 16),
        open: 1130.16,
        high: 1138.16,
        low: 1130.05,
        close: 1137.29,
        volume: 2213322
      },
      {
        time: new Date(2017, 10, 17),
        open: 1138.28,
        high: 1138.8,
        low: 1125.81,
        close: 1129.88,
        volume: 2413388
      },
      {
        time: new Date(2017, 10, 20),
        open: 1129.77,
        high: 1133.42,
        low: 1122.55,
        close: 1126.31,
        volume: 2163855
      },
      {
        time: new Date(2017, 10, 21),
        open: 1132.86,
        high: 1140.0,
        low: 1128.2,
        close: 1139.49,
        volume: 2479397
      },
      {
        time: new Date(2017, 10, 22),
        open: 1141.0,
        high: 1160.27,
        low: 1141.0,
        close: 1156.16,
        volume: 3555273
      },
      {
        time: new Date(2017, 10, 24),
        open: 1160.7,
        high: 1186.84,
        low: 1160.7,
        close: 1186.0,
        volume: 3528011
      },
      {
        time: new Date(2017, 10, 27),
        open: 1202.66,
        high: 1213.41,
        low: 1191.15,
        close: 1195.83,
        volume: 6744045
      },
      {
        time: new Date(2017, 10, 28),
        open: 1204.88,
        high: 1205.34,
        low: 1188.52,
        close: 1193.6,
        volume: 4559449
      },
      {
        time: new Date(2017, 10, 29),
        open: 1194.8,
        high: 1194.8,
        low: 1145.19,
        close: 1161.27,
        volume: 9257512
      },
      {
        time: new Date(2017, 10, 30),
        open: 1167.1,
        high: 1178.57,
        low: 1160.0,
        close: 1176.75,
        volume: 4509208
      },
      {
        time: new Date(2017, 11, 1),
        open: 1172.05,
        high: 1179.65,
        low: 1152.0,
        close: 1162.35,
        volume: 4107094
      },
      {
        time: new Date(2017, 11, 4),
        open: 1173.85,
        high: 1175.2,
        low: 1128.0,
        close: 1133.95,
        volume: 5931915
      },
      {
        time: new Date(2017, 11, 5),
        open: 1128.26,
        high: 1159.27,
        low: 1124.74,
        close: 1141.57,
        volume: 4079774
      },
      {
        time: new Date(2017, 11, 6),
        open: 1137.99,
        high: 1155.89,
        low: 1136.08,
        close: 1152.35,
        volume: 2853316
      },
      {
        time: new Date(2017, 11, 7),
        open: 1156.59,
        high: 1163.19,
        low: 1151.0,
        close: 1159.79,
        volume: 2511569
      },
      {
        time: new Date(2017, 11, 8),
        open: 1170.4,
        high: 1172.79,
        low: 1157.1,
        close: 1162.0,
        volume: 3050074
      },
      {
        time: new Date(2017, 11, 11),
        open: 1164.6,
        high: 1169.9,
        low: 1157.0,
        close: 1168.92,
        volume: 2363473
      },
      {
        time: new Date(2017, 11, 12),
        open: 1166.51,
        high: 1173.6,
        low: 1161.61,
        close: 1165.08,
        volume: 2235892
      },
      {
        time: new Date(2017, 11, 13),
        open: 1170.0,
        high: 1170.87,
        low: 1160.27,
        close: 1164.13,
        volume: 2616760
      },
      {
        time: new Date(2017, 11, 14),
        open: 1163.71,
        high: 1177.93,
        low: 1162.45,
        close: 1174.26,
        volume: 3214337
      },
      {
        time: new Date(2017, 11, 15),
        open: 1179.03,
        high: 1182.75,
        low: 1169.33,
        close: 1179.14,
        volume: 4778621
      },
      {
        time: new Date(2017, 11, 18),
        open: 1187.37,
        high: 1194.78,
        low: 1180.91,
        close: 1190.58,
        volume: 2947625
      },
      {
        time: new Date(2017, 11, 19),
        open: 1189.15,
        high: 1192.97,
        low: 1179.14,
        close: 1187.38,
        volume: 2587792
      },
      {
        time: new Date(2017, 11, 20),
        open: 1190.5,
        high: 1191.0,
        low: 1176.0,
        close: 1177.62,
        volume: 2371166
      },
      {
        time: new Date(2017, 11, 21),
        open: 1175.9,
        high: 1179.17,
        low: 1167.64,
        close: 1174.76,
        volume: 2123117
      },
      {
        time: new Date(2017, 11, 22),
        open: 1172.08,
        high: 1174.62,
        low: 1167.83,
        close: 1168.36,
        volume: 1585054
      },
      {
        time: new Date(2017, 11, 26),
        open: 1168.36,
        high: 1178.32,
        low: 1160.55,
        close: 1176.76,
        volume: 2005187
      },
      {
        time: new Date(2017, 11, 27),
        open: 1179.91,
        high: 1187.29,
        low: 1175.61,
        close: 1182.26,
        volume: 1867208
      },
      {
        time: new Date(2017, 11, 28),
        open: 1189.0,
        high: 1190.1,
        low: 1184.38,
        close: 1186.1,
        volume: 1841676
      },
      {
        time: new Date(2017, 11, 29),
        open: 1182.35,
        high: 1184.0,
        low: 1167.5,
        close: 1169.47,
        volume: 2688391
      },
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
        time: new Date(2013, 1, 1),
        open: 378.7,
        high: 387.9,
        low: 378.7,
        close: 387.4,
        volume: 0
      },
      {
        time: new Date(2013, 1, 4),
        open: 383.46,
        high: 384.85,
        low: 378.76,
        close: 379.13,
        volume: 0
      },
      {
        time: new Date(2013, 1, 5),
        open: 380.18,
        high: 385.17,
        low: 379.35,
        close: 382.49,
        volume: 0
      },
      {
        time: new Date(2013, 1, 6),
        open: 379.16,
        high: 386.09,
        low: 378.87,
        close: 384.7,
        volume: 0
      },
      {
        time: new Date(2013, 1, 7),
        open: 384.47,
        high: 389.02,
        low: 382.37,
        close: 386.59,
        volume: 0
      },
      {
        time: new Date(2013, 1, 8),
        open: 389.67,
        high: 392.94,
        low: 389.39,
        close: 392.29,
        volume: 0
      },
      {
        time: new Date(2013, 1, 11),
        open: 388.81,
        high: 391.11,
        low: 386.49,
        close: 390.82,
        volume: 0
      },
      {
        time: new Date(2013, 1, 12),
        open: 390.48,
        high: 393.56,
        low: 389.3,
        close: 389.96,
        volume: 0
      },
      {
        time: new Date(2013, 1, 13),
        open: 389.67,
        high: 392.28,
        low: 389.6,
        close: 391.04,
        volume: 0
      },
      {
        time: new Date(2013, 1, 14),
        open: 389.48,
        high: 393.98,
        low: 388.5,
        close: 393.52,
        volume: 0
      },
      {
        time: new Date(2013, 1, 15),
        open: 393.31,
        high: 396.23,
        low: 393.14,
        close: 396.05,
        volume: 0
      },
      {
        time: new Date(2013, 1, 19),
        open: 397.6,
        high: 403.1,
        low: 397.24,
        close: 403.02,
        volume: 0
      },
      {
        time: new Date(2013, 1, 20),
        open: 402.25,
        high: 404.08,
        low: 395.5,
        close: 395.83,
        volume: 0
      },
      {
        time: new Date(2013, 1, 21),
        open: 398.6,
        high: 402.32,
        low: 395.21,
        close: 397.37,
        volume: 0
      },
      {
        time: new Date(2013, 1, 22),
        open: 399.23,
        high: 400.22,
        low: 396.5,
        close: 399.46,
        volume: 0
      },
      {
        time: new Date(2013, 1, 25),
        open: 400.75,
        high: 403.8,
        low: 394.85,
        close: 394.99,
        volume: 0
      },
      {
        time: new Date(2013, 1, 26),
        open: 397.1,
        high: 397.58,
        low: 391.81,
        close: 394.67,
        volume: 0
      },
      {
        time: new Date(2013, 1, 27),
        open: 397.0,
        high: 401.97,
        low: 395.16,
        close: 399.49,
        volume: 0
      },
      {
        time: new Date(2013, 1, 28),
        open: 400.15,
        high: 403.09,
        low: 400.11,
        close: 400.2,
        volume: 0
      },
      {
        time: new Date(2013, 2, 1),
        open: 398.5,
        high: 403.17,
        low: 397.68,
        close: 402.69,
        volume: 0
      },
      {
        time: new Date(2013, 2, 4),
        open: 402.25,
        high: 411.01,
        low: 402.1,
        close: 410.34,
        volume: 0
      },
      {
        time: new Date(2013, 2, 5),
        open: 414.05,
        high: 419.65,
        low: 414.04,
        close: 418.88,
        volume: 0
      },
      {
        time: new Date(2013, 2, 6),
        open: 420.09,
        high: 421.58,
        low: 413.99,
        close: 415.27,
        volume: 0
      },
      {
        time: new Date(2013, 2, 7),
        open: 416.61,
        high: 417.89,
        low: 414.38,
        close: 415.88,
        volume: 0
      },
      {
        time: new Date(2013, 2, 8),
        open: 416.83,
        high: 417.04,
        low: 412.11,
        close: 415.34,
        volume: 0
      },
      {
        time: new Date(2013, 2, 11),
        open: 415.43,
        high: 419.43,
        low: 415.33,
        close: 416.99,
        volume: 0
      },
      {
        time: new Date(2013, 2, 12),
        open: 414.94,
        high: 415.53,
        low: 411.42,
        close: 413.39,
        volume: 0
      },
      {
        time: new Date(2013, 2, 13),
        open: 413.54,
        high: 414.93,
        low: 410.74,
        close: 412.24,
        volume: 0
      },
      {
        time: new Date(2013, 2, 14),
        open: 413.08,
        high: 413.08,
        low: 408.29,
        close: 410.36,
        volume: 0
      },
      {
        time: new Date(2013, 2, 15),
        open: 408.84,
        high: 409.74,
        low: 406.26,
        close: 406.74,
        volume: 0
      },
      {
        time: new Date(2013, 2, 18),
        open: 402.1,
        high: 405.97,
        low: 400.33,
        close: 403.49,
        volume: 0
      },
      {
        time: new Date(2013, 2, 19),
        open: 405.21,
        high: 409.22,
        low: 402.82,
        close: 405.25,
        volume: 0
      },
      {
        time: new Date(2013, 2, 20),
        open: 408.01,
        high: 408.35,
        low: 405.31,
        close: 406.95,
        volume: 0
      },
      {
        time: new Date(2013, 2, 21),
        open: 405.24,
        high: 408.05,
        low: 404.52,
        close: 405.22,
        volume: 0
      },
      {
        time: new Date(2013, 2, 22),
        open: 406.96,
        high: 407.21,
        low: 404.42,
        close: 404.75,
        volume: 0
      },
      {
        time: new Date(2013, 2, 25),
        open: 405.8,
        high: 409.21,
        low: 403.01,
        close: 404.42,
        volume: 0
      },
      {
        time: new Date(2013, 2, 26),
        open: 406.34,
        high: 406.59,
        low: 403.49,
        close: 405.8,
        volume: 0
      },
      {
        time: new Date(2013, 2, 27),
        open: 402.94,
        high: 403.1,
        low: 400.26,
        close: 400.93,
        volume: 0
      },
      {
        time: new Date(2013, 2, 28),
        open: 401.59,
        high: 402.28,
        low: 396.25,
        close: 396.7,
        volume: 0
      },
      {
        time: new Date(2013, 3, 1),
        open: 397.11,
        high: 400.72,
        low: 396.23,
        close: 400.19,
        volume: 0
      },
      {
        time: new Date(2013, 3, 2),
        open: 401.87,
        high: 407.01,
        low: 401.6,
        close: 406.11,
        volume: 0
      },
      {
        time: new Date(2013, 3, 3),
        open: 406.32,
        high: 406.69,
        low: 399.93,
        close: 402.7,
        volume: 0
      },
      {
        time: new Date(2013, 3, 4),
        open: 401.72,
        high: 402.47,
        low: 395.25,
        close: 397.14,
        volume: 0
      },
      {
        time: new Date(2013, 3, 5),
        open: 392.64,
        high: 393.1,
        low: 387.81,
        close: 391.13,
        volume: 0
      },
      {
        time: new Date(2013, 3, 8),
        open: 388.99,
        high: 389.39,
        low: 383.82,
        close: 387.04,
        volume: 0
      },
      {
        time: new Date(2013, 3, 9),
        open: 387.36,
        high: 391.48,
        low: 386.17,
        close: 388.44,
        volume: 0
      },
      {
        time: new Date(2013, 3, 10),
        open: 391.07,
        high: 395.78,
        low: 387.61,
        close: 394.69,
        volume: 0
      },
      {
        time: new Date(2013, 3, 11),
        open: 396.04,
        high: 396.15,
        low: 391.64,
        close: 394.8,
        volume: 0
      },
      {
        time: new Date(2013, 3, 12),
        open: 395.6,
        high: 395.66,
        low: 391.07,
        close: 394.63,
        volume: 0
      },
      {
        time: new Date(2013, 3, 15),
        open: 392.58,
        high: 398.1,
        low: 388.12,
        close: 390.57,
        volume: 0
      },
      {
        time: new Date(2013, 3, 16),
        open: 392.9,
        high: 397.6,
        low: 391.57,
        close: 396.29,
        volume: 0
      },
      {
        time: new Date(2013, 3, 17),
        open: 392.98,
        high: 395.03,
        low: 388.66,
        close: 390.89,
        volume: 0
      },
      {
        time: new Date(2013, 3, 18),
        open: 392.28,
        high: 392.51,
        low: 380.25,
        close: 382.57,
        volume: 0
      },
      {
        time: new Date(2013, 3, 19),
        open: 384.2,
        high: 401.32,
        low: 382.75,
        close: 399.54,
        volume: 0
      },
      {
        time: new Date(2013, 3, 22),
        open: 399.9,
        high: 401.58,
        low: 387.11,
        close: 399.66,
        volume: 0
      },
      {
        time: new Date(2013, 3, 23),
        open: 400.1,
        high: 407.34,
        low: 399.78,
        close: 403.55,
        volume: 0
      },
      {
        time: new Date(2013, 3, 24),
        open: 403.65,
        high: 408.59,
        low: 403.6,
        close: 406.32,
        volume: 0
      },
      {
        time: new Date(2013, 3, 25),
        open: 407.72,
        high: 407.83,
        low: 403.41,
        close: 404.15,
        volume: 0
      },
      {
        time: new Date(2013, 3, 26),
        open: 403.4,
        high: 403.47,
        low: 397.89,
        close: 400.31,
        volume: 0
      },
      {
        time: new Date(2013, 3, 29),
        open: 401.22,
        high: 410.94,
        low: 401.1,
        close: 409.12,
        volume: 0
      },
      {
        time: new Date(2013, 3, 30),
        open: 409.09,
        high: 413.41,
        low: 408.43,
        close: 411.87,
        volume: 0
      },
      {
        time: new Date(2013, 4, 1),
        open: 411.22,
        high: 411.95,
        low: 407.77,
        close: 409.8,
        volume: 0
      },
      {
        time: new Date(2013, 4, 2),
        open: 409.64,
        high: 416.86,
        low: 409.12,
        close: 414.39,
        volume: 0
      },
      {
        time: new Date(2013, 4, 3),
        open: 418.06,
        high: 422.98,
        low: 417.58,
        close: 422.44,
        volume: 0
      },
      {
        time: new Date(2013, 4, 6),
        open: 423.71,
        high: 430.49,
        low: 423.71,
        close: 430.34,
        volume: 0
      },
      {
        time: new Date(2013, 4, 7),
        open: 431.07,
        high: 431.5,
        low: 424.91,
        close: 428.19,
        volume: 0
      },
      {
        time: new Date(2013, 4, 8),
        open: 428.07,
        high: 436.5,
        low: 426.03,
        close: 436.38,
        volume: 0
      },
      {
        time: new Date(2013, 4, 9),
        open: 434.98,
        high: 439.39,
        low: 433.68,
        close: 435.3,
        volume: 0
      },
      {
        time: new Date(2013, 4, 10),
        open: 437.22,
        high: 439.83,
        low: 435.64,
        close: 439.67,
        volume: 0
      },
      {
        time: new Date(2013, 4, 13),
        open: 439.01,
        high: 440.79,
        low: 436.25,
        close: 438.33,
        volume: 0
      },
      {
        time: new Date(2013, 4, 14),
        open: 438.31,
        high: 443.9,
        low: 438.13,
        close: 443.11,
        volume: 0
      },
      {
        time: new Date(2013, 4, 15),
        open: 447.3,
        high: 457.73,
        low: 446.56,
        close: 457.49,
        volume: 0
      },
      {
        time: new Date(2013, 4, 16),
        open: 459.04,
        high: 459.53,
        low: 450.55,
        close: 451.48,
        volume: 0
      },
      {
        time: new Date(2013, 4, 17),
        open: 454.56,
        high: 456.29,
        low: 449.81,
        close: 454.14,
        volume: 0
      },
      {
        time: new Date(2013, 4, 20),
        open: 452.05,
        high: 459.84,
        low: 452.05,
        close: 453.81,
        volume: 0
      },
      {
        time: new Date(2013, 4, 21),
        open: 453.56,
        high: 455.37,
        low: 448.36,
        close: 453.03,
        volume: 0
      },
      {
        time: new Date(2013, 4, 22),
        open: 450.83,
        high: 454.2,
        low: 443.0,
        close: 444.27,
        volume: 0
      },
      {
        time: new Date(2013, 4, 23),
        open: 438.06,
        high: 444.54,
        low: 436.56,
        close: 440.95,
        volume: 0
      },
      {
        time: new Date(2013, 4, 24),
        open: 437.19,
        high: 438.97,
        low: 435.07,
        close: 436.22,
        volume: 0
      },
      {
        time: new Date(2013, 4, 28),
        open: 441.31,
        high: 445.62,
        low: 439.76,
        close: 440.19,
        volume: 0
      },
      {
        time: new Date(2013, 4, 29),
        open: 437.42,
        high: 438.56,
        low: 431.71,
        close: 433.72,
        volume: 0
      },
      {
        time: new Date(2013, 4, 30),
        open: 434.53,
        high: 439.01,
        low: 432.77,
        close: 434.94,
        volume: 0
      },
      {
        time: new Date(2013, 4, 31),
        open: 433.63,
        high: 438.06,
        low: 433.33,
        close: 435.17,
        volume: 0
      },
      {
        time: new Date(2013, 5, 3),
        open: 431.34,
        high: 436.55,
        low: 427.08,
        close: 433.38,
        volume: 0
      },
      {
        time: new Date(2013, 5, 4),
        open: 433.49,
        high: 434.86,
        low: 426.61,
        close: 429.12,
        volume: 0
      },
      {
        time: new Date(2013, 5, 5),
        open: 430.82,
        high: 434.29,
        low: 428.14,
        close: 429.42,
        volume: 0
      },
      {
        time: new Date(2013, 5, 6),
        open: 431.72,
        high: 432.73,
        low: 423.19,
        close: 431.89,
        volume: 0
      },
      {
        time: new Date(2013, 5, 7),
        open: 434.77,
        high: 439.56,
        low: 432.23,
        close: 439.43,
        volume: 0
      },
      {
        time: new Date(2013, 5, 10),
        open: 440.61,
        high: 445.05,
        low: 439.6,
        close: 444.66,
        volume: 0
      },
      {
        time: new Date(2013, 5, 11),
        open: 441.54,
        high: 443.06,
        low: 439.32,
        close: 439.47,
        volume: 0
      },
      {
        time: new Date(2013, 5, 12),
        open: 442.29,
        high: 442.56,
        low: 434.39,
        close: 435.55,
        volume: 0
      },
      {
        time: new Date(2013, 5, 13),
        open: 434.06,
        high: 439.39,
        low: 432.32,
        close: 438.06,
        volume: 0
      },
      {
        time: new Date(2013, 5, 14),
        open: 439.61,
        high: 441.91,
        low: 436.63,
        close: 437.08,
        volume: 0
      },
      {
        time: new Date(2013, 5, 17),
        open: 439.18,
        high: 444.27,
        low: 438.7,
        close: 442.68,
        volume: 0
      },
      {
        time: new Date(2013, 5, 18),
        open: 443.88,
        high: 450.05,
        low: 443.73,
        close: 449.86,
        volume: 0
      },
      {
        time: new Date(2013, 5, 19),
        open: 450.23,
        high: 454.96,
        low: 448.3,
        close: 449.89,
        volume: 0
      },
      {
        time: new Date(2013, 5, 20),
        open: 446.55,
        high: 450.05,
        low: 441.21,
        close: 441.93,
        volume: 0
      },
      {
        time: new Date(2013, 5, 21),
        open: 443.73,
        high: 444.5,
        low: 436.1,
        close: 440.02,
        volume: 0
      },
      {
        time: new Date(2013, 5, 24),
        open: 435.5,
        high: 437.72,
        low: 431.19,
        close: 434.46,
        volume: 0
      },
      {
        time: new Date(2013, 5, 25),
        open: 438.19,
        high: 439.4,
        low: 431.82,
        close: 432.67,
        volume: 0
      },
      {
        time: new Date(2013, 5, 26),
        open: 436.44,
        high: 438.56,
        low: 434.85,
        close: 436.39,
        volume: 0
      },
      {
        time: new Date(2013, 5, 27),
        open: 438.96,
        high: 441.9,
        low: 437.89,
        close: 438.1,
        volume: 0
      },
      {
        time: new Date(2013, 5, 28),
        open: 437.01,
        high: 440.48,
        low: 436.66,
        close: 439.74,
        volume: 0
      },
      {
        time: new Date(2013, 6, 1),
        open: 442.78,
        high: 445.59,
        low: 442.06,
        close: 443.5,
        volume: 0
      },
      {
        time: new Date(2013, 6, 2),
        open: 444.65,
        high: 445.05,
        low: 438.2,
        close: 440.71,
        volume: 0
      },
      {
        time: new Date(2013, 6, 3),
        open: 439.51,
        high: 444.14,
        low: 438.81,
        close: 442.77,
        volume: 0
      },
      {
        time: new Date(2013, 6, 5),
        open: 444.56,
        high: 447.26,
        low: 443.23,
        close: 446.3,
        volume: 0
      },
      {
        time: new Date(2013, 6, 8),
        open: 449.16,
        high: 452.68,
        low: 448.09,
        close: 452.09,
        volume: 0
      },
      {
        time: new Date(2013, 6, 9),
        open: 455.04,
        high: 456.02,
        low: 448.54,
        close: 452.17,
        volume: 0
      },
      {
        time: new Date(2013, 6, 10),
        open: 451.27,
        high: 455.11,
        low: 449.74,
        close: 452.54,
        volume: 0
      },
      {
        time: new Date(2013, 6, 11),
        open: 456.04,
        high: 459.94,
        low: 453.81,
        close: 459.66,
        volume: 0
      },
      {
        time: new Date(2013, 6, 12),
        open: 459.54,
        high: 461.04,
        low: 457.16,
        close: 461.04,
        volume: 0
      },
      {
        time: new Date(2013, 6, 15),
        open: 461.69,
        high: 463.54,
        low: 457.72,
        close: 461.88,
        volume: 0
      },
      {
        time: new Date(2013, 6, 16),
        open: 463.1,
        high: 463.52,
        low: 456.49,
        close: 459.34,
        volume: 0
      },
      {
        time: new Date(2013, 6, 17),
        open: 460.04,
        high: 462.97,
        low: 457.69,
        close: 458.82,
        volume: 0
      },
      {
        time: new Date(2013, 6, 18),
        open: 459.04,
        high: 459.54,
        low: 451.14,
        close: 454.88,
        volume: 0
      },
      {
        time: new Date(2013, 6, 19),
        open: 442.86,
        high: 451.02,
        low: 437.37,
        close: 447.85,
        volume: 0
      },
      {
        time: new Date(2013, 6, 22),
        open: 450.55,
        high: 455.88,
        low: 448.05,
        close: 454.89,
        volume: 0
      },
      {
        time: new Date(2013, 6, 23),
        open: 454.89,
        high: 456.04,
        low: 449.34,
        close: 451.45,
        volume: 0
      },
      {
        time: new Date(2013, 6, 24),
        open: 453.18,
        high: 454.69,
        low: 449.9,
        close: 451.0,
        volume: 0
      },
      {
        time: new Date(2013, 6, 25),
        open: 446.49,
        high: 447.98,
        low: 442.6,
        close: 443.41,
        volume: 0
      },
      {
        time: new Date(2013, 6, 26),
        open: 443.05,
        high: 444.55,
        low: 440.56,
        close: 442.23,
        volume: 0
      },
      {
        time: new Date(2013, 6, 29),
        open: 442.01,
        high: 446.96,
        low: 440.0,
        close: 440.69,
        volume: 0
      },
      {
        time: new Date(2013, 6, 30),
        open: 442.29,
        high: 447.36,
        low: 439.99,
        close: 445.01,
        volume: 0
      },
      {
        time: new Date(2013, 6, 31),
        open: 446.05,
        high: 447.81,
        low: 442.65,
        close: 443.43,
        volume: 0
      },
      {
        time: new Date(2013, 7, 1),
        open: 447.05,
        high: 451.82,
        low: 447.05,
        close: 451.66,
        volume: 0
      },
      {
        time: new Date(2013, 7, 2),
        open: 451.27,
        high: 453.05,
        low: 449.96,
        close: 452.83,
        volume: 0
      },
      {
        time: new Date(2013, 7, 5),
        open: 452.24,
        high: 452.31,
        low: 449.15,
        close: 452.05,
        volume: 0
      },
      {
        time: new Date(2013, 7, 6),
        open: 451.89,
        high: 454.4,
        low: 447.42,
        close: 447.84,
        volume: 0
      },
      {
        time: new Date(2013, 7, 7),
        open: 447.07,
        high: 448.78,
        low: 444.1,
        close: 444.88,
        volume: 0
      },
      {
        time: new Date(2013, 7, 8),
        open: 447.3,
        high: 447.47,
        low: 442.2,
        close: 445.88,
        volume: 0
      },
      {
        time: new Date(2013, 7, 9),
        open: 444.83,
        high: 447.31,
        low: 444.56,
        close: 444.76,
        volume: 0
      },
      {
        time: new Date(2013, 7, 12),
        open: 443.01,
        high: 443.06,
        low: 440.38,
        close: 442.31,
        volume: 0
      },
      {
        time: new Date(2013, 7, 13),
        open: 442.97,
        high: 443.81,
        low: 437.66,
        close: 440.18,
        volume: 0
      },
      {
        time: new Date(2013, 7, 14),
        open: 438.75,
        high: 439.67,
        low: 433.15,
        close: 434.47,
        volume: 0
      },
      {
        time: new Date(2013, 7, 15),
        open: 431.79,
        high: 432.03,
        low: 428.57,
        close: 429.4,
        volume: 0
      },
      {
        time: new Date(2013, 7, 16),
        open: 430.21,
        high: 430.79,
        low: 427.84,
        close: 428.03,
        volume: 0
      },
      {
        time: new Date(2013, 7, 19),
        open: 428.43,
        high: 435.56,
        low: 428.3,
        close: 432.39,
        volume: 0
      },
      {
        time: new Date(2013, 7, 20),
        open: 433.74,
        high: 435.62,
        low: 431.34,
        close: 432.28,
        volume: 0
      },
      {
        time: new Date(2013, 7, 21),
        open: 434.89,
        high: 438.02,
        low: 432.82,
        close: 434.23,
        volume: 0
      },
      {
        time: new Date(2013, 7, 22),
        open: 435.91,
        high: 436.94,
        low: 434.69,
        close: 436.42,
        volume: 0
      },
      {
        time: new Date(2013, 7, 23),
        open: 438.48,
        high: 438.56,
        low: 434.44,
        close: 434.67,
        volume: 0
      },
      {
        time: new Date(2013, 7, 26),
        open: 434.56,
        high: 437.01,
        low: 432.59,
        close: 432.76,
        volume: 0
      },
      {
        time: new Date(2013, 7, 27),
        open: 429.38,
        high: 431.43,
        low: 423.53,
        close: 424.65,
        volume: 0
      },
      {
        time: new Date(2013, 7, 28),
        open: 424.7,
        high: 427.28,
        low: 423.46,
        close: 423.85,
        volume: 0
      },
      {
        time: new Date(2013, 7, 29),
        open: 424.11,
        high: 429.76,
        low: 423.87,
        close: 427.29,
        volume: 0
      },
      {
        time: new Date(2013, 7, 30),
        open: 427.45,
        high: 428.59,
        low: 422.36,
        close: 423.03,
        volume: 0
      },
      {
        time: new Date(2013, 8, 3),
        open: 426.75,
        high: 432.66,
        low: 426.55,
        close: 429.76,
        volume: 0
      },
      {
        time: new Date(2013, 8, 4),
        open: 429.74,
        high: 436.31,
        low: 427.16,
        close: 435.38,
        volume: 0
      },
      {
        time: new Date(2013, 8, 5),
        open: 436.31,
        high: 439.5,
        low: 435.37,
        close: 439.34,
        volume: 0
      },
      {
        time: new Date(2013, 8, 6),
        open: 440.78,
        high: 441.45,
        low: 436.43,
        close: 439.35,
        volume: 0
      },
      {
        time: new Date(2013, 8, 9),
        open: 441.42,
        high: 444.43,
        low: 440.77,
        close: 443.58,
        volume: 0
      },
      {
        time: new Date(2013, 8, 10),
        open: 444.56,
        high: 445.55,
        low: 441.56,
        close: 443.89,
        volume: 0
      },
      {
        time: new Date(2013, 8, 11),
        open: 443.83,
        high: 448.04,
        low: 442.6,
        close: 447.65,
        volume: 0
      },
      {
        time: new Date(2013, 8, 12),
        open: 448.25,
        high: 448.5,
        low: 444.56,
        close: 446.08,
        volume: 0
      },
      {
        time: new Date(2013, 8, 13),
        open: 446.8,
        high: 447.39,
        low: 441.98,
        close: 444.09,
        volume: 0
      },
      {
        time: new Date(2013, 8, 16),
        open: 447.65,
        high: 448.05,
        low: 441.99,
        close: 443.44,
        volume: 0
      },
      {
        time: new Date(2013, 8, 17),
        open: 443.26,
        high: 443.75,
        low: 440.06,
        close: 442.61,
        volume: 0
      },
      {
        time: new Date(2013, 8, 18),
        open: 442.73,
        high: 451.53,
        low: 441.09,
        close: 451.21,
        volume: 0
      },
      {
        time: new Date(2013, 8, 19),
        open: 452.54,
        high: 452.54,
        low: 447.25,
        close: 448.75,
        volume: 0
      },
      {
        time: new Date(2013, 8, 20),
        open: 448.75,
        high: 451.61,
        low: 447.36,
        close: 451.1,
        volume: 0
      },
      {
        time: new Date(2013, 8, 23),
        open: 447.63,
        high: 450.34,
        low: 442.16,
        close: 442.81,
        volume: 0
      },
      {
        time: new Date(2013, 8, 24),
        open: 442.81,
        high: 444.6,
        low: 440.26,
        close: 442.98,
        volume: 0
      },
      {
        time: new Date(2013, 8, 25),
        open: 442.83,
        high: 442.83,
        low: 437.36,
        close: 438.18,
        volume: 0
      },
      {
        time: new Date(2013, 8, 26),
        open: 438.71,
        high: 440.93,
        low: 437.06,
        close: 438.65,
        volume: 0
      },
      {
        time: new Date(2013, 8, 27),
        open: 436.97,
        high: 438.32,
        low: 435.22,
        close: 437.76,
        volume: 0
      },
      {
        time: new Date(2013, 8, 30),
        open: 434.11,
        high: 439.98,
        low: 433.72,
        close: 437.52,
        volume: 0
      },
      {
        time: new Date(2013, 9, 1),
        open: 439.68,
        high: 443.39,
        low: 439.58,
        close: 443.06,
        volume: 0
      },
      {
        time: new Date(2013, 9, 2),
        open: 440.92,
        high: 444.23,
        low: 438.47,
        close: 443.55,
        volume: 0
      },
      {
        time: new Date(2013, 9, 3),
        open: 443.56,
        high: 446.6,
        low: 435.61,
        close: 437.61,
        volume: 0
      },
      {
        time: new Date(2013, 9, 4),
        open: 437.06,
        high: 438.32,
        low: 434.56,
        close: 435.74,
        volume: 0
      },
      {
        time: new Date(2013, 9, 7),
        open: 433.29,
        high: 436.56,
        low: 431.62,
        close: 432.44,
        volume: 0
      },
      {
        time: new Date(2013, 9, 8),
        open: 432.23,
        high: 432.56,
        low: 425.39,
        close: 426.41,
        volume: 0
      },
      {
        time: new Date(2013, 9, 9),
        open: 427.71,
        high: 430.89,
        low: 421.07,
        close: 427.5,
        volume: 0
      },
      {
        time: new Date(2013, 9, 10),
        open: 431.49,
        high: 433.98,
        low: 429.67,
        close: 433.69,
        volume: 0
      },
      {
        time: new Date(2013, 9, 11),
        open: 432.58,
        high: 436.3,
        low: 432.22,
        close: 435.56,
        volume: 0
      },
      {
        time: new Date(2013, 9, 14),
        open: 432.9,
        high: 437.69,
        low: 432.26,
        close: 437.62,
        volume: 0
      },
      {
        time: new Date(2013, 9, 15),
        open: 437.44,
        high: 442.37,
        low: 436.56,
        close: 440.56,
        volume: 0
      },
      {
        time: new Date(2013, 9, 16),
        open: 442.49,
        high: 448.72,
        low: 441.56,
        close: 448.56,
        volume: 0
      },
      {
        time: new Date(2013, 9, 17),
        open: 446.05,
        high: 448.0,
        low: 442.42,
        close: 443.95,
        volume: 0
      },
      {
        time: new Date(2013, 9, 18),
        open: 487.8,
        high: 507.22,
        low: 486.51,
        close: 505.2,
        volume: 0
      },
      {
        time: new Date(2013, 9, 21),
        open: 505.22,
        high: 508.99,
        low: 499.28,
        close: 501.15,
        volume: 0
      },
      {
        time: new Date(2013, 9, 22),
        open: 502.0,
        high: 505.99,
        low: 497.4,
        close: 503.0,
        volume: 0
      },
      {
        time: new Date(2013, 9, 23),
        open: 500.0,
        high: 516.86,
        low: 499.81,
        close: 515.19,
        volume: 0
      },
      {
        time: new Date(2013, 9, 24),
        open: 515.42,
        high: 519.76,
        low: 511.89,
        close: 512.26,
        volume: 0
      },
      {
        time: new Date(2013, 9, 25),
        open: 513.9,
        high: 513.9,
        low: 504.86,
        close: 507.09,
        volume: 0
      },
      {
        time: new Date(2013, 9, 28),
        open: 507.09,
        high: 511.2,
        low: 505.99,
        close: 506.99,
        volume: 0
      },
      {
        time: new Date(2013, 9, 29),
        open: 509.04,
        high: 517.95,
        low: 506.24,
        close: 517.6,
        volume: 0
      },
      {
        time: new Date(2013, 9, 30),
        open: 518.2,
        high: 518.24,
        low: 512.49,
        close: 514.69,
        volume: 0
      },
      {
        time: new Date(2013, 9, 31),
        open: 513.95,
        high: 520.24,
        low: 511.47,
        close: 514.77,
        volume: 0
      },
      {
        time: new Date(2013, 10, 1),
        open: 515.38,
        high: 517.48,
        low: 512.04,
        close: 513.01,
        volume: 0
      },
      {
        time: new Date(2013, 10, 4),
        open: 515.23,
        high: 515.67,
        low: 510.5,
        close: 512.54,
        volume: 0
      },
      {
        time: new Date(2013, 10, 5),
        open: 509.66,
        high: 515.31,
        low: 508.2,
        close: 510.25,
        volume: 0
      },
      {
        time: new Date(2013, 10, 6),
        open: 512.29,
        high: 512.99,
        low: 507.18,
        close: 510.86,
        volume: 0
      },
      {
        time: new Date(2013, 10, 7),
        open: 510.79,
        high: 511.45,
        low: 503.32,
        close: 503.47,
        volume: 0
      },
      {
        time: new Date(2013, 10, 8),
        open: 503.87,
        high: 508.74,
        low: 503.75,
        close: 507.51,
        volume: 0
      },
      {
        time: new Date(2013, 10, 11),
        open: 504.25,
        high: 507.46,
        low: 503.5,
        close: 504.79,
        volume: 0
      },
      {
        time: new Date(2013, 10, 12),
        open: 503.35,
        high: 508.27,
        low: 502.0,
        close: 505.38,
        volume: 0
      },
      {
        time: new Date(2013, 10, 13),
        open: 502.87,
        high: 515.91,
        low: 502.75,
        close: 515.72,
        volume: 0
      },
      {
        time: new Date(2013, 10, 14),
        open: 516.44,
        high: 519.36,
        low: 514.66,
        close: 517.1,
        volume: 0
      },
      {
        time: new Date(2013, 10, 15),
        open: 516.92,
        high: 518.48,
        low: 514.64,
        close: 516.26,
        volume: 0
      },
      {
        time: new Date(2013, 10, 18),
        open: 517.36,
        high: 523.85,
        low: 514.11,
        close: 515.26,
        volume: 0
      },
      {
        time: new Date(2013, 10, 19),
        open: 515.34,
        high: 516.86,
        low: 511.01,
        close: 512.09,
        volume: 0
      },
      {
        time: new Date(2013, 10, 20),
        open: 514.46,
        high: 516.16,
        low: 509.67,
        close: 510.64,
        volume: 0
      },
      {
        time: new Date(2013, 10, 21),
        open: 512.99,
        high: 518.64,
        low: 512.49,
        close: 516.52,
        volume: 0
      },
      {
        time: new Date(2013, 10, 22),
        open: 516.19,
        high: 517.57,
        low: 514.1,
        close: 515.43,
        volume: 0
      },
      {
        time: new Date(2013, 10, 25),
        open: 518.06,
        high: 526.07,
        low: 516.99,
        close: 522.44,
        volume: 0
      },
      {
        time: new Date(2013, 10, 26),
        open: 523.78,
        high: 530.22,
        low: 520.95,
        close: 528.68,
        volume: 0
      },
      {
        time: new Date(2013, 10, 27),
        open: 530.48,
        high: 533.47,
        low: 529.47,
        close: 531.02,
        volume: 0
      },
      {
        time: new Date(2013, 10, 29),
        open: 530.55,
        high: 532.78,
        low: 529.2,
        close: 529.27,
        volume: 0
      },
      {
        time: new Date(2013, 11, 2),
        open: 531.22,
        high: 532.64,
        low: 524.85,
        close: 526.71,
        volume: 0
      },
      {
        time: new Date(2013, 11, 3),
        open: 524.95,
        high: 531.19,
        low: 523.99,
        close: 526.1,
        volume: 0
      },
      {
        time: new Date(2013, 11, 4),
        open: 525.16,
        high: 531.46,
        low: 524.48,
        close: 528.56,
        volume: 0
      },
      {
        time: new Date(2013, 11, 5),
        open: 528.07,
        high: 529.3,
        low: 525.02,
        close: 528.14,
        volume: 0
      },
      {
        time: new Date(2013, 11, 6),
        open: 534.36,
        high: 534.46,
        low: 529.51,
        close: 534.4,
        volume: 0
      },
      {
        time: new Date(2013, 11, 9),
        open: 534.51,
        high: 540.61,
        low: 533.48,
        close: 538.53,
        volume: 0
      },
      {
        time: new Date(2013, 11, 10),
        open: 537.29,
        high: 545.61,
        low: 537.29,
        close: 541.79,
        volume: 0
      },
      {
        time: new Date(2013, 11, 11),
        open: 543.16,
        high: 545.11,
        low: 537.05,
        close: 538.11,
        volume: 0
      },
      {
        time: new Date(2013, 11, 12),
        open: 539.25,
        high: 540.93,
        low: 533.97,
        close: 534.45,
        volume: 0
      },
      {
        time: new Date(2013, 11, 13),
        open: 537.07,
        high: 537.61,
        low: 528.41,
        close: 529.86,
        volume: 0
      },
      {
        time: new Date(2013, 11, 16),
        open: 530.97,
        high: 536.81,
        low: 530.47,
        close: 535.95,
        volume: 0
      },
      {
        time: new Date(2013, 11, 17),
        open: 536.51,
        high: 539.84,
        low: 533.66,
        close: 534.4,
        volume: 0
      },
      {
        time: new Date(2013, 11, 18),
        open: 535.46,
        high: 541.93,
        low: 528.99,
        close: 541.83,
        volume: 0
      },
      {
        time: new Date(2013, 11, 19),
        open: 540.18,
        high: 545.45,
        low: 539.0,
        close: 542.57,
        volume: 0
      },
      {
        time: new Date(2013, 11, 20),
        open: 544.1,
        high: 550.03,
        low: 543.46,
        close: 549.76,
        volume: 0
      },
      {
        time: new Date(2013, 11, 23),
        open: 553.37,
        high: 557.34,
        low: 552.01,
        close: 556.99,
        volume: 0
      },
      {
        time: new Date(2013, 11, 24),
        open: 556.93,
        high: 557.06,
        low: 553.5,
        close: 555.36,
        volume: 0
      },
      {
        time: new Date(2013, 11, 26),
        open: 556.45,
        high: 558.94,
        low: 553.79,
        close: 558.17,
        volume: 0
      },
      {
        time: new Date(2013, 11, 27),
        open: 559.44,
        high: 559.58,
        low: 555.91,
        close: 558.64,
        volume: 0
      },
      {
        time: new Date(2013, 11, 30),
        open: 559.61,
        high: 559.69,
        low: 553.96,
        close: 554.18,
        volume: 0
      },
      {
        time: new Date(2013, 11, 31),
        open: 555.56,
        high: 559.94,
        low: 552.58,
        close: 559.79,
        volume: 0
      },
      {
        time: new Date(2014, 0, 2),
        open: 557.17,
        high: 558.32,
        low: 553.58,
        close: 556.0,
        volume: 0
      },
      {
        time: new Date(2014, 0, 3),
        open: 556.94,
        high: 557.91,
        low: 551.91,
        close: 551.95,
        volume: 0
      },
      {
        time: new Date(2014, 0, 6),
        open: 555.95,
        high: 558.87,
        low: 552.67,
        close: 558.1,
        volume: 0
      },
      {
        time: new Date(2014, 0, 7),
        open: 561.94,
        high: 569.28,
        low: 560.02,
        close: 568.86,
        volume: 0
      },
      {
        time: new Date(2014, 0, 8),
        open: 572.43,
        high: 573.09,
        low: 566.08,
        close: 570.04,
        volume: 0
      },
      {
        time: new Date(2014, 0, 9),
        open: 571.15,
        high: 571.54,
        low: 562.22,
        close: 564.55,
        volume: 0
      },
      {
        time: new Date(2014, 0, 10),
        open: 568.97,
        high: 568.97,
        low: 560.56,
        close: 564.52,
        volume: 0
      },
      {
        time: new Date(2014, 0, 13),
        open: 562.67,
        high: 572.88,
        low: 558.03,
        close: 560.93,
        volume: 0
      },
      {
        time: new Date(2014, 0, 14),
        open: 568.41,
        high: 574.92,
        low: 563.48,
        close: 574.13,
        volume: 0
      },
      {
        time: new Date(2014, 0, 15),
        open: 575.92,
        high: 576.92,
        low: 571.32,
        close: 573.74,
        volume: 0
      },
      {
        time: new Date(2014, 0, 16),
        open: 573.98,
        high: 578.39,
        low: 573.43,
        close: 577.53,
        volume: 0
      },
      {
        time: new Date(2014, 0, 17),
        open: 577.85,
        high: 579.73,
        low: 571.53,
        close: 574.69,
        volume: 0
      },
      {
        time: new Date(2014, 0, 21),
        open: 579.88,
        high: 581.42,
        low: 575.07,
        close: 581.27,
        volume: 0
      },
      {
        time: new Date(2014, 0, 22),
        open: 582.72,
        high: 583.36,
        low: 578.85,
        close: 581.93,
        volume: 0
      },
      {
        time: new Date(2014, 0, 23),
        open: 579.42,
        high: 580.66,
        low: 576.61,
        close: 579.47,
        volume: 0
      },
      {
        time: new Date(2014, 0, 24),
        open: 574.93,
        high: 576.2,
        low: 560.94,
        close: 561.35,
        volume: 0
      },
      {
        time: new Date(2014, 0, 27),
        open: 562.49,
        high: 562.69,
        low: 540.59,
        close: 550.06,
        volume: 0
      },
      {
        time: new Date(2014, 0, 28),
        open: 554.6,
        high: 562.31,
        low: 554.42,
        close: 560.94,
        volume: 0
      },
      {
        time: new Date(2014, 0, 29),
        open: 559.0,
        high: 560.31,
        low: 549.16,
        close: 552.91,
        volume: 0
      },
      {
        time: new Date(2014, 0, 30),
        open: 571.93,
        high: 575.67,
        low: 563.06,
        close: 567.13,
        volume: 0
      },
      {
        time: new Date(2014, 0, 31),
        open: 585.09,
        high: 592.68,
        low: 574.99,
        close: 589.89,
        volume: 0
      },
      {
        time: new Date(2014, 1, 3),
        open: 589.01,
        high: 590.27,
        low: 565.44,
        close: 566.15,
        volume: 0
      },
      {
        time: new Date(2014, 1, 4),
        open: 568.43,
        high: 576.92,
        low: 567.94,
        close: 568.51,
        volume: 0
      },
      {
        time: new Date(2014, 1, 5),
        open: 571.12,
        high: 574.81,
        low: 563.45,
        close: 571.03,
        volume: 0
      },
      {
        time: new Date(2014, 1, 6),
        open: 574.99,
        high: 579.5,
        low: 573.2,
        close: 579.4,
        volume: 0
      },
      {
        time: new Date(2014, 1, 7),
        open: 583.23,
        high: 588.36,
        low: 579.7,
        close: 588.13,
        volume: 0
      },
      {
        time: new Date(2014, 1, 10),
        open: 585.31,
        high: 590.61,
        low: 583.93,
        close: 585.88,
        volume: 0
      },
      {
        time: new Date(2014, 1, 11),
        open: 589.49,
        high: 595.34,
        low: 585.52,
        close: 594.49,
        volume: 0
      },
      {
        time: new Date(2014, 1, 12),
        open: 593.91,
        high: 594.4,
        low: 590.1,
        close: 592.75,
        volume: 0
      },
      {
        time: new Date(2014, 1, 13),
        open: 589.78,
        high: 599.35,
        low: 589.24,
        close: 599.35,
        volume: 0
      },
      {
        time: new Date(2014, 1, 14),
        open: 597.21,
        high: 601.59,
        low: 595.8,
        close: 600.8,
        volume: 0
      },
      {
        time: new Date(2014, 1, 18),
        open: 600.1,
        high: 605.83,
        low: 599.4,
        close: 604.83,
        volume: 0
      },
      {
        time: new Date(2014, 1, 19),
        open: 602.05,
        high: 604.0,
        low: 598.15,
        close: 600.57,
        volume: 0
      },
      {
        time: new Date(2014, 1, 20),
        open: 600.97,
        high: 602.84,
        low: 599.51,
        close: 601.45,
        volume: 0
      },
      {
        time: new Date(2014, 1, 21),
        open: 603.3,
        high: 604.33,
        low: 600.82,
        close: 601.29,
        volume: 0
      },
      {
        time: new Date(2014, 1, 24),
        open: 602.08,
        high: 609.47,
        low: 601.95,
        close: 605.65,
        volume: 0
      },
      {
        time: new Date(2014, 1, 25),
        open: 607.36,
        high: 611.64,
        low: 604.61,
        close: 609.39,
        volume: 0
      },
      {
        time: new Date(2014, 1, 26),
        open: 611.39,
        high: 613.83,
        low: 606.27,
        close: 609.47,
        volume: 0
      },
      {
        time: new Date(2014, 1, 27),
        open: 608.59,
        high: 611.5,
        low: 607.9,
        close: 609.0,
        volume: 0
      },
      {
        time: new Date(2014, 1, 28),
        open: 609.56,
        high: 611.48,
        low: 602.51,
        close: 607.22,
        volume: 0
      },
      {
        time: new Date(2014, 2, 3),
        open: 602.77,
        high: 603.32,
        low: 595.47,
        close: 600.74,
        volume: 0
      },
      {
        time: new Date(2014, 2, 4),
        open: 606.89,
        high: 607.39,
        low: 604.15,
        close: 606.85,
        volume: 0
      },
      {
        time: new Date(2014, 2, 5),
        open: 606.92,
        high: 610.93,
        low: 605.1,
        close: 608.52,
        volume: 0
      },
      {
        time: new Date(2014, 2, 6),
        open: 610.53,
        high: 612.46,
        low: 608.69,
        close: 609.2,
        volume: 0
      },
      {
        time: new Date(2014, 2, 7),
        open: 612.79,
        high: 612.88,
        low: 605.11,
        close: 606.79,
        volume: 0
      },
      {
        time: new Date(2014, 2, 10),
        open: 607.24,
        high: 608.21,
        low: 601.44,
        close: 605.18,
        volume: 0
      },
      {
        time: new Date(2014, 2, 11),
        open: 606.28,
        high: 606.55,
        low: 597.72,
        close: 599.4,
        volume: 0
      },
      {
        time: new Date(2014, 2, 12),
        open: 597.6,
        high: 603.32,
        low: 591.5,
        close: 603.05,
        volume: 0
      },
      {
        time: new Date(2014, 2, 13),
        open: 603.37,
        high: 604.64,
        low: 591.79,
        close: 593.94,
        volume: 0
      },
      {
        time: new Date(2014, 2, 14),
        open: 590.4,
        high: 594.84,
        low: 585.68,
        close: 585.81,
        volume: 0
      },
      {
        time: new Date(2014, 2, 17),
        open: 589.04,
        high: 597.94,
        low: 588.47,
        close: 595.45,
        volume: 0
      },
      {
        time: new Date(2014, 2, 18),
        open: 596.74,
        high: 605.16,
        low: 595.93,
        close: 605.02,
        volume: 0
      },
      {
        time: new Date(2014, 2, 19),
        open: 605.29,
        high: 605.39,
        low: 596.61,
        close: 599.03,
        volume: 0
      },
      {
        time: new Date(2014, 2, 20),
        open: 599.38,
        high: 604.2,
        low: 597.08,
        close: 597.98,
        volume: 0
      },
      {
        time: new Date(2014, 2, 21),
        open: 602.55,
        high: 604.21,
        low: 590.63,
        close: 590.93,
        volume: 0
      },
      {
        time: new Date(2014, 2, 24),
        open: 591.5,
        high: 591.86,
        low: 572.4,
        close: 578.39,
        volume: 0
      },
      {
        time: new Date(2014, 2, 25),
        open: 582.42,
        high: 584.34,
        low: 572.93,
        close: 578.78,
        volume: 0
      },
      {
        time: new Date(2014, 2, 26),
        open: 580.42,
        high: 585.2,
        low: 565.18,
        close: 565.42,
        volume: 0
      },
      {
        time: new Date(2014, 2, 27),
        open: 564.86,
        high: 565.4,
        low: 550.5,
        close: 556.58,
        volume: 3826676
      },
      {
        time: new Date(2014, 2, 28),
        open: 558.94,
        high: 566.03,
        low: 558.33,
        close: 559.51,
        volume: 2258918
      },
      {
        time: new Date(2014, 2, 31),
        open: 564.63,
        high: 566.93,
        low: 555.87,
        close: 556.7,
        volume: 1942277
      },
      {
        time: new Date(2014, 3, 1),
        open: 559.57,
        high: 568.18,
        low: 558.44,
        close: 566.88,
        volume: 2182626
      },
      {
        time: new Date(2014, 3, 2),
        open: 562.43,
        high: 571.83,
        low: 561.44,
        close: 566.98,
        volume: 2088804
      },
      {
        time: new Date(2014, 3, 3),
        open: 569.85,
        high: 587.28,
        low: 564.13,
        close: 569.74,
        volume: 5087530
      },
      {
        time: new Date(2014, 3, 4),
        open: 574.65,
        high: 577.77,
        low: 543.0,
        close: 543.14,
        volume: 6377658
      },
      {
        time: new Date(2014, 3, 7),
        open: 540.74,
        high: 548.48,
        low: 527.15,
        close: 538.15,
        volume: 4389569
      },
      {
        time: new Date(2014, 3, 8),
        open: 542.6,
        high: 555.0,
        low: 541.61,
        close: 554.9,
        volume: 3152406
      },
      {
        time: new Date(2014, 3, 9),
        open: 559.62,
        high: 565.37,
        low: 552.95,
        close: 564.14,
        volume: 3324742
      },
      {
        time: new Date(2014, 3, 10),
        open: 565.0,
        high: 565.0,
        low: 539.9,
        close: 540.95,
        volume: 4027743
      },
      {
        time: new Date(2014, 3, 11),
        open: 532.55,
        high: 540.0,
        low: 526.53,
        close: 530.6,
        volume: 3916171
      },
      {
        time: new Date(2014, 3, 14),
        open: 538.25,
        high: 544.1,
        low: 529.56,
        close: 532.52,
        volume: 2568020
      },
      {
        time: new Date(2014, 3, 15),
        open: 536.82,
        high: 538.45,
        low: 518.46,
        close: 536.44,
        volume: 3847453
      },
      {
        time: new Date(2014, 3, 16),
        open: 543.0,
        high: 557.0,
        low: 540.0,
        close: 556.54,
        volume: 4879889
      },
      {
        time: new Date(2014, 3, 17),
        open: 548.81,
        high: 549.5,
        low: 531.15,
        close: 536.1,
        volume: 6795393
      },
      {
        time: new Date(2014, 3, 21),
        open: 536.1,
        high: 536.7,
        low: 525.6,
        close: 528.62,
        volume: 2561214
      },
      {
        time: new Date(2014, 3, 22),
        open: 528.64,
        high: 537.23,
        low: 527.51,
        close: 534.81,
        volume: 2359421
      },
      {
        time: new Date(2014, 3, 23),
        open: 533.79,
        high: 533.87,
        low: 526.25,
        close: 526.94,
        volume: 2051066
      },
      {
        time: new Date(2014, 3, 24),
        open: 530.07,
        high: 531.65,
        low: 522.12,
        close: 525.16,
        volume: 1881965
      },
      {
        time: new Date(2014, 3, 25),
        open: 522.51,
        high: 524.7,
        low: 515.42,
        close: 516.18,
        volume: 2097264
      },
      {
        time: new Date(2014, 3, 28),
        open: 517.18,
        high: 518.6,
        low: 502.8,
        close: 517.15,
        volume: 3326429
      },
      {
        time: new Date(2014, 3, 29),
        open: 516.9,
        high: 529.46,
        low: 516.32,
        close: 527.7,
        volume: 2692489
      },
      {
        time: new Date(2014, 3, 30),
        open: 527.6,
        high: 528.0,
        low: 522.52,
        close: 526.66,
        volume: 1746904
      },
      {
        time: new Date(2014, 4, 1),
        open: 527.11,
        high: 532.93,
        low: 523.88,
        close: 531.35,
        volume: 1900432
      },
      {
        time: new Date(2014, 4, 2),
        open: 533.76,
        high: 534.0,
        low: 525.61,
        close: 527.93,
        volume: 1685042
      },
      {
        time: new Date(2014, 4, 5),
        open: 524.82,
        high: 528.9,
        low: 521.32,
        close: 527.81,
        volume: 1021408
      },
      {
        time: new Date(2014, 4, 6),
        open: 525.23,
        high: 526.81,
        low: 515.06,
        close: 515.14,
        volume: 1684381
      },
      {
        time: new Date(2014, 4, 7),
        open: 515.79,
        high: 516.68,
        low: 503.3,
        close: 509.96,
        volume: 3216077
      },
      {
        time: new Date(2014, 4, 8),
        open: 508.46,
        high: 517.23,
        low: 506.45,
        close: 511.0,
        volume: 2016131
      },
      {
        time: new Date(2014, 4, 9),
        open: 510.75,
        high: 519.9,
        low: 504.2,
        close: 518.73,
        volume: 2432783
      },
      {
        time: new Date(2014, 4, 12),
        open: 523.51,
        high: 530.19,
        low: 519.01,
        close: 529.92,
        volume: 1908392
      },
      {
        time: new Date(2014, 4, 13),
        open: 530.89,
        high: 536.07,
        low: 529.51,
        close: 533.09,
        volume: 1648907
      },
      {
        time: new Date(2014, 4, 14),
        open: 533.0,
        high: 533.0,
        low: 525.29,
        close: 526.65,
        volume: 1191863
      },
      {
        time: new Date(2014, 4, 15),
        open: 525.7,
        high: 525.87,
        low: 517.42,
        close: 519.98,
        volume: 1703758
      },
      {
        time: new Date(2014, 4, 16),
        open: 521.39,
        high: 521.8,
        low: 515.44,
        close: 520.63,
        volume: 1481688
      },
      {
        time: new Date(2014, 4, 19),
        open: 519.7,
        high: 529.78,
        low: 517.58,
        close: 528.86,
        volume: 1276362
      },
      {
        time: new Date(2014, 4, 20),
        open: 529.74,
        high: 536.23,
        low: 526.3,
        close: 529.77,
        volume: 1780113
      },
      {
        time: new Date(2014, 4, 21),
        open: 532.9,
        high: 539.18,
        low: 531.91,
        close: 538.94,
        volume: 1193389
      },
      {
        time: new Date(2014, 4, 22),
        open: 541.13,
        high: 547.6,
        low: 540.78,
        close: 545.06,
        volume: 1611837
      },
      {
        time: new Date(2014, 4, 23),
        open: 547.26,
        high: 553.64,
        low: 543.7,
        close: 552.7,
        volume: 1929632
      },
      {
        time: new Date(2014, 4, 27),
        open: 556.0,
        high: 566.0,
        low: 554.35,
        close: 565.95,
        volume: 2100298
      },
      {
        time: new Date(2014, 4, 28),
        open: 564.57,
        high: 567.84,
        low: 561.0,
        close: 561.68,
        volume: 1647717
      },
      {
        time: new Date(2014, 4, 29),
        open: 563.35,
        high: 564.0,
        low: 558.71,
        close: 560.08,
        volume: 1350657
      },
      {
        time: new Date(2014, 4, 30),
        open: 560.8,
        high: 561.35,
        low: 555.91,
        close: 559.89,
        volume: 1766794
      },
      {
        time: new Date(2014, 5, 2),
        open: 560.7,
        high: 560.9,
        low: 545.73,
        close: 553.93,
        volume: 1434989
      },
      {
        time: new Date(2014, 5, 3),
        open: 550.99,
        high: 552.34,
        low: 542.55,
        close: 544.94,
        volume: 1861921
      },
      {
        time: new Date(2014, 5, 4),
        open: 541.5,
        high: 548.61,
        low: 538.75,
        close: 544.66,
        volume: 1812084
      },
      {
        time: new Date(2014, 5, 5),
        open: 546.4,
        high: 554.95,
        low: 544.45,
        close: 553.9,
        volume: 1684886
      },
      {
        time: new Date(2014, 5, 6),
        open: 558.06,
        high: 558.06,
        low: 548.93,
        close: 556.33,
        volume: 1732592
      },
      {
        time: new Date(2014, 5, 9),
        open: 557.15,
        high: 562.9,
        low: 556.04,
        close: 562.12,
        volume: 1463676
      },
      {
        time: new Date(2014, 5, 10),
        open: 560.51,
        high: 563.6,
        low: 557.9,
        close: 560.55,
        volume: 1349444
      },
      {
        time: new Date(2014, 5, 11),
        open: 558.0,
        high: 559.88,
        low: 555.02,
        close: 558.84,
        volume: 1097380
      },
      {
        time: new Date(2014, 5, 12),
        open: 557.3,
        high: 557.99,
        low: 548.46,
        close: 551.35,
        volume: 1457104
      },
      {
        time: new Date(2014, 5, 13),
        open: 552.26,
        high: 552.3,
        low: 545.56,
        close: 551.76,
        volume: 1217176
      },
      {
        time: new Date(2014, 5, 16),
        open: 549.26,
        high: 549.62,
        low: 541.52,
        close: 544.28,
        volume: 1704027
      },
      {
        time: new Date(2014, 5, 17),
        open: 544.2,
        high: 545.32,
        low: 539.33,
        close: 543.01,
        volume: 1445878
      },
      {
        time: new Date(2014, 5, 18),
        open: 544.86,
        high: 553.56,
        low: 544.0,
        close: 553.37,
        volume: 1737343
      },
      {
        time: new Date(2014, 5, 19),
        open: 554.24,
        high: 555.0,
        low: 548.51,
        close: 554.9,
        volume: 2451341
      },
      {
        time: new Date(2014, 5, 20),
        open: 556.85,
        high: 557.58,
        low: 550.39,
        close: 556.36,
        volume: 4496962
      },
      {
        time: new Date(2014, 5, 23),
        open: 555.15,
        high: 565.0,
        low: 554.25,
        close: 564.95,
        volume: 1534659
      },
      {
        time: new Date(2014, 5, 24),
        open: 565.19,
        high: 572.65,
        low: 561.01,
        close: 564.62,
        volume: 2201789
      },
      {
        time: new Date(2014, 5, 25),
        open: 565.26,
        high: 579.96,
        low: 565.22,
        close: 578.65,
        volume: 1964447
      },
      {
        time: new Date(2014, 5, 26),
        open: 581.0,
        high: 582.45,
        low: 571.85,
        close: 576.0,
        volume: 1737210
      },
      {
        time: new Date(2014, 5, 27),
        open: 577.18,
        high: 579.87,
        low: 573.8,
        close: 577.24,
        volume: 2231174
      },
      {
        time: new Date(2014, 5, 30),
        open: 578.66,
        high: 579.57,
        low: 574.75,
        close: 575.28,
        volume: 1310909
      },
      {
        time: new Date(2014, 6, 1),
        open: 578.32,
        high: 584.4,
        low: 576.65,
        close: 582.67,
        volume: 1446309
      },
      {
        time: new Date(2014, 6, 2),
        open: 583.35,
        high: 585.44,
        low: 580.39,
        close: 582.34,
        volume: 1054936
      },
      {
        time: new Date(2014, 6, 3),
        open: 583.35,
        high: 585.01,
        low: 580.92,
        close: 584.73,
        volume: 712210
      },
      {
        time: new Date(2014, 6, 7),
        open: 583.76,
        high: 586.43,
        low: 579.59,
        close: 582.25,
        volume: 1061833
      },
      {
        time: new Date(2014, 6, 8),
        open: 577.66,
        high: 579.53,
        low: 566.14,
        close: 571.09,
        volume: 1908647
      },
      {
        time: new Date(2014, 6, 9),
        open: 571.58,
        high: 576.72,
        low: 569.38,
        close: 576.08,
        volume: 1113907
      },
      {
        time: new Date(2014, 6, 10),
        open: 565.91,
        high: 576.59,
        low: 565.01,
        close: 571.1,
        volume: 1353317
      },
      {
        time: new Date(2014, 6, 11),
        open: 571.91,
        high: 580.85,
        low: 571.42,
        close: 579.18,
        volume: 1617569
      },
      {
        time: new Date(2014, 6, 14),
        open: 582.6,
        high: 585.21,
        low: 578.03,
        close: 584.87,
        volume: 1852290
      },
      {
        time: new Date(2014, 6, 15),
        open: 585.74,
        high: 585.8,
        low: 576.56,
        close: 584.78,
        volume: 1618815
      },
      {
        time: new Date(2014, 6, 16),
        open: 588.0,
        high: 588.4,
        low: 582.2,
        close: 582.66,
        volume: 1394560
      },
      {
        time: new Date(2014, 6, 17),
        open: 579.53,
        high: 580.99,
        low: 568.61,
        close: 573.73,
        volume: 3015475
      },
      {
        time: new Date(2014, 6, 18),
        open: 593.0,
        high: 596.8,
        low: 582.0,
        close: 595.08,
        volume: 4006389
      },
      {
        time: new Date(2014, 6, 21),
        open: 591.75,
        high: 594.4,
        low: 585.23,
        close: 589.47,
        volume: 2060334
      },
      {
        time: new Date(2014, 6, 22),
        open: 590.72,
        high: 599.65,
        low: 590.6,
        close: 594.74,
        volume: 1694787
      },
      {
        time: new Date(2014, 6, 23),
        open: 593.23,
        high: 597.85,
        low: 592.5,
        close: 595.98,
        volume: 1229846
      },
      {
        time: new Date(2014, 6, 24),
        open: 596.45,
        high: 599.5,
        low: 591.77,
        close: 593.35,
        volume: 1033341
      },
      {
        time: new Date(2014, 6, 25),
        open: 590.4,
        high: 591.86,
        low: 587.03,
        close: 589.02,
        volume: 932724
      },
      {
        time: new Date(2014, 6, 28),
        open: 588.07,
        high: 592.5,
        low: 584.75,
        close: 590.6,
        volume: 984161
      },
      {
        time: new Date(2014, 6, 29),
        open: 588.75,
        high: 589.7,
        low: 583.52,
        close: 585.61,
        volume: 1346647
      },
      {
        time: new Date(2014, 6, 30),
        open: 586.55,
        high: 589.5,
        low: 584.0,
        close: 587.42,
        volume: 1013932
      },
      {
        time: new Date(2014, 6, 31),
        open: 580.6,
        high: 583.65,
        low: 570.0,
        close: 571.6,
        volume: 2099516
      },
      {
        time: new Date(2014, 7, 1),
        open: 570.4,
        high: 575.96,
        low: 562.85,
        close: 566.07,
        volume: 1950171
      },
      {
        time: new Date(2014, 7, 4),
        open: 569.04,
        high: 575.35,
        low: 564.1,
        close: 573.15,
        volume: 1427169
      },
      {
        time: new Date(2014, 7, 5),
        open: 570.05,
        high: 571.98,
        low: 562.61,
        close: 565.07,
        volume: 1556685
      },
      {
        time: new Date(2014, 7, 6),
        open: 561.78,
        high: 570.7,
        low: 560.0,
        close: 566.37,
        volume: 1330877
      },
      {
        time: new Date(2014, 7, 7),
        open: 568.0,
        high: 569.89,
        low: 561.1,
        close: 563.36,
        volume: 1108900
      },
      {
        time: new Date(2014, 7, 8),
        open: 563.56,
        high: 570.25,
        low: 560.35,
        close: 568.77,
        volume: 1492491
      },
      {
        time: new Date(2014, 7, 11),
        open: 569.99,
        high: 570.49,
        low: 566.0,
        close: 567.88,
        volume: 1215968
      },
      {
        time: new Date(2014, 7, 12),
        open: 564.52,
        high: 565.9,
        low: 560.88,
        close: 562.73,
        volume: 1537758
      },
      {
        time: new Date(2014, 7, 13),
        open: 567.31,
        high: 575.0,
        low: 565.75,
        close: 574.78,
        volume: 1437922
      },
      {
        time: new Date(2014, 7, 14),
        open: 576.18,
        high: 577.9,
        low: 570.88,
        close: 574.65,
        volume: 982926
      },
      {
        time: new Date(2014, 7, 15),
        open: 577.86,
        high: 579.38,
        low: 570.52,
        close: 573.48,
        volume: 1517056
      },
      {
        time: new Date(2014, 7, 18),
        open: 576.11,
        high: 584.51,
        low: 576.0,
        close: 582.16,
        volume: 1282531
      },
      {
        time: new Date(2014, 7, 19),
        open: 585.0,
        high: 587.34,
        low: 584.0,
        close: 586.86,
        volume: 979298
      },
      {
        time: new Date(2014, 7, 20),
        open: 585.88,
        high: 586.7,
        low: 582.57,
        close: 584.49,
        volume: 1034779
      },
      {
        time: new Date(2014, 7, 21),
        open: 583.82,
        high: 584.5,
        low: 581.14,
        close: 583.37,
        volume: 912854
      },
      {
        time: new Date(2014, 7, 22),
        open: 583.59,
        high: 585.24,
        low: 580.64,
        close: 582.56,
        volume: 789484
      },
      {
        time: new Date(2014, 7, 25),
        open: 584.72,
        high: 585.0,
        low: 579.0,
        close: 580.2,
        volume: 1358810
      },
      {
        time: new Date(2014, 7, 26),
        open: 581.26,
        high: 581.8,
        low: 576.58,
        close: 577.86,
        volume: 1635465
      },
      {
        time: new Date(2014, 7, 27),
        open: 577.27,
        high: 578.49,
        low: 570.1,
        close: 571.0,
        volume: 1700161
      },
      {
        time: new Date(2014, 7, 28),
        open: 569.56,
        high: 573.25,
        low: 567.1,
        close: 569.2,
        volume: 1295963
      },
      {
        time: new Date(2014, 7, 29),
        open: 571.33,
        high: 572.04,
        low: 567.07,
        close: 571.6,
        volume: 1081231
      },
      {
        time: new Date(2014, 8, 2),
        open: 571.85,
        high: 577.83,
        low: 571.19,
        close: 577.33,
        volume: 1576830
      },
      {
        time: new Date(2014, 8, 3),
        open: 580.0,
        high: 582.99,
        low: 575.0,
        close: 577.94,
        volume: 1214586
      },
      {
        time: new Date(2014, 8, 4),
        open: 580.0,
        high: 586.0,
        low: 579.22,
        close: 581.98,
        volume: 1459956
      },
      {
        time: new Date(2014, 8, 5),
        open: 583.98,
        high: 586.55,
        low: 581.95,
        close: 586.08,
        volume: 1629477
      },
      {
        time: new Date(2014, 8, 8),
        open: 586.6,
        high: 591.77,
        low: 586.3,
        close: 589.72,
        volume: 1429101
      },
      {
        time: new Date(2014, 8, 9),
        open: 588.9,
        high: 589.0,
        low: 580.0,
        close: 581.01,
        volume: 1286722
      },
      {
        time: new Date(2014, 8, 10),
        open: 581.5,
        high: 583.5,
        low: 576.94,
        close: 583.1,
        volume: 975145
      },
      {
        time: new Date(2014, 8, 11),
        open: 580.36,
        high: 581.81,
        low: 576.26,
        close: 581.35,
        volume: 1217721
      },
      {
        time: new Date(2014, 8, 12),
        open: 581.0,
        high: 581.64,
        low: 574.46,
        close: 575.62,
        volume: 1597677
      },
      {
        time: new Date(2014, 8, 15),
        open: 572.94,
        high: 574.95,
        low: 568.21,
        close: 573.1,
        volume: 1596224
      },
      {
        time: new Date(2014, 8, 16),
        open: 572.76,
        high: 581.5,
        low: 572.66,
        close: 579.95,
        volume: 1478306
      },
      {
        time: new Date(2014, 8, 17),
        open: 580.01,
        high: 587.52,
        low: 578.78,
        close: 584.77,
        volume: 1690994
      },
      {
        time: new Date(2014, 8, 18),
        open: 587.0,
        high: 589.54,
        low: 585.0,
        close: 589.27,
        volume: 1442012
      },
      {
        time: new Date(2014, 8, 19),
        open: 591.5,
        high: 596.48,
        low: 589.5,
        close: 596.08,
        volume: 3727045
      },
      {
        time: new Date(2014, 8, 22),
        open: 593.82,
        high: 593.95,
        low: 583.46,
        close: 587.37,
        volume: 1687710
      },
      {
        time: new Date(2014, 8, 23),
        open: 586.85,
        high: 586.85,
        low: 581.0,
        close: 581.13,
        volume: 1467703
      },
      {
        time: new Date(2014, 8, 24),
        open: 581.46,
        high: 589.63,
        low: 580.52,
        close: 587.99,
        volume: 1724537
      },
      {
        time: new Date(2014, 8, 25),
        open: 587.55,
        high: 587.98,
        low: 574.18,
        close: 575.06,
        volume: 1925350
      },
      {
        time: new Date(2014, 8, 26),
        open: 576.06,
        high: 579.25,
        low: 574.66,
        close: 577.1,
        volume: 1439807
      },
      {
        time: new Date(2014, 8, 29),
        open: 571.75,
        high: 578.19,
        low: 571.17,
        close: 576.36,
        volume: 1281204
      },
      {
        time: new Date(2014, 8, 30),
        open: 576.93,
        high: 579.85,
        low: 572.85,
        close: 577.36,
        volume: 1618437
      },
      {
        time: new Date(2014, 9, 1),
        open: 576.01,
        high: 577.58,
        low: 567.01,
        close: 568.27,
        volume: 1445027
      },
      {
        time: new Date(2014, 9, 2),
        open: 567.31,
        high: 571.91,
        low: 563.32,
        close: 570.08,
        volume: 1175307
      },
      {
        time: new Date(2014, 9, 3),
        open: 573.05,
        high: 577.22,
        low: 572.5,
        close: 575.28,
        volume: 1138636
      },
      {
        time: new Date(2014, 9, 6),
        open: 578.8,
        high: 581.0,
        low: 574.44,
        close: 577.35,
        volume: 1211320
      },
      {
        time: new Date(2014, 9, 7),
        open: 574.4,
        high: 575.27,
        low: 563.74,
        close: 563.74,
        volume: 1906427
      },
      {
        time: new Date(2014, 9, 8),
        open: 565.57,
        high: 573.88,
        low: 557.49,
        close: 572.5,
        volume: 1987888
      },
      {
        time: new Date(2014, 9, 9),
        open: 571.18,
        high: 571.49,
        low: 559.06,
        close: 560.88,
        volume: 2519693
      },
      {
        time: new Date(2014, 9, 10),
        open: 557.72,
        high: 565.13,
        low: 544.05,
        close: 544.49,
        volume: 3078634
      },
      {
        time: new Date(2014, 9, 13),
        open: 544.99,
        high: 549.5,
        low: 533.1,
        close: 533.21,
        volume: 2578676
      },
      {
        time: new Date(2014, 9, 14),
        open: 538.9,
        high: 547.19,
        low: 533.17,
        close: 537.94,
        volume: 2217230
      },
      {
        time: new Date(2014, 9, 15),
        open: 531.01,
        high: 532.8,
        low: 518.3,
        close: 530.03,
        volume: 3712536
      },
      {
        time: new Date(2014, 9, 16),
        open: 519.0,
        high: 529.43,
        low: 515.0,
        close: 524.51,
        volume: 3698423
      },
      {
        time: new Date(2014, 9, 17),
        open: 527.25,
        high: 530.98,
        low: 508.53,
        close: 511.17,
        volume: 5530674
      },
      {
        time: new Date(2014, 9, 20),
        open: 509.45,
        high: 521.76,
        low: 508.1,
        close: 520.84,
        volume: 2605505
      },
      {
        time: new Date(2014, 9, 21),
        open: 525.19,
        high: 526.79,
        low: 519.11,
        close: 526.54,
        volume: 2332531
      },
      {
        time: new Date(2014, 9, 22),
        open: 529.89,
        high: 539.8,
        low: 528.8,
        close: 532.71,
        volume: 2917183
      },
      {
        time: new Date(2014, 9, 23),
        open: 539.32,
        high: 547.22,
        low: 535.85,
        close: 543.98,
        volume: 2345296
      },
      {
        time: new Date(2014, 9, 24),
        open: 544.36,
        high: 544.88,
        low: 535.79,
        close: 539.78,
        volume: 1972047
      },
      {
        time: new Date(2014, 9, 27),
        open: 537.03,
        high: 544.41,
        low: 537.03,
        close: 540.77,
        volume: 1184973
      },
      {
        time: new Date(2014, 9, 28),
        open: 543.0,
        high: 548.98,
        low: 541.62,
        close: 548.9,
        volume: 1273372
      },
      {
        time: new Date(2014, 9, 29),
        open: 550.0,
        high: 554.19,
        low: 546.98,
        close: 549.33,
        volume: 1767107
      },
      {
        time: new Date(2014, 9, 30),
        open: 548.95,
        high: 552.8,
        low: 543.51,
        close: 550.31,
        volume: 1451667
      },
      {
        time: new Date(2014, 9, 31),
        open: 559.35,
        high: 559.57,
        low: 554.75,
        close: 559.08,
        volume: 2032887
      },
      {
        time: new Date(2014, 10, 3),
        open: 555.5,
        high: 557.9,
        low: 553.23,
        close: 555.22,
        volume: 1378511
      },
      {
        time: new Date(2014, 10, 4),
        open: 553.0,
        high: 555.5,
        low: 549.3,
        close: 554.11,
        volume: 1240761
      },
      {
        time: new Date(2014, 10, 5),
        open: 556.8,
        high: 556.8,
        low: 544.05,
        close: 545.92,
        volume: 2026740
      },
      {
        time: new Date(2014, 10, 6),
        open: 545.5,
        high: 546.88,
        low: 540.97,
        close: 542.04,
        volume: 1329604
      },
      {
        time: new Date(2014, 10, 7),
        open: 546.21,
        high: 546.21,
        low: 538.67,
        close: 541.01,
        volume: 1629259
      },
      {
        time: new Date(2014, 10, 10),
        open: 541.46,
        high: 549.59,
        low: 541.02,
        close: 547.49,
        volume: 1131546
      },
      {
        time: new Date(2014, 10, 11),
        open: 548.49,
        high: 551.94,
        low: 546.3,
        close: 550.29,
        volume: 964866
      },
      {
        time: new Date(2014, 10, 12),
        open: 550.39,
        high: 550.46,
        low: 545.17,
        close: 547.31,
        volume: 1126594
      },
      {
        time: new Date(2014, 10, 13),
        open: 549.8,
        high: 549.8,
        low: 543.48,
        close: 545.38,
        volume: 1335719
      },
      {
        time: new Date(2014, 10, 14),
        open: 546.68,
        high: 546.68,
        low: 542.15,
        close: 544.4,
        volume: 1285991
      },
      {
        time: new Date(2014, 10, 17),
        open: 543.58,
        high: 543.79,
        low: 534.06,
        close: 536.51,
        volume: 1721282
      },
      {
        time: new Date(2014, 10, 18),
        open: 537.5,
        high: 541.94,
        low: 534.17,
        close: 535.03,
        volume: 1957664
      },
      {
        time: new Date(2014, 10, 19),
        open: 535.0,
        high: 538.24,
        low: 530.08,
        close: 536.99,
        volume: 1388440
      },
      {
        time: new Date(2014, 10, 20),
        open: 531.25,
        high: 535.11,
        low: 531.08,
        close: 534.83,
        volume: 1559131
      },
      {
        time: new Date(2014, 10, 21),
        open: 541.61,
        high: 542.14,
        low: 536.56,
        close: 537.5,
        volume: 2218249
      },
      {
        time: new Date(2014, 10, 24),
        open: 537.65,
        high: 542.7,
        low: 535.62,
        close: 539.27,
        volume: 1701682
      },
      {
        time: new Date(2014, 10, 25),
        open: 539.0,
        high: 543.98,
        low: 538.6,
        close: 541.08,
        volume: 1784967
      },
      {
        time: new Date(2014, 10, 26),
        open: 540.88,
        high: 541.55,
        low: 537.04,
        close: 540.37,
        volume: 1519503
      },
      {
        time: new Date(2014, 10, 28),
        open: 540.62,
        high: 542.0,
        low: 536.6,
        close: 541.83,
        volume: 1145231
      },
      {
        time: new Date(2014, 11, 1),
        open: 538.9,
        high: 541.41,
        low: 531.86,
        close: 533.8,
        volume: 2109599
      },
      {
        time: new Date(2014, 11, 2),
        open: 533.51,
        high: 535.5,
        low: 529.8,
        close: 533.75,
        volume: 1522481
      },
      {
        time: new Date(2014, 11, 3),
        open: 531.44,
        high: 536.0,
        low: 529.26,
        close: 531.32,
        volume: 1279288
      },
      {
        time: new Date(2014, 11, 4),
        open: 531.16,
        high: 537.34,
        low: 528.59,
        close: 537.31,
        volume: 1392208
      },
      {
        time: new Date(2014, 11, 5),
        open: 531.0,
        high: 532.89,
        low: 524.28,
        close: 525.26,
        volume: 2558649
      },
      {
        time: new Date(2014, 11, 8),
        open: 527.13,
        high: 531.0,
        low: 523.79,
        close: 526.98,
        volume: 2327127
      },
      {
        time: new Date(2014, 11, 9),
        open: 522.14,
        high: 534.19,
        low: 520.5,
        close: 533.37,
        volume: 1871268
      },
      {
        time: new Date(2014, 11, 10),
        open: 533.08,
        high: 536.33,
        low: 525.56,
        close: 526.06,
        volume: 1716835
      },
      {
        time: new Date(2014, 11, 11),
        open: 527.8,
        high: 533.92,
        low: 527.1,
        close: 528.34,
        volume: 1610964
      },
      {
        time: new Date(2014, 11, 12),
        open: 523.51,
        high: 528.5,
        low: 518.66,
        close: 518.66,
        volume: 1989117
      },
      {
        time: new Date(2014, 11, 15),
        open: 522.74,
        high: 523.1,
        low: 513.27,
        close: 513.8,
        volume: 2812786
      },
      {
        time: new Date(2014, 11, 16),
        open: 511.56,
        high: 513.05,
        low: 489.0,
        close: 495.39,
        volume: 3953371
      },
      {
        time: new Date(2014, 11, 17),
        open: 497.0,
        high: 507.0,
        low: 496.81,
        close: 504.89,
        volume: 2875281
      },
      {
        time: new Date(2014, 11, 18),
        open: 512.95,
        high: 513.87,
        low: 504.7,
        close: 511.1,
        volume: 2918730
      },
      {
        time: new Date(2014, 11, 19),
        open: 511.51,
        high: 517.72,
        low: 506.91,
        close: 516.35,
        volume: 3680148
      },
      {
        time: new Date(2014, 11, 22),
        open: 516.08,
        high: 526.46,
        low: 516.08,
        close: 524.87,
        volume: 2723599
      },
      {
        time: new Date(2014, 11, 23),
        open: 527.0,
        high: 534.56,
        low: 526.29,
        close: 530.59,
        volume: 2191567
      },
      {
        time: new Date(2014, 11, 24),
        open: 530.51,
        high: 531.76,
        low: 527.02,
        close: 528.77,
        volume: 704035
      },
      {
        time: new Date(2014, 11, 26),
        open: 528.77,
        high: 534.25,
        low: 527.31,
        close: 534.03,
        volume: 1037727
      },
      {
        time: new Date(2014, 11, 29),
        open: 532.19,
        high: 535.48,
        low: 530.01,
        close: 530.33,
        volume: 2276104
      },
      {
        time: new Date(2014, 11, 30),
        open: 528.09,
        high: 531.15,
        low: 527.13,
        close: 530.42,
        volume: 873923
      },
      {
        time: new Date(2014, 11, 31),
        open: 531.25,
        high: 532.6,
        low: 525.8,
        close: 526.4,
        volume: 1371819
      },
      {
        time: new Date(2015, 0, 2),
        open: 529.01,
        high: 531.27,
        low: 524.1,
        close: 524.81,
        volume: 1446662
      },
      {
        time: new Date(2015, 0, 5),
        open: 523.26,
        high: 524.33,
        low: 513.06,
        close: 513.87,
        volume: 2054238
      },
      {
        time: new Date(2015, 0, 6),
        open: 515.0,
        high: 516.18,
        low: 501.05,
        close: 501.96,
        volume: 2891950
      },
      {
        time: new Date(2015, 0, 7),
        open: 507.0,
        high: 507.24,
        low: 499.65,
        close: 501.1,
        volume: 2059366
      },
      {
        time: new Date(2015, 0, 8),
        open: 497.99,
        high: 503.48,
        low: 491.0,
        close: 502.68,
        volume: 3344395
      },
      {
        time: new Date(2015, 0, 9),
        open: 504.76,
        high: 504.92,
        low: 494.79,
        close: 496.17,
        volume: 2065715
      },
      {
        time: new Date(2015, 0, 12),
        open: 494.94,
        high: 495.98,
        low: 487.56,
        close: 492.55,
        volume: 2320446
      },
      {
        time: new Date(2015, 0, 13),
        open: 498.84,
        high: 502.98,
        low: 492.39,
        close: 496.18,
        volume: 2365687
      },
      {
        time: new Date(2015, 0, 14),
        open: 494.65,
        high: 503.23,
        low: 493.0,
        close: 500.87,
        volume: 2229638
      },
      {
        time: new Date(2015, 0, 15),
        open: 505.57,
        high: 505.68,
        low: 497.76,
        close: 501.79,
        volume: 2711355
      },
      {
        time: new Date(2015, 0, 16),
        open: 500.01,
        high: 508.19,
        low: 500.0,
        close: 508.08,
        volume: 2292043
      },
      {
        time: new Date(2015, 0, 20),
        open: 511.0,
        high: 512.5,
        low: 506.02,
        close: 506.9,
        volume: 2225922
      },
      {
        time: new Date(2015, 0, 21),
        open: 507.25,
        high: 519.28,
        low: 506.2,
        close: 518.04,
        volume: 2262455
      },
      {
        time: new Date(2015, 0, 22),
        open: 521.48,
        high: 536.33,
        low: 519.7,
        close: 534.39,
        volume: 2669558
      },
      {
        time: new Date(2015, 0, 23),
        open: 535.59,
        high: 542.17,
        low: 533.0,
        close: 539.95,
        volume: 2275485
      },
      {
        time: new Date(2015, 0, 26),
        open: 538.53,
        high: 539.0,
        low: 529.67,
        close: 535.21,
        volume: 1539524
      },
      {
        time: new Date(2015, 0, 27),
        open: 529.97,
        high: 530.7,
        low: 518.19,
        close: 518.63,
        volume: 1898844
      },
      {
        time: new Date(2015, 0, 28),
        open: 522.78,
        high: 522.99,
        low: 510.0,
        close: 510.0,
        volume: 1679230
      },
      {
        time: new Date(2015, 0, 29),
        open: 511.0,
        high: 511.09,
        low: 501.2,
        close: 510.66,
        volume: 4174924
      },
      {
        time: new Date(2015, 0, 30),
        open: 515.86,
        high: 539.87,
        low: 515.52,
        close: 534.52,
        volume: 5590977
      },
      {
        time: new Date(2015, 1, 2),
        open: 531.73,
        high: 533.0,
        low: 518.55,
        close: 528.48,
        volume: 2841976
      },
      {
        time: new Date(2015, 1, 3),
        open: 528.0,
        high: 533.4,
        low: 523.26,
        close: 529.24,
        volume: 2033085
      },
      {
        time: new Date(2015, 1, 4),
        open: 529.24,
        high: 532.67,
        low: 521.27,
        close: 522.76,
        volume: 1659125
      },
      {
        time: new Date(2015, 1, 5),
        open: 523.79,
        high: 528.5,
        low: 522.09,
        close: 527.58,
        volume: 1844687
      },
      {
        time: new Date(2015, 1, 6),
        open: 527.64,
        high: 537.2,
        low: 526.41,
        close: 531.0,
        volume: 1758650
      },
      {
        time: new Date(2015, 1, 9),
        open: 528.0,
        high: 532.0,
        low: 526.02,
        close: 527.83,
        volume: 1264276
      },
      {
        time: new Date(2015, 1, 10),
        open: 529.3,
        high: 537.7,
        low: 526.92,
        close: 536.94,
        volume: 1745076
      },
      {
        time: new Date(2015, 1, 11),
        open: 535.3,
        high: 538.45,
        low: 533.38,
        close: 535.97,
        volume: 1373970
      },
      {
        time: new Date(2015, 1, 12),
        open: 537.25,
        high: 544.82,
        low: 534.67,
        close: 542.93,
        volume: 1615824
      },
      {
        time: new Date(2015, 1, 13),
        open: 543.35,
        high: 549.91,
        low: 543.13,
        close: 549.01,
        volume: 1895126
      },
      {
        time: new Date(2015, 1, 17),
        open: 546.83,
        high: 550.0,
        low: 541.09,
        close: 542.84,
        volume: 1612439
      },
      {
        time: new Date(2015, 1, 18),
        open: 541.4,
        high: 545.49,
        low: 537.51,
        close: 539.7,
        volume: 1449089
      },
      {
        time: new Date(2015, 1, 19),
        open: 538.04,
        high: 543.11,
        low: 538.01,
        close: 542.87,
        volume: 987478
      },
      {
        time: new Date(2015, 1, 20),
        open: 543.13,
        high: 543.75,
        low: 535.8,
        close: 538.95,
        volume: 1441212
      },
      {
        time: new Date(2015, 1, 23),
        open: 536.05,
        high: 536.44,
        low: 529.41,
        close: 531.91,
        volume: 1453907
      },
      {
        time: new Date(2015, 1, 24),
        open: 530.0,
        high: 536.79,
        low: 528.25,
        close: 536.09,
        volume: 1002393
      },
      {
        time: new Date(2015, 1, 25),
        open: 535.9,
        high: 546.22,
        low: 535.44,
        close: 543.87,
        volume: 1821041
      },
      {
        time: new Date(2015, 1, 26),
        open: 543.21,
        high: 556.14,
        low: 541.5,
        close: 555.48,
        volume: 2305219
      },
      {
        time: new Date(2015, 1, 27),
        open: 554.24,
        high: 564.71,
        low: 552.9,
        close: 558.4,
        volume: 2403553
      },
      {
        time: new Date(2015, 2, 2),
        open: 560.53,
        high: 572.15,
        low: 558.75,
        close: 571.34,
        volume: 2123796
      },
      {
        time: new Date(2015, 2, 3),
        open: 570.45,
        high: 575.39,
        low: 566.52,
        close: 573.64,
        volume: 1700084
      },
      {
        time: new Date(2015, 2, 4),
        open: 571.87,
        high: 577.11,
        low: 568.01,
        close: 573.37,
        volume: 1871694
      },
      {
        time: new Date(2015, 2, 5),
        open: 575.02,
        high: 577.91,
        low: 573.41,
        close: 575.33,
        volume: 1385818
      },
      {
        time: new Date(2015, 2, 6),
        open: 574.88,
        high: 576.68,
        low: 566.76,
        close: 567.68,
        volume: 1654561
      },
      {
        time: new Date(2015, 2, 9),
        open: 566.86,
        high: 570.27,
        low: 563.54,
        close: 568.85,
        volume: 1059336
      },
      {
        time: new Date(2015, 2, 10),
        open: 564.25,
        high: 564.85,
        low: 554.73,
        close: 555.01,
        volume: 1787357
      },
      {
        time: new Date(2015, 2, 11),
        open: 555.14,
        high: 558.14,
        low: 550.68,
        close: 551.18,
        volume: 1815763
      },
      {
        time: new Date(2015, 2, 12),
        open: 553.51,
        high: 556.37,
        low: 550.46,
        close: 555.51,
        volume: 1385772
      },
      {
        time: new Date(2015, 2, 13),
        open: 553.5,
        high: 558.4,
        low: 544.22,
        close: 547.32,
        volume: 1698872
      },
      {
        time: new Date(2015, 2, 16),
        open: 550.95,
        high: 556.85,
        low: 546.0,
        close: 554.51,
        volume: 1636493
      },
      {
        time: new Date(2015, 2, 17),
        open: 551.71,
        high: 553.8,
        low: 548.0,
        close: 550.84,
        volume: 1800570
      },
      {
        time: new Date(2015, 2, 18),
        open: 552.5,
        high: 559.78,
        low: 547.0,
        close: 559.5,
        volume: 2128714
      },
      {
        time: new Date(2015, 2, 19),
        open: 559.39,
        high: 560.8,
        low: 556.14,
        close: 557.99,
        volume: 1194049
      },
      {
        time: new Date(2015, 2, 20),
        open: 561.65,
        high: 561.72,
        low: 559.05,
        close: 560.36,
        volume: 2609690
      },
      {
        time: new Date(2015, 2, 23),
        open: 560.43,
        high: 562.36,
        low: 555.83,
        close: 558.81,
        volume: 1639306
      },
      {
        time: new Date(2015, 2, 24),
        open: 562.56,
        high: 574.59,
        low: 561.21,
        close: 570.19,
        volume: 2576234
      },
      {
        time: new Date(2015, 2, 25),
        open: 570.5,
        high: 572.26,
        low: 558.74,
        close: 558.78,
        volume: 2146384
      },
      {
        time: new Date(2015, 2, 26),
        open: 557.59,
        high: 558.9,
        low: 550.65,
        close: 555.17,
        volume: 1568331
      },
      {
        time: new Date(2015, 2, 27),
        open: 553.0,
        high: 555.28,
        low: 548.13,
        close: 548.34,
        volume: 1892323
      },
      {
        time: new Date(2015, 2, 30),
        open: 551.62,
        high: 553.47,
        low: 548.17,
        close: 552.03,
        volume: 1283958
      },
      {
        time: new Date(2015, 2, 31),
        open: 550.0,
        high: 554.71,
        low: 546.72,
        close: 548.0,
        volume: 1583677
      },
      {
        time: new Date(2015, 3, 1),
        open: 548.6,
        high: 551.14,
        low: 539.5,
        close: 542.56,
        volume: 1957718
      },
      {
        time: new Date(2015, 3, 2),
        open: 540.85,
        high: 540.85,
        low: 533.85,
        close: 535.53,
        volume: 1711737
      },
      {
        time: new Date(2015, 3, 6),
        open: 532.22,
        high: 538.41,
        low: 529.57,
        close: 536.76,
        volume: 1320767
      },
      {
        time: new Date(2015, 3, 7),
        open: 538.08,
        high: 542.69,
        low: 536.0,
        close: 537.02,
        volume: 1299298
      },
      {
        time: new Date(2015, 3, 8),
        open: 538.38,
        high: 543.85,
        low: 538.38,
        close: 541.61,
        volume: 1175332
      },
      {
        time: new Date(2015, 3, 9),
        open: 541.03,
        high: 541.95,
        low: 535.49,
        close: 540.78,
        volume: 1553586
      },
      {
        time: new Date(2015, 3, 10),
        open: 542.29,
        high: 542.29,
        low: 537.31,
        close: 540.01,
        volume: 1405574
      },
      {
        time: new Date(2015, 3, 13),
        open: 538.41,
        high: 544.06,
        low: 537.31,
        close: 539.17,
        volume: 1640809
      },
      {
        time: new Date(2015, 3, 14),
        open: 536.25,
        high: 537.57,
        low: 528.09,
        close: 530.39,
        volume: 2597043
      },
      {
        time: new Date(2015, 3, 15),
        open: 528.7,
        high: 534.73,
        low: 523.22,
        close: 532.53,
        volume: 2312512
      },
      {
        time: new Date(2015, 3, 16),
        open: 529.9,
        high: 535.59,
        low: 529.61,
        close: 533.8,
        volume: 1296304
      },
      {
        time: new Date(2015, 3, 17),
        open: 528.66,
        high: 529.84,
        low: 521.01,
        close: 524.05,
        volume: 2145955
      },
      {
        time: new Date(2015, 3, 20),
        open: 525.6,
        high: 536.09,
        low: 524.5,
        close: 535.38,
        volume: 1675487
      },
      {
        time: new Date(2015, 3, 21),
        open: 537.51,
        high: 539.39,
        low: 533.68,
        close: 533.97,
        volume: 1839668
      },
      {
        time: new Date(2015, 3, 22),
        open: 534.4,
        high: 541.08,
        low: 531.75,
        close: 539.36,
        volume: 1589248
      },
      {
        time: new Date(2015, 3, 23),
        open: 541.0,
        high: 550.96,
        low: 540.23,
        close: 547.0,
        volume: 4173376
      },
      {
        time: new Date(2015, 3, 24),
        open: 566.1,
        high: 571.14,
        low: 557.25,
        close: 565.06,
        volume: 4919031
      },
      {
        time: new Date(2015, 3, 27),
        open: 563.39,
        high: 565.95,
        low: 553.2,
        close: 555.37,
        volume: 2398039
      },
      {
        time: new Date(2015, 3, 28),
        open: 554.64,
        high: 556.02,
        low: 550.37,
        close: 553.68,
        volume: 1490983
      },
      {
        time: new Date(2015, 3, 29),
        open: 550.47,
        high: 553.68,
        low: 546.9,
        close: 549.08,
        volume: 1698761
      },
      {
        time: new Date(2015, 3, 30),
        open: 547.87,
        high: 548.59,
        low: 535.05,
        close: 537.34,
        volume: 2082214
      },
      {
        time: new Date(2015, 4, 1),
        open: 538.43,
        high: 539.54,
        low: 532.1,
        close: 537.9,
        volume: 1768181
      },
      {
        time: new Date(2015, 4, 4),
        open: 538.53,
        high: 544.07,
        low: 535.06,
        close: 540.78,
        volume: 1307960
      },
      {
        time: new Date(2015, 4, 5),
        open: 538.21,
        high: 539.74,
        low: 530.39,
        close: 530.8,
        volume: 1383068
      },
      {
        time: new Date(2015, 4, 6),
        open: 531.24,
        high: 532.38,
        low: 521.08,
        close: 524.22,
        volume: 1566987
      },
      {
        time: new Date(2015, 4, 7),
        open: 523.99,
        high: 533.46,
        low: 521.75,
        close: 530.7,
        volume: 1546278
      },
      {
        time: new Date(2015, 4, 8),
        open: 536.65,
        high: 541.15,
        low: 536.0,
        close: 538.22,
        volume: 1527615
      },
      {
        time: new Date(2015, 4, 11),
        open: 538.37,
        high: 541.98,
        low: 535.4,
        close: 535.7,
        volume: 905285
      },
      {
        time: new Date(2015, 4, 12),
        open: 531.6,
        high: 533.21,
        low: 525.26,
        close: 529.04,
        volume: 1634174
      },
      {
        time: new Date(2015, 4, 13),
        open: 530.56,
        high: 534.32,
        low: 528.66,
        close: 529.62,
        volume: 1253063
      },
      {
        time: new Date(2015, 4, 14),
        open: 533.77,
        high: 539.0,
        low: 532.41,
        close: 538.4,
        volume: 1403935
      },
      {
        time: new Date(2015, 4, 15),
        open: 539.18,
        high: 539.27,
        low: 530.38,
        close: 533.85,
        volume: 1971343
      },
      {
        time: new Date(2015, 4, 18),
        open: 532.01,
        high: 534.82,
        low: 528.85,
        close: 532.3,
        volume: 2003421
      },
      {
        time: new Date(2015, 4, 19),
        open: 533.98,
        high: 540.66,
        low: 533.04,
        close: 537.36,
        volume: 1966947
      },
      {
        time: new Date(2015, 4, 20),
        open: 538.49,
        high: 542.92,
        low: 532.97,
        close: 539.27,
        volume: 1430826
      },
      {
        time: new Date(2015, 4, 21),
        open: 537.95,
        high: 543.84,
        low: 535.98,
        close: 542.51,
        volume: 1462695
      },
      {
        time: new Date(2015, 4, 22),
        open: 540.15,
        high: 544.19,
        low: 539.51,
        close: 540.11,
        volume: 1176214
      },
      {
        time: new Date(2015, 4, 26),
        open: 538.12,
        high: 539.0,
        low: 529.88,
        close: 532.32,
        volume: 2406512
      },
      {
        time: new Date(2015, 4, 27),
        open: 532.8,
        high: 540.55,
        low: 531.71,
        close: 539.79,
        volume: 1525019
      },
      {
        time: new Date(2015, 4, 28),
        open: 538.01,
        high: 540.61,
        low: 536.25,
        close: 539.78,
        volume: 1029849
      },
      {
        time: new Date(2015, 4, 29),
        open: 537.37,
        high: 538.63,
        low: 531.45,
        close: 532.11,
        volume: 2597407
      },
      {
        time: new Date(2015, 5, 1),
        open: 536.79,
        high: 536.79,
        low: 529.76,
        close: 533.99,
        volume: 1904332
      },
      {
        time: new Date(2015, 5, 2),
        open: 532.93,
        high: 543.0,
        low: 531.33,
        close: 539.18,
        volume: 1938989
      },
      {
        time: new Date(2015, 5, 3),
        open: 539.91,
        high: 543.5,
        low: 537.11,
        close: 540.31,
        volume: 1717036
      },
      {
        time: new Date(2015, 5, 4),
        open: 537.76,
        high: 540.59,
        low: 534.32,
        close: 536.7,
        volume: 1348337
      },
      {
        time: new Date(2015, 5, 5),
        open: 536.35,
        high: 537.2,
        low: 532.52,
        close: 533.33,
        volume: 1388220
      },
      {
        time: new Date(2015, 5, 8),
        open: 533.31,
        high: 534.12,
        low: 526.24,
        close: 526.83,
        volume: 1524139
      },
      {
        time: new Date(2015, 5, 9),
        open: 527.56,
        high: 529.2,
        low: 523.01,
        close: 526.69,
        volume: 1455266
      },
      {
        time: new Date(2015, 5, 10),
        open: 529.36,
        high: 538.36,
        low: 529.35,
        close: 536.69,
        volume: 1814958
      },
      {
        time: new Date(2015, 5, 11),
        open: 538.42,
        high: 538.98,
        low: 533.02,
        close: 534.61,
        volume: 1217536
      },
      {
        time: new Date(2015, 5, 12),
        open: 531.6,
        high: 533.12,
        low: 530.16,
        close: 532.33,
        volume: 955789
      },
      {
        time: new Date(2015, 5, 15),
        open: 528.0,
        high: 528.3,
        low: 524.0,
        close: 527.2,
        volume: 1632702
      },
      {
        time: new Date(2015, 5, 16),
        open: 528.4,
        high: 529.64,
        low: 525.56,
        close: 528.15,
        volume: 1071814
      },
      {
        time: new Date(2015, 5, 17),
        open: 529.37,
        high: 530.98,
        low: 525.1,
        close: 529.26,
        volume: 1294216
      },
      {
        time: new Date(2015, 5, 18),
        open: 531.0,
        high: 538.15,
        low: 530.79,
        close: 536.73,
        volume: 1833109
      },
      {
        time: new Date(2015, 5, 19),
        open: 537.21,
        high: 538.25,
        low: 533.01,
        close: 536.69,
        volume: 1893497
      },
      {
        time: new Date(2015, 5, 22),
        open: 539.59,
        high: 543.74,
        low: 537.53,
        close: 538.19,
        volume: 1250282
      },
      {
        time: new Date(2015, 5, 23),
        open: 539.64,
        high: 541.5,
        low: 535.25,
        close: 540.48,
        volume: 1197450
      },
      {
        time: new Date(2015, 5, 24),
        open: 540.0,
        high: 540.0,
        low: 535.66,
        close: 537.84,
        volume: 1286608
      },
      {
        time: new Date(2015, 5, 25),
        open: 538.87,
        high: 540.9,
        low: 535.23,
        close: 535.23,
        volume: 1335697
      },
      {
        time: new Date(2015, 5, 26),
        open: 537.26,
        high: 537.76,
        low: 531.35,
        close: 531.69,
        volume: 2109130
      },
      {
        time: new Date(2015, 5, 29),
        open: 525.01,
        high: 528.61,
        low: 520.54,
        close: 521.52,
        volume: 1937821
      },
      {
        time: new Date(2015, 5, 30),
        open: 526.02,
        high: 526.25,
        low: 520.5,
        close: 520.51,
        volume: 2235595
      },
      {
        time: new Date(2015, 6, 1),
        open: 524.73,
        high: 525.69,
        low: 518.23,
        close: 521.84,
        volume: 1961354
      },
      {
        time: new Date(2015, 6, 2),
        open: 521.08,
        high: 524.65,
        low: 521.08,
        close: 523.4,
        volume: 1235903
      },
      {
        time: new Date(2015, 6, 6),
        open: 519.5,
        high: 525.25,
        low: 519.0,
        close: 522.86,
        volume: 1280525
      },
      {
        time: new Date(2015, 6, 7),
        open: 523.13,
        high: 526.18,
        low: 515.18,
        close: 525.02,
        volume: 1597229
      },
      {
        time: new Date(2015, 6, 8),
        open: 521.05,
        high: 522.73,
        low: 516.11,
        close: 516.83,
        volume: 1296699
      },
      {
        time: new Date(2015, 6, 9),
        open: 523.12,
        high: 523.77,
        low: 520.35,
        close: 520.68,
        volume: 1842347
      },
      {
        time: new Date(2015, 6, 10),
        open: 526.29,
        high: 532.56,
        low: 525.55,
        close: 530.13,
        volume: 1956682
      },
      {
        time: new Date(2015, 6, 13),
        open: 532.88,
        high: 547.11,
        low: 532.4,
        close: 546.55,
        volume: 2206475
      },
      {
        time: new Date(2015, 6, 14),
        open: 546.76,
        high: 565.85,
        low: 546.71,
        close: 561.1,
        volume: 3244066
      },
      {
        time: new Date(2015, 6, 15),
        open: 560.13,
        high: 566.5,
        low: 556.79,
        close: 560.22,
        volume: 1784554
      },
      {
        time: new Date(2015, 6, 16),
        open: 565.12,
        high: 580.68,
        low: 565.0,
        close: 579.85,
        volume: 4768318
      },
      {
        time: new Date(2015, 6, 17),
        open: 649.0,
        high: 674.47,
        low: 645.0,
        close: 672.93,
        volume: 11164943
      },
      {
        time: new Date(2015, 6, 20),
        open: 659.24,
        high: 668.88,
        low: 653.01,
        close: 663.02,
        volume: 5860872
      },
      {
        time: new Date(2015, 6, 21),
        open: 655.21,
        high: 673.0,
        low: 654.3,
        close: 662.3,
        volume: 3377196
      },
      {
        time: new Date(2015, 6, 22),
        open: 660.89,
        high: 678.64,
        low: 659.0,
        close: 662.1,
        volume: 3929309
      },
      {
        time: new Date(2015, 6, 23),
        open: 661.27,
        high: 663.63,
        low: 641.0,
        close: 644.28,
        volume: 3029109
      },
      {
        time: new Date(2015, 6, 24),
        open: 647.0,
        high: 648.17,
        low: 622.52,
        close: 623.56,
        volume: 3625747
      },
      {
        time: new Date(2015, 6, 27),
        open: 621.0,
        high: 634.3,
        low: 620.5,
        close: 627.26,
        volume: 2675381
      },
      {
        time: new Date(2015, 6, 28),
        open: 632.83,
        high: 632.83,
        low: 623.31,
        close: 628.0,
        volume: 1727327
      },
      {
        time: new Date(2015, 6, 29),
        open: 628.8,
        high: 633.36,
        low: 622.65,
        close: 631.93,
        volume: 1575069
      },
      {
        time: new Date(2015, 6, 30),
        open: 630.0,
        high: 635.22,
        low: 622.05,
        close: 632.59,
        volume: 1474203
      },
      {
        time: new Date(2015, 6, 31),
        open: 631.38,
        high: 632.91,
        low: 625.5,
        close: 625.61,
        volume: 1706149
      },
      {
        time: new Date(2015, 7, 3),
        open: 625.34,
        high: 633.06,
        low: 625.34,
        close: 631.21,
        volume: 1304511
      },
      {
        time: new Date(2015, 7, 4),
        open: 628.42,
        high: 634.81,
        low: 627.16,
        close: 629.25,
        volume: 1490881
      },
      {
        time: new Date(2015, 7, 5),
        open: 634.33,
        high: 647.86,
        low: 633.16,
        close: 643.78,
        volume: 2334266
      },
      {
        time: new Date(2015, 7, 6),
        open: 645.0,
        high: 645.38,
        low: 632.25,
        close: 642.68,
        volume: 1572600
      },
      {
        time: new Date(2015, 7, 7),
        open: 640.23,
        high: 642.68,
        low: 629.71,
        close: 635.3,
        volume: 1403865
      },
      {
        time: new Date(2015, 7, 10),
        open: 639.48,
        high: 643.44,
        low: 631.25,
        close: 633.73,
        volume: 1809205
      },
      {
        time: new Date(2015, 7, 11),
        open: 669.2,
        high: 674.9,
        low: 654.27,
        close: 660.78,
        volume: 5029203
      },
      {
        time: new Date(2015, 7, 12),
        open: 663.08,
        high: 665.0,
        low: 652.29,
        close: 659.56,
        volume: 2940803
      },
      {
        time: new Date(2015, 7, 13),
        open: 659.32,
        high: 664.5,
        low: 651.66,
        close: 656.45,
        volume: 1810749
      },
      {
        time: new Date(2015, 7, 14),
        open: 655.01,
        high: 659.86,
        low: 652.66,
        close: 657.12,
        volume: 1072061
      },
      {
        time: new Date(2015, 7, 17),
        open: 656.8,
        high: 661.38,
        low: 651.24,
        close: 660.87,
        volume: 1051699
      },
      {
        time: new Date(2015, 7, 18),
        open: 661.9,
        high: 664.0,
        low: 653.46,
        close: 656.13,
        volume: 1456059
      },
      {
        time: new Date(2015, 7, 19),
        open: 656.6,
        high: 667.0,
        low: 654.19,
        close: 660.9,
        volume: 2134098
      },
      {
        time: new Date(2015, 7, 20),
        open: 655.46,
        high: 662.99,
        low: 642.9,
        close: 646.83,
        volume: 2855299
      },
      {
        time: new Date(2015, 7, 21),
        open: 639.78,
        high: 640.05,
        low: 612.33,
        close: 612.48,
        volume: 4265183
      },
      {
        time: new Date(2015, 7, 24),
        open: 573.0,
        high: 614.0,
        low: 565.05,
        close: 589.61,
        volume: 5770302
      },
      {
        time: new Date(2015, 7, 25),
        open: 614.91,
        high: 617.45,
        low: 581.11,
        close: 582.06,
        volume: 3537966
      },
      {
        time: new Date(2015, 7, 26),
        open: 610.35,
        high: 631.71,
        low: 599.05,
        close: 628.62,
        volume: 4235891
      },
      {
        time: new Date(2015, 7, 27),
        open: 639.4,
        high: 643.59,
        low: 622.0,
        close: 637.61,
        volume: 3491336
      },
      {
        time: new Date(2015, 7, 28),
        open: 632.82,
        high: 636.88,
        low: 624.56,
        close: 630.38,
        volume: 1978733
      },
      {
        time: new Date(2015, 7, 31),
        open: 627.54,
        high: 635.8,
        low: 617.68,
        close: 618.25,
        volume: 2176737
      },
      {
        time: new Date(2015, 8, 1),
        open: 602.36,
        high: 612.86,
        low: 594.1,
        close: 597.79,
        volume: 3702105
      },
      {
        time: new Date(2015, 8, 2),
        open: 605.59,
        high: 614.34,
        low: 599.71,
        close: 614.34,
        volume: 2575620
      },
      {
        time: new Date(2015, 8, 3),
        open: 617.0,
        high: 619.71,
        low: 602.82,
        close: 606.25,
        volume: 1759572
      },
      {
        time: new Date(2015, 8, 4),
        open: 600.0,
        high: 603.47,
        low: 595.25,
        close: 600.7,
        volume: 2089453
      },
      {
        time: new Date(2015, 8, 8),
        open: 612.49,
        high: 616.31,
        low: 604.12,
        close: 614.66,
        volume: 2279538
      },
      {
        time: new Date(2015, 8, 9),
        open: 621.22,
        high: 626.52,
        low: 609.6,
        close: 612.72,
        volume: 1702094
      },
      {
        time: new Date(2015, 8, 10),
        open: 613.1,
        high: 624.16,
        low: 611.43,
        close: 621.35,
        volume: 1900526
      },
      {
        time: new Date(2015, 8, 11),
        open: 619.75,
        high: 625.78,
        low: 617.42,
        close: 625.77,
        volume: 1373545
      },
      {
        time: new Date(2015, 8, 14),
        open: 625.7,
        high: 625.86,
        low: 619.43,
        close: 623.24,
        volume: 1702271
      },
      {
        time: new Date(2015, 8, 15),
        open: 626.7,
        high: 638.7,
        low: 623.78,
        close: 635.14,
        volume: 2084397
      },
      {
        time: new Date(2015, 8, 16),
        open: 635.47,
        high: 637.95,
        low: 632.32,
        close: 635.98,
        volume: 1286454
      },
      {
        time: new Date(2015, 8, 17),
        open: 637.79,
        high: 650.9,
        low: 635.02,
        close: 642.9,
        volume: 2274690
      },
      {
        time: new Date(2015, 8, 18),
        open: 636.79,
        high: 640.0,
        low: 627.02,
        close: 629.25,
        volume: 5133386
      },
      {
        time: new Date(2015, 8, 21),
        open: 634.4,
        high: 636.49,
        low: 625.94,
        close: 635.44,
        volume: 1788506
      },
      {
        time: new Date(2015, 8, 22),
        open: 627.0,
        high: 627.55,
        low: 615.43,
        close: 622.69,
        volume: 2562869
      },
      {
        time: new Date(2015, 8, 23),
        open: 622.05,
        high: 628.93,
        low: 620.0,
        close: 622.36,
        volume: 1470949
      },
      {
        time: new Date(2015, 8, 24),
        open: 616.64,
        high: 627.32,
        low: 612.4,
        close: 625.8,
        volume: 2240098
      },
      {
        time: new Date(2015, 8, 25),
        open: 629.77,
        high: 629.77,
        low: 611.0,
        close: 611.97,
        volume: 2174009
      },
      {
        time: new Date(2015, 8, 28),
        open: 610.34,
        high: 614.6,
        low: 589.38,
        close: 594.89,
        volume: 3127667
      },
      {
        time: new Date(2015, 8, 29),
        open: 597.28,
        high: 605.0,
        low: 590.22,
        close: 594.97,
        volume: 2310284
      },
      {
        time: new Date(2015, 8, 30),
        open: 603.28,
        high: 608.76,
        low: 600.73,
        close: 608.42,
        volume: 2413441
      },
      {
        time: new Date(2015, 9, 1),
        open: 608.37,
        high: 612.09,
        low: 599.85,
        close: 611.29,
        volume: 1867601
      },
      {
        time: new Date(2015, 9, 2),
        open: 607.2,
        high: 627.34,
        low: 603.13,
        close: 626.91,
        volume: 2684805
      },
      {
        time: new Date(2015, 9, 5),
        open: 632.0,
        high: 643.01,
        low: 627.0,
        close: 641.47,
        volume: 1787880
      },
      {
        time: new Date(2015, 9, 6),
        open: 638.84,
        high: 649.25,
        low: 636.53,
        close: 645.44,
        volume: 2166264
      },
      {
        time: new Date(2015, 9, 7),
        open: 649.24,
        high: 650.61,
        low: 632.15,
        close: 642.36,
        volume: 2089776
      },
      {
        time: new Date(2015, 9, 8),
        open: 641.36,
        high: 644.45,
        low: 625.56,
        close: 639.16,
        volume: 2180441
      },
      {
        time: new Date(2015, 9, 9),
        open: 640.0,
        high: 645.99,
        low: 635.32,
        close: 643.61,
        volume: 1645844
      },
      {
        time: new Date(2015, 9, 12),
        open: 642.09,
        high: 648.5,
        low: 639.01,
        close: 646.67,
        volume: 1275206
      },
      {
        time: new Date(2015, 9, 13),
        open: 643.15,
        high: 657.81,
        low: 643.15,
        close: 652.3,
        volume: 1790704
      },
      {
        time: new Date(2015, 9, 14),
        open: 653.21,
        high: 659.39,
        low: 648.85,
        close: 651.16,
        volume: 1412040
      },
      {
        time: new Date(2015, 9, 15),
        open: 654.66,
        high: 663.13,
        low: 654.46,
        close: 661.74,
        volume: 1830524
      },
      {
        time: new Date(2015, 9, 16),
        open: 664.11,
        high: 664.97,
        low: 657.2,
        close: 662.2,
        volume: 1606138
      },
      {
        time: new Date(2015, 9, 19),
        open: 661.18,
        high: 666.82,
        low: 659.58,
        close: 666.1,
        volume: 1465339
      },
      {
        time: new Date(2015, 9, 20),
        open: 664.04,
        high: 664.72,
        low: 644.2,
        close: 650.28,
        volume: 2490016
      },
      {
        time: new Date(2015, 9, 21),
        open: 654.15,
        high: 655.87,
        low: 641.73,
        close: 642.61,
        volume: 1791099
      },
      {
        time: new Date(2015, 9, 22),
        open: 646.7,
        high: 657.8,
        low: 644.01,
        close: 651.79,
        volume: 3782103
      },
      {
        time: new Date(2015, 9, 23),
        open: 727.5,
        high: 730.0,
        low: 701.5,
        close: 702.0,
        volume: 6642504
      },
      {
        time: new Date(2015, 9, 26),
        open: 701.55,
        high: 719.15,
        low: 701.26,
        close: 712.78,
        volume: 2701629
      },
      {
        time: new Date(2015, 9, 27),
        open: 707.38,
        high: 713.62,
        low: 704.55,
        close: 708.49,
        volume: 2224309
      },
      {
        time: new Date(2015, 9, 28),
        open: 707.33,
        high: 712.98,
        low: 703.08,
        close: 712.95,
        volume: 2176623
      },
      {
        time: new Date(2015, 9, 29),
        open: 710.5,
        high: 718.26,
        low: 710.01,
        close: 716.92,
        volume: 1454128
      },
      {
        time: new Date(2015, 9, 30),
        open: 715.73,
        high: 718.0,
        low: 710.05,
        close: 710.81,
        volume: 1903980
      },
      {
        time: new Date(2015, 10, 2),
        open: 711.06,
        high: 721.62,
        low: 705.85,
        close: 721.11,
        volume: 1871073
      },
      {
        time: new Date(2015, 10, 3),
        open: 718.86,
        high: 724.65,
        low: 714.72,
        close: 722.16,
        volume: 1560770
      },
      {
        time: new Date(2015, 10, 4),
        open: 722.0,
        high: 733.1,
        low: 721.9,
        close: 728.11,
        volume: 1704575
      },
      {
        time: new Date(2015, 10, 5),
        open: 729.47,
        high: 739.48,
        low: 729.47,
        close: 731.25,
        volume: 1860367
      },
      {
        time: new Date(2015, 10, 6),
        open: 731.5,
        high: 735.41,
        low: 727.01,
        close: 733.76,
        volume: 1509656
      },
      {
        time: new Date(2015, 10, 9),
        open: 730.2,
        high: 734.71,
        low: 719.43,
        close: 724.89,
        volume: 2065619
      },
      {
        time: new Date(2015, 10, 10),
        open: 724.4,
        high: 730.59,
        low: 718.5,
        close: 728.32,
        volume: 1603937
      },
      {
        time: new Date(2015, 10, 11),
        open: 732.46,
        high: 741.0,
        low: 730.23,
        close: 735.4,
        volume: 1366375
      },
      {
        time: new Date(2015, 10, 12),
        open: 731.0,
        high: 737.8,
        low: 728.64,
        close: 731.23,
        volume: 1668048
      },
      {
        time: new Date(2015, 10, 13),
        open: 729.17,
        high: 731.15,
        low: 716.73,
        close: 717.0,
        volume: 2062982
      },
      {
        time: new Date(2015, 10, 16),
        open: 715.6,
        high: 729.49,
        low: 711.33,
        close: 728.96,
        volume: 1891074
      },
      {
        time: new Date(2015, 10, 17),
        open: 729.29,
        high: 731.84,
        low: 723.03,
        close: 725.3,
        volume: 1491709
      },
      {
        time: new Date(2015, 10, 18),
        open: 727.58,
        high: 741.41,
        low: 727.0,
        close: 740.0,
        volume: 1671588
      },
      {
        time: new Date(2015, 10, 19),
        open: 738.74,
        high: 742.0,
        low: 737.43,
        close: 738.41,
        volume: 1327109
      },
      {
        time: new Date(2015, 10, 20),
        open: 746.53,
        high: 757.92,
        low: 743.0,
        close: 756.6,
        volume: 2212302
      },
      {
        time: new Date(2015, 10, 23),
        open: 757.45,
        high: 762.71,
        low: 751.82,
        close: 755.98,
        volume: 1414487
      },
      {
        time: new Date(2015, 10, 24),
        open: 752.0,
        high: 755.28,
        low: 737.63,
        close: 748.28,
        volume: 2333130
      },
      {
        time: new Date(2015, 10, 25),
        open: 748.14,
        high: 752.0,
        low: 746.06,
        close: 748.15,
        volume: 1122224
      },
      {
        time: new Date(2015, 10, 27),
        open: 748.46,
        high: 753.41,
        low: 747.49,
        close: 750.26,
        volume: 838518
      },
      {
        time: new Date(2015, 10, 30),
        open: 748.81,
        high: 754.93,
        low: 741.27,
        close: 742.6,
        volume: 2035261
      },
      {
        time: new Date(2015, 11, 1),
        open: 747.11,
        high: 768.95,
        low: 746.7,
        close: 767.04,
        volume: 2129940
      },
      {
        time: new Date(2015, 11, 2),
        open: 768.9,
        high: 775.96,
        low: 758.96,
        close: 762.38,
        volume: 2195686
      },
      {
        time: new Date(2015, 11, 3),
        open: 766.01,
        high: 769.0,
        low: 745.63,
        close: 752.54,
        volume: 2590641
      },
      {
        time: new Date(2015, 11, 4),
        open: 753.1,
        high: 768.49,
        low: 750.0,
        close: 766.81,
        volume: 2757283
      },
      {
        time: new Date(2015, 11, 7),
        open: 767.77,
        high: 768.73,
        low: 755.09,
        close: 763.25,
        volume: 1812314
      },
      {
        time: new Date(2015, 11, 8),
        open: 757.89,
        high: 764.8,
        low: 754.2,
        close: 762.37,
        volume: 1829475
      },
      {
        time: new Date(2015, 11, 9),
        open: 759.17,
        high: 764.23,
        low: 737.0,
        close: 751.61,
        volume: 2699990
      },
      {
        time: new Date(2015, 11, 10),
        open: 752.85,
        high: 755.85,
        low: 743.83,
        close: 749.46,
        volume: 1988380
      },
      {
        time: new Date(2015, 11, 11),
        open: 741.16,
        high: 745.71,
        low: 736.75,
        close: 738.87,
        volume: 2224410
      },
      {
        time: new Date(2015, 11, 14),
        open: 741.79,
        high: 748.73,
        low: 724.17,
        close: 747.77,
        volume: 2412497
      },
      {
        time: new Date(2015, 11, 15),
        open: 753.0,
        high: 758.08,
        low: 743.01,
        close: 743.4,
        volume: 2666229
      },
      {
        time: new Date(2015, 11, 16),
        open: 750.0,
        high: 760.59,
        low: 739.44,
        close: 758.09,
        volume: 1993251
      },
      {
        time: new Date(2015, 11, 17),
        open: 762.42,
        high: 762.68,
        low: 749.0,
        close: 749.43,
        volume: 1553418
      },
      {
        time: new Date(2015, 11, 18),
        open: 746.51,
        high: 754.13,
        low: 738.15,
        close: 739.31,
        volume: 3148743
      },
      {
        time: new Date(2015, 11, 21),
        open: 746.13,
        high: 750.0,
        low: 740.0,
        close: 747.77,
        volume: 1525703
      },
      {
        time: new Date(2015, 11, 22),
        open: 751.65,
        high: 754.85,
        low: 745.53,
        close: 750.0,
        volume: 1365520
      },
      {
        time: new Date(2015, 11, 23),
        open: 753.47,
        high: 754.21,
        low: 744.0,
        close: 750.31,
        volume: 1566726
      },
      {
        time: new Date(2015, 11, 24),
        open: 749.55,
        high: 751.35,
        low: 746.62,
        close: 748.4,
        volume: 527223
      },
      {
        time: new Date(2015, 11, 28),
        open: 752.92,
        high: 762.99,
        low: 749.52,
        close: 762.51,
        volume: 1515716
      },
      {
        time: new Date(2015, 11, 29),
        open: 766.69,
        high: 779.98,
        low: 766.43,
        close: 776.6,
        volume: 1765012
      },
      {
        time: new Date(2015, 11, 30),
        open: 776.6,
        high: 777.6,
        low: 766.9,
        close: 771.0,
        volume: 1293521
      },
      {
        time: new Date(2015, 11, 31),
        open: 769.5,
        high: 769.5,
        low: 758.34,
        close: 758.88,
        volume: 1500923
      },
      {
        time: new Date(2016, 0, 4),
        open: 743.0,
        high: 744.06,
        low: 731.26,
        close: 741.84,
        volume: 3258199
      },
      {
        time: new Date(2016, 0, 5),
        open: 746.45,
        high: 752.0,
        low: 738.64,
        close: 742.58,
        volume: 1950691
      },
      {
        time: new Date(2016, 0, 6),
        open: 730.0,
        high: 747.18,
        low: 728.92,
        close: 743.62,
        volume: 1947034
      },
      {
        time: new Date(2016, 0, 7),
        open: 730.31,
        high: 738.5,
        low: 719.06,
        close: 726.39,
        volume: 2963741
      },
      {
        time: new Date(2016, 0, 8),
        open: 731.45,
        high: 733.23,
        low: 713.0,
        close: 714.47,
        volume: 2450857
      },
      {
        time: new Date(2016, 0, 11),
        open: 716.61,
        high: 718.86,
        low: 703.54,
        close: 716.03,
        volume: 2090621
      },
      {
        time: new Date(2016, 0, 12),
        open: 721.68,
        high: 728.75,
        low: 717.32,
        close: 726.07,
        volume: 2024509
      },
      {
        time: new Date(2016, 0, 13),
        open: 730.85,
        high: 734.74,
        low: 698.61,
        close: 700.56,
        volume: 2468295
      },
      {
        time: new Date(2016, 0, 14),
        open: 705.38,
        high: 721.92,
        low: 689.1,
        close: 714.72,
        volume: 2211853
      },
      {
        time: new Date(2016, 0, 15),
        open: 692.29,
        high: 706.74,
        low: 685.37,
        close: 694.45,
        volume: 3592449
      },
      {
        time: new Date(2016, 0, 19),
        open: 703.3,
        high: 709.98,
        low: 693.41,
        close: 701.79,
        volume: 2258479
      },
      {
        time: new Date(2016, 0, 20),
        open: 688.61,
        high: 706.85,
        low: 673.26,
        close: 698.45,
        volume: 3439386
      },
      {
        time: new Date(2016, 0, 21),
        open: 702.18,
        high: 719.19,
        low: 694.46,
        close: 706.59,
        volume: 2410263
      },
      {
        time: new Date(2016, 0, 22),
        open: 723.6,
        high: 728.13,
        low: 720.12,
        close: 725.25,
        volume: 2006528
      },
      {
        time: new Date(2016, 0, 25),
        open: 723.58,
        high: 729.68,
        low: 710.01,
        close: 711.67,
        volume: 1704641
      },
      {
        time: new Date(2016, 0, 26),
        open: 713.85,
        high: 718.28,
        low: 706.48,
        close: 713.04,
        volume: 1324300
      },
      {
        time: new Date(2016, 0, 27),
        open: 713.67,
        high: 718.24,
        low: 694.39,
        close: 699.99,
        volume: 2139970
      },
      {
        time: new Date(2016, 0, 28),
        open: 722.22,
        high: 733.69,
        low: 712.35,
        close: 730.96,
        volume: 2658016
      },
      {
        time: new Date(2016, 0, 29),
        open: 731.53,
        high: 744.99,
        low: 726.8,
        close: 742.95,
        volume: 3394935
      },
      {
        time: new Date(2016, 1, 1),
        open: 750.46,
        high: 757.86,
        low: 743.27,
        close: 752.0,
        volume: 4801816
      },
      {
        time: new Date(2016, 1, 2),
        open: 784.5,
        high: 789.87,
        low: 764.65,
        close: 764.65,
        volume: 6332431
      },
      {
        time: new Date(2016, 1, 3),
        open: 770.22,
        high: 774.5,
        low: 720.5,
        close: 726.95,
        volume: 6162333
      },
      {
        time: new Date(2016, 1, 4),
        open: 722.81,
        high: 727.0,
        low: 701.86,
        close: 708.01,
        volume: 5145855
      },
      {
        time: new Date(2016, 1, 5),
        open: 703.87,
        high: 703.99,
        low: 680.15,
        close: 683.57,
        volume: 5069985
      },
      {
        time: new Date(2016, 1, 8),
        open: 667.85,
        high: 684.03,
        low: 663.06,
        close: 682.74,
        volume: 4212541
      },
      {
        time: new Date(2016, 1, 9),
        open: 672.32,
        high: 699.9,
        low: 668.77,
        close: 678.11,
        volume: 3604335
      },
      {
        time: new Date(2016, 1, 10),
        open: 686.86,
        high: 701.31,
        low: 682.13,
        close: 684.12,
        volume: 2627379
      },
      {
        time: new Date(2016, 1, 11),
        open: 675.0,
        high: 689.35,
        low: 668.87,
        close: 683.11,
        volume: 3007223
      },
      {
        time: new Date(2016, 1, 12),
        open: 690.26,
        high: 693.75,
        low: 678.6,
        close: 682.4,
        volume: 2129831
      },
      {
        time: new Date(2016, 1, 16),
        open: 692.98,
        high: 698.0,
        low: 685.05,
        close: 691.0,
        volume: 2497024
      },
      {
        time: new Date(2016, 1, 17),
        open: 699.0,
        high: 709.75,
        low: 691.38,
        close: 708.4,
        volume: 2466808
      },
      {
        time: new Date(2016, 1, 18),
        open: 710.0,
        high: 712.35,
        low: 696.03,
        close: 697.35,
        volume: 1859130
      },
      {
        time: new Date(2016, 1, 19),
        open: 695.03,
        high: 703.08,
        low: 694.05,
        close: 700.91,
        volume: 1582260
      },
      {
        time: new Date(2016, 1, 22),
        open: 707.45,
        high: 713.24,
        low: 702.51,
        close: 706.46,
        volume: 1946067
      },
      {
        time: new Date(2016, 1, 23),
        open: 701.45,
        high: 708.4,
        low: 693.58,
        close: 695.85,
        volume: 1999699
      },
      {
        time: new Date(2016, 1, 24),
        open: 688.92,
        high: 700.0,
        low: 680.78,
        close: 699.56,
        volume: 1958611
      },
      {
        time: new Date(2016, 1, 25),
        open: 700.01,
        high: 705.98,
        low: 690.58,
        close: 705.75,
        volume: 1631855
      },
      {
        time: new Date(2016, 1, 26),
        open: 708.58,
        high: 713.43,
        low: 700.86,
        close: 705.07,
        volume: 2239978
      },
      {
        time: new Date(2016, 1, 29),
        open: 700.32,
        high: 710.89,
        low: 697.68,
        close: 697.77,
        volume: 2280280
      },
      {
        time: new Date(2016, 2, 1),
        open: 703.62,
        high: 718.81,
        low: 699.77,
        close: 718.81,
        volume: 2147442
      },
      {
        time: new Date(2016, 2, 2),
        open: 719.0,
        high: 720.0,
        low: 712.0,
        close: 718.85,
        volume: 1627753
      },
      {
        time: new Date(2016, 2, 3),
        open: 718.68,
        high: 719.45,
        low: 706.02,
        close: 712.42,
        volume: 1956761
      },
      {
        time: new Date(2016, 2, 4),
        open: 714.99,
        high: 716.49,
        low: 706.02,
        close: 710.89,
        volume: 1967873
      },
      {
        time: new Date(2016, 2, 7),
        open: 706.9,
        high: 708.09,
        low: 686.9,
        close: 695.16,
        volume: 2985094
      },
      {
        time: new Date(2016, 2, 8),
        open: 688.59,
        high: 703.79,
        low: 685.34,
        close: 693.97,
        volume: 2063357
      },
      {
        time: new Date(2016, 2, 9),
        open: 698.47,
        high: 705.68,
        low: 694.0,
        close: 705.24,
        volume: 1418704
      },
      {
        time: new Date(2016, 2, 10),
        open: 708.12,
        high: 716.44,
        low: 703.36,
        close: 712.82,
        volume: 2829412
      },
      {
        time: new Date(2016, 2, 11),
        open: 720.0,
        high: 726.92,
        low: 717.12,
        close: 726.82,
        volume: 1963907
      },
      {
        time: new Date(2016, 2, 14),
        open: 726.81,
        high: 735.5,
        low: 725.15,
        close: 730.49,
        volume: 1716910
      },
      {
        time: new Date(2016, 2, 15),
        open: 726.92,
        high: 732.29,
        low: 724.77,
        close: 728.33,
        volume: 1720965
      },
      {
        time: new Date(2016, 2, 16),
        open: 726.37,
        high: 737.47,
        low: 724.51,
        close: 736.09,
        volume: 1572329
      },
      {
        time: new Date(2016, 2, 17),
        open: 736.45,
        high: 743.07,
        low: 736.0,
        close: 737.78,
        volume: 1856800
      },
      {
        time: new Date(2016, 2, 18),
        open: 741.86,
        high: 742.0,
        low: 731.83,
        close: 737.6,
        volume: 2796376
      },
      {
        time: new Date(2016, 2, 21),
        open: 736.5,
        high: 742.5,
        low: 733.52,
        close: 742.09,
        volume: 1831839
      },
      {
        time: new Date(2016, 2, 22),
        open: 737.46,
        high: 745.0,
        low: 737.46,
        close: 740.75,
        volume: 1264396
      },
      {
        time: new Date(2016, 2, 23),
        open: 742.36,
        high: 745.72,
        low: 736.15,
        close: 738.06,
        volume: 1421861
      },
      {
        time: new Date(2016, 2, 24),
        open: 732.01,
        high: 737.75,
        low: 731.0,
        close: 735.3,
        volume: 1564782
      },
      {
        time: new Date(2016, 2, 28),
        open: 736.79,
        high: 738.99,
        low: 732.5,
        close: 733.53,
        volume: 1299812
      },
      {
        time: new Date(2016, 2, 29),
        open: 734.59,
        high: 747.25,
        low: 728.76,
        close: 744.77,
        volume: 1902128
      },
      {
        time: new Date(2016, 2, 30),
        open: 750.1,
        high: 757.88,
        low: 748.74,
        close: 750.53,
        volume: 1780998
      },
      {
        time: new Date(2016, 2, 31),
        open: 749.25,
        high: 750.85,
        low: 740.94,
        close: 744.95,
        volume: 1712375
      },
      {
        time: new Date(2016, 3, 1),
        open: 738.6,
        high: 750.34,
        low: 737.0,
        close: 749.91,
        volume: 1574870
      },
      {
        time: new Date(2016, 3, 4),
        open: 750.06,
        high: 752.8,
        low: 742.43,
        close: 745.29,
        volume: 1131843
      },
      {
        time: new Date(2016, 3, 5),
        open: 738.0,
        high: 742.8,
        low: 735.37,
        close: 737.8,
        volume: 1129829
      },
      {
        time: new Date(2016, 3, 6),
        open: 735.77,
        high: 746.24,
        low: 735.56,
        close: 745.69,
        volume: 1050193
      },
      {
        time: new Date(2016, 3, 7),
        open: 745.37,
        high: 747.0,
        low: 736.28,
        close: 740.28,
        volume: 1429504
      },
      {
        time: new Date(2016, 3, 8),
        open: 743.97,
        high: 745.45,
        low: 735.55,
        close: 739.15,
        volume: 1285755
      },
      {
        time: new Date(2016, 3, 11),
        open: 743.02,
        high: 745.0,
        low: 736.05,
        close: 736.1,
        volume: 1211762
      },
      {
        time: new Date(2016, 3, 12),
        open: 738.0,
        high: 743.83,
        low: 731.01,
        close: 743.09,
        volume: 1349734
      },
      {
        time: new Date(2016, 3, 13),
        open: 749.16,
        high: 754.38,
        low: 744.26,
        close: 751.72,
        volume: 1707095
      },
      {
        time: new Date(2016, 3, 14),
        open: 754.01,
        high: 757.31,
        low: 752.7,
        close: 753.2,
        volume: 1130971
      },
      {
        time: new Date(2016, 3, 15),
        open: 753.98,
        high: 761.0,
        low: 752.69,
        close: 759.0,
        volume: 1800413
      },
      {
        time: new Date(2016, 3, 18),
        open: 760.46,
        high: 768.05,
        low: 757.3,
        close: 766.61,
        volume: 1555953
      },
      {
        time: new Date(2016, 3, 19),
        open: 769.51,
        high: 769.9,
        low: 749.33,
        close: 753.93,
        volume: 2027642
      },
      {
        time: new Date(2016, 3, 20),
        open: 758.0,
        high: 758.13,
        low: 750.01,
        close: 752.67,
        volume: 1525591
      },
      {
        time: new Date(2016, 3, 21),
        open: 755.38,
        high: 760.45,
        low: 749.55,
        close: 759.14,
        volume: 2743620
      },
      {
        time: new Date(2016, 3, 22),
        open: 726.3,
        high: 736.12,
        low: 713.61,
        close: 718.77,
        volume: 5939199
      },
      {
        time: new Date(2016, 3, 25),
        open: 716.1,
        high: 723.93,
        low: 715.59,
        close: 723.15,
        volume: 1955567
      },
      {
        time: new Date(2016, 3, 26),
        open: 725.42,
        high: 725.77,
        low: 703.03,
        close: 708.14,
        volume: 2727185
      },
      {
        time: new Date(2016, 3, 27),
        open: 707.29,
        high: 708.98,
        low: 692.37,
        close: 705.84,
        volume: 3086722
      },
      {
        time: new Date(2016, 3, 28),
        open: 708.26,
        high: 714.17,
        low: 689.55,
        close: 691.02,
        volume: 2851108
      },
      {
        time: new Date(2016, 3, 29),
        open: 690.7,
        high: 697.62,
        low: 689.0,
        close: 693.01,
        volume: 2484273
      },
      {
        time: new Date(2016, 4, 2),
        open: 697.63,
        high: 700.64,
        low: 691.0,
        close: 698.21,
        volume: 1644126
      },
      {
        time: new Date(2016, 4, 3),
        open: 696.87,
        high: 697.84,
        low: 692.0,
        close: 692.36,
        volume: 1530993
      },
      {
        time: new Date(2016, 4, 4),
        open: 690.49,
        high: 699.75,
        low: 689.01,
        close: 695.7,
        volume: 1688569
      },
      {
        time: new Date(2016, 4, 5),
        open: 697.7,
        high: 702.32,
        low: 695.72,
        close: 701.43,
        volume: 1677405
      },
      {
        time: new Date(2016, 4, 6),
        open: 698.38,
        high: 711.86,
        low: 698.11,
        close: 711.12,
        volume: 1826146
      },
      {
        time: new Date(2016, 4, 9),
        open: 712.0,
        high: 718.71,
        low: 710.0,
        close: 712.9,
        volume: 1508423
      },
      {
        time: new Date(2016, 4, 10),
        open: 716.75,
        high: 723.5,
        low: 715.72,
        close: 723.18,
        volume: 1563105
      },
      {
        time: new Date(2016, 4, 11),
        open: 723.41,
        high: 724.48,
        low: 712.8,
        close: 715.29,
        volume: 1686823
      },
      {
        time: new Date(2016, 4, 12),
        open: 717.06,
        high: 719.25,
        low: 709.0,
        close: 713.31,
        volume: 1360732
      },
      {
        time: new Date(2016, 4, 13),
        open: 711.93,
        high: 716.66,
        low: 709.26,
        close: 710.83,
        volume: 1307338
      },
      {
        time: new Date(2016, 4, 16),
        open: 709.13,
        high: 718.48,
        low: 705.65,
        close: 716.49,
        volume: 1316177
      },
      {
        time: new Date(2016, 4, 17),
        open: 715.99,
        high: 721.52,
        low: 704.11,
        close: 706.23,
        volume: 1999456
      },
      {
        time: new Date(2016, 4, 18),
        open: 703.67,
        high: 711.6,
        low: 700.63,
        close: 706.63,
        volume: 1763394
      },
      {
        time: new Date(2016, 4, 19),
        open: 702.36,
        high: 706.0,
        low: 696.8,
        close: 700.32,
        volume: 1656321
      },
      {
        time: new Date(2016, 4, 20),
        open: 701.62,
        high: 714.58,
        low: 700.52,
        close: 709.74,
        volume: 1816027
      },
      {
        time: new Date(2016, 4, 23),
        open: 706.53,
        high: 711.48,
        low: 704.18,
        close: 704.24,
        volume: 1320927
      },
      {
        time: new Date(2016, 4, 24),
        open: 706.86,
        high: 720.97,
        low: 706.86,
        close: 720.09,
        volume: 1920411
      },
      {
        time: new Date(2016, 4, 25),
        open: 720.76,
        high: 727.51,
        low: 719.7,
        close: 725.27,
        volume: 1629198
      },
      {
        time: new Date(2016, 4, 26),
        open: 722.87,
        high: 728.33,
        low: 720.28,
        close: 724.12,
        volume: 1542866
      },
      {
        time: new Date(2016, 4, 27),
        open: 724.01,
        high: 733.94,
        low: 724.0,
        close: 732.66,
        volume: 1974026
      },
      {
        time: new Date(2016, 4, 31),
        open: 731.74,
        high: 739.73,
        low: 731.26,
        close: 735.72,
        volume: 2129545
      },
      {
        time: new Date(2016, 5, 1),
        open: 734.53,
        high: 737.21,
        low: 730.66,
        close: 734.15,
        volume: 1253593
      },
      {
        time: new Date(2016, 5, 2),
        open: 732.5,
        high: 733.02,
        low: 724.17,
        close: 730.4,
        volume: 1341807
      },
      {
        time: new Date(2016, 5, 3),
        open: 729.27,
        high: 729.49,
        low: 720.56,
        close: 722.34,
        volume: 1226253
      },
      {
        time: new Date(2016, 5, 6),
        open: 724.91,
        high: 724.91,
        low: 714.61,
        close: 716.55,
        volume: 1566059
      },
      {
        time: new Date(2016, 5, 7),
        open: 719.84,
        high: 721.98,
        low: 716.55,
        close: 716.65,
        volume: 1336754
      },
      {
        time: new Date(2016, 5, 8),
        open: 723.96,
        high: 728.57,
        low: 720.58,
        close: 728.28,
        volume: 1583701
      },
      {
        time: new Date(2016, 5, 9),
        open: 722.87,
        high: 729.54,
        low: 722.34,
        close: 728.58,
        volume: 988914
      },
      {
        time: new Date(2016, 5, 10),
        open: 719.47,
        high: 725.89,
        low: 716.43,
        close: 719.41,
        volume: 1216443
      },
      {
        time: new Date(2016, 5, 13),
        open: 716.51,
        high: 725.44,
        low: 716.51,
        close: 718.36,
        volume: 1258930
      },
      {
        time: new Date(2016, 5, 14),
        open: 716.48,
        high: 722.47,
        low: 713.12,
        close: 718.27,
        volume: 1306065
      },
      {
        time: new Date(2016, 5, 15),
        open: 719.0,
        high: 722.98,
        low: 717.31,
        close: 718.92,
        volume: 1214517
      },
      {
        time: new Date(2016, 5, 16),
        open: 714.91,
        high: 716.65,
        low: 703.26,
        close: 710.36,
        volume: 1982471
      },
      {
        time: new Date(2016, 5, 17),
        open: 708.65,
        high: 708.82,
        low: 688.45,
        close: 691.72,
        volume: 3402357
      },
      {
        time: new Date(2016, 5, 20),
        open: 698.77,
        high: 702.48,
        low: 693.41,
        close: 693.71,
        volume: 2082538
      },
      {
        time: new Date(2016, 5, 21),
        open: 698.4,
        high: 702.77,
        low: 692.01,
        close: 695.94,
        volume: 1465634
      },
      {
        time: new Date(2016, 5, 22),
        open: 699.06,
        high: 700.86,
        low: 693.08,
        close: 697.46,
        volume: 1184318
      },
      {
        time: new Date(2016, 5, 23),
        open: 697.45,
        high: 701.95,
        low: 687.0,
        close: 701.87,
        volume: 2171415
      },
      {
        time: new Date(2016, 5, 24),
        open: 675.17,
        high: 689.4,
        low: 673.45,
        close: 675.22,
        volume: 4449022
      },
      {
        time: new Date(2016, 5, 27),
        open: 671.0,
        high: 672.3,
        low: 663.28,
        close: 668.26,
        volume: 2641085
      },
      {
        time: new Date(2016, 5, 28),
        open: 678.97,
        high: 680.33,
        low: 673.0,
        close: 680.04,
        volume: 2173762
      },
      {
        time: new Date(2016, 5, 29),
        open: 683.0,
        high: 687.43,
        low: 681.41,
        close: 684.11,
        volume: 1932561
      },
      {
        time: new Date(2016, 5, 30),
        open: 685.47,
        high: 692.32,
        low: 683.65,
        close: 692.1,
        volume: 1597714
      },
      {
        time: new Date(2016, 6, 1),
        open: 692.2,
        high: 700.65,
        low: 692.13,
        close: 699.21,
        volume: 1344710
      },
      {
        time: new Date(2016, 6, 5),
        open: 696.06,
        high: 696.94,
        low: 688.88,
        close: 694.49,
        volume: 1462616
      },
      {
        time: new Date(2016, 6, 6),
        open: 689.98,
        high: 701.68,
        low: 689.09,
        close: 697.77,
        volume: 1411925
      },
      {
        time: new Date(2016, 6, 7),
        open: 698.08,
        high: 698.2,
        low: 688.22,
        close: 695.36,
        volume: 1304200
      },
      {
        time: new Date(2016, 6, 8),
        open: 699.5,
        high: 705.71,
        low: 696.44,
        close: 705.63,
        volume: 1575166
      },
      {
        time: new Date(2016, 6, 11),
        open: 708.05,
        high: 716.51,
        low: 707.24,
        close: 715.09,
        volume: 1111762
      },
      {
        time: new Date(2016, 6, 12),
        open: 719.12,
        high: 722.94,
        low: 715.91,
        close: 720.64,
        volume: 1336921
      },
      {
        time: new Date(2016, 6, 13),
        open: 723.62,
        high: 724.0,
        low: 716.85,
        close: 716.98,
        volume: 935876
      },
      {
        time: new Date(2016, 6, 14),
        open: 721.58,
        high: 722.21,
        low: 718.03,
        close: 720.95,
        volume: 950193
      },
      {
        time: new Date(2016, 6, 15),
        open: 725.73,
        high: 725.74,
        low: 719.06,
        close: 719.85,
        volume: 1279339
      },
      {
        time: new Date(2016, 6, 18),
        open: 722.71,
        high: 736.13,
        low: 721.19,
        close: 733.78,
        volume: 1295476
      },
      {
        time: new Date(2016, 6, 19),
        open: 729.89,
        high: 736.99,
        low: 729.0,
        close: 736.96,
        volume: 1227486
      },
      {
        time: new Date(2016, 6, 20),
        open: 737.33,
        high: 742.13,
        low: 737.1,
        close: 741.19,
        volume: 1289671
      },
      {
        time: new Date(2016, 6, 21),
        open: 740.36,
        high: 741.69,
        low: 735.83,
        close: 738.63,
        volume: 1026306
      },
      {
        time: new Date(2016, 6, 22),
        open: 741.86,
        high: 743.24,
        low: 736.56,
        close: 742.74,
        volume: 1259823
      },
      {
        time: new Date(2016, 6, 25),
        open: 740.67,
        high: 742.61,
        low: 737.5,
        close: 739.77,
        volume: 1032432
      },
      {
        time: new Date(2016, 6, 26),
        open: 739.04,
        high: 741.69,
        low: 734.27,
        close: 738.42,
        volume: 1186738
      },
      {
        time: new Date(2016, 6, 27),
        open: 738.28,
        high: 744.46,
        low: 737.0,
        close: 741.77,
        volume: 1512517
      },
      {
        time: new Date(2016, 6, 28),
        open: 747.04,
        high: 748.65,
        low: 739.3,
        close: 745.91,
        volume: 3530169
      },
      {
        time: new Date(2016, 6, 29),
        open: 772.71,
        high: 778.55,
        low: 766.77,
        close: 768.79,
        volume: 3841482
      },
      {
        time: new Date(2016, 7, 1),
        open: 761.09,
        high: 780.43,
        low: 761.09,
        close: 772.88,
        volume: 2700470
      },
      {
        time: new Date(2016, 7, 2),
        open: 768.69,
        high: 775.84,
        low: 767.85,
        close: 771.07,
        volume: 1784525
      },
      {
        time: new Date(2016, 7, 3),
        open: 767.18,
        high: 773.21,
        low: 766.82,
        close: 773.18,
        volume: 1287421
      },
      {
        time: new Date(2016, 7, 4),
        open: 772.22,
        high: 774.07,
        low: 768.8,
        close: 771.61,
        volume: 1140254
      },
      {
        time: new Date(2016, 7, 5),
        open: 773.78,
        high: 783.04,
        low: 772.34,
        close: 782.22,
        volume: 1801205
      },
      {
        time: new Date(2016, 7, 8),
        open: 782.0,
        high: 782.63,
        low: 778.09,
        close: 781.76,
        volume: 1107857
      },
      {
        time: new Date(2016, 7, 9),
        open: 781.1,
        high: 788.94,
        low: 780.57,
        close: 784.26,
        volume: 1318894
      },
      {
        time: new Date(2016, 7, 10),
        open: 783.75,
        high: 786.81,
        low: 782.78,
        close: 784.68,
        volume: 786363
      },
      {
        time: new Date(2016, 7, 11),
        open: 785.0,
        high: 789.75,
        low: 782.97,
        close: 784.85,
        volume: 975113
      },
      {
        time: new Date(2016, 7, 12),
        open: 781.5,
        high: 783.4,
        low: 780.4,
        close: 783.22,
        volume: 740498
      },
      {
        time: new Date(2016, 7, 15),
        open: 783.75,
        high: 787.49,
        low: 780.11,
        close: 782.44,
        volume: 938186
      },
      {
        time: new Date(2016, 7, 16),
        open: 780.3,
        high: 780.98,
        low: 773.44,
        close: 777.14,
        volume: 1028047
      },
      {
        time: new Date(2016, 7, 17),
        open: 777.32,
        high: 780.81,
        low: 773.53,
        close: 779.91,
        volume: 924226
      },
      {
        time: new Date(2016, 7, 18),
        open: 780.01,
        high: 782.86,
        low: 777.0,
        close: 777.5,
        volume: 719429
      },
      {
        time: new Date(2016, 7, 19),
        open: 775.0,
        high: 777.1,
        low: 773.13,
        close: 775.42,
        volume: 861546
      },
      {
        time: new Date(2016, 7, 22),
        open: 773.27,
        high: 774.54,
        low: 770.05,
        close: 772.15,
        volume: 951362
      },
      {
        time: new Date(2016, 7, 23),
        open: 775.48,
        high: 776.44,
        low: 771.78,
        close: 772.08,
        volume: 928232
      },
      {
        time: new Date(2016, 7, 24),
        open: 770.58,
        high: 774.5,
        low: 767.07,
        close: 769.64,
        volume: 1071999
      },
      {
        time: new Date(2016, 7, 25),
        open: 767.0,
        high: 771.89,
        low: 763.18,
        close: 769.41,
        volume: 926883
      },
      {
        time: new Date(2016, 7, 26),
        open: 769.0,
        high: 776.08,
        low: 765.85,
        close: 769.54,
        volume: 1166681
      },
      {
        time: new Date(2016, 7, 29),
        open: 768.74,
        high: 774.99,
        low: 766.62,
        close: 772.15,
        volume: 847565
      },
      {
        time: new Date(2016, 7, 30),
        open: 769.33,
        high: 774.47,
        low: 766.84,
        close: 769.09,
        volume: 1130029
      },
      {
        time: new Date(2016, 7, 31),
        open: 767.01,
        high: 769.09,
        low: 765.38,
        close: 767.05,
        volume: 1248556
      },
      {
        time: new Date(2016, 8, 1),
        open: 769.25,
        high: 771.02,
        low: 764.3,
        close: 768.78,
        volume: 925131
      },
      {
        time: new Date(2016, 8, 2),
        open: 773.01,
        high: 773.92,
        low: 768.41,
        close: 771.46,
        volume: 1072658
      },
      {
        time: new Date(2016, 8, 6),
        open: 773.45,
        high: 782.0,
        low: 771.0,
        close: 780.08,
        volume: 1442822
      },
      {
        time: new Date(2016, 8, 7),
        open: 780.0,
        high: 782.73,
        low: 776.2,
        close: 780.35,
        volume: 894021
      },
      {
        time: new Date(2016, 8, 8),
        open: 778.59,
        high: 780.35,
        low: 773.58,
        close: 775.32,
        volume: 1270264
      },
      {
        time: new Date(2016, 8, 9),
        open: 770.1,
        high: 773.24,
        low: 759.66,
        close: 759.66,
        volume: 1885496
      },
      {
        time: new Date(2016, 8, 12),
        open: 755.13,
        high: 770.29,
        low: 754.0,
        close: 769.02,
        volume: 1310986
      },
      {
        time: new Date(2016, 8, 13),
        open: 764.48,
        high: 766.22,
        low: 755.8,
        close: 759.69,
        volume: 1395046
      },
      {
        time: new Date(2016, 8, 14),
        open: 759.61,
        high: 767.68,
        low: 759.11,
        close: 762.49,
        volume: 1094490
      },
      {
        time: new Date(2016, 8, 15),
        open: 762.89,
        high: 773.8,
        low: 759.96,
        close: 771.76,
        volume: 1346751
      },
      {
        time: new Date(2016, 8, 16),
        open: 769.75,
        high: 769.75,
        low: 764.66,
        close: 768.88,
        volume: 2049338
      },
      {
        time: new Date(2016, 8, 19),
        open: 772.42,
        high: 774.0,
        low: 764.44,
        close: 765.7,
        volume: 1172824
      },
      {
        time: new Date(2016, 8, 20),
        open: 769.0,
        high: 773.33,
        low: 768.53,
        close: 771.41,
        volume: 978631
      },
      {
        time: new Date(2016, 8, 21),
        open: 772.66,
        high: 777.16,
        low: 768.3,
        close: 776.22,
        volume: 1167810
      },
      {
        time: new Date(2016, 8, 22),
        open: 780.0,
        high: 789.85,
        low: 778.44,
        close: 787.21,
        volume: 1486223
      },
      {
        time: new Date(2016, 8, 23),
        open: 786.59,
        high: 788.93,
        low: 784.15,
        close: 786.9,
        volume: 1411937
      },
      {
        time: new Date(2016, 8, 26),
        open: 782.74,
        high: 782.74,
        low: 773.07,
        close: 774.21,
        volume: 1533206
      },
      {
        time: new Date(2016, 8, 27),
        open: 775.5,
        high: 785.99,
        low: 774.31,
        close: 783.01,
        volume: 1153247
      },
      {
        time: new Date(2016, 8, 28),
        open: 777.85,
        high: 781.81,
        low: 774.97,
        close: 781.56,
        volume: 1109834
      },
      {
        time: new Date(2016, 8, 29),
        open: 781.44,
        high: 785.8,
        low: 774.23,
        close: 775.01,
        volume: 1314746
      },
      {
        time: new Date(2016, 8, 30),
        open: 776.33,
        high: 780.94,
        low: 774.09,
        close: 777.29,
        volume: 1585333
      },
      {
        time: new Date(2016, 9, 3),
        open: 774.25,
        high: 776.06,
        low: 769.5,
        close: 772.56,
        volume: 1278821
      },
      {
        time: new Date(2016, 9, 4),
        open: 776.03,
        high: 778.71,
        low: 772.89,
        close: 776.43,
        volume: 1201350
      },
      {
        time: new Date(2016, 9, 5),
        open: 779.31,
        high: 782.07,
        low: 775.65,
        close: 776.47,
        volume: 1461151
      },
      {
        time: new Date(2016, 9, 6),
        open: 779.0,
        high: 780.48,
        low: 775.54,
        close: 776.86,
        volume: 1070692
      },
      {
        time: new Date(2016, 9, 7),
        open: 779.66,
        high: 779.66,
        low: 770.75,
        close: 775.08,
        volume: 933158
      },
      {
        time: new Date(2016, 9, 10),
        open: 777.71,
        high: 789.38,
        low: 775.87,
        close: 785.94,
        volume: 1174923
      },
      {
        time: new Date(2016, 9, 11),
        open: 786.66,
        high: 792.28,
        low: 780.58,
        close: 783.07,
        volume: 1372461
      },
      {
        time: new Date(2016, 9, 12),
        open: 783.76,
        high: 788.13,
        low: 782.06,
        close: 786.14,
        volume: 937435
      },
      {
        time: new Date(2016, 9, 13),
        open: 781.22,
        high: 781.22,
        low: 773.0,
        close: 778.19,
        volume: 1365277
      },
      {
        time: new Date(2016, 9, 14),
        open: 781.65,
        high: 783.95,
        low: 776.0,
        close: 778.53,
        volume: 852487
      },
      {
        time: new Date(2016, 9, 17),
        open: 779.8,
        high: 785.85,
        low: 777.5,
        close: 779.96,
        volume: 1092973
      },
      {
        time: new Date(2016, 9, 18),
        open: 787.85,
        high: 801.61,
        low: 785.56,
        close: 795.26,
        volume: 2056903
      },
      {
        time: new Date(2016, 9, 19),
        open: 798.86,
        high: 804.63,
        low: 797.64,
        close: 801.56,
        volume: 1766798
      },
      {
        time: new Date(2016, 9, 20),
        open: 803.3,
        high: 803.97,
        low: 796.03,
        close: 796.97,
        volume: 1757528
      },
      {
        time: new Date(2016, 9, 21),
        open: 795.0,
        high: 799.5,
        low: 794.0,
        close: 799.37,
        volume: 1266181
      },
      {
        time: new Date(2016, 9, 24),
        open: 804.9,
        high: 815.18,
        low: 804.82,
        close: 813.11,
        volume: 1697514
      },
      {
        time: new Date(2016, 9, 25),
        open: 816.68,
        high: 816.68,
        low: 805.14,
        close: 807.67,
        volume: 1576404
      },
      {
        time: new Date(2016, 9, 26),
        open: 806.34,
        high: 806.98,
        low: 796.32,
        close: 799.07,
        volume: 1647733
      },
      {
        time: new Date(2016, 9, 27),
        open: 801.0,
        high: 803.49,
        low: 791.5,
        close: 795.35,
        volume: 2749221
      },
      {
        time: new Date(2016, 9, 28),
        open: 808.35,
        high: 815.49,
        low: 793.59,
        close: 795.37,
        volume: 4269902
      },
      {
        time: new Date(2016, 9, 31),
        open: 795.47,
        high: 796.86,
        low: 784.0,
        close: 784.54,
        volume: 2427284
      },
      {
        time: new Date(2016, 10, 1),
        open: 782.89,
        high: 789.49,
        low: 775.54,
        close: 783.61,
        volume: 2406356
      },
      {
        time: new Date(2016, 10, 2),
        open: 778.2,
        high: 781.65,
        low: 763.45,
        close: 768.7,
        volume: 1918414
      },
      {
        time: new Date(2016, 10, 3),
        open: 767.25,
        high: 769.95,
        low: 759.03,
        close: 762.13,
        volume: 1943175
      },
      {
        time: new Date(2016, 10, 4),
        open: 750.66,
        high: 770.36,
        low: 750.56,
        close: 762.02,
        volume: 2134812
      },
      {
        time: new Date(2016, 10, 7),
        open: 774.5,
        high: 785.19,
        low: 772.55,
        close: 782.52,
        volume: 1585070
      },
      {
        time: new Date(2016, 10, 8),
        open: 783.4,
        high: 795.63,
        low: 780.19,
        close: 790.51,
        volume: 1366873
      },
      {
        time: new Date(2016, 10, 9),
        open: 779.94,
        high: 791.23,
        low: 771.67,
        close: 785.31,
        volume: 2607121
      },
      {
        time: new Date(2016, 10, 10),
        open: 791.17,
        high: 791.17,
        low: 752.18,
        close: 762.56,
        volume: 4745183
      },
      {
        time: new Date(2016, 10, 11),
        open: 756.54,
        high: 760.78,
        low: 750.38,
        close: 754.02,
        volume: 2431815
      },
      {
        time: new Date(2016, 10, 14),
        open: 755.6,
        high: 757.85,
        low: 727.54,
        close: 736.08,
        volume: 3654385
      },
      {
        time: new Date(2016, 10, 15),
        open: 746.97,
        high: 764.42,
        low: 746.97,
        close: 758.49,
        volume: 2384001
      },
      {
        time: new Date(2016, 10, 16),
        open: 755.2,
        high: 766.36,
        low: 750.51,
        close: 764.48,
        volume: 1472594
      },
      {
        time: new Date(2016, 10, 17),
        open: 766.92,
        high: 772.7,
        low: 764.23,
        close: 771.23,
        volume: 1286961
      },
      {
        time: new Date(2016, 10, 18),
        open: 771.37,
        high: 775.0,
        low: 760.0,
        close: 760.54,
        volume: 1547145
      },
      {
        time: new Date(2016, 10, 21),
        open: 762.61,
        high: 769.7,
        low: 760.6,
        close: 769.2,
        volume: 1330639
      },
      {
        time: new Date(2016, 10, 22),
        open: 772.63,
        high: 776.96,
        low: 767.0,
        close: 768.27,
        volume: 1593108
      },
      {
        time: new Date(2016, 10, 23),
        open: 767.73,
        high: 768.28,
        low: 755.25,
        close: 760.99,
        volume: 1478417
      },
      {
        time: new Date(2016, 10, 25),
        open: 764.26,
        high: 765.0,
        low: 760.52,
        close: 761.68,
        volume: 587421
      },
      {
        time: new Date(2016, 10, 28),
        open: 760.0,
        high: 779.53,
        low: 759.8,
        close: 768.24,
        volume: 2188151
      },
      {
        time: new Date(2016, 10, 29),
        open: 771.53,
        high: 778.5,
        low: 768.24,
        close: 770.84,
        volume: 1616618
      },
      {
        time: new Date(2016, 10, 30),
        open: 770.07,
        high: 772.99,
        low: 754.83,
        close: 758.04,
        volume: 2392890
      },
      {
        time: new Date(2016, 11, 1),
        open: 757.44,
        high: 759.85,
        low: 737.02,
        close: 747.92,
        volume: 3017947
      },
      {
        time: new Date(2016, 11, 2),
        open: 744.59,
        high: 754.0,
        low: 743.1,
        close: 750.5,
        volume: 1452484
      },
      {
        time: new Date(2016, 11, 5),
        open: 757.71,
        high: 763.9,
        low: 752.9,
        close: 762.52,
        volume: 1394223
      },
      {
        time: new Date(2016, 11, 6),
        open: 764.73,
        high: 768.83,
        low: 757.34,
        close: 759.11,
        volume: 1690689
      },
      {
        time: new Date(2016, 11, 7),
        open: 761.0,
        high: 771.36,
        low: 755.8,
        close: 771.19,
        volume: 1760966
      },
      {
        time: new Date(2016, 11, 8),
        open: 772.48,
        high: 778.18,
        low: 767.23,
        close: 776.42,
        volume: 1488059
      },
      {
        time: new Date(2016, 11, 9),
        open: 780.0,
        high: 789.43,
        low: 779.02,
        close: 789.29,
        volume: 1821914
      },
      {
        time: new Date(2016, 11, 12),
        open: 785.04,
        high: 791.25,
        low: 784.36,
        close: 789.27,
        volume: 2104117
      },
      {
        time: new Date(2016, 11, 13),
        open: 793.9,
        high: 804.38,
        low: 793.34,
        close: 796.1,
        volume: 2145209
      },
      {
        time: new Date(2016, 11, 14),
        open: 797.4,
        high: 804.0,
        low: 794.01,
        close: 797.07,
        volume: 1704150
      },
      {
        time: new Date(2016, 11, 15),
        open: 797.34,
        high: 803.0,
        low: 792.92,
        close: 797.85,
        volume: 1626499
      },
      {
        time: new Date(2016, 11, 16),
        open: 800.4,
        high: 800.86,
        low: 790.29,
        close: 790.8,
        volume: 2443796
      },
      {
        time: new Date(2016, 11, 19),
        open: 790.22,
        high: 797.66,
        low: 786.27,
        close: 794.2,
        volume: 1232087
      },
      {
        time: new Date(2016, 11, 20),
        open: 796.76,
        high: 798.65,
        low: 793.27,
        close: 796.42,
        volume: 951014
      },
      {
        time: new Date(2016, 11, 21),
        open: 795.84,
        high: 796.68,
        low: 787.1,
        close: 794.56,
        volume: 1211346
      },
      {
        time: new Date(2016, 11, 22),
        open: 792.36,
        high: 793.32,
        low: 788.58,
        close: 791.26,
        volume: 972169
      },
      {
        time: new Date(2016, 11, 23),
        open: 790.9,
        high: 792.74,
        low: 787.28,
        close: 789.91,
        volume: 623944
      },
      {
        time: new Date(2016, 11, 27),
        open: 790.68,
        high: 797.86,
        low: 787.66,
        close: 791.55,
        volume: 789321
      },
      {
        time: new Date(2016, 11, 28),
        open: 793.7,
        high: 794.23,
        low: 783.2,
        close: 785.05,
        volume: 1153824
      },
      {
        time: new Date(2016, 11, 29),
        open: 783.33,
        high: 785.93,
        low: 778.92,
        close: 782.79,
        volume: 744272
      },
      {
        time: new Date(2016, 11, 30),
        open: 782.75,
        high: 782.78,
        low: 770.41,
        close: 771.82,
        volume: 1769950
      },
      {
        time: new Date(2017, 0, 3),
        open: 778.81,
        high: 789.63,
        low: 775.8,
        close: 786.14,
        volume: 1657268
      },
      {
        time: new Date(2017, 0, 4),
        open: 788.36,
        high: 791.34,
        low: 783.16,
        close: 786.9,
        volume: 1072958
      },
      {
        time: new Date(2017, 0, 5),
        open: 786.08,
        high: 794.48,
        low: 785.02,
        close: 794.02,
        volume: 1335167
      },
      {
        time: new Date(2017, 0, 6),
        open: 795.26,
        high: 807.9,
        low: 792.2,
        close: 806.15,
        volume: 1640170
      },
      {
        time: new Date(2017, 0, 9),
        open: 806.4,
        high: 809.97,
        low: 802.83,
        close: 806.65,
        volume: 1274645
      },
      {
        time: new Date(2017, 0, 10),
        open: 807.86,
        high: 809.13,
        low: 803.51,
        close: 804.79,
        volume: 1176780
      },
      {
        time: new Date(2017, 0, 11),
        open: 805.0,
        high: 808.15,
        low: 801.37,
        close: 807.91,
        volume: 1065936
      },
      {
        time: new Date(2017, 0, 12),
        open: 807.14,
        high: 807.39,
        low: 799.17,
        close: 806.36,
        volume: 1353057
      },
      {
        time: new Date(2017, 0, 13),
        open: 807.48,
        high: 811.22,
        low: 806.69,
        close: 807.88,
        volume: 1099215
      },
      {
        time: new Date(2017, 0, 17),
        open: 807.08,
        high: 807.14,
        low: 800.37,
        close: 804.61,
        volume: 1362115
      },
      {
        time: new Date(2017, 0, 18),
        open: 805.81,
        high: 806.2,
        low: 800.99,
        close: 806.07,
        volume: 1294407
      },
      {
        time: new Date(2017, 0, 19),
        open: 805.12,
        high: 809.48,
        low: 801.8,
        close: 802.18,
        volume: 919325
      },
      {
        time: new Date(2017, 0, 20),
        open: 806.91,
        high: 806.91,
        low: 801.69,
        close: 805.02,
        volume: 1670045
      },
      {
        time: new Date(2017, 0, 23),
        open: 807.25,
        high: 820.87,
        low: 803.74,
        close: 819.31,
        volume: 1963628
      },
      {
        time: new Date(2017, 0, 24),
        open: 822.3,
        high: 825.9,
        low: 817.82,
        close: 823.87,
        volume: 1474010
      },
      {
        time: new Date(2017, 0, 25),
        open: 829.62,
        high: 835.77,
        low: 825.06,
        close: 835.67,
        volume: 1627304
      },
      {
        time: new Date(2017, 0, 26),
        open: 837.81,
        high: 838.0,
        low: 827.01,
        close: 832.15,
        volume: 2973891
      },
      {
        time: new Date(2017, 0, 27),
        open: 834.71,
        high: 841.95,
        low: 820.44,
        close: 823.31,
        volume: 2965771
      },
      {
        time: new Date(2017, 0, 30),
        open: 814.66,
        high: 815.84,
        low: 799.8,
        close: 802.32,
        volume: 3246573
      },
      {
        time: new Date(2017, 0, 31),
        open: 796.86,
        high: 801.25,
        low: 790.52,
        close: 796.79,
        volume: 2160556
      },
      {
        time: new Date(2017, 1, 1),
        open: 799.68,
        high: 801.19,
        low: 791.19,
        close: 795.7,
        volume: 2029744
      },
      {
        time: new Date(2017, 1, 2),
        open: 793.8,
        high: 802.7,
        low: 792.0,
        close: 798.53,
        volume: 1532138
      },
      {
        time: new Date(2017, 1, 3),
        open: 802.99,
        high: 806.0,
        low: 800.37,
        close: 801.49,
        volume: 1463448
      },
      {
        time: new Date(2017, 1, 6),
        open: 799.7,
        high: 801.67,
        low: 795.25,
        close: 801.34,
        volume: 1184483
      },
      {
        time: new Date(2017, 1, 7),
        open: 803.99,
        high: 810.5,
        low: 801.78,
        close: 806.97,
        volume: 1241221
      },
      {
        time: new Date(2017, 1, 8),
        open: 807.0,
        high: 811.84,
        low: 803.19,
        close: 808.38,
        volume: 1155990
      },
      {
        time: new Date(2017, 1, 9),
        open: 809.51,
        high: 810.66,
        low: 804.54,
        close: 809.56,
        volume: 990391
      },
      {
        time: new Date(2017, 1, 10),
        open: 811.7,
        high: 815.25,
        low: 809.78,
        close: 813.67,
        volume: 1134976
      },
      {
        time: new Date(2017, 1, 13),
        open: 816.0,
        high: 820.96,
        low: 815.49,
        close: 819.24,
        volume: 1213324
      },
      {
        time: new Date(2017, 1, 14),
        open: 819.0,
        high: 823.0,
        low: 816.0,
        close: 820.45,
        volume: 1054732
      },
      {
        time: new Date(2017, 1, 15),
        open: 819.36,
        high: 823.0,
        low: 818.47,
        close: 818.98,
        volume: 1313617
      },
      {
        time: new Date(2017, 1, 16),
        open: 819.93,
        high: 824.4,
        low: 818.98,
        close: 824.16,
        volume: 1287626
      },
      {
        time: new Date(2017, 1, 17),
        open: 823.02,
        high: 828.07,
        low: 821.66,
        close: 828.07,
        volume: 1611039
      },
      {
        time: new Date(2017, 1, 21),
        open: 828.66,
        high: 833.45,
        low: 828.35,
        close: 831.66,
        volume: 1262337
      },
      {
        time: new Date(2017, 1, 22),
        open: 828.66,
        high: 833.25,
        low: 828.64,
        close: 830.76,
        volume: 987248
      },
      {
        time: new Date(2017, 1, 23),
        open: 830.12,
        high: 832.46,
        low: 822.88,
        close: 831.33,
        volume: 1472771
      },
      {
        time: new Date(2017, 1, 24),
        open: 827.73,
        high: 829.0,
        low: 824.2,
        close: 828.64,
        volume: 1392202
      },
      {
        time: new Date(2017, 1, 27),
        open: 824.55,
        high: 830.5,
        low: 824.0,
        close: 829.28,
        volume: 1101466
      },
      {
        time: new Date(2017, 1, 28),
        open: 825.61,
        high: 828.54,
        low: 820.2,
        close: 823.21,
        volume: 2260769
      },
      {
        time: new Date(2017, 2, 1),
        open: 828.85,
        high: 836.26,
        low: 827.26,
        close: 835.24,
        volume: 1496540
      },
      {
        time: new Date(2017, 2, 2),
        open: 833.85,
        high: 834.51,
        low: 829.64,
        close: 830.63,
        volume: 942476
      },
      {
        time: new Date(2017, 2, 3),
        open: 830.56,
        high: 831.36,
        low: 825.75,
        close: 829.08,
        volume: 896378
      },
      {
        time: new Date(2017, 2, 6),
        open: 826.95,
        high: 828.88,
        low: 822.4,
        close: 827.78,
        volume: 1109037
      },
      {
        time: new Date(2017, 2, 7),
        open: 827.4,
        high: 833.41,
        low: 826.52,
        close: 831.91,
        volume: 1037630
      },
      {
        time: new Date(2017, 2, 8),
        open: 833.51,
        high: 838.15,
        low: 831.79,
        close: 835.37,
        volume: 989773
      },
      {
        time: new Date(2017, 2, 9),
        open: 836.0,
        high: 842.0,
        low: 834.21,
        close: 838.68,
        volume: 1261517
      },
      {
        time: new Date(2017, 2, 10),
        open: 843.28,
        high: 844.91,
        low: 839.5,
        close: 843.25,
        volume: 1704024
      },
      {
        time: new Date(2017, 2, 13),
        open: 844.0,
        high: 848.68,
        low: 843.25,
        close: 845.54,
        volume: 1223647
      },
      {
        time: new Date(2017, 2, 14),
        open: 843.64,
        high: 847.24,
        low: 840.8,
        close: 845.62,
        volume: 780198
      },
      {
        time: new Date(2017, 2, 15),
        open: 847.59,
        high: 848.63,
        low: 840.77,
        close: 847.2,
        volume: 1381474
      },
      {
        time: new Date(2017, 2, 16),
        open: 849.03,
        high: 850.85,
        low: 846.13,
        close: 848.78,
        volume: 977560
      },
      {
        time: new Date(2017, 2, 17),
        open: 851.61,
        high: 853.4,
        low: 847.11,
        close: 852.12,
        volume: 1716471
      },
      {
        time: new Date(2017, 2, 20),
        open: 850.01,
        high: 850.22,
        low: 845.15,
        close: 848.4,
        volume: 1231521
      },
      {
        time: new Date(2017, 2, 21),
        open: 851.4,
        high: 853.5,
        low: 829.02,
        close: 830.46,
        volume: 2463484
      },
      {
        time: new Date(2017, 2, 22),
        open: 831.91,
        high: 835.55,
        low: 827.18,
        close: 829.59,
        volume: 1401465
      },
      {
        time: new Date(2017, 2, 23),
        open: 821.0,
        high: 822.57,
        low: 812.26,
        close: 817.58,
        volume: 3487056
      },
      {
        time: new Date(2017, 2, 24),
        open: 820.08,
        high: 821.93,
        low: 808.89,
        close: 814.43,
        volume: 1981006
      },
      {
        time: new Date(2017, 2, 27),
        open: 806.95,
        high: 821.63,
        low: 803.37,
        close: 819.51,
        volume: 1894990
      },
      {
        time: new Date(2017, 2, 28),
        open: 820.41,
        high: 825.99,
        low: 814.03,
        close: 820.92,
        volume: 1620542
      },
      {
        time: new Date(2017, 2, 29),
        open: 825.0,
        high: 832.76,
        low: 822.38,
        close: 831.41,
        volume: 1786321
      },
      {
        time: new Date(2017, 2, 30),
        open: 833.5,
        high: 833.68,
        low: 829.0,
        close: 831.5,
        volume: 1055339
      },
      {
        time: new Date(2017, 2, 31),
        open: 828.97,
        high: 831.64,
        low: 827.39,
        close: 829.56,
        volume: 1401893
      },
      {
        time: new Date(2017, 3, 3),
        open: 829.22,
        high: 840.85,
        low: 829.22,
        close: 838.55,
        volume: 1671503
      },
      {
        time: new Date(2017, 3, 4),
        open: 831.36,
        high: 835.18,
        low: 829.04,
        close: 834.57,
        volume: 1045363
      },
      {
        time: new Date(2017, 3, 5),
        open: 835.51,
        high: 842.45,
        low: 830.72,
        close: 831.41,
        volume: 1555328
      },
      {
        time: new Date(2017, 3, 6),
        open: 832.4,
        high: 836.39,
        low: 826.46,
        close: 827.88,
        volume: 1254433
      },
      {
        time: new Date(2017, 3, 7),
        open: 827.96,
        high: 828.48,
        low: 820.51,
        close: 824.67,
        volume: 1057253
      },
      {
        time: new Date(2017, 3, 10),
        open: 825.39,
        high: 829.35,
        low: 823.77,
        close: 824.73,
        volume: 978905
      },
      {
        time: new Date(2017, 3, 11),
        open: 824.71,
        high: 827.43,
        low: 817.02,
        close: 823.35,
        volume: 1079732
      },
      {
        time: new Date(2017, 3, 12),
        open: 821.93,
        high: 826.66,
        low: 821.02,
        close: 824.32,
        volume: 900480
      },
      {
        time: new Date(2017, 3, 13),
        open: 822.14,
        high: 826.38,
        low: 821.44,
        close: 823.56,
        volume: 1122362
      },
      {
        time: new Date(2017, 3, 17),
        open: 825.01,
        high: 837.75,
        low: 824.47,
        close: 837.17,
        volume: 895015
      },
      {
        time: new Date(2017, 3, 18),
        open: 834.22,
        high: 838.93,
        low: 832.71,
        close: 836.82,
        volume: 836722
      },
      {
        time: new Date(2017, 3, 19),
        open: 839.79,
        high: 842.22,
        low: 836.29,
        close: 838.21,
        volume: 954330
      },
      {
        time: new Date(2017, 3, 20),
        open: 841.44,
        high: 845.2,
        low: 839.32,
        close: 841.65,
        volume: 959031
      },
      {
        time: new Date(2017, 3, 21),
        open: 842.88,
        high: 843.88,
        low: 840.6,
        close: 843.19,
        volume: 1323583
      },
      {
        time: new Date(2017, 3, 24),
        open: 851.2,
        high: 863.45,
        low: 849.86,
        close: 862.76,
        volume: 1372541
      },
      {
        time: new Date(2017, 3, 25),
        open: 865.0,
        high: 875.0,
        low: 862.81,
        close: 872.3,
        volume: 1671972
      },
      {
        time: new Date(2017, 3, 26),
        open: 874.23,
        high: 876.05,
        low: 867.75,
        close: 871.73,
        volume: 1237167
      },
      {
        time: new Date(2017, 3, 27),
        open: 873.6,
        high: 875.4,
        low: 870.38,
        close: 874.25,
        volume: 2026816
      },
      {
        time: new Date(2017, 3, 28),
        open: 910.66,
        high: 916.85,
        low: 905.77,
        close: 905.96,
        volume: 3276255
      },
      {
        time: new Date(2017, 4, 1),
        open: 901.94,
        high: 915.68,
        low: 901.45,
        close: 912.57,
        volume: 2115993
      },
      {
        time: new Date(2017, 4, 2),
        open: 909.62,
        high: 920.77,
        low: 909.45,
        close: 916.44,
        volume: 1587219
      },
      {
        time: new Date(2017, 4, 3),
        open: 914.86,
        high: 928.1,
        low: 912.54,
        close: 927.04,
        volume: 1499532
      },
      {
        time: new Date(2017, 4, 4),
        open: 926.07,
        high: 935.93,
        low: 924.59,
        close: 931.66,
        volume: 1422144
      },
      {
        time: new Date(2017, 4, 5),
        open: 933.54,
        high: 934.9,
        low: 925.2,
        close: 927.13,
        volume: 1911275
      },
      {
        time: new Date(2017, 4, 8),
        open: 926.12,
        high: 936.92,
        low: 925.26,
        close: 934.3,
        volume: 1329825
      },
      {
        time: new Date(2017, 4, 9),
        open: 936.95,
        high: 937.5,
        low: 929.53,
        close: 932.17,
        volume: 1581809
      },
      {
        time: new Date(2017, 4, 10),
        open: 931.98,
        high: 932.0,
        low: 925.16,
        close: 928.78,
        volume: 1173925
      },
      {
        time: new Date(2017, 4, 11),
        open: 925.32,
        high: 932.53,
        low: 923.03,
        close: 930.6,
        volume: 835386
      },
      {
        time: new Date(2017, 4, 12),
        open: 931.53,
        high: 933.44,
        low: 927.85,
        close: 932.22,
        volume: 1050601
      },
      {
        time: new Date(2017, 4, 15),
        open: 932.95,
        high: 938.25,
        low: 929.34,
        close: 937.08,
        volume: 1108496
      },
      {
        time: new Date(2017, 4, 16),
        open: 940.0,
        high: 943.11,
        low: 937.58,
        close: 943.0,
        volume: 969479
      },
      {
        time: new Date(2017, 4, 17),
        open: 935.67,
        high: 939.33,
        low: 918.14,
        close: 919.62,
        volume: 2362072
      },
      {
        time: new Date(2017, 4, 18),
        open: 921.0,
        high: 933.17,
        low: 918.75,
        close: 930.24,
        volume: 1596897
      },
      {
        time: new Date(2017, 4, 19),
        open: 931.47,
        high: 937.76,
        low: 931.0,
        close: 934.01,
        volume: 1393024
      },
      {
        time: new Date(2017, 4, 22),
        open: 935.0,
        high: 941.88,
        low: 935.0,
        close: 941.86,
        volume: 1120385
      },
      {
        time: new Date(2017, 4, 23),
        open: 947.92,
        high: 951.47,
        low: 942.58,
        close: 948.82,
        volume: 1270817
      },
      {
        time: new Date(2017, 4, 24),
        open: 952.98,
        high: 955.09,
        low: 949.5,
        close: 954.96,
        volume: 1034199
      },
      {
        time: new Date(2017, 4, 25),
        open: 957.33,
        high: 972.63,
        low: 955.47,
        close: 969.54,
        volume: 1660474
      },
      {
        time: new Date(2017, 4, 26),
        open: 969.7,
        high: 974.98,
        low: 965.03,
        close: 971.47,
        volume: 1252010
      },
      {
        time: new Date(2017, 4, 30),
        open: 970.31,
        high: 976.2,
        low: 969.49,
        close: 975.88,
        volume: 1466654
      },
      {
        time: new Date(2017, 4, 31),
        open: 975.02,
        high: 979.27,
        low: 960.18,
        close: 964.86,
        volume: 2448067
      },
      {
        time: new Date(2017, 5, 1),
        open: 968.95,
        high: 971.5,
        low: 960.01,
        close: 966.95,
        volume: 1410458
      },
      {
        time: new Date(2017, 5, 2),
        open: 969.46,
        high: 975.88,
        low: 966.0,
        close: 975.6,
        volume: 1750955
      },
      {
        time: new Date(2017, 5, 5),
        open: 976.55,
        high: 986.91,
        low: 975.1,
        close: 983.68,
        volume: 1252106
      },
      {
        time: new Date(2017, 5, 6),
        open: 983.16,
        high: 988.25,
        low: 975.14,
        close: 976.57,
        volume: 1814624
      },
      {
        time: new Date(2017, 5, 7),
        open: 979.65,
        high: 984.15,
        low: 975.77,
        close: 981.08,
        volume: 1453874
      },
      {
        time: new Date(2017, 5, 8),
        open: 982.35,
        high: 984.57,
        low: 977.2,
        close: 983.41,
        volume: 1481916
      },
      {
        time: new Date(2017, 5, 9),
        open: 984.5,
        high: 984.5,
        low: 935.63,
        close: 949.83,
        volume: 3309389
      },
      {
        time: new Date(2017, 5, 12),
        open: 939.56,
        high: 949.36,
        low: 915.23,
        close: 942.9,
        volume: 3763529
      },
      {
        time: new Date(2017, 5, 13),
        open: 951.91,
        high: 959.98,
        low: 944.09,
        close: 953.4,
        volume: 2013337
      },
      {
        time: new Date(2017, 5, 14),
        open: 959.92,
        high: 961.15,
        low: 942.25,
        close: 950.76,
        volume: 1489715
      },
      {
        time: new Date(2017, 5, 15),
        open: 933.97,
        high: 943.34,
        low: 924.44,
        close: 942.31,
        volume: 2133050
      },
      {
        time: new Date(2017, 5, 16),
        open: 940.0,
        high: 942.04,
        low: 931.6,
        close: 939.78,
        volume: 3094711
      },
      {
        time: new Date(2017, 5, 19),
        open: 949.96,
        high: 959.99,
        low: 949.05,
        close: 957.37,
        volume: 1533336
      },
      {
        time: new Date(2017, 5, 20),
        open: 957.52,
        high: 961.62,
        low: 950.01,
        close: 950.63,
        volume: 1125990
      },
      {
        time: new Date(2017, 5, 21),
        open: 953.64,
        high: 960.1,
        low: 950.76,
        close: 959.45,
        volume: 1202233
      },
      {
        time: new Date(2017, 5, 22),
        open: 958.7,
        high: 960.72,
        low: 954.55,
        close: 957.09,
        volume: 941958
      },
      {
        time: new Date(2017, 5, 23),
        open: 956.83,
        high: 966.0,
        low: 954.2,
        close: 965.59,
        volume: 1527856
      },
      {
        time: new Date(2017, 5, 26),
        open: 969.9,
        high: 973.31,
        low: 950.79,
        close: 952.27,
        volume: 1598355
      },
      {
        time: new Date(2017, 5, 27),
        open: 942.46,
        high: 948.29,
        low: 926.85,
        close: 927.33,
        volume: 2579930
      },
      {
        time: new Date(2017, 5, 28),
        open: 929.0,
        high: 942.75,
        low: 916.0,
        close: 940.49,
        volume: 2721406
      },
      {
        time: new Date(2017, 5, 29),
        open: 929.92,
        high: 931.26,
        low: 910.62,
        close: 917.79,
        volume: 3299176
      },
      {
        time: new Date(2017, 5, 30),
        open: 926.05,
        high: 926.05,
        low: 908.31,
        close: 908.73,
        volume: 2090226
      },
      {
        time: new Date(2017, 6, 3),
        open: 912.18,
        high: 913.94,
        low: 894.79,
        close: 898.7,
        volume: 1710373
      },
      {
        time: new Date(2017, 6, 5),
        open: 901.76,
        high: 914.51,
        low: 898.5,
        close: 911.71,
        volume: 1813884
      },
      {
        time: new Date(2017, 6, 6),
        open: 904.12,
        high: 914.94,
        low: 899.7,
        close: 906.69,
        volume: 1424503
      },
      {
        time: new Date(2017, 6, 7),
        open: 908.85,
        high: 921.54,
        low: 908.85,
        close: 918.59,
        volume: 1637785
      },
      {
        time: new Date(2017, 6, 10),
        open: 921.77,
        high: 930.38,
        low: 919.59,
        close: 928.8,
        volume: 1192825
      },
      {
        time: new Date(2017, 6, 11),
        open: 929.54,
        high: 931.43,
        low: 922.0,
        close: 930.09,
        volume: 1113235
      },
      {
        time: new Date(2017, 6, 12),
        open: 938.68,
        high: 946.3,
        low: 934.47,
        close: 943.83,
        volume: 1532144
      },
      {
        time: new Date(2017, 6, 13),
        open: 946.29,
        high: 954.45,
        low: 943.01,
        close: 947.16,
        volume: 1294687
      },
      {
        time: new Date(2017, 6, 14),
        open: 952.0,
        high: 956.91,
        low: 948.0,
        close: 955.99,
        volume: 1053774
      },
      {
        time: new Date(2017, 6, 17),
        open: 957.0,
        high: 960.74,
        low: 949.24,
        close: 953.42,
        volume: 1165537
      },
      {
        time: new Date(2017, 6, 18),
        open: 953.0,
        high: 968.04,
        low: 950.6,
        close: 965.4,
        volume: 1153964
      },
      {
        time: new Date(2017, 6, 19),
        open: 967.84,
        high: 973.04,
        low: 964.03,
        close: 970.89,
        volume: 1224540
      },
      {
        time: new Date(2017, 6, 20),
        open: 975.0,
        high: 975.9,
        low: 961.51,
        close: 968.15,
        volume: 1624463
      },
      {
        time: new Date(2017, 6, 21),
        open: 962.25,
        high: 973.23,
        low: 960.15,
        close: 972.92,
        volume: 1711000
      },
      {
        time: new Date(2017, 6, 24),
        open: 972.22,
        high: 986.2,
        low: 970.77,
        close: 980.34,
        volume: 3248347
      },
      {
        time: new Date(2017, 6, 25),
        open: 953.81,
        high: 959.7,
        low: 945.4,
        close: 950.7,
        volume: 4660979
      },
      {
        time: new Date(2017, 6, 26),
        open: 954.68,
        high: 955.0,
        low: 942.28,
        close: 947.8,
        volume: 2088256
      },
      {
        time: new Date(2017, 6, 27),
        open: 951.78,
        high: 951.78,
        low: 920.0,
        close: 934.09,
        volume: 3212996
      },
      {
        time: new Date(2017, 6, 28),
        open: 929.4,
        high: 943.83,
        low: 927.5,
        close: 941.53,
        volume: 1846351
      },
      {
        time: new Date(2017, 6, 31),
        open: 941.89,
        high: 943.59,
        low: 926.04,
        close: 930.5,
        volume: 1970095
      },
      {
        time: new Date(2017, 7, 1),
        open: 932.38,
        high: 937.45,
        low: 929.26,
        close: 930.83,
        volume: 1277734
      },
      {
        time: new Date(2017, 7, 2),
        open: 928.61,
        high: 932.6,
        low: 916.68,
        close: 930.39,
        volume: 1824448
      },
      {
        time: new Date(2017, 7, 3),
        open: 930.34,
        high: 932.24,
        low: 922.24,
        close: 923.65,
        volume: 1202512
      },
      {
        time: new Date(2017, 7, 4),
        open: 926.75,
        high: 930.31,
        low: 923.03,
        close: 927.96,
        volume: 1082267
      },
      {
        time: new Date(2017, 7, 7),
        open: 929.06,
        high: 931.7,
        low: 926.5,
        close: 929.36,
        volume: 1032239
      },
      {
        time: new Date(2017, 7, 8),
        open: 927.09,
        high: 935.81,
        low: 925.61,
        close: 926.79,
        volume: 1061579
      },
      {
        time: new Date(2017, 7, 9),
        open: 920.61,
        high: 925.98,
        low: 917.25,
        close: 922.9,
        volume: 1192081
      },
      {
        time: new Date(2017, 7, 10),
        open: 917.55,
        high: 919.26,
        low: 906.13,
        close: 907.24,
        volume: 1823967
      },
      {
        time: new Date(2017, 7, 11),
        open: 907.97,
        high: 917.78,
        low: 905.58,
        close: 914.39,
        volume: 1206782
      },
      {
        time: new Date(2017, 7, 14),
        open: 922.53,
        high: 924.67,
        low: 918.19,
        close: 922.67,
        volume: 1064530
      },
      {
        time: new Date(2017, 7, 15),
        open: 924.23,
        high: 926.55,
        low: 919.82,
        close: 922.22,
        volume: 883369
      },
      {
        time: new Date(2017, 7, 16),
        open: 925.29,
        high: 932.7,
        low: 923.44,
        close: 926.96,
        volume: 1006711
      },
      {
        time: new Date(2017, 7, 17),
        open: 925.78,
        high: 926.86,
        low: 910.98,
        close: 910.98,
        volume: 1277238
      },
      {
        time: new Date(2017, 7, 18),
        open: 910.31,
        high: 915.28,
        low: 907.15,
        close: 910.67,
        volume: 1342689
      },
      {
        time: new Date(2017, 7, 21),
        open: 910.0,
        high: 913.0,
        low: 903.4,
        close: 906.66,
        volume: 943441
      },
      {
        time: new Date(2017, 7, 22),
        open: 912.72,
        high: 925.86,
        low: 911.48,
        close: 924.69,
        volume: 1166737
      },
      {
        time: new Date(2017, 7, 23),
        open: 921.93,
        high: 929.93,
        low: 919.36,
        close: 927.0,
        volume: 1090248
      },
      {
        time: new Date(2017, 7, 24),
        open: 928.66,
        high: 930.84,
        low: 915.5,
        close: 921.28,
        volume: 1270306
      },
      {
        time: new Date(2017, 7, 25),
        open: 923.49,
        high: 925.56,
        low: 915.5,
        close: 915.89,
        volume: 1053376
      },
      {
        time: new Date(2017, 7, 28),
        open: 916.0,
        high: 919.24,
        low: 911.87,
        close: 913.81,
        volume: 1086484
      },
      {
        time: new Date(2017, 7, 29),
        open: 905.1,
        high: 923.33,
        low: 905.0,
        close: 921.29,
        volume: 1185564
      },
      {
        time: new Date(2017, 7, 30),
        open: 920.05,
        high: 930.82,
        low: 919.65,
        close: 929.57,
        volume: 1301225
      },
      {
        time: new Date(2017, 7, 31),
        open: 931.76,
        high: 941.98,
        low: 931.76,
        close: 939.33,
        volume: 1582579
      },
      {
        time: new Date(2017, 8, 1),
        open: 941.13,
        high: 942.48,
        low: 935.15,
        close: 937.34,
        volume: 947374
      },
      {
        time: new Date(2017, 8, 5),
        open: 933.08,
        high: 937.0,
        low: 921.96,
        close: 928.45,
        volume: 1348292
      },
      {
        time: new Date(2017, 8, 6),
        open: 930.15,
        high: 930.92,
        low: 919.27,
        close: 927.81,
        volume: 1527650
      },
      {
        time: new Date(2017, 8, 7),
        open: 931.73,
        high: 936.41,
        low: 923.62,
        close: 935.95,
        volume: 1212743
      },
      {
        time: new Date(2017, 8, 8),
        open: 936.49,
        high: 936.99,
        low: 924.88,
        close: 926.5,
        volume: 1011538
      },
      {
        time: new Date(2017, 8, 11),
        open: 934.25,
        high: 938.38,
        low: 926.92,
        close: 929.08,
        volume: 1266991
      },
      {
        time: new Date(2017, 8, 12),
        open: 932.59,
        high: 933.48,
        low: 923.86,
        close: 932.07,
        volume: 1134397
      },
      {
        time: new Date(2017, 8, 13),
        open: 930.66,
        high: 937.25,
        low: 929.86,
        close: 935.09,
        volume: 1102631
      },
      {
        time: new Date(2017, 8, 14),
        open: 931.25,
        high: 932.77,
        low: 924.0,
        close: 925.11,
        volume: 1397644
      },
      {
        time: new Date(2017, 8, 15),
        open: 924.66,
        high: 926.49,
        low: 916.36,
        close: 920.29,
        volume: 2505430
      },
      {
        time: new Date(2017, 8, 18),
        open: 920.01,
        high: 922.08,
        low: 910.6,
        close: 915.0,
        volume: 1306922
      },
      {
        time: new Date(2017, 8, 19),
        open: 917.42,
        high: 922.42,
        low: 912.55,
        close: 921.81,
        volume: 936654
      },
      {
        time: new Date(2017, 8, 20),
        open: 922.98,
        high: 933.88,
        low: 922.0,
        close: 931.58,
        volume: 1669763
      },
      {
        time: new Date(2017, 8, 21),
        open: 933.0,
        high: 936.53,
        low: 923.83,
        close: 932.45,
        volume: 1290607
      },
      {
        time: new Date(2017, 8, 22),
        open: 927.75,
        high: 934.73,
        low: 926.48,
        close: 928.53,
        volume: 1052704
      },
      {
        time: new Date(2017, 8, 25),
        open: 925.45,
        high: 926.4,
        low: 909.7,
        close: 920.97,
        volume: 1856822
      },
      {
        time: new Date(2017, 8, 26),
        open: 923.72,
        high: 930.82,
        low: 921.14,
        close: 924.86,
        volume: 1666861
      },
      {
        time: new Date(2017, 8, 27),
        open: 927.74,
        high: 949.9,
        low: 927.74,
        close: 944.49,
        volume: 2212600
      },
      {
        time: new Date(2017, 8, 28),
        open: 941.36,
        high: 950.69,
        low: 940.55,
        close: 949.5,
        volume: 1020312
      },
      {
        time: new Date(2017, 8, 29),
        open: 952.0,
        high: 959.79,
        low: 951.51,
        close: 959.11,
        volume: 1580994
      },
      {
        time: new Date(2017, 9, 2),
        open: 959.98,
        high: 962.54,
        low: 947.84,
        close: 953.27,
        volume: 1283444
      },
      {
        time: new Date(2017, 9, 3),
        open: 954.0,
        high: 958.0,
        low: 949.14,
        close: 957.79,
        volume: 888346
      },
      {
        time: new Date(2017, 9, 4),
        open: 957.0,
        high: 960.39,
        low: 950.69,
        close: 951.68,
        volume: 952391
      },
      {
        time: new Date(2017, 9, 5),
        open: 955.49,
        high: 970.91,
        low: 955.18,
        close: 969.96,
        volume: 1213816
      },
      {
        time: new Date(2017, 9, 6),
        open: 966.7,
        high: 979.46,
        low: 963.36,
        close: 978.89,
        volume: 1173882
      },
      {
        time: new Date(2017, 9, 9),
        open: 980.0,
        high: 985.42,
        low: 976.11,
        close: 977.0,
        volume: 891355
      },
      {
        time: new Date(2017, 9, 10),
        open: 980.0,
        high: 981.57,
        low: 966.08,
        close: 972.6,
        volume: 968362
      },
      {
        time: new Date(2017, 9, 11),
        open: 973.72,
        high: 990.71,
        low: 972.25,
        close: 989.25,
        volume: 1693274
      },
      {
        time: new Date(2017, 9, 12),
        open: 987.45,
        high: 994.12,
        low: 985.0,
        close: 987.83,
        volume: 1262793
      },
      {
        time: new Date(2017, 9, 13),
        open: 992.0,
        high: 997.21,
        low: 989.0,
        close: 989.68,
        volume: 1169777
      },
      {
        time: new Date(2017, 9, 16),
        open: 992.1,
        high: 993.91,
        low: 984.0,
        close: 992.0,
        volume: 910543
      },
      {
        time: new Date(2017, 9, 17),
        open: 990.29,
        high: 996.44,
        low: 988.59,
        close: 992.18,
        volume: 1290186
      },
      {
        time: new Date(2017, 9, 18),
        open: 991.77,
        high: 996.72,
        low: 986.97,
        close: 992.81,
        volume: 1057581
      },
      {
        time: new Date(2017, 9, 19),
        open: 986.0,
        high: 988.88,
        low: 978.39,
        close: 984.45,
        volume: 1313575
      },
      {
        time: new Date(2017, 9, 20),
        open: 989.44,
        high: 991.0,
        low: 984.58,
        close: 988.2,
        volume: 1183186
      },
      {
        time: new Date(2017, 9, 23),
        open: 989.52,
        high: 989.52,
        low: 966.12,
        close: 968.45,
        volume: 1478448
      },
      {
        time: new Date(2017, 9, 24),
        open: 970.0,
        high: 972.23,
        low: 961.0,
        close: 970.54,
        volume: 1212153
      },
      {
        time: new Date(2017, 9, 25),
        open: 968.37,
        high: 976.09,
        low: 960.52,
        close: 973.33,
        volume: 1211262
      },
      {
        time: new Date(2017, 9, 26),
        open: 980.0,
        high: 987.6,
        low: 972.2,
        close: 972.56,
        volume: 2042149
      },
      {
        time: new Date(2017, 9, 27),
        open: 1009.19,
        high: 1048.39,
        low: 1008.2,
        close: 1019.27,
        volume: 5167689
      },
      {
        time: new Date(2017, 9, 30),
        open: 1014.0,
        high: 1024.97,
        low: 1007.5,
        close: 1017.11,
        volume: 2085062
      },
      {
        time: new Date(2017, 9, 31),
        open: 1015.22,
        high: 1024.0,
        low: 1010.42,
        close: 1016.64,
        volume: 1331391
      },
      {
        time: new Date(2017, 10, 1),
        open: 1017.21,
        high: 1029.67,
        low: 1016.95,
        close: 1025.5,
        volume: 1373444
      },
      {
        time: new Date(2017, 10, 2),
        open: 1021.76,
        high: 1028.09,
        low: 1013.01,
        close: 1025.58,
        volume: 1048970
      },
      {
        time: new Date(2017, 10, 3),
        open: 1022.11,
        high: 1032.65,
        low: 1020.31,
        close: 1032.48,
        volume: 1076350
      },
      {
        time: new Date(2017, 10, 6),
        open: 1028.99,
        high: 1034.87,
        low: 1025.0,
        close: 1025.9,
        volume: 1125185
      },
      {
        time: new Date(2017, 10, 7),
        open: 1027.27,
        high: 1033.97,
        low: 1025.13,
        close: 1033.33,
        volume: 1112331
      },
      {
        time: new Date(2017, 10, 8),
        open: 1030.52,
        high: 1043.52,
        low: 1028.45,
        close: 1039.85,
        volume: 1088716
      },
      {
        time: new Date(2017, 10, 9),
        open: 1033.99,
        high: 1033.99,
        low: 1019.67,
        close: 1031.26,
        volume: 1245246
      },
      {
        time: new Date(2017, 10, 10),
        open: 1026.46,
        high: 1030.76,
        low: 1025.28,
        close: 1028.07,
        volume: 720676
      },
      {
        time: new Date(2017, 10, 13),
        open: 1023.42,
        high: 1031.58,
        low: 1022.57,
        close: 1025.75,
        volume: 885779
      },
      {
        time: new Date(2017, 10, 14),
        open: 1022.59,
        high: 1026.81,
        low: 1014.15,
        close: 1026.0,
        volume: 959222
      },
      {
        time: new Date(2017, 10, 15),
        open: 1019.21,
        high: 1024.09,
        low: 1015.42,
        close: 1020.91,
        volume: 853992
      },
      {
        time: new Date(2017, 10, 16),
        open: 1022.52,
        high: 1035.92,
        low: 1022.52,
        close: 1032.5,
        volume: 1129688
      },
      {
        time: new Date(2017, 10, 17),
        open: 1034.01,
        high: 1034.42,
        low: 1017.75,
        close: 1019.09,
        volume: 1397064
      },
      {
        time: new Date(2017, 10, 20),
        open: 1020.26,
        high: 1022.61,
        low: 1017.5,
        close: 1018.38,
        volume: 953470
      },
      {
        time: new Date(2017, 10, 21),
        open: 1023.31,
        high: 1035.11,
        low: 1022.66,
        close: 1034.49,
        volume: 1096999
      },
      {
        time: new Date(2017, 10, 22),
        open: 1035.0,
        high: 1039.71,
        low: 1031.43,
        close: 1035.96,
        volume: 746878
      },
      {
        time: new Date(2017, 10, 24),
        open: 1035.87,
        high: 1043.18,
        low: 1035.0,
        close: 1040.61,
        volume: 536996
      },
      {
        time: new Date(2017, 10, 27),
        open: 1040.0,
        high: 1055.46,
        low: 1038.44,
        close: 1054.21,
        volume: 1307881
      },
      {
        time: new Date(2017, 10, 28),
        open: 1055.09,
        high: 1062.38,
        low: 1040.0,
        close: 1047.41,
        volume: 1424394
      },
      {
        time: new Date(2017, 10, 29),
        open: 1042.68,
        high: 1044.08,
        low: 1015.65,
        close: 1021.66,
        volume: 2459426
      },
      {
        time: new Date(2017, 10, 30),
        open: 1022.37,
        high: 1028.49,
        low: 1015.0,
        close: 1021.41,
        volume: 1724031
      },
      {
        time: new Date(2017, 11, 1),
        open: 1015.8,
        high: 1022.49,
        low: 1002.02,
        close: 1010.17,
        volume: 1909566
      },
      {
        time: new Date(2017, 11, 4),
        open: 1012.66,
        high: 1016.1,
        low: 995.57,
        close: 998.68,
        volume: 1906439
      },
      {
        time: new Date(2017, 11, 5),
        open: 995.94,
        high: 1020.61,
        low: 988.28,
        close: 1005.15,
        volume: 2067318
      },
      {
        time: new Date(2017, 11, 6),
        open: 1001.5,
        high: 1024.97,
        low: 1001.14,
        close: 1018.38,
        volume: 1271964
      },
      {
        time: new Date(2017, 11, 7),
        open: 1020.43,
        high: 1034.24,
        low: 1018.07,
        close: 1030.93,
        volume: 1458242
      },
      {
        time: new Date(2017, 11, 8),
        open: 1037.49,
        high: 1042.05,
        low: 1032.52,
        close: 1037.05,
        volume: 1290774
      },
      {
        time: new Date(2017, 11, 11),
        open: 1035.5,
        high: 1043.8,
        low: 1032.05,
        close: 1041.1,
        volume: 1192838
      },
      {
        time: new Date(2017, 11, 12),
        open: 1039.63,
        high: 1050.31,
        low: 1033.69,
        close: 1040.48,
        volume: 1279659
      },
      {
        time: new Date(2017, 11, 13),
        open: 1046.12,
        high: 1046.66,
        low: 1038.38,
        close: 1040.61,
        volume: 1282677
      },
      {
        time: new Date(2017, 11, 14),
        open: 1045.0,
        high: 1058.5,
        low: 1043.11,
        close: 1049.15,
        volume: 1558835
      },
      {
        time: new Date(2017, 11, 15),
        open: 1054.61,
        high: 1067.62,
        low: 1049.5,
        close: 1064.19,
        volume: 3275931
      },
      {
        time: new Date(2017, 11, 18),
        open: 1066.08,
        high: 1078.49,
        low: 1062.0,
        close: 1077.14,
        volume: 1554552
      },
      {
        time: new Date(2017, 11, 19),
        open: 1075.2,
        high: 1076.84,
        low: 1063.55,
        close: 1070.68,
        volume: 1338725
      },
      {
        time: new Date(2017, 11, 20),
        open: 1071.78,
        high: 1073.38,
        low: 1061.52,
        close: 1064.95,
        volume: 1268582
      },
      {
        time: new Date(2017, 11, 21),
        open: 1064.95,
        high: 1069.33,
        low: 1061.79,
        close: 1063.63,
        volume: 995703
      },
      {
        time: new Date(2017, 11, 22),
        open: 1061.11,
        high: 1064.2,
        low: 1059.44,
        close: 1060.12,
        volume: 755095
      },
      {
        time: new Date(2017, 11, 26),
        open: 1058.07,
        high: 1060.12,
        low: 1050.2,
        close: 1056.74,
        volume: 761237
      },
      {
        time: new Date(2017, 11, 27),
        open: 1057.39,
        high: 1058.37,
        low: 1048.05,
        close: 1049.37,
        volume: 1271911
      },
      {
        time: new Date(2017, 11, 28),
        open: 1051.6,
        high: 1054.75,
        low: 1044.77,
        close: 1048.14,
        volume: 837121
      },
      {
        time: new Date(2017, 11, 29),
        open: 1046.72,
        high: 1049.7,
        low: 1044.9,
        close: 1046.4,
        volume: 887511
      },
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
        time: new Date(2013, 1, 1),
        open: 27.67,
        high: 28.05,
        low: 27.55,
        close: 27.93,
        volume: 55566440
      },
      {
        time: new Date(2013, 1, 4),
        open: 27.87,
        high: 28.02,
        low: 27.42,
        close: 27.44,
        volume: 50539942
      },
      {
        time: new Date(2013, 1, 5),
        open: 27.62,
        high: 27.66,
        low: 27.36,
        close: 27.5,
        volume: 35410361
      },
      {
        time: new Date(2013, 1, 6),
        open: 27.38,
        high: 27.54,
        low: 27.25,
        close: 27.34,
        volume: 41889572
      },
      {
        time: new Date(2013, 1, 7),
        open: 27.35,
        high: 27.39,
        low: 27.1,
        close: 27.28,
        volume: 38034068
      },
      {
        time: new Date(2013, 1, 8),
        open: 27.35,
        high: 27.71,
        low: 27.31,
        close: 27.55,
        volume: 33320436
      },
      {
        time: new Date(2013, 1, 11),
        open: 27.65,
        high: 27.92,
        low: 27.5,
        close: 27.86,
        volume: 32248149
      },
      {
        time: new Date(2013, 1, 12),
        open: 27.88,
        high: 28.0,
        low: 27.75,
        close: 27.88,
        volume: 35991329
      },
      {
        time: new Date(2013, 1, 13),
        open: 27.93,
        high: 28.11,
        low: 27.88,
        close: 28.03,
        volume: 41716060
      },
      {
        time: new Date(2013, 1, 14),
        open: 27.92,
        high: 28.06,
        low: 27.87,
        close: 28.04,
        volume: 32663454
      },
      {
        time: new Date(2013, 1, 15),
        open: 28.04,
        high: 28.16,
        low: 27.88,
        close: 28.01,
        volume: 49657740
      },
      {
        time: new Date(2013, 1, 19),
        open: 27.88,
        high: 28.09,
        low: 27.8,
        close: 28.04,
        volume: 38806870
      },
      {
        time: new Date(2013, 1, 20),
        open: 28.13,
        high: 28.2,
        low: 27.83,
        close: 27.87,
        volume: 44112446
      },
      {
        time: new Date(2013, 1, 21),
        open: 27.74,
        high: 27.74,
        low: 27.23,
        close: 27.49,
        volume: 49085538
      },
      {
        time: new Date(2013, 1, 22),
        open: 27.68,
        high: 27.76,
        low: 27.48,
        close: 27.76,
        volume: 31430018
      },
      {
        time: new Date(2013, 1, 25),
        open: 27.97,
        high: 28.05,
        low: 27.37,
        close: 27.37,
        volume: 48020353
      },
      {
        time: new Date(2013, 1, 26),
        open: 27.38,
        high: 27.6,
        low: 27.34,
        close: 27.37,
        volume: 49925050
      },
      {
        time: new Date(2013, 1, 27),
        open: 27.42,
        high: 28.0,
        low: 27.33,
        close: 27.81,
        volume: 36395589
      },
      {
        time: new Date(2013, 1, 28),
        open: 27.88,
        high: 27.97,
        low: 27.74,
        close: 27.8,
        volume: 35840861
      },
      {
        time: new Date(2013, 2, 1),
        open: 27.72,
        high: 27.98,
        low: 27.52,
        close: 27.95,
        volume: 34851878
      },
      {
        time: new Date(2013, 2, 4),
        open: 27.85,
        high: 28.15,
        low: 27.7,
        close: 28.15,
        volume: 38167497
      },
      {
        time: new Date(2013, 2, 5),
        open: 28.29,
        high: 28.54,
        low: 28.16,
        close: 28.35,
        volume: 41437141
      },
      {
        time: new Date(2013, 2, 6),
        open: 28.21,
        high: 28.23,
        low: 27.78,
        close: 28.09,
        volume: 51448913
      },
      {
        time: new Date(2013, 2, 7),
        open: 28.11,
        high: 28.28,
        low: 28.0,
        close: 28.14,
        volume: 29197630
      },
      {
        time: new Date(2013, 2, 8),
        open: 28.25,
        high: 28.33,
        low: 27.96,
        close: 28.0,
        volume: 37671493
      },
      {
        time: new Date(2013, 2, 11),
        open: 27.94,
        high: 27.97,
        low: 27.67,
        close: 27.87,
        volume: 36635432
      },
      {
        time: new Date(2013, 2, 12),
        open: 27.84,
        high: 27.95,
        low: 27.64,
        close: 27.91,
        volume: 39259456
      },
      {
        time: new Date(2013, 2, 13),
        open: 27.87,
        high: 28.02,
        low: 27.75,
        close: 27.92,
        volume: 29103208
      },
      {
        time: new Date(2013, 2, 14),
        open: 28.0,
        high: 28.16,
        low: 27.93,
        close: 28.14,
        volume: 55917303
      },
      {
        time: new Date(2013, 2, 15),
        open: 28.03,
        high: 28.16,
        low: 27.98,
        close: 28.04,
        volume: 92711915
      },
      {
        time: new Date(2013, 2, 18),
        open: 27.88,
        high: 28.28,
        low: 27.81,
        close: 28.1,
        volume: 44828022
      },
      {
        time: new Date(2013, 2, 19),
        open: 28.12,
        high: 28.22,
        low: 28.03,
        close: 28.18,
        volume: 51902968
      },
      {
        time: new Date(2013, 2, 20),
        open: 28.34,
        high: 28.49,
        low: 28.18,
        close: 28.32,
        volume: 35454207
      },
      {
        time: new Date(2013, 2, 21),
        open: 28.11,
        high: 28.36,
        low: 28.05,
        close: 28.11,
        volume: 34234566
      },
      {
        time: new Date(2013, 2, 22),
        open: 28.19,
        high: 28.34,
        low: 28.1,
        close: 28.25,
        volume: 28720834
      },
      {
        time: new Date(2013, 2, 25),
        open: 28.3,
        high: 28.35,
        low: 27.96,
        close: 28.16,
        volume: 44153931
      },
      {
        time: new Date(2013, 2, 26),
        open: 28.24,
        high: 28.34,
        low: 28.11,
        close: 28.16,
        volume: 27831654
      },
      {
        time: new Date(2013, 2, 27),
        open: 28.14,
        high: 28.44,
        low: 28.08,
        close: 28.37,
        volume: 36048959
      },
      {
        time: new Date(2013, 2, 28),
        open: 28.32,
        high: 28.66,
        low: 28.26,
        close: 28.6,
        volume: 55455613
      },
      {
        time: new Date(2013, 3, 1),
        open: 28.64,
        high: 28.66,
        low: 28.36,
        close: 28.61,
        volume: 29203122
      },
      {
        time: new Date(2013, 3, 2),
        open: 28.59,
        high: 28.85,
        low: 28.52,
        close: 28.8,
        volume: 28460384
      },
      {
        time: new Date(2013, 3, 3),
        open: 28.75,
        high: 28.95,
        low: 28.54,
        close: 28.56,
        volume: 35064468
      },
      {
        time: new Date(2013, 3, 4),
        open: 28.39,
        high: 28.61,
        low: 28.27,
        close: 28.6,
        volume: 45267601
      },
      {
        time: new Date(2013, 3, 5),
        open: 28.22,
        high: 28.78,
        low: 28.11,
        close: 28.7,
        volume: 50928776
      },
      {
        time: new Date(2013, 3, 8),
        open: 28.73,
        high: 28.73,
        low: 28.47,
        close: 28.59,
        volume: 34759724
      },
      {
        time: new Date(2013, 3, 9),
        open: 28.73,
        high: 29.82,
        low: 28.68,
        close: 29.61,
        volume: 77737851
      },
      {
        time: new Date(2013, 3, 10),
        open: 29.57,
        high: 30.32,
        low: 29.52,
        close: 30.28,
        volume: 71116616
      },
      {
        time: new Date(2013, 3, 11),
        open: 29.1,
        high: 29.2,
        low: 28.73,
        close: 28.94,
        volume: 130923162
      },
      {
        time: new Date(2013, 3, 12),
        open: 28.85,
        high: 29.02,
        low: 28.66,
        close: 28.79,
        volume: 62888012
      },
      {
        time: new Date(2013, 3, 15),
        open: 28.65,
        high: 28.98,
        low: 28.51,
        close: 28.69,
        volume: 56335548
      },
      {
        time: new Date(2013, 3, 16),
        open: 28.9,
        high: 29.14,
        low: 28.7,
        close: 28.97,
        volume: 52804656
      },
      {
        time: new Date(2013, 3, 17),
        open: 28.85,
        high: 29.04,
        low: 28.6,
        close: 28.82,
        volume: 52841328
      },
      {
        time: new Date(2013, 3, 18),
        open: 28.95,
        high: 28.98,
        low: 28.5,
        close: 28.79,
        volume: 56906528
      },
      {
        time: new Date(2013, 3, 19),
        open: 29.62,
        high: 30.24,
        low: 29.61,
        close: 29.76,
        volume: 99793502
      },
      {
        time: new Date(2013, 3, 22),
        open: 30.3,
        high: 31.18,
        low: 30.27,
        close: 30.83,
        volume: 137909468
      },
      {
        time: new Date(2013, 3, 23),
        open: 30.7,
        high: 30.9,
        low: 30.38,
        close: 30.6,
        volume: 59126880
      },
      {
        time: new Date(2013, 3, 24),
        open: 30.62,
        high: 31.92,
        low: 30.6,
        close: 31.76,
        volume: 90955499
      },
      {
        time: new Date(2013, 3, 25),
        open: 31.71,
        high: 32.84,
        low: 31.54,
        close: 31.94,
        volume: 110700124
      },
      {
        time: new Date(2013, 3, 26),
        open: 31.9,
        high: 31.98,
        low: 31.45,
        close: 31.79,
        volume: 47802884
      },
      {
        time: new Date(2013, 3, 29),
        open: 31.8,
        high: 32.68,
        low: 31.77,
        close: 32.61,
        volume: 59122266
      },
      {
        time: new Date(2013, 3, 30),
        open: 32.56,
        high: 33.11,
        low: 32.28,
        close: 33.1,
        volume: 75166967
      },
      {
        time: new Date(2013, 4, 1),
        open: 32.93,
        high: 33.08,
        low: 32.6,
        close: 32.72,
        volume: 54336834
      },
      {
        time: new Date(2013, 4, 2),
        open: 32.63,
        high: 33.17,
        low: 32.39,
        close: 33.16,
        volume: 46069472
      },
      {
        time: new Date(2013, 4, 3),
        open: 33.23,
        high: 33.52,
        low: 33.08,
        close: 33.49,
        volume: 46786840
      },
      {
        time: new Date(2013, 4, 6),
        open: 33.42,
        high: 33.91,
        low: 33.25,
        close: 33.75,
        volume: 40982478
      },
      {
        time: new Date(2013, 4, 7),
        open: 33.65,
        high: 33.79,
        low: 33.24,
        close: 33.31,
        volume: 43078268
      },
      {
        time: new Date(2013, 4, 8),
        open: 33.07,
        high: 33.24,
        low: 32.65,
        close: 32.99,
        volume: 51595643
      },
      {
        time: new Date(2013, 4, 9),
        open: 32.85,
        high: 33.0,
        low: 32.59,
        close: 32.66,
        volume: 46417802
      },
      {
        time: new Date(2013, 4, 10),
        open: 32.67,
        high: 32.72,
        low: 32.32,
        close: 32.69,
        volume: 36396524
      },
      {
        time: new Date(2013, 4, 13),
        open: 32.61,
        high: 33.07,
        low: 32.55,
        close: 33.03,
        volume: 36036347
      },
      {
        time: new Date(2013, 4, 14),
        open: 32.86,
        high: 33.53,
        low: 32.8,
        close: 33.53,
        volume: 56874005
      },
      {
        time: new Date(2013, 4, 15),
        open: 33.45,
        high: 33.9,
        low: 33.43,
        close: 33.84,
        volume: 46309506
      },
      {
        time: new Date(2013, 4, 16),
        open: 33.64,
        high: 34.15,
        low: 33.55,
        close: 34.08,
        volume: 59384283
      },
      {
        time: new Date(2013, 4, 17),
        open: 34.13,
        high: 34.87,
        low: 34.1,
        close: 34.87,
        volume: 60674267
      },
      {
        time: new Date(2013, 4, 20),
        open: 34.73,
        high: 35.1,
        low: 34.68,
        close: 35.08,
        volume: 54025227
      },
      {
        time: new Date(2013, 4, 21),
        open: 35.1,
        high: 35.27,
        low: 34.72,
        close: 34.85,
        volume: 48705362
      },
      {
        time: new Date(2013, 4, 22),
        open: 34.79,
        high: 34.84,
        low: 34.36,
        close: 34.61,
        volume: 66050872
      },
      {
        time: new Date(2013, 4, 23),
        open: 34.23,
        high: 34.55,
        low: 33.9,
        close: 34.15,
        volume: 51113510
      },
      {
        time: new Date(2013, 4, 24),
        open: 33.92,
        high: 34.28,
        low: 33.9,
        close: 34.27,
        volume: 33175804
      },
      {
        time: new Date(2013, 4, 28),
        open: 34.42,
        high: 35.18,
        low: 34.41,
        close: 35.02,
        volume: 48218180
      },
      {
        time: new Date(2013, 4, 29),
        open: 34.74,
        high: 35.02,
        low: 34.57,
        close: 34.88,
        volume: 38419848
      },
      {
        time: new Date(2013, 4, 30),
        open: 34.85,
        high: 35.25,
        low: 34.81,
        close: 35.03,
        volume: 51133616
      },
      {
        time: new Date(2013, 4, 31),
        open: 34.82,
        high: 35.28,
        low: 34.79,
        close: 34.9,
        volume: 56167723
      },
      {
        time: new Date(2013, 5, 3),
        open: 34.92,
        high: 35.63,
        low: 34.83,
        close: 35.59,
        volume: 51256272
      },
      {
        time: new Date(2013, 5, 4),
        open: 35.62,
        high: 35.74,
        low: 34.77,
        close: 34.99,
        volume: 65538438
      },
      {
        time: new Date(2013, 5, 5),
        open: 34.6,
        high: 34.89,
        low: 34.43,
        close: 34.78,
        volume: 46032657
      },
      {
        time: new Date(2013, 5, 6),
        open: 34.84,
        high: 35.11,
        low: 34.49,
        close: 34.96,
        volume: 37627133
      },
      {
        time: new Date(2013, 5, 7),
        open: 35.25,
        high: 35.78,
        low: 35.06,
        close: 35.67,
        volume: 40762249
      },
      {
        time: new Date(2013, 5, 10),
        open: 35.51,
        high: 35.65,
        low: 35.14,
        close: 35.47,
        volume: 35995223
      },
      {
        time: new Date(2013, 5, 11),
        open: 35.05,
        high: 35.18,
        low: 34.68,
        close: 34.84,
        volume: 39350316
      },
      {
        time: new Date(2013, 5, 12),
        open: 35.14,
        high: 35.27,
        low: 34.85,
        close: 35.0,
        volume: 37373032
      },
      {
        time: new Date(2013, 5, 13),
        open: 34.99,
        high: 35.02,
        low: 34.59,
        close: 34.72,
        volume: 45654803
      },
      {
        time: new Date(2013, 5, 14),
        open: 34.55,
        high: 34.69,
        low: 34.25,
        close: 34.4,
        volume: 53116371
      },
      {
        time: new Date(2013, 5, 17),
        open: 34.69,
        high: 35.16,
        low: 34.63,
        close: 35.0,
        volume: 49672492
      },
      {
        time: new Date(2013, 5, 18),
        open: 34.97,
        high: 35.17,
        low: 34.9,
        close: 34.98,
        volume: 28622929
      },
      {
        time: new Date(2013, 5, 19),
        open: 34.96,
        high: 35.09,
        low: 34.59,
        close: 34.59,
        volume: 30820208
      },
      {
        time: new Date(2013, 5, 20),
        open: 34.26,
        high: 34.33,
        low: 33.37,
        close: 33.49,
        volume: 54496758
      },
      {
        time: new Date(2013, 5, 21),
        open: 33.66,
        high: 33.73,
        low: 33.05,
        close: 33.26,
        volume: 85338395
      },
      {
        time: new Date(2013, 5, 24),
        open: 32.94,
        high: 34.2,
        low: 32.57,
        close: 33.72,
        volume: 56113708
      },
      {
        time: new Date(2013, 5, 25),
        open: 34.08,
        high: 34.38,
        low: 33.46,
        close: 33.67,
        volume: 44073348
      },
      {
        time: new Date(2013, 5, 26),
        open: 34.12,
        high: 34.48,
        low: 33.89,
        close: 34.35,
        volume: 48667834
      },
      {
        time: new Date(2013, 5, 27),
        open: 34.52,
        high: 34.78,
        low: 34.5,
        close: 34.62,
        volume: 28993542
      },
      {
        time: new Date(2013, 5, 28),
        open: 34.38,
        high: 34.79,
        low: 34.34,
        close: 34.54,
        volume: 65548196
      },
      {
        time: new Date(2013, 6, 1),
        open: 34.75,
        high: 34.99,
        low: 34.33,
        close: 34.36,
        volume: 31064000
      },
      {
        time: new Date(2013, 6, 2),
        open: 34.41,
        high: 34.44,
        low: 33.63,
        close: 33.94,
        volume: 37634572
      },
      {
        time: new Date(2013, 6, 3),
        open: 33.66,
        high: 34.37,
        low: 33.6,
        close: 34.01,
        volume: 15994380
      },
      {
        time: new Date(2013, 6, 5),
        open: 34.09,
        high: 34.24,
        low: 33.58,
        close: 34.21,
        volume: 26085981
      },
      {
        time: new Date(2013, 6, 8),
        open: 34.35,
        high: 34.59,
        low: 33.98,
        close: 34.32,
        volume: 32398742
      },
      {
        time: new Date(2013, 6, 9),
        open: 34.58,
        high: 34.6,
        low: 34.14,
        close: 34.35,
        volume: 25320908
      },
      {
        time: new Date(2013, 6, 10),
        open: 34.34,
        high: 34.81,
        low: 34.32,
        close: 34.7,
        volume: 29658734
      },
      {
        time: new Date(2013, 6, 11),
        open: 35.0,
        high: 35.77,
        low: 34.9,
        close: 35.68,
        volume: 53638234
      },
      {
        time: new Date(2013, 6, 12),
        open: 35.58,
        high: 35.73,
        low: 35.28,
        close: 35.67,
        volume: 35502638
      },
      {
        time: new Date(2013, 6, 15),
        open: 35.66,
        high: 36.22,
        low: 35.58,
        close: 36.17,
        volume: 34145645
      },
      {
        time: new Date(2013, 6, 16),
        open: 36.01,
        high: 36.43,
        low: 35.96,
        close: 36.27,
        volume: 36378681
      },
      {
        time: new Date(2013, 6, 17),
        open: 36.34,
        high: 36.39,
        low: 35.49,
        close: 35.74,
        volume: 37289320
      },
      {
        time: new Date(2013, 6, 18),
        open: 35.72,
        high: 35.89,
        low: 35.22,
        close: 35.44,
        volume: 49547075
      },
      {
        time: new Date(2013, 6, 19),
        open: 32.4,
        high: 32.67,
        low: 31.02,
        close: 31.4,
        volume: 248428494
      },
      {
        time: new Date(2013, 6, 22),
        open: 31.7,
        high: 32.01,
        low: 31.6,
        close: 32.01,
        volume: 79040666
      },
      {
        time: new Date(2013, 6, 23),
        open: 31.91,
        high: 32.04,
        low: 31.71,
        close: 31.82,
        volume: 65819208
      },
      {
        time: new Date(2013, 6, 24),
        open: 32.04,
        high: 32.19,
        low: 31.89,
        close: 31.96,
        volume: 52812049
      },
      {
        time: new Date(2013, 6, 25),
        open: 31.62,
        high: 31.65,
        low: 31.25,
        close: 31.39,
        volume: 63221356
      },
      {
        time: new Date(2013, 6, 26),
        open: 31.26,
        high: 31.62,
        low: 31.2,
        close: 31.62,
        volume: 38637339
      },
      {
        time: new Date(2013, 6, 29),
        open: 31.47,
        high: 31.6,
        low: 31.4,
        close: 31.54,
        volume: 28874879
      },
      {
        time: new Date(2013, 6, 30),
        open: 31.78,
        high: 32.12,
        low: 31.55,
        close: 31.85,
        volume: 45801156
      },
      {
        time: new Date(2013, 6, 31),
        open: 31.97,
        high: 32.05,
        low: 31.71,
        close: 31.84,
        volume: 43900515
      },
      {
        time: new Date(2013, 7, 1),
        open: 32.06,
        high: 32.09,
        low: 31.6,
        close: 31.67,
        volume: 42557872
      },
      {
        time: new Date(2013, 7, 2),
        open: 31.69,
        high: 31.9,
        low: 31.56,
        close: 31.89,
        volume: 29199813
      },
      {
        time: new Date(2013, 7, 5),
        open: 31.9,
        high: 32.0,
        low: 31.64,
        close: 31.7,
        volume: 30986512
      },
      {
        time: new Date(2013, 7, 6),
        open: 31.55,
        high: 31.67,
        low: 31.38,
        close: 31.58,
        volume: 36334889
      },
      {
        time: new Date(2013, 7, 7),
        open: 31.54,
        high: 32.1,
        low: 31.25,
        close: 32.06,
        volume: 38078570
      },
      {
        time: new Date(2013, 7, 8),
        open: 32.24,
        high: 33.07,
        low: 32.05,
        close: 32.89,
        volume: 59038538
      },
      {
        time: new Date(2013, 7, 9),
        open: 32.77,
        high: 32.9,
        low: 32.47,
        close: 32.7,
        volume: 26803879
      },
      {
        time: new Date(2013, 7, 12),
        open: 32.46,
        high: 32.97,
        low: 32.46,
        close: 32.87,
        volume: 25501910
      },
      {
        time: new Date(2013, 7, 13),
        open: 32.51,
        high: 32.55,
        low: 32.21,
        close: 32.23,
        volume: 39473018
      },
      {
        time: new Date(2013, 7, 14),
        open: 32.14,
        high: 33.36,
        low: 31.7,
        close: 32.35,
        volume: 48528230
      },
      {
        time: new Date(2013, 7, 15),
        open: 32.0,
        high: 32.18,
        low: 30.84,
        close: 31.79,
        volume: 33340728
      },
      {
        time: new Date(2013, 7, 16),
        open: 31.79,
        high: 31.99,
        low: 31.66,
        close: 31.8,
        volume: 32866242
      },
      {
        time: new Date(2013, 7, 19),
        open: 31.76,
        high: 31.97,
        low: 31.38,
        close: 31.39,
        volume: 27908716
      },
      {
        time: new Date(2013, 7, 20),
        open: 31.44,
        high: 31.9,
        low: 31.37,
        close: 31.62,
        volume: 22979513
      },
      {
        time: new Date(2013, 7, 21),
        open: 31.61,
        high: 32.01,
        low: 31.54,
        close: 31.61,
        volume: 37409095
      },
      {
        time: new Date(2013, 7, 22),
        open: 32.18,
        high: 32.49,
        low: 32.1,
        close: 32.39,
        volume: 31169898
      },
      {
        time: new Date(2013, 7, 23),
        open: 35.17,
        high: 35.2,
        low: 34.0,
        close: 34.75,
        volume: 225493737
      },
      {
        time: new Date(2013, 7, 26),
        open: 34.4,
        high: 34.67,
        low: 34.03,
        close: 34.15,
        volume: 72786745
      },
      {
        time: new Date(2013, 7, 27),
        open: 33.52,
        high: 34.1,
        low: 33.15,
        close: 33.26,
        volume: 58522264
      },
      {
        time: new Date(2013, 7, 28),
        open: 33.39,
        high: 33.6,
        low: 33.0,
        close: 33.02,
        volume: 44262716
      },
      {
        time: new Date(2013, 7, 29),
        open: 32.93,
        high: 33.6,
        low: 32.8,
        close: 33.55,
        volume: 45284632
      },
      {
        time: new Date(2013, 7, 30),
        open: 33.37,
        high: 33.48,
        low: 33.09,
        close: 33.4,
        volume: 42784642
      },
      {
        time: new Date(2013, 8, 3),
        open: 31.75,
        high: 32.07,
        low: 31.29,
        close: 31.88,
        volume: 154506984
      },
      {
        time: new Date(2013, 8, 4),
        open: 31.39,
        high: 31.47,
        low: 31.11,
        close: 31.2,
        volume: 142320588
      },
      {
        time: new Date(2013, 8, 5),
        open: 31.1,
        high: 31.44,
        low: 30.95,
        close: 31.24,
        volume: 71644891
      },
      {
        time: new Date(2013, 8, 6),
        open: 31.31,
        high: 31.39,
        low: 31.13,
        close: 31.15,
        volume: 75439554
      },
      {
        time: new Date(2013, 8, 9),
        open: 31.22,
        high: 31.79,
        low: 31.2,
        close: 31.66,
        volume: 49628450
      },
      {
        time: new Date(2013, 8, 10),
        open: 31.9,
        high: 32.4,
        low: 31.79,
        close: 32.39,
        volume: 56887967
      },
      {
        time: new Date(2013, 8, 11),
        open: 32.57,
        high: 32.93,
        low: 32.53,
        close: 32.74,
        volume: 39041151
      },
      {
        time: new Date(2013, 8, 12),
        open: 32.72,
        high: 32.78,
        low: 32.59,
        close: 32.69,
        volume: 32867691
      },
      {
        time: new Date(2013, 8, 13),
        open: 32.77,
        high: 33.07,
        low: 32.5,
        close: 33.03,
        volume: 40905938
      },
      {
        time: new Date(2013, 8, 16),
        open: 33.38,
        high: 33.5,
        low: 32.73,
        close: 32.8,
        volume: 55017879
      },
      {
        time: new Date(2013, 8, 17),
        open: 33.42,
        high: 33.47,
        low: 32.9,
        close: 32.93,
        volume: 84716461
      },
      {
        time: new Date(2013, 8, 18),
        open: 32.99,
        high: 33.4,
        low: 32.83,
        close: 33.32,
        volume: 64103344
      },
      {
        time: new Date(2013, 8, 19),
        open: 33.48,
        high: 33.68,
        low: 33.32,
        close: 33.64,
        volume: 42026553
      },
      {
        time: new Date(2013, 8, 20),
        open: 33.41,
        high: 33.48,
        low: 32.68,
        close: 32.79,
        volume: 102904859
      },
      {
        time: new Date(2013, 8, 23),
        open: 32.54,
        high: 32.97,
        low: 32.5,
        close: 32.74,
        volume: 39826261
      },
      {
        time: new Date(2013, 8, 24),
        open: 32.87,
        high: 32.87,
        low: 32.15,
        close: 32.46,
        volume: 40684948
      },
      {
        time: new Date(2013, 8, 25),
        open: 32.49,
        high: 32.8,
        low: 32.4,
        close: 32.5,
        volume: 28907426
      },
      {
        time: new Date(2013, 8, 26),
        open: 32.64,
        high: 33.0,
        low: 32.59,
        close: 32.77,
        volume: 28503917
      },
      {
        time: new Date(2013, 8, 27),
        open: 32.88,
        high: 33.75,
        low: 32.87,
        close: 33.27,
        volume: 55347903
      },
      {
        time: new Date(2013, 8, 30),
        open: 33.0,
        high: 33.31,
        low: 32.7,
        close: 33.28,
        volume: 39839541
      },
      {
        time: new Date(2013, 9, 1),
        open: 33.35,
        high: 33.61,
        low: 33.3,
        close: 33.58,
        volume: 36718733
      },
      {
        time: new Date(2013, 9, 2),
        open: 33.36,
        high: 34.03,
        low: 33.29,
        close: 33.92,
        volume: 46946813
      },
      {
        time: new Date(2013, 9, 3),
        open: 33.88,
        high: 34.0,
        low: 33.42,
        close: 33.86,
        volume: 38707452
      },
      {
        time: new Date(2013, 9, 4),
        open: 33.69,
        high: 33.99,
        low: 33.62,
        close: 33.88,
        volume: 33008107
      },
      {
        time: new Date(2013, 9, 7),
        open: 33.6,
        high: 33.71,
        low: 33.2,
        close: 33.3,
        volume: 35069279
      },
      {
        time: new Date(2013, 9, 8),
        open: 33.31,
        high: 33.33,
        low: 32.8,
        close: 33.01,
        volume: 41017586
      },
      {
        time: new Date(2013, 9, 9),
        open: 33.07,
        high: 33.35,
        low: 32.96,
        close: 33.07,
        volume: 35878559
      },
      {
        time: new Date(2013, 9, 10),
        open: 33.31,
        high: 33.89,
        low: 33.26,
        close: 33.76,
        volume: 42875141
      },
      {
        time: new Date(2013, 9, 11),
        open: 33.68,
        high: 34.14,
        low: 33.68,
        close: 34.13,
        volume: 30033336
      },
      {
        time: new Date(2013, 9, 14),
        open: 33.9,
        high: 34.5,
        low: 33.78,
        close: 34.45,
        volume: 27757870
      },
      {
        time: new Date(2013, 9, 15),
        open: 34.67,
        high: 34.99,
        low: 34.47,
        close: 34.49,
        volume: 47107657
      },
      {
        time: new Date(2013, 9, 16),
        open: 34.6,
        high: 34.9,
        low: 34.56,
        close: 34.64,
        volume: 35111593
      },
      {
        time: new Date(2013, 9, 17),
        open: 34.45,
        high: 34.99,
        low: 34.37,
        close: 34.92,
        volume: 31359198
      },
      {
        time: new Date(2013, 9, 18),
        open: 34.82,
        high: 34.99,
        low: 34.33,
        close: 34.96,
        volume: 41811699
      },
      {
        time: new Date(2013, 9, 21),
        open: 34.98,
        high: 35.2,
        low: 34.91,
        close: 34.99,
        volume: 27436505
      },
      {
        time: new Date(2013, 9, 22),
        open: 35.02,
        high: 35.1,
        low: 34.52,
        close: 34.58,
        volume: 40438546
      },
      {
        time: new Date(2013, 9, 23),
        open: 34.35,
        high: 34.49,
        low: 33.67,
        close: 33.76,
        volume: 58600499
      },
      {
        time: new Date(2013, 9, 24),
        open: 33.82,
        high: 34.1,
        low: 33.57,
        close: 33.72,
        volume: 53209728
      },
      {
        time: new Date(2013, 9, 25),
        open: 35.88,
        high: 36.29,
        low: 35.47,
        close: 35.73,
        volume: 113493954
      },
      {
        time: new Date(2013, 9, 28),
        open: 35.61,
        high: 35.73,
        low: 35.27,
        close: 35.57,
        volume: 38383594
      },
      {
        time: new Date(2013, 9, 29),
        open: 35.63,
        high: 35.72,
        low: 35.26,
        close: 35.52,
        volume: 31702613
      },
      {
        time: new Date(2013, 9, 30),
        open: 35.53,
        high: 35.79,
        low: 35.43,
        close: 35.54,
        volume: 37002061
      },
      {
        time: new Date(2013, 9, 31),
        open: 35.66,
        high: 35.69,
        low: 35.34,
        close: 35.4,
        volume: 41689563
      },
      {
        time: new Date(2013, 10, 1),
        open: 35.67,
        high: 35.69,
        low: 35.39,
        close: 35.52,
        volume: 40271887
      },
      {
        time: new Date(2013, 10, 4),
        open: 35.59,
        high: 35.98,
        low: 35.55,
        close: 35.94,
        volume: 28061873
      },
      {
        time: new Date(2013, 10, 5),
        open: 35.79,
        high: 36.71,
        low: 35.77,
        close: 36.64,
        volume: 51681868
      },
      {
        time: new Date(2013, 10, 6),
        open: 37.24,
        high: 38.22,
        low: 37.06,
        close: 38.18,
        volume: 88948830
      },
      {
        time: new Date(2013, 10, 7),
        open: 37.96,
        high: 38.01,
        low: 37.43,
        close: 37.5,
        volume: 60445258
      },
      {
        time: new Date(2013, 10, 8),
        open: 37.67,
        high: 37.78,
        low: 37.34,
        close: 37.78,
        volume: 36743157
      },
      {
        time: new Date(2013, 10, 11),
        open: 37.69,
        high: 37.78,
        low: 37.36,
        close: 37.59,
        volume: 26872537
      },
      {
        time: new Date(2013, 10, 12),
        open: 37.38,
        high: 37.6,
        low: 37.2,
        close: 37.36,
        volume: 31651589
      },
      {
        time: new Date(2013, 10, 13),
        open: 36.98,
        high: 38.16,
        low: 36.9,
        close: 38.16,
        volume: 44957611
      },
      {
        time: new Date(2013, 10, 14),
        open: 37.87,
        high: 38.13,
        low: 37.72,
        close: 38.02,
        volume: 46186577
      },
      {
        time: new Date(2013, 10, 15),
        open: 37.95,
        high: 38.02,
        low: 37.72,
        close: 37.84,
        volume: 50602034
      },
      {
        time: new Date(2013, 10, 18),
        open: 37.35,
        high: 37.58,
        low: 37.07,
        close: 37.2,
        volume: 53277485
      },
      {
        time: new Date(2013, 10, 19),
        open: 36.85,
        high: 37.23,
        low: 36.67,
        close: 36.74,
        volume: 44274987
      },
      {
        time: new Date(2013, 10, 20),
        open: 36.92,
        high: 37.41,
        low: 36.86,
        close: 37.08,
        volume: 32231827
      },
      {
        time: new Date(2013, 10, 21),
        open: 37.27,
        high: 37.53,
        low: 37.26,
        close: 37.4,
        volume: 23064699
      },
      {
        time: new Date(2013, 10, 22),
        open: 37.52,
        high: 37.68,
        low: 37.33,
        close: 37.57,
        volume: 27981996
      },
      {
        time: new Date(2013, 10, 25),
        open: 37.93,
        high: 37.95,
        low: 37.57,
        close: 37.64,
        volume: 30648148
      },
      {
        time: new Date(2013, 10, 26),
        open: 37.57,
        high: 37.65,
        low: 37.35,
        close: 37.35,
        volume: 34468069
      },
      {
        time: new Date(2013, 10, 27),
        open: 37.57,
        high: 37.76,
        low: 37.49,
        close: 37.6,
        volume: 26002050
      },
      {
        time: new Date(2013, 10, 29),
        open: 37.82,
        high: 38.29,
        low: 37.82,
        close: 38.13,
        volume: 22090428
      },
      {
        time: new Date(2013, 11, 2),
        open: 38.09,
        high: 38.78,
        low: 38.06,
        close: 38.45,
        volume: 42950373
      },
      {
        time: new Date(2013, 11, 3),
        open: 38.14,
        high: 38.49,
        low: 38.08,
        close: 38.31,
        volume: 52109760
      },
      {
        time: new Date(2013, 11, 4),
        open: 38.21,
        high: 38.98,
        low: 38.12,
        close: 38.94,
        volume: 51983578
      },
      {
        time: new Date(2013, 11, 5),
        open: 38.85,
        high: 38.88,
        low: 37.18,
        close: 38.0,
        volume: 116313834
      },
      {
        time: new Date(2013, 11, 6),
        open: 38.42,
        high: 38.55,
        low: 37.99,
        close: 38.36,
        volume: 36457292
      },
      {
        time: new Date(2013, 11, 9),
        open: 38.56,
        high: 38.87,
        low: 38.37,
        close: 38.7,
        volume: 30286015
      },
      {
        time: new Date(2013, 11, 10),
        open: 38.58,
        high: 38.9,
        low: 38.02,
        close: 38.11,
        volume: 37828593
      },
      {
        time: new Date(2013, 11, 11),
        open: 37.71,
        high: 38.3,
        low: 37.39,
        close: 37.61,
        volume: 39853379
      },
      {
        time: new Date(2013, 11, 12),
        open: 37.6,
        high: 37.64,
        low: 37.18,
        close: 37.22,
        volume: 36012761
      },
      {
        time: new Date(2013, 11, 13),
        open: 37.43,
        high: 37.45,
        low: 36.62,
        close: 36.69,
        volume: 40074360
      },
      {
        time: new Date(2013, 11, 16),
        open: 36.73,
        high: 37.0,
        low: 36.54,
        close: 36.88,
        volume: 31734515
      },
      {
        time: new Date(2013, 11, 17),
        open: 36.65,
        high: 37.11,
        low: 36.33,
        close: 36.52,
        volume: 45687679
      },
      {
        time: new Date(2013, 11, 18),
        open: 36.36,
        high: 36.6,
        low: 35.53,
        close: 36.58,
        volume: 63192067
      },
      {
        time: new Date(2013, 11, 19),
        open: 36.52,
        high: 36.55,
        low: 36.08,
        close: 36.25,
        volume: 34157264
      },
      {
        time: new Date(2013, 11, 20),
        open: 36.25,
        high: 36.93,
        low: 36.18,
        close: 36.8,
        volume: 62650324
      },
      {
        time: new Date(2013, 11, 23),
        open: 36.81,
        high: 36.89,
        low: 36.55,
        close: 36.62,
        volume: 25128740
      },
      {
        time: new Date(2013, 11, 24),
        open: 36.72,
        high: 37.17,
        low: 36.64,
        close: 37.08,
        volume: 14242997
      },
      {
        time: new Date(2013, 11, 26),
        open: 37.2,
        high: 37.49,
        low: 37.17,
        close: 37.44,
        volume: 17614984
      },
      {
        time: new Date(2013, 11, 27),
        open: 37.58,
        high: 37.62,
        low: 37.17,
        close: 37.29,
        volume: 14563533
      },
      {
        time: new Date(2013, 11, 30),
        open: 37.22,
        high: 37.38,
        low: 36.9,
        close: 37.29,
        volume: 16290475
      },
      {
        time: new Date(2013, 11, 31),
        open: 37.4,
        high: 37.58,
        low: 37.22,
        close: 37.41,
        volume: 17505770
      },
      {
        time: new Date(2014, 0, 2),
        open: 37.35,
        high: 37.4,
        low: 37.1,
        close: 37.16,
        volume: 30643745
      },
      {
        time: new Date(2014, 0, 3),
        open: 37.2,
        high: 37.22,
        low: 36.6,
        close: 36.91,
        volume: 31134795
      },
      {
        time: new Date(2014, 0, 6),
        open: 36.85,
        high: 36.89,
        low: 36.11,
        close: 36.13,
        volume: 43615035
      },
      {
        time: new Date(2014, 0, 7),
        open: 36.32,
        high: 36.49,
        low: 36.21,
        close: 36.41,
        volume: 35924726
      },
      {
        time: new Date(2014, 0, 8),
        open: 36.0,
        high: 36.14,
        low: 35.58,
        close: 35.76,
        volume: 59979542
      },
      {
        time: new Date(2014, 0, 9),
        open: 35.88,
        high: 35.91,
        low: 35.4,
        close: 35.53,
        volume: 36520448
      },
      {
        time: new Date(2014, 0, 10),
        open: 35.9,
        high: 36.15,
        low: 35.75,
        close: 36.04,
        volume: 40558766
      },
      {
        time: new Date(2014, 0, 13),
        open: 35.99,
        high: 36.02,
        low: 34.83,
        close: 34.98,
        volume: 45923872
      },
      {
        time: new Date(2014, 0, 14),
        open: 34.73,
        high: 35.88,
        low: 34.63,
        close: 35.78,
        volume: 41627325
      },
      {
        time: new Date(2014, 0, 15),
        open: 35.9,
        high: 36.79,
        low: 35.85,
        close: 36.76,
        volume: 44909545
      },
      {
        time: new Date(2014, 0, 16),
        open: 36.69,
        high: 37.0,
        low: 36.31,
        close: 36.89,
        volume: 38035708
      },
      {
        time: new Date(2014, 0, 17),
        open: 36.83,
        high: 36.83,
        low: 36.15,
        close: 36.38,
        volume: 46298736
      },
      {
        time: new Date(2014, 0, 21),
        open: 36.82,
        high: 36.82,
        low: 36.06,
        close: 36.17,
        volume: 31578979
      },
      {
        time: new Date(2014, 0, 22),
        open: 36.26,
        high: 36.32,
        low: 35.75,
        close: 35.93,
        volume: 21965266
      },
      {
        time: new Date(2014, 0, 23),
        open: 36.09,
        high: 36.13,
        low: 35.52,
        close: 36.06,
        volume: 44515126
      },
      {
        time: new Date(2014, 0, 24),
        open: 37.45,
        high: 37.55,
        low: 36.53,
        close: 36.8,
        volume: 77051806
      },
      {
        time: new Date(2014, 0, 27),
        open: 36.87,
        high: 36.89,
        low: 35.98,
        close: 36.03,
        volume: 44485767
      },
      {
        time: new Date(2014, 0, 28),
        open: 36.12,
        high: 36.39,
        low: 35.75,
        close: 36.27,
        volume: 36225755
      },
      {
        time: new Date(2014, 0, 29),
        open: 35.98,
        high: 36.88,
        low: 35.9,
        close: 36.66,
        volume: 52790351
      },
      {
        time: new Date(2014, 0, 30),
        open: 36.79,
        high: 36.88,
        low: 36.23,
        close: 36.86,
        volume: 35111959
      },
      {
        time: new Date(2014, 0, 31),
        open: 36.95,
        high: 37.89,
        low: 36.56,
        close: 37.84,
        volume: 93190755
      },
      {
        time: new Date(2014, 1, 3),
        open: 37.74,
        high: 37.98,
        low: 36.43,
        close: 36.48,
        volume: 64102391
      },
      {
        time: new Date(2014, 1, 4),
        open: 36.97,
        high: 37.19,
        low: 36.25,
        close: 36.35,
        volume: 55526924
      },
      {
        time: new Date(2014, 1, 5),
        open: 36.29,
        high: 36.47,
        low: 35.8,
        close: 35.82,
        volume: 55841097
      },
      {
        time: new Date(2014, 1, 6),
        open: 35.8,
        high: 36.25,
        low: 35.69,
        close: 36.18,
        volume: 35380994
      },
      {
        time: new Date(2014, 1, 7),
        open: 36.32,
        high: 36.59,
        low: 36.01,
        close: 36.56,
        volume: 33348008
      },
      {
        time: new Date(2014, 1, 10),
        open: 36.63,
        high: 36.8,
        low: 36.29,
        close: 36.8,
        volume: 26782083
      },
      {
        time: new Date(2014, 1, 11),
        open: 36.88,
        high: 37.26,
        low: 36.86,
        close: 37.18,
        volume: 32164989
      },
      {
        time: new Date(2014, 1, 12),
        open: 37.35,
        high: 37.6,
        low: 37.3,
        close: 37.47,
        volume: 27055869
      },
      {
        time: new Date(2014, 1, 13),
        open: 37.33,
        high: 37.86,
        low: 37.33,
        close: 37.61,
        volume: 37647772
      },
      {
        time: new Date(2014, 1, 14),
        open: 37.39,
        high: 37.78,
        low: 37.33,
        close: 37.62,
        volume: 42986738
      },
      {
        time: new Date(2014, 1, 18),
        open: 37.63,
        high: 37.78,
        low: 37.41,
        close: 37.42,
        volume: 32839707
      },
      {
        time: new Date(2014, 1, 19),
        open: 37.22,
        high: 37.75,
        low: 37.21,
        close: 37.51,
        volume: 29794084
      },
      {
        time: new Date(2014, 1, 20),
        open: 37.57,
        high: 37.87,
        low: 37.4,
        close: 37.75,
        volume: 27541038
      },
      {
        time: new Date(2014, 1, 21),
        open: 37.94,
        high: 38.35,
        low: 37.86,
        close: 37.98,
        volume: 38030656
      },
      {
        time: new Date(2014, 1, 24),
        open: 37.69,
        high: 37.98,
        low: 37.54,
        close: 37.69,
        volume: 32143395
      },
      {
        time: new Date(2014, 1, 25),
        open: 37.61,
        high: 37.85,
        low: 37.35,
        close: 37.54,
        volume: 30867657
      },
      {
        time: new Date(2014, 1, 26),
        open: 37.58,
        high: 37.74,
        low: 37.19,
        close: 37.47,
        volume: 41042629
      },
      {
        time: new Date(2014, 1, 27),
        open: 37.45,
        high: 37.89,
        low: 37.23,
        close: 37.86,
        volume: 33919024
      },
      {
        time: new Date(2014, 1, 28),
        open: 37.98,
        high: 38.46,
        low: 37.82,
        close: 38.31,
        volume: 41217028
      },
      {
        time: new Date(2014, 2, 3),
        open: 37.92,
        high: 38.13,
        low: 37.5,
        close: 37.78,
        volume: 29726792
      },
      {
        time: new Date(2014, 2, 4),
        open: 38.2,
        high: 38.48,
        low: 38.07,
        close: 38.41,
        volume: 26868337
      },
      {
        time: new Date(2014, 2, 5),
        open: 38.25,
        high: 38.27,
        low: 37.93,
        close: 38.11,
        volume: 20520432
      },
      {
        time: new Date(2014, 2, 6),
        open: 38.14,
        high: 38.24,
        low: 37.89,
        close: 38.15,
        volume: 23605310
      },
      {
        time: new Date(2014, 2, 7),
        open: 38.28,
        high: 38.36,
        low: 37.69,
        close: 37.9,
        volume: 26596635
      },
      {
        time: new Date(2014, 2, 10),
        open: 37.99,
        high: 38.01,
        low: 37.72,
        close: 37.82,
        volume: 19007850
      },
      {
        time: new Date(2014, 2, 11),
        open: 37.87,
        high: 38.23,
        low: 37.72,
        close: 38.02,
        volume: 25218133
      },
      {
        time: new Date(2014, 2, 12),
        open: 37.8,
        high: 38.43,
        low: 37.79,
        close: 38.27,
        volume: 30496295
      },
      {
        time: new Date(2014, 2, 13),
        open: 38.42,
        high: 38.45,
        low: 37.64,
        close: 37.89,
        volume: 32169650
      },
      {
        time: new Date(2014, 2, 14),
        open: 37.65,
        high: 38.14,
        low: 37.51,
        close: 37.7,
        volume: 27195638
      },
      {
        time: new Date(2014, 2, 17),
        open: 37.9,
        high: 38.41,
        low: 37.79,
        close: 38.05,
        volume: 20479610
      },
      {
        time: new Date(2014, 2, 18),
        open: 38.26,
        high: 39.9,
        low: 38.22,
        close: 39.55,
        volume: 64063866
      },
      {
        time: new Date(2014, 2, 19),
        open: 39.47,
        high: 39.55,
        low: 38.91,
        close: 39.27,
        volume: 35597241
      },
      {
        time: new Date(2014, 2, 20),
        open: 39.25,
        high: 40.65,
        low: 39.24,
        close: 40.33,
        volume: 59269801
      },
      {
        time: new Date(2014, 2, 21),
        open: 40.72,
        high: 40.94,
        low: 40.01,
        close: 40.16,
        volume: 80731942
      },
      {
        time: new Date(2014, 2, 24),
        open: 40.34,
        high: 40.64,
        low: 39.86,
        close: 40.5,
        volume: 46098374
      },
      {
        time: new Date(2014, 2, 25),
        open: 40.66,
        high: 40.99,
        low: 39.96,
        close: 40.34,
        volume: 43193147
      },
      {
        time: new Date(2014, 2, 26),
        open: 40.48,
        high: 40.7,
        low: 39.6,
        close: 39.79,
        volume: 41982966
      },
      {
        time: new Date(2014, 2, 27),
        open: 39.74,
        high: 39.97,
        low: 39.34,
        close: 39.36,
        volume: 35369170
      },
      {
        time: new Date(2014, 2, 28),
        open: 39.79,
        high: 40.64,
        low: 39.68,
        close: 40.3,
        volume: 43472747
      },
      {
        time: new Date(2014, 2, 31),
        open: 40.43,
        high: 41.5,
        low: 40.4,
        close: 40.99,
        volume: 46886284
      },
      {
        time: new Date(2014, 3, 1),
        open: 41.15,
        high: 41.59,
        low: 41.07,
        close: 41.42,
        volume: 32610395
      },
      {
        time: new Date(2014, 3, 2),
        open: 41.44,
        high: 41.66,
        low: 41.17,
        close: 41.35,
        volume: 28666682
      },
      {
        time: new Date(2014, 3, 3),
        open: 41.29,
        high: 41.29,
        low: 40.71,
        close: 41.01,
        volume: 30139567
      },
      {
        time: new Date(2014, 3, 4),
        open: 41.25,
        high: 41.39,
        low: 39.64,
        close: 39.87,
        volume: 51409573
      },
      {
        time: new Date(2014, 3, 7),
        open: 39.96,
        high: 40.27,
        low: 39.74,
        close: 39.8,
        volume: 37559615
      },
      {
        time: new Date(2014, 3, 8),
        open: 39.75,
        high: 39.93,
        low: 39.2,
        close: 39.82,
        volume: 35919609
      },
      {
        time: new Date(2014, 3, 9),
        open: 39.93,
        high: 40.55,
        low: 39.88,
        close: 40.47,
        volume: 27398687
      },
      {
        time: new Date(2014, 3, 10),
        open: 40.44,
        high: 40.69,
        low: 39.09,
        close: 39.36,
        volume: 45960848
      },
      {
        time: new Date(2014, 3, 11),
        open: 39.0,
        high: 39.79,
        low: 39.0,
        close: 39.21,
        volume: 34333298
      },
      {
        time: new Date(2014, 3, 14),
        open: 39.11,
        high: 39.41,
        low: 38.9,
        close: 39.18,
        volume: 32006651
      },
      {
        time: new Date(2014, 3, 15),
        open: 39.34,
        high: 39.96,
        low: 39.05,
        close: 39.75,
        volume: 33978673
      },
      {
        time: new Date(2014, 3, 16),
        open: 40.06,
        high: 40.42,
        low: 39.9,
        close: 40.4,
        volume: 30616304
      },
      {
        time: new Date(2014, 3, 17),
        open: 40.01,
        high: 40.2,
        low: 39.51,
        close: 40.01,
        volume: 36689399
      },
      {
        time: new Date(2014, 3, 21),
        open: 40.13,
        high: 40.15,
        low: 39.79,
        close: 39.94,
        volume: 22222222
      },
      {
        time: new Date(2014, 3, 22),
        open: 39.96,
        high: 40.14,
        low: 39.83,
        close: 39.99,
        volume: 27057271
      },
      {
        time: new Date(2014, 3, 23),
        open: 39.99,
        high: 39.99,
        low: 39.47,
        close: 39.69,
        volume: 24602781
      },
      {
        time: new Date(2014, 3, 24),
        open: 39.74,
        high: 39.97,
        low: 39.3,
        close: 39.86,
        volume: 42381594
      },
      {
        time: new Date(2014, 3, 25),
        open: 40.29,
        high: 40.68,
        low: 39.75,
        close: 39.91,
        volume: 56883812
      },
      {
        time: new Date(2014, 3, 28),
        open: 40.14,
        high: 41.29,
        low: 40.09,
        close: 40.87,
        volume: 50610208
      },
      {
        time: new Date(2014, 3, 29),
        open: 41.1,
        high: 41.19,
        low: 40.39,
        close: 40.51,
        volume: 29637370
      },
      {
        time: new Date(2014, 3, 30),
        open: 40.4,
        high: 40.5,
        low: 40.17,
        close: 40.4,
        volume: 35464148
      },
      {
        time: new Date(2014, 4, 1),
        open: 40.24,
        high: 40.36,
        low: 39.95,
        close: 40.0,
        volume: 28791455
      },
      {
        time: new Date(2014, 4, 2),
        open: 40.31,
        high: 40.34,
        low: 39.66,
        close: 39.69,
        volume: 43417914
      },
      {
        time: new Date(2014, 4, 5),
        open: 39.52,
        high: 39.64,
        low: 39.3,
        close: 39.43,
        volume: 22460928
      },
      {
        time: new Date(2014, 4, 6),
        open: 39.29,
        high: 39.35,
        low: 38.95,
        close: 39.06,
        volume: 27112373
      },
      {
        time: new Date(2014, 4, 7),
        open: 39.22,
        high: 39.51,
        low: 38.51,
        close: 39.42,
        volume: 41749497
      },
      {
        time: new Date(2014, 4, 8),
        open: 39.34,
        high: 39.9,
        low: 38.97,
        close: 39.64,
        volume: 32123032
      },
      {
        time: new Date(2014, 4, 9),
        open: 39.54,
        high: 39.85,
        low: 39.37,
        close: 39.54,
        volume: 29647646
      },
      {
        time: new Date(2014, 4, 12),
        open: 39.74,
        high: 40.02,
        low: 39.65,
        close: 39.97,
        volume: 22787185
      },
      {
        time: new Date(2014, 4, 13),
        open: 39.92,
        high: 40.5,
        low: 39.85,
        close: 40.42,
        volume: 27004768
      },
      {
        time: new Date(2014, 4, 14),
        open: 40.3,
        high: 40.45,
        low: 40.05,
        close: 40.24,
        volume: 18818711
      },
      {
        time: new Date(2014, 4, 15),
        open: 40.09,
        high: 40.4,
        low: 39.51,
        close: 39.6,
        volume: 37793243
      },
      {
        time: new Date(2014, 4, 16),
        open: 39.67,
        high: 39.84,
        low: 39.27,
        close: 39.83,
        volume: 29868272
      },
      {
        time: new Date(2014, 4, 19),
        open: 39.61,
        high: 39.82,
        low: 39.46,
        close: 39.75,
        volume: 24537438
      },
      {
        time: new Date(2014, 4, 20),
        open: 39.68,
        high: 39.94,
        low: 39.46,
        close: 39.68,
        volume: 21322341
      },
      {
        time: new Date(2014, 4, 21),
        open: 39.8,
        high: 40.35,
        low: 39.74,
        close: 40.35,
        volume: 22399392
      },
      {
        time: new Date(2014, 4, 22),
        open: 40.29,
        high: 40.35,
        low: 39.85,
        close: 40.1,
        volume: 20202485
      },
      {
        time: new Date(2014, 4, 23),
        open: 40.37,
        high: 40.37,
        low: 40.0,
        close: 40.12,
        volume: 18020866
      },
      {
        time: new Date(2014, 4, 27),
        open: 40.26,
        high: 40.26,
        low: 39.81,
        close: 40.19,
        volume: 26161164
      },
      {
        time: new Date(2014, 4, 28),
        open: 40.14,
        high: 40.19,
        low: 39.82,
        close: 40.01,
        volume: 25711565
      },
      {
        time: new Date(2014, 4, 29),
        open: 40.15,
        high: 40.35,
        low: 39.91,
        close: 40.34,
        volume: 19893872
      },
      {
        time: new Date(2014, 4, 30),
        open: 40.45,
        high: 40.97,
        low: 40.25,
        close: 40.94,
        volume: 34575579
      },
      {
        time: new Date(2014, 5, 2),
        open: 40.95,
        high: 41.09,
        low: 40.68,
        close: 40.79,
        volume: 18504300
      },
      {
        time: new Date(2014, 5, 3),
        open: 40.6,
        high: 40.68,
        low: 40.25,
        close: 40.29,
        volume: 18071096
      },
      {
        time: new Date(2014, 5, 4),
        open: 40.21,
        high: 40.37,
        low: 39.86,
        close: 40.32,
        volume: 23210341
      },
      {
        time: new Date(2014, 5, 5),
        open: 40.59,
        high: 41.25,
        low: 40.4,
        close: 41.21,
        volume: 31865213
      },
      {
        time: new Date(2014, 5, 6),
        open: 41.48,
        high: 41.66,
        low: 41.24,
        close: 41.48,
        volume: 24060542
      },
      {
        time: new Date(2014, 5, 9),
        open: 41.39,
        high: 41.48,
        low: 41.02,
        close: 41.27,
        volume: 15019425
      },
      {
        time: new Date(2014, 5, 10),
        open: 41.03,
        high: 41.16,
        low: 40.86,
        close: 41.11,
        volume: 15117689
      },
      {
        time: new Date(2014, 5, 11),
        open: 40.93,
        high: 41.07,
        low: 40.76,
        close: 40.86,
        volume: 18039990
      },
      {
        time: new Date(2014, 5, 12),
        open: 40.81,
        high: 40.88,
        low: 40.29,
        close: 40.58,
        volume: 29823030
      },
      {
        time: new Date(2014, 5, 13),
        open: 41.1,
        high: 41.56,
        low: 40.86,
        close: 41.23,
        volume: 26310697
      },
      {
        time: new Date(2014, 5, 16),
        open: 41.04,
        high: 41.61,
        low: 41.04,
        close: 41.5,
        volume: 24205297
      },
      {
        time: new Date(2014, 5, 17),
        open: 41.29,
        high: 41.91,
        low: 40.34,
        close: 41.68,
        volume: 22518630
      },
      {
        time: new Date(2014, 5, 18),
        open: 41.6,
        high: 41.74,
        low: 41.18,
        close: 41.65,
        volume: 27097228
      },
      {
        time: new Date(2014, 5, 19),
        open: 41.57,
        high: 41.77,
        low: 41.33,
        close: 41.51,
        volume: 19837767
      },
      {
        time: new Date(2014, 5, 20),
        open: 41.44,
        high: 41.83,
        low: 41.38,
        close: 41.68,
        volume: 47765407
      },
      {
        time: new Date(2014, 5, 23),
        open: 41.73,
        high: 42.0,
        low: 41.69,
        close: 41.99,
        volume: 18743905
      },
      {
        time: new Date(2014, 5, 24),
        open: 41.83,
        high: 41.94,
        low: 41.56,
        close: 41.74,
        volume: 26518274
      },
      {
        time: new Date(2014, 5, 25),
        open: 41.7,
        high: 42.05,
        low: 41.46,
        close: 42.03,
        volume: 20051576
      },
      {
        time: new Date(2014, 5, 26),
        open: 41.93,
        high: 41.94,
        low: 41.43,
        close: 41.72,
        volume: 23604409
      },
      {
        time: new Date(2014, 5, 27),
        open: 41.61,
        high: 42.29,
        low: 41.51,
        close: 42.25,
        volume: 74641945
      },
      {
        time: new Date(2014, 5, 30),
        open: 42.17,
        high: 42.21,
        low: 41.7,
        close: 41.7,
        volume: 30805472
      },
      {
        time: new Date(2014, 6, 1),
        open: 41.86,
        high: 42.15,
        low: 41.69,
        close: 41.87,
        volume: 26922597
      },
      {
        time: new Date(2014, 6, 2),
        open: 41.73,
        high: 41.9,
        low: 41.53,
        close: 41.9,
        volume: 20208526
      },
      {
        time: new Date(2014, 6, 3),
        open: 41.91,
        high: 41.99,
        low: 41.56,
        close: 41.8,
        volume: 15969310
      },
      {
        time: new Date(2014, 6, 7),
        open: 41.75,
        high: 42.12,
        low: 41.71,
        close: 41.99,
        volume: 21953619
      },
      {
        time: new Date(2014, 6, 8),
        open: 41.87,
        high: 42.0,
        low: 41.61,
        close: 41.78,
        volume: 31218208
      },
      {
        time: new Date(2014, 6, 9),
        open: 41.98,
        high: 41.99,
        low: 41.53,
        close: 41.67,
        volume: 18445910
      },
      {
        time: new Date(2014, 6, 10),
        open: 41.37,
        high: 42.0,
        low: 41.05,
        close: 41.68,
        volume: 21856832
      },
      {
        time: new Date(2014, 6, 11),
        open: 41.7,
        high: 42.09,
        low: 41.48,
        close: 42.09,
        volume: 24087374
      },
      {
        time: new Date(2014, 6, 14),
        open: 42.22,
        high: 42.45,
        low: 42.04,
        close: 42.14,
        volume: 21882943
      },
      {
        time: new Date(2014, 6, 15),
        open: 42.33,
        high: 42.47,
        low: 42.03,
        close: 42.45,
        volume: 28758961
      },
      {
        time: new Date(2014, 6, 16),
        open: 42.51,
        high: 44.31,
        low: 42.48,
        close: 44.08,
        volume: 63322372
      },
      {
        time: new Date(2014, 6, 17),
        open: 45.45,
        high: 45.71,
        low: 44.25,
        close: 44.53,
        volume: 82180263
      },
      {
        time: new Date(2014, 6, 18),
        open: 44.65,
        high: 44.84,
        low: 44.25,
        close: 44.69,
        volume: 43407490
      },
      {
        time: new Date(2014, 6, 21),
        open: 44.56,
        high: 45.16,
        low: 44.22,
        close: 44.84,
        volume: 37604378
      },
      {
        time: new Date(2014, 6, 22),
        open: 45.0,
        high: 45.15,
        low: 44.59,
        close: 44.83,
        volume: 43095820
      },
      {
        time: new Date(2014, 6, 23),
        open: 45.45,
        high: 45.45,
        low: 44.62,
        close: 44.87,
        volume: 52363948
      },
      {
        time: new Date(2014, 6, 24),
        open: 44.93,
        high: 45.0,
        low: 44.32,
        close: 44.4,
        volume: 30725348
      },
      {
        time: new Date(2014, 6, 25),
        open: 44.3,
        high: 44.66,
        low: 44.3,
        close: 44.5,
        volume: 26737724
      },
      {
        time: new Date(2014, 6, 28),
        open: 44.36,
        high: 44.51,
        low: 43.93,
        close: 43.97,
        volume: 29687677
      },
      {
        time: new Date(2014, 6, 29),
        open: 43.91,
        high: 44.09,
        low: 43.64,
        close: 43.88,
        volume: 27764099
      },
      {
        time: new Date(2014, 6, 30),
        open: 44.07,
        high: 44.1,
        low: 43.29,
        close: 43.58,
        volume: 31925735
      },
      {
        time: new Date(2014, 6, 31),
        open: 43.38,
        high: 43.69,
        low: 43.08,
        close: 43.16,
        volume: 31540882
      },
      {
        time: new Date(2014, 7, 1),
        open: 43.21,
        high: 43.25,
        low: 42.6,
        close: 42.86,
        volume: 31171094
      },
      {
        time: new Date(2014, 7, 4),
        open: 42.97,
        high: 43.47,
        low: 42.81,
        close: 43.37,
        volume: 34277387
      },
      {
        time: new Date(2014, 7, 5),
        open: 43.37,
        high: 43.46,
        low: 42.83,
        close: 43.08,
        volume: 26267500
      },
      {
        time: new Date(2014, 7, 6),
        open: 42.74,
        high: 43.17,
        low: 42.21,
        close: 42.74,
        volume: 24633966
      },
      {
        time: new Date(2014, 7, 7),
        open: 42.84,
        high: 43.45,
        low: 42.65,
        close: 43.23,
        volume: 30315183
      },
      {
        time: new Date(2014, 7, 8),
        open: 43.23,
        high: 43.32,
        low: 42.91,
        close: 43.2,
        volume: 28943024
      },
      {
        time: new Date(2014, 7, 11),
        open: 43.26,
        high: 43.45,
        low: 43.02,
        close: 43.2,
        volume: 20351600
      },
      {
        time: new Date(2014, 7, 12),
        open: 43.04,
        high: 43.59,
        low: 43.0,
        close: 43.52,
        volume: 21433589
      },
      {
        time: new Date(2014, 7, 13),
        open: 43.68,
        high: 44.18,
        low: 43.52,
        close: 44.08,
        volume: 22889484
      },
      {
        time: new Date(2014, 7, 14),
        open: 44.08,
        high: 44.42,
        low: 44.01,
        close: 44.27,
        volume: 19313194
      },
      {
        time: new Date(2014, 7, 15),
        open: 44.58,
        high: 44.9,
        low: 44.4,
        close: 44.79,
        volume: 41611308
      },
      {
        time: new Date(2014, 7, 18),
        open: 44.94,
        high: 45.11,
        low: 44.68,
        close: 45.11,
        volume: 26895359
      },
      {
        time: new Date(2014, 7, 19),
        open: 44.97,
        high: 45.34,
        low: 44.83,
        close: 45.33,
        volume: 28139494
      },
      {
        time: new Date(2014, 7, 20),
        open: 45.34,
        high: 45.4,
        low: 44.9,
        close: 44.95,
        volume: 24770487
      },
      {
        time: new Date(2014, 7, 21),
        open: 44.84,
        high: 45.25,
        low: 44.83,
        close: 45.22,
        volume: 22285502
      },
      {
        time: new Date(2014, 7, 22),
        open: 45.35,
        high: 45.47,
        low: 45.07,
        close: 45.15,
        volume: 18294741
      },
      {
        time: new Date(2014, 7, 25),
        open: 45.4,
        high: 45.44,
        low: 45.04,
        close: 45.17,
        volume: 16909999
      },
      {
        time: new Date(2014, 7, 26),
        open: 45.31,
        high: 45.4,
        low: 44.94,
        close: 45.0,
        volume: 14877669
      },
      {
        time: new Date(2014, 7, 27),
        open: 44.9,
        high: 45.0,
        low: 44.76,
        close: 44.87,
        volume: 21287931
      },
      {
        time: new Date(2014, 7, 28),
        open: 44.75,
        high: 44.98,
        low: 44.61,
        close: 44.88,
        volume: 17657643
      },
      {
        time: new Date(2014, 7, 29),
        open: 45.09,
        high: 45.44,
        low: 44.86,
        close: 45.43,
        volume: 21608625
      },
      {
        time: new Date(2014, 8, 2),
        open: 45.43,
        high: 45.46,
        low: 44.85,
        close: 45.09,
        volume: 22976775
      },
      {
        time: new Date(2014, 8, 3),
        open: 44.53,
        high: 45.11,
        low: 44.53,
        close: 44.96,
        volume: 33689341
      },
      {
        time: new Date(2014, 8, 4),
        open: 44.74,
        high: 45.27,
        low: 44.72,
        close: 45.26,
        volume: 26478082
      },
      {
        time: new Date(2014, 8, 5),
        open: 45.11,
        high: 45.93,
        low: 45.11,
        close: 45.91,
        volume: 36939360
      },
      {
        time: new Date(2014, 8, 8),
        open: 46.02,
        high: 46.8,
        low: 45.99,
        close: 46.47,
        volume: 45736730
      },
      {
        time: new Date(2014, 8, 9),
        open: 46.47,
        high: 46.97,
        low: 46.42,
        close: 46.76,
        volume: 40302386
      },
      {
        time: new Date(2014, 8, 10),
        open: 46.82,
        high: 46.94,
        low: 46.28,
        close: 46.84,
        volume: 27304409
      },
      {
        time: new Date(2014, 8, 11),
        open: 46.74,
        high: 47.0,
        low: 46.47,
        close: 47.0,
        volume: 29216560
      },
      {
        time: new Date(2014, 8, 12),
        open: 46.91,
        high: 47.02,
        low: 46.6,
        close: 46.7,
        volume: 38247122
      },
      {
        time: new Date(2014, 8, 15),
        open: 46.54,
        high: 46.71,
        low: 46.1,
        close: 46.24,
        volume: 37667644
      },
      {
        time: new Date(2014, 8, 16),
        open: 46.39,
        high: 46.85,
        low: 46.29,
        close: 46.76,
        volume: 27910571
      },
      {
        time: new Date(2014, 8, 17),
        open: 46.26,
        high: 46.69,
        low: 46.23,
        close: 46.52,
        volume: 38311924
      },
      {
        time: new Date(2014, 8, 18),
        open: 46.59,
        high: 46.83,
        low: 46.46,
        close: 46.68,
        volume: 35556632
      },
      {
        time: new Date(2014, 8, 19),
        open: 46.81,
        high: 47.57,
        low: 46.6,
        close: 47.52,
        volume: 202526536
      },
      {
        time: new Date(2014, 8, 22),
        open: 47.3,
        high: 47.38,
        low: 46.98,
        close: 47.06,
        volume: 38686091
      },
      {
        time: new Date(2014, 8, 23),
        open: 46.85,
        high: 46.98,
        low: 46.47,
        close: 46.56,
        volume: 33431078
      },
      {
        time: new Date(2014, 8, 24),
        open: 46.63,
        high: 47.11,
        low: 46.34,
        close: 47.08,
        volume: 26582713
      },
      {
        time: new Date(2014, 8, 25),
        open: 46.88,
        high: 47.09,
        low: 46.03,
        close: 46.04,
        volume: 33077385
      },
      {
        time: new Date(2014, 8, 26),
        open: 45.93,
        high: 46.62,
        low: 45.76,
        close: 46.41,
        volume: 27078764
      },
      {
        time: new Date(2014, 8, 29),
        open: 45.98,
        high: 46.56,
        low: 45.76,
        close: 46.44,
        volume: 26090980
      },
      {
        time: new Date(2014, 8, 30),
        open: 46.37,
        high: 46.48,
        low: 46.01,
        close: 46.36,
        volume: 33033086
      },
      {
        time: new Date(2014, 9, 1),
        open: 46.27,
        high: 46.53,
        low: 45.84,
        close: 45.9,
        volume: 38088355
      },
      {
        time: new Date(2014, 9, 2),
        open: 45.83,
        high: 46.1,
        low: 45.64,
        close: 45.76,
        volume: 25119508
      },
      {
        time: new Date(2014, 9, 3),
        open: 45.98,
        high: 46.3,
        low: 45.61,
        close: 46.09,
        volume: 32453273
      },
      {
        time: new Date(2014, 9, 6),
        open: 46.12,
        high: 46.3,
        low: 45.92,
        close: 46.09,
        volume: 20603960
      },
      {
        time: new Date(2014, 9, 7),
        open: 45.86,
        high: 45.93,
        low: 45.42,
        close: 45.53,
        volume: 25724544
      },
      {
        time: new Date(2014, 9, 8),
        open: 45.48,
        high: 46.89,
        low: 45.34,
        close: 46.78,
        volume: 33030972
      },
      {
        time: new Date(2014, 9, 9),
        open: 46.5,
        high: 46.8,
        low: 45.74,
        close: 45.85,
        volume: 34426595
      },
      {
        time: new Date(2014, 9, 10),
        open: 45.6,
        high: 46.12,
        low: 43.95,
        close: 44.03,
        volume: 51978146
      },
      {
        time: new Date(2014, 9, 13),
        open: 43.82,
        high: 44.56,
        low: 43.49,
        close: 43.65,
        volume: 37100207
      },
      {
        time: new Date(2014, 9, 14),
        open: 43.87,
        high: 44.38,
        low: 43.56,
        close: 43.73,
        volume: 38120558
      },
      {
        time: new Date(2014, 9, 15),
        open: 43.0,
        high: 43.39,
        low: 42.1,
        close: 43.22,
        volume: 60220961
      },
      {
        time: new Date(2014, 9, 16),
        open: 42.53,
        high: 43.08,
        low: 42.22,
        close: 42.74,
        volume: 49040989
      },
      {
        time: new Date(2014, 9, 17),
        open: 43.2,
        high: 43.94,
        low: 42.79,
        close: 43.63,
        volume: 40683346
      },
      {
        time: new Date(2014, 9, 20),
        open: 43.06,
        high: 44.14,
        low: 42.81,
        close: 44.08,
        volume: 34530887
      },
      {
        time: new Date(2014, 9, 21),
        open: 44.36,
        high: 44.98,
        low: 44.19,
        close: 44.88,
        volume: 36433824
      },
      {
        time: new Date(2014, 9, 22),
        open: 45.0,
        high: 45.07,
        low: 44.22,
        close: 44.38,
        volume: 33579817
      },
      {
        time: new Date(2014, 9, 23),
        open: 44.62,
        high: 45.44,
        low: 44.53,
        close: 45.02,
        volume: 45451869
      },
      {
        time: new Date(2014, 9, 24),
        open: 46.83,
        high: 46.9,
        low: 45.18,
        close: 46.13,
        volume: 61081039
      },
      {
        time: new Date(2014, 9, 27),
        open: 45.71,
        high: 46.1,
        low: 45.71,
        close: 45.91,
        volume: 30371308
      },
      {
        time: new Date(2014, 9, 28),
        open: 45.86,
        high: 46.5,
        low: 45.77,
        close: 46.49,
        volume: 29049750
      },
      {
        time: new Date(2014, 9, 29),
        open: 46.44,
        high: 46.7,
        low: 46.34,
        close: 46.62,
        volume: 30283622
      },
      {
        time: new Date(2014, 9, 30),
        open: 46.32,
        high: 46.32,
        low: 45.77,
        close: 46.05,
        volume: 30073873
      },
      {
        time: new Date(2014, 9, 31),
        open: 46.94,
        high: 46.97,
        low: 46.48,
        close: 46.95,
        volume: 35849656
      },
      {
        time: new Date(2014, 10, 3),
        open: 46.89,
        high: 47.46,
        low: 46.73,
        close: 47.44,
        volume: 23130397
      },
      {
        time: new Date(2014, 10, 4),
        open: 47.3,
        high: 47.73,
        low: 47.25,
        close: 47.57,
        volume: 21530813
      },
      {
        time: new Date(2014, 10, 5),
        open: 47.8,
        high: 47.9,
        low: 47.26,
        close: 47.86,
        volume: 22449594
      },
      {
        time: new Date(2014, 10, 6),
        open: 47.86,
        high: 48.86,
        low: 47.79,
        close: 48.7,
        volume: 33037841
      },
      {
        time: new Date(2014, 10, 7),
        open: 48.92,
        high: 48.92,
        low: 48.29,
        close: 48.68,
        volume: 28000598
      },
      {
        time: new Date(2014, 10, 10),
        open: 48.65,
        high: 49.15,
        low: 48.55,
        close: 48.89,
        volume: 36370067
      },
      {
        time: new Date(2014, 10, 11),
        open: 48.85,
        high: 48.93,
        low: 48.64,
        close: 48.87,
        volume: 23445239
      },
      {
        time: new Date(2014, 10, 12),
        open: 48.56,
        high: 48.92,
        low: 48.52,
        close: 48.78,
        volume: 22722123
      },
      {
        time: new Date(2014, 10, 13),
        open: 48.81,
        high: 49.64,
        low: 48.7,
        close: 49.61,
        volume: 26210433
      },
      {
        time: new Date(2014, 10, 14),
        open: 49.74,
        high: 50.04,
        low: 49.39,
        close: 49.58,
        volume: 29081657
      },
      {
        time: new Date(2014, 10, 17),
        open: 49.41,
        high: 49.7,
        low: 49.14,
        close: 49.46,
        volume: 30318648
      },
      {
        time: new Date(2014, 10, 18),
        open: 49.13,
        high: 49.32,
        low: 48.7,
        close: 48.74,
        volume: 23996457
      },
      {
        time: new Date(2014, 10, 19),
        open: 48.66,
        high: 48.75,
        low: 47.93,
        close: 48.22,
        volume: 26177450
      },
      {
        time: new Date(2014, 10, 20),
        open: 48.0,
        high: 48.7,
        low: 47.87,
        close: 48.7,
        volume: 21510587
      },
      {
        time: new Date(2014, 10, 21),
        open: 49.02,
        high: 49.05,
        low: 47.57,
        close: 47.98,
        volume: 42884795
      },
      {
        time: new Date(2014, 10, 24),
        open: 47.99,
        high: 48.0,
        low: 47.39,
        close: 47.59,
        volume: 35434245
      },
      {
        time: new Date(2014, 10, 25),
        open: 47.66,
        high: 47.97,
        low: 47.45,
        close: 47.47,
        volume: 28007993
      },
      {
        time: new Date(2014, 10, 26),
        open: 47.49,
        high: 47.99,
        low: 47.28,
        close: 47.75,
        volume: 27164877
      },
      {
        time: new Date(2014, 10, 28),
        open: 47.95,
        high: 48.2,
        low: 47.61,
        close: 47.81,
        volume: 21534426
      },
      {
        time: new Date(2014, 11, 1),
        open: 47.88,
        high: 48.78,
        low: 47.71,
        close: 48.62,
        volume: 31191575
      },
      {
        time: new Date(2014, 11, 2),
        open: 48.84,
        high: 49.05,
        low: 48.2,
        close: 48.46,
        volume: 25773478
      },
      {
        time: new Date(2014, 11, 3),
        open: 48.44,
        high: 48.5,
        low: 47.8,
        close: 48.08,
        volume: 23534752
      },
      {
        time: new Date(2014, 11, 4),
        open: 48.39,
        high: 49.06,
        low: 48.2,
        close: 48.84,
        volume: 30345132
      },
      {
        time: new Date(2014, 11, 5),
        open: 48.82,
        high: 48.97,
        low: 48.38,
        close: 48.42,
        volume: 27313449
      },
      {
        time: new Date(2014, 11, 8),
        open: 48.26,
        high: 48.35,
        low: 47.44,
        close: 47.7,
        volume: 26663107
      },
      {
        time: new Date(2014, 11, 9),
        open: 47.11,
        high: 47.92,
        low: 47.05,
        close: 47.59,
        volume: 24330506
      },
      {
        time: new Date(2014, 11, 10),
        open: 47.58,
        high: 47.66,
        low: 46.7,
        close: 46.9,
        volume: 30431788
      },
      {
        time: new Date(2014, 11, 11),
        open: 47.08,
        high: 47.74,
        low: 46.68,
        close: 47.17,
        volume: 29061918
      },
      {
        time: new Date(2014, 11, 12),
        open: 46.78,
        high: 47.73,
        low: 46.67,
        close: 46.95,
        volume: 34248371
      },
      {
        time: new Date(2014, 11, 15),
        open: 47.2,
        high: 47.67,
        low: 46.55,
        close: 46.67,
        volume: 29247761
      },
      {
        time: new Date(2014, 11, 16),
        open: 45.9,
        high: 46.34,
        low: 45.13,
        close: 45.16,
        volume: 47801392
      },
      {
        time: new Date(2014, 11, 17),
        open: 45.05,
        high: 45.94,
        low: 44.9,
        close: 45.74,
        volume: 34970865
      },
      {
        time: new Date(2014, 11, 18),
        open: 46.58,
        high: 47.52,
        low: 46.34,
        close: 47.52,
        volume: 40105550
      },
      {
        time: new Date(2014, 11, 19),
        open: 47.63,
        high: 48.1,
        low: 47.17,
        close: 47.66,
        volume: 64551182
      },
      {
        time: new Date(2014, 11, 22),
        open: 47.78,
        high: 48.12,
        low: 47.71,
        close: 47.98,
        volume: 26565984
      },
      {
        time: new Date(2014, 11, 23),
        open: 48.37,
        high: 48.8,
        low: 48.13,
        close: 48.45,
        volume: 23656529
      },
      {
        time: new Date(2014, 11, 24),
        open: 48.64,
        high: 48.64,
        low: 48.08,
        close: 48.14,
        volume: 11442790
      },
      {
        time: new Date(2014, 11, 26),
        open: 48.41,
        high: 48.41,
        low: 47.82,
        close: 47.88,
        volume: 13197817
      },
      {
        time: new Date(2014, 11, 29),
        open: 47.7,
        high: 47.78,
        low: 47.26,
        close: 47.45,
        volume: 14439518
      },
      {
        time: new Date(2014, 11, 30),
        open: 47.44,
        high: 47.62,
        low: 46.84,
        close: 47.02,
        volume: 16384692
      },
      {
        time: new Date(2014, 11, 31),
        open: 46.73,
        high: 47.44,
        low: 46.45,
        close: 46.45,
        volume: 21552450
      },
      {
        time: new Date(2015, 0, 2),
        open: 46.66,
        high: 47.42,
        low: 46.54,
        close: 46.76,
        volume: 27913852
      },
      {
        time: new Date(2015, 0, 5),
        open: 46.37,
        high: 46.73,
        low: 46.25,
        close: 46.32,
        volume: 39673865
      },
      {
        time: new Date(2015, 0, 6),
        open: 46.38,
        high: 46.75,
        low: 45.54,
        close: 45.65,
        volume: 36447854
      },
      {
        time: new Date(2015, 0, 7),
        open: 45.98,
        high: 46.46,
        low: 45.49,
        close: 46.23,
        volume: 29114061
      },
      {
        time: new Date(2015, 0, 8),
        open: 46.75,
        high: 47.75,
        low: 46.72,
        close: 47.59,
        volume: 29645202
      },
      {
        time: new Date(2015, 0, 9),
        open: 47.61,
        high: 47.82,
        low: 46.9,
        close: 47.19,
        volume: 23944181
      },
      {
        time: new Date(2015, 0, 12),
        open: 47.42,
        high: 47.54,
        low: 46.36,
        close: 46.6,
        volume: 23651887
      },
      {
        time: new Date(2015, 0, 13),
        open: 46.97,
        high: 47.91,
        low: 46.06,
        close: 46.36,
        volume: 35270601
      },
      {
        time: new Date(2015, 0, 14),
        open: 45.96,
        high: 46.24,
        low: 45.62,
        close: 45.96,
        volume: 29719580
      },
      {
        time: new Date(2015, 0, 15),
        open: 46.22,
        high: 46.38,
        low: 45.41,
        close: 45.48,
        volume: 32750779
      },
      {
        time: new Date(2015, 0, 16),
        open: 45.31,
        high: 46.28,
        low: 45.17,
        close: 46.24,
        volume: 35695289
      },
      {
        time: new Date(2015, 0, 20),
        open: 46.3,
        high: 46.65,
        low: 45.57,
        close: 46.39,
        volume: 36161860
      },
      {
        time: new Date(2015, 0, 21),
        open: 45.94,
        high: 46.14,
        low: 45.48,
        close: 45.92,
        volume: 39081143
      },
      {
        time: new Date(2015, 0, 22),
        open: 46.38,
        high: 47.14,
        low: 46.08,
        close: 47.13,
        volume: 35898035
      },
      {
        time: new Date(2015, 0, 23),
        open: 47.36,
        high: 47.39,
        low: 46.8,
        close: 47.18,
        volume: 26211594
      },
      {
        time: new Date(2015, 0, 26),
        open: 47.0,
        high: 47.13,
        low: 46.24,
        close: 47.01,
        volume: 42525530
      },
      {
        time: new Date(2015, 0, 27),
        open: 42.95,
        high: 43.2,
        low: 42.1,
        close: 42.66,
        volume: 169163953
      },
      {
        time: new Date(2015, 0, 28),
        open: 42.74,
        high: 42.79,
        low: 41.16,
        close: 41.19,
        volume: 84507078
      },
      {
        time: new Date(2015, 0, 29),
        open: 40.93,
        high: 42.12,
        low: 40.79,
        close: 42.01,
        volume: 63585273
      },
      {
        time: new Date(2015, 0, 30),
        open: 41.55,
        high: 41.58,
        low: 40.35,
        close: 40.4,
        volume: 78004944
      },
      {
        time: new Date(2015, 1, 2),
        open: 40.59,
        high: 41.37,
        low: 40.23,
        close: 41.28,
        volume: 50352532
      },
      {
        time: new Date(2015, 1, 3),
        open: 41.63,
        high: 41.93,
        low: 41.04,
        close: 41.6,
        volume: 52082448
      },
      {
        time: new Date(2015, 1, 4),
        open: 41.94,
        high: 42.21,
        low: 41.36,
        close: 41.84,
        volume: 41614812
      },
      {
        time: new Date(2015, 1, 5),
        open: 42.22,
        high: 42.64,
        low: 41.86,
        close: 42.45,
        volume: 36548168
      },
      {
        time: new Date(2015, 1, 6),
        open: 42.68,
        high: 42.79,
        low: 42.15,
        close: 42.41,
        volume: 34616554
      },
      {
        time: new Date(2015, 1, 9),
        open: 42.24,
        high: 42.74,
        low: 42.21,
        close: 42.36,
        volume: 31381061
      },
      {
        time: new Date(2015, 1, 10),
        open: 42.74,
        high: 42.77,
        low: 42.18,
        close: 42.6,
        volume: 29670676
      },
      {
        time: new Date(2015, 1, 11),
        open: 42.65,
        high: 42.65,
        low: 42.21,
        close: 42.38,
        volume: 38262509
      },
      {
        time: new Date(2015, 1, 12),
        open: 42.66,
        high: 43.09,
        low: 42.51,
        close: 43.09,
        volume: 33268831
      },
      {
        time: new Date(2015, 1, 13),
        open: 43.38,
        high: 43.87,
        low: 43.15,
        close: 43.87,
        volume: 40264887
      },
      {
        time: new Date(2015, 1, 17),
        open: 43.97,
        high: 44.0,
        low: 43.19,
        close: 43.58,
        volume: 33695749
      },
      {
        time: new Date(2015, 1, 18),
        open: 43.63,
        high: 43.7,
        low: 43.39,
        close: 43.53,
        volume: 27111657
      },
      {
        time: new Date(2015, 1, 19),
        open: 43.18,
        high: 43.53,
        low: 43.05,
        close: 43.5,
        volume: 27603420
      },
      {
        time: new Date(2015, 1, 20),
        open: 43.51,
        high: 43.88,
        low: 43.29,
        close: 43.86,
        volume: 29721133
      },
      {
        time: new Date(2015, 1, 23),
        open: 43.7,
        high: 44.19,
        low: 43.65,
        close: 44.15,
        volume: 32518754
      },
      {
        time: new Date(2015, 1, 24),
        open: 44.15,
        high: 44.3,
        low: 43.92,
        close: 44.09,
        volume: 25271747
      },
      {
        time: new Date(2015, 1, 25),
        open: 43.95,
        high: 44.09,
        low: 43.8,
        close: 43.99,
        volume: 29759820
      },
      {
        time: new Date(2015, 1, 26),
        open: 43.99,
        high: 44.23,
        low: 43.89,
        close: 44.06,
        volume: 28957329
      },
      {
        time: new Date(2015, 1, 27),
        open: 44.13,
        high: 44.2,
        low: 43.66,
        close: 43.85,
        volume: 33807740
      },
      {
        time: new Date(2015, 2, 2),
        open: 43.67,
        high: 44.19,
        low: 43.55,
        close: 43.88,
        volume: 31924049
      },
      {
        time: new Date(2015, 2, 3),
        open: 43.56,
        high: 43.82,
        low: 43.09,
        close: 43.28,
        volume: 31748648
      },
      {
        time: new Date(2015, 2, 4),
        open: 43.01,
        high: 43.21,
        low: 42.88,
        close: 43.06,
        volume: 25748692
      },
      {
        time: new Date(2015, 2, 5),
        open: 43.07,
        high: 43.24,
        low: 42.82,
        close: 43.11,
        volume: 23193541
      },
      {
        time: new Date(2015, 2, 6),
        open: 43.0,
        high: 43.11,
        low: 42.15,
        close: 42.36,
        volume: 36248785
      },
      {
        time: new Date(2015, 2, 9),
        open: 42.19,
        high: 43.12,
        low: 42.19,
        close: 42.85,
        volume: 32107957
      },
      {
        time: new Date(2015, 2, 10),
        open: 42.35,
        high: 42.71,
        low: 42.03,
        close: 42.03,
        volume: 39159730
      },
      {
        time: new Date(2015, 2, 11),
        open: 42.31,
        high: 42.37,
        low: 41.84,
        close: 41.98,
        volume: 32215314
      },
      {
        time: new Date(2015, 2, 12),
        open: 41.33,
        high: 41.65,
        low: 40.86,
        close: 41.02,
        volume: 59992502
      },
      {
        time: new Date(2015, 2, 13),
        open: 40.7,
        high: 41.47,
        low: 40.61,
        close: 41.38,
        volume: 58007705
      },
      {
        time: new Date(2015, 2, 16),
        open: 41.47,
        high: 41.64,
        low: 41.28,
        close: 41.56,
        volume: 35273452
      },
      {
        time: new Date(2015, 2, 17),
        open: 41.37,
        high: 41.83,
        low: 41.15,
        close: 41.7,
        volume: 31673448
      },
      {
        time: new Date(2015, 2, 18),
        open: 41.43,
        high: 42.83,
        low: 41.33,
        close: 42.5,
        volume: 44194771
      },
      {
        time: new Date(2015, 2, 19),
        open: 42.26,
        high: 42.59,
        low: 42.22,
        close: 42.28,
        volume: 33879066
      },
      {
        time: new Date(2015, 2, 20),
        open: 42.56,
        high: 42.98,
        low: 42.49,
        close: 42.88,
        volume: 71904529
      },
      {
        time: new Date(2015, 2, 23),
        open: 42.88,
        high: 43.13,
        low: 42.78,
        close: 42.86,
        volume: 26246086
      },
      {
        time: new Date(2015, 2, 24),
        open: 42.78,
        high: 43.17,
        low: 42.75,
        close: 42.9,
        volume: 25513252
      },
      {
        time: new Date(2015, 2, 25),
        open: 42.92,
        high: 42.92,
        low: 41.44,
        close: 41.46,
        volume: 43469907
      },
      {
        time: new Date(2015, 2, 26),
        open: 41.22,
        high: 41.61,
        low: 40.92,
        close: 41.21,
        volume: 37495627
      },
      {
        time: new Date(2015, 2, 27),
        open: 41.12,
        high: 41.43,
        low: 40.83,
        close: 40.97,
        volume: 34401398
      },
      {
        time: new Date(2015, 2, 30),
        open: 41.1,
        high: 41.54,
        low: 40.91,
        close: 40.96,
        volume: 35049662
      },
      {
        time: new Date(2015, 2, 31),
        open: 40.78,
        high: 41.03,
        low: 40.54,
        close: 40.66,
        volume: 34887219
      },
      {
        time: new Date(2015, 3, 1),
        open: 40.6,
        high: 40.76,
        low: 40.31,
        close: 40.72,
        volume: 36865322
      },
      {
        time: new Date(2015, 3, 2),
        open: 40.66,
        high: 40.74,
        low: 40.12,
        close: 40.29,
        volume: 37487476
      },
      {
        time: new Date(2015, 3, 6),
        open: 40.34,
        high: 41.78,
        low: 40.18,
        close: 41.54,
        volume: 39223692
      },
      {
        time: new Date(2015, 3, 7),
        open: 41.61,
        high: 41.91,
        low: 41.31,
        close: 41.53,
        volume: 28809375
      },
      {
        time: new Date(2015, 3, 8),
        open: 41.46,
        high: 41.69,
        low: 41.04,
        close: 41.42,
        volume: 24753438
      },
      {
        time: new Date(2015, 3, 9),
        open: 41.25,
        high: 41.62,
        low: 41.25,
        close: 41.48,
        volume: 25723861
      },
      {
        time: new Date(2015, 3, 10),
        open: 41.63,
        high: 41.95,
        low: 41.41,
        close: 41.72,
        volume: 28022002
      },
      {
        time: new Date(2015, 3, 13),
        open: 41.4,
        high: 42.06,
        low: 41.39,
        close: 41.76,
        volume: 30276692
      },
      {
        time: new Date(2015, 3, 14),
        open: 41.8,
        high: 42.03,
        low: 41.39,
        close: 41.65,
        volume: 24244382
      },
      {
        time: new Date(2015, 3, 15),
        open: 41.76,
        high: 42.46,
        low: 41.68,
        close: 42.26,
        volume: 27343581
      },
      {
        time: new Date(2015, 3, 16),
        open: 41.95,
        high: 42.34,
        low: 41.82,
        close: 42.16,
        volume: 22509652
      },
      {
        time: new Date(2015, 3, 17),
        open: 41.67,
        high: 41.74,
        low: 41.16,
        close: 41.62,
        volume: 42387608
      },
      {
        time: new Date(2015, 3, 20),
        open: 41.73,
        high: 43.17,
        low: 41.68,
        close: 42.9,
        volume: 46057733
      },
      {
        time: new Date(2015, 3, 21),
        open: 43.0,
        high: 43.15,
        low: 42.53,
        close: 42.64,
        volume: 26013844
      },
      {
        time: new Date(2015, 3, 22),
        open: 42.67,
        high: 43.13,
        low: 42.55,
        close: 42.98,
        volume: 25064273
      },
      {
        time: new Date(2015, 3, 23),
        open: 42.89,
        high: 43.61,
        low: 42.8,
        close: 43.34,
        volume: 46309530
      },
      {
        time: new Date(2015, 3, 24),
        open: 45.66,
        high: 48.14,
        low: 45.65,
        close: 47.87,
        volume: 130933665
      },
      {
        time: new Date(2015, 3, 27),
        open: 47.23,
        high: 48.13,
        low: 47.22,
        close: 48.03,
        volume: 59248172
      },
      {
        time: new Date(2015, 3, 28),
        open: 47.78,
        high: 49.21,
        low: 47.7,
        close: 49.16,
        volume: 60730778
      },
      {
        time: new Date(2015, 3, 29),
        open: 48.72,
        high: 49.31,
        low: 48.5,
        close: 49.06,
        volume: 47804562
      },
      {
        time: new Date(2015, 3, 30),
        open: 48.7,
        high: 49.54,
        low: 48.6,
        close: 48.64,
        volume: 64725457
      },
      {
        time: new Date(2015, 4, 1),
        open: 48.58,
        high: 48.88,
        low: 48.4,
        close: 48.66,
        volume: 38937336
      },
      {
        time: new Date(2015, 4, 4),
        open: 48.37,
        high: 48.87,
        low: 48.18,
        close: 48.24,
        volume: 34039485
      },
      {
        time: new Date(2015, 4, 5),
        open: 47.82,
        high: 48.16,
        low: 47.31,
        close: 47.6,
        volume: 50369191
      },
      {
        time: new Date(2015, 4, 6),
        open: 47.57,
        high: 47.77,
        low: 46.02,
        close: 46.28,
        volume: 52433020
      },
      {
        time: new Date(2015, 4, 7),
        open: 46.27,
        high: 47.08,
        low: 46.16,
        close: 46.7,
        volume: 32971654
      },
      {
        time: new Date(2015, 4, 8),
        open: 47.55,
        high: 47.98,
        low: 47.52,
        close: 47.75,
        volume: 35364911
      },
      {
        time: new Date(2015, 4, 11),
        open: 47.55,
        high: 47.91,
        low: 47.37,
        close: 47.37,
        volume: 24609416
      },
      {
        time: new Date(2015, 4, 12),
        open: 46.85,
        high: 47.68,
        low: 46.42,
        close: 47.35,
        volume: 29928264
      },
      {
        time: new Date(2015, 4, 13),
        open: 48.19,
        high: 48.32,
        low: 47.57,
        close: 47.62,
        volume: 34184613
      },
      {
        time: new Date(2015, 4, 14),
        open: 48.03,
        high: 48.82,
        low: 48.03,
        close: 48.72,
        volume: 32980892
      },
      {
        time: new Date(2015, 4, 15),
        open: 48.87,
        high: 48.9,
        low: 48.05,
        close: 48.3,
        volume: 28642694
      },
      {
        time: new Date(2015, 4, 18),
        open: 47.98,
        high: 48.22,
        low: 47.61,
        close: 48.01,
        volume: 24136502
      },
      {
        time: new Date(2015, 4, 19),
        open: 47.56,
        high: 47.81,
        low: 47.18,
        close: 47.58,
        volume: 28574813
      },
      {
        time: new Date(2015, 4, 20),
        open: 47.39,
        high: 47.93,
        low: 47.27,
        close: 47.58,
        volume: 25047919
      },
      {
        time: new Date(2015, 4, 21),
        open: 47.28,
        high: 47.6,
        low: 47.0,
        close: 47.42,
        volume: 22410698
      },
      {
        time: new Date(2015, 4, 22),
        open: 47.3,
        high: 47.35,
        low: 46.82,
        close: 46.9,
        volume: 25720583
      },
      {
        time: new Date(2015, 4, 26),
        open: 46.83,
        high: 46.88,
        low: 46.19,
        close: 46.59,
        volume: 29581860
      },
      {
        time: new Date(2015, 4, 27),
        open: 46.82,
        high: 47.77,
        low: 46.62,
        close: 47.61,
        volume: 27335639
      },
      {
        time: new Date(2015, 4, 28),
        open: 47.5,
        high: 48.02,
        low: 47.39,
        close: 47.45,
        volume: 19283666
      },
      {
        time: new Date(2015, 4, 29),
        open: 47.43,
        high: 47.57,
        low: 46.59,
        close: 46.86,
        volume: 36519594
      },
      {
        time: new Date(2015, 5, 1),
        open: 47.06,
        high: 47.77,
        low: 46.62,
        close: 47.23,
        volume: 28837332
      },
      {
        time: new Date(2015, 5, 2),
        open: 46.93,
        high: 47.35,
        low: 46.62,
        close: 46.92,
        volume: 21498326
      },
      {
        time: new Date(2015, 5, 3),
        open: 47.37,
        high: 47.74,
        low: 46.82,
        close: 46.85,
        volume: 28002154
      },
      {
        time: new Date(2015, 5, 4),
        open: 46.79,
        high: 47.16,
        low: 46.2,
        close: 46.36,
        volume: 27745512
      },
      {
        time: new Date(2015, 5, 5),
        open: 46.31,
        high: 46.52,
        low: 45.84,
        close: 46.14,
        volume: 25438086
      },
      {
        time: new Date(2015, 5, 8),
        open: 46.3,
        high: 46.43,
        low: 45.67,
        close: 45.73,
        volume: 22121634
      },
      {
        time: new Date(2015, 5, 9),
        open: 45.76,
        high: 45.94,
        low: 45.46,
        close: 45.65,
        volume: 24406057
      },
      {
        time: new Date(2015, 5, 10),
        open: 45.79,
        high: 46.83,
        low: 45.69,
        close: 46.61,
        volume: 28417405
      },
      {
        time: new Date(2015, 5, 11),
        open: 46.66,
        high: 46.92,
        low: 46.13,
        close: 46.44,
        volume: 27347758
      },
      {
        time: new Date(2015, 5, 12),
        open: 46.22,
        high: 46.47,
        low: 45.9,
        close: 45.97,
        volume: 23930972
      },
      {
        time: new Date(2015, 5, 15),
        open: 45.45,
        high: 45.65,
        low: 45.02,
        close: 45.48,
        volume: 33254517
      },
      {
        time: new Date(2015, 5, 16),
        open: 45.35,
        high: 46.24,
        low: 45.3,
        close: 45.83,
        volume: 27070306
      },
      {
        time: new Date(2015, 5, 17),
        open: 45.73,
        high: 46.07,
        low: 45.36,
        close: 45.97,
        volume: 28704061
      },
      {
        time: new Date(2015, 5, 18),
        open: 46.22,
        high: 46.8,
        low: 46.17,
        close: 46.72,
        volume: 32658343
      },
      {
        time: new Date(2015, 5, 19),
        open: 46.79,
        high: 46.82,
        low: 45.99,
        close: 46.1,
        volume: 63837036
      },
      {
        time: new Date(2015, 5, 22),
        open: 46.33,
        high: 46.72,
        low: 46.16,
        close: 46.23,
        volume: 20318055
      },
      {
        time: new Date(2015, 5, 23),
        open: 46.13,
        high: 46.28,
        low: 45.62,
        close: 45.91,
        volume: 25896473
      },
      {
        time: new Date(2015, 5, 24),
        open: 45.67,
        high: 46.24,
        low: 45.55,
        close: 45.64,
        volume: 34890901
      },
      {
        time: new Date(2015, 5, 25),
        open: 46.03,
        high: 46.06,
        low: 45.5,
        close: 45.65,
        volume: 20615995
      },
      {
        time: new Date(2015, 5, 26),
        open: 45.65,
        high: 46.28,
        low: 45.03,
        close: 45.26,
        volume: 49835287
      },
      {
        time: new Date(2015, 5, 29),
        open: 45.04,
        high: 45.23,
        low: 44.36,
        close: 44.37,
        volume: 34081746
      },
      {
        time: new Date(2015, 5, 30),
        open: 44.71,
        high: 44.72,
        low: 43.94,
        close: 44.15,
        volume: 35945384
      },
      {
        time: new Date(2015, 6, 1),
        open: 44.46,
        high: 45.23,
        low: 44.1,
        close: 44.44,
        volume: 28343907
      },
      {
        time: new Date(2015, 6, 2),
        open: 44.48,
        high: 44.75,
        low: 44.06,
        close: 44.4,
        volume: 21752013
      },
      {
        time: new Date(2015, 6, 6),
        open: 43.96,
        high: 44.48,
        low: 43.95,
        close: 44.39,
        volume: 23033961
      },
      {
        time: new Date(2015, 6, 7),
        open: 44.34,
        high: 44.49,
        low: 43.32,
        close: 44.3,
        volume: 36435827
      },
      {
        time: new Date(2015, 6, 8),
        open: 44.44,
        high: 44.9,
        low: 44.03,
        close: 44.24,
        volume: 39785901
      },
      {
        time: new Date(2015, 6, 9),
        open: 44.75,
        high: 45.22,
        low: 44.5,
        close: 44.52,
        volume: 32424672
      },
      {
        time: new Date(2015, 6, 10),
        open: 45.01,
        high: 45.14,
        low: 44.57,
        close: 44.61,
        volume: 25465757
      },
      {
        time: new Date(2015, 6, 13),
        open: 44.98,
        high: 45.62,
        low: 44.95,
        close: 45.54,
        volume: 28178329
      },
      {
        time: new Date(2015, 6, 14),
        open: 45.45,
        high: 45.96,
        low: 45.31,
        close: 45.62,
        volume: 22880260
      },
      {
        time: new Date(2015, 6, 15),
        open: 45.68,
        high: 45.89,
        low: 45.43,
        close: 45.76,
        volume: 26629615
      },
      {
        time: new Date(2015, 6, 16),
        open: 46.01,
        high: 46.69,
        low: 45.96,
        close: 46.66,
        volume: 26271673
      },
      {
        time: new Date(2015, 6, 17),
        open: 46.55,
        high: 46.78,
        low: 46.26,
        close: 46.62,
        volume: 29467107
      },
      {
        time: new Date(2015, 6, 20),
        open: 46.65,
        high: 47.13,
        low: 46.44,
        close: 46.92,
        volume: 30631905
      },
      {
        time: new Date(2015, 6, 21),
        open: 46.78,
        high: 47.33,
        low: 46.48,
        close: 47.28,
        volume: 42781899
      },
      {
        time: new Date(2015, 6, 22),
        open: 45.44,
        high: 46.93,
        low: 45.2,
        close: 45.54,
        volume: 59152427
      },
      {
        time: new Date(2015, 6, 23),
        open: 45.27,
        high: 46.23,
        low: 45.1,
        close: 46.11,
        volume: 33934010
      },
      {
        time: new Date(2015, 6, 24),
        open: 45.91,
        high: 46.32,
        low: 45.8,
        close: 45.94,
        volume: 32333244
      },
      {
        time: new Date(2015, 6, 27),
        open: 45.94,
        high: 46.01,
        low: 45.25,
        close: 45.35,
        volume: 39701420
      },
      {
        time: new Date(2015, 6, 28),
        open: 45.58,
        high: 45.64,
        low: 44.79,
        close: 45.34,
        volume: 34328948
      },
      {
        time: new Date(2015, 6, 29),
        open: 45.4,
        high: 46.78,
        low: 45.26,
        close: 46.29,
        volume: 40945864
      },
      {
        time: new Date(2015, 6, 30),
        open: 46.26,
        high: 47.4,
        low: 45.93,
        close: 46.88,
        volume: 39777883
      },
      {
        time: new Date(2015, 6, 31),
        open: 47.29,
        high: 47.37,
        low: 46.5,
        close: 46.7,
        volume: 31201480
      },
      {
        time: new Date(2015, 7, 3),
        open: 46.98,
        high: 47.0,
        low: 46.45,
        close: 46.81,
        volume: 24125886
      },
      {
        time: new Date(2015, 7, 4),
        open: 46.75,
        high: 47.71,
        low: 46.68,
        close: 47.54,
        volume: 33403916
      },
      {
        time: new Date(2015, 7, 5),
        open: 47.98,
        high: 48.41,
        low: 47.54,
        close: 47.58,
        volume: 26959655
      },
      {
        time: new Date(2015, 7, 6),
        open: 47.71,
        high: 47.77,
        low: 46.33,
        close: 46.62,
        volume: 27368000
      },
      {
        time: new Date(2015, 7, 7),
        open: 46.39,
        high: 46.78,
        low: 46.26,
        close: 46.74,
        volume: 19163038
      },
      {
        time: new Date(2015, 7, 10),
        open: 46.95,
        high: 47.49,
        low: 46.84,
        close: 47.33,
        volume: 23079870
      },
      {
        time: new Date(2015, 7, 11),
        open: 46.82,
        high: 46.94,
        low: 45.9,
        close: 46.41,
        volume: 29237402
      },
      {
        time: new Date(2015, 7, 12),
        open: 46.19,
        high: 46.9,
        low: 45.7,
        close: 46.74,
        volume: 30198532
      },
      {
        time: new Date(2015, 7, 13),
        open: 47.06,
        high: 47.1,
        low: 46.49,
        close: 46.73,
        volume: 22627241
      },
      {
        time: new Date(2015, 7, 14),
        open: 46.53,
        high: 47.1,
        low: 46.52,
        close: 47.0,
        volume: 21473402
      },
      {
        time: new Date(2015, 7, 17),
        open: 46.81,
        high: 47.45,
        low: 46.57,
        close: 47.32,
        volume: 21099746
      },
      {
        time: new Date(2015, 7, 18),
        open: 46.84,
        high: 47.43,
        low: 46.7,
        close: 47.27,
        volume: 23574104
      },
      {
        time: new Date(2015, 7, 19),
        open: 46.78,
        high: 47.08,
        low: 46.3,
        close: 46.61,
        volume: 31485511
      },
      {
        time: new Date(2015, 7, 20),
        open: 46.07,
        high: 46.47,
        low: 45.66,
        close: 45.66,
        volume: 35671759
      },
      {
        time: new Date(2015, 7, 21),
        open: 45.3,
        high: 45.48,
        low: 43.07,
        close: 43.07,
        volume: 68835485
      },
      {
        time: new Date(2015, 7, 24),
        open: 40.45,
        high: 43.31,
        low: 39.72,
        close: 41.68,
        volume: 88049620
      },
      {
        time: new Date(2015, 7, 25),
        open: 42.56,
        high: 43.24,
        low: 40.39,
        close: 40.47,
        volume: 70239286
      },
      {
        time: new Date(2015, 7, 26),
        open: 42.01,
        high: 42.84,
        low: 41.06,
        close: 42.71,
        volume: 63031299
      },
      {
        time: new Date(2015, 7, 27),
        open: 43.23,
        high: 43.95,
        low: 42.92,
        close: 43.9,
        volume: 50498307
      },
      {
        time: new Date(2015, 7, 28),
        open: 43.4,
        high: 44.15,
        low: 43.39,
        close: 43.93,
        volume: 28104231
      },
      {
        time: new Date(2015, 7, 31),
        open: 43.56,
        high: 43.93,
        low: 43.1,
        close: 43.52,
        volume: 34159135
      },
      {
        time: new Date(2015, 8, 1),
        open: 42.17,
        high: 42.59,
        low: 41.66,
        close: 41.82,
        volume: 49194736
      },
      {
        time: new Date(2015, 8, 2),
        open: 42.36,
        high: 43.38,
        low: 41.88,
        close: 43.36,
        volume: 37490396
      },
      {
        time: new Date(2015, 8, 3),
        open: 43.41,
        high: 43.98,
        low: 43.28,
        close: 43.5,
        volume: 28053165
      },
      {
        time: new Date(2015, 8, 4),
        open: 42.81,
        high: 43.04,
        low: 42.2,
        close: 42.61,
        volume: 36771788
      },
      {
        time: new Date(2015, 8, 8),
        open: 43.3,
        high: 44.0,
        low: 43.2,
        close: 43.89,
        volume: 32204941
      },
      {
        time: new Date(2015, 8, 9),
        open: 44.21,
        high: 44.4,
        low: 42.91,
        close: 43.07,
        volume: 33318847
      },
      {
        time: new Date(2015, 8, 10),
        open: 43.12,
        high: 43.79,
        low: 42.74,
        close: 43.29,
        volume: 31234165
      },
      {
        time: new Date(2015, 8, 11),
        open: 43.14,
        high: 43.59,
        low: 42.94,
        close: 43.48,
        volume: 26184379
      },
      {
        time: new Date(2015, 8, 14),
        open: 43.43,
        high: 43.44,
        low: 42.86,
        close: 43.04,
        volume: 23633284
      },
      {
        time: new Date(2015, 8, 15),
        open: 43.19,
        high: 44.29,
        low: 43.08,
        close: 43.98,
        volume: 28662129
      },
      {
        time: new Date(2015, 8, 16),
        open: 43.97,
        high: 44.38,
        low: 43.84,
        close: 44.3,
        volume: 23256716
      },
      {
        time: new Date(2015, 8, 17),
        open: 44.29,
        high: 45.0,
        low: 44.08,
        close: 44.25,
        volume: 29817918
      },
      {
        time: new Date(2015, 8, 18),
        open: 43.5,
        high: 43.99,
        low: 43.33,
        close: 43.48,
        volume: 62221607
      },
      {
        time: new Date(2015, 8, 21),
        open: 43.62,
        high: 44.47,
        low: 43.6,
        close: 44.11,
        volume: 26075359
      },
      {
        time: new Date(2015, 8, 22),
        open: 43.38,
        high: 44.05,
        low: 43.31,
        close: 43.9,
        volume: 27824121
      },
      {
        time: new Date(2015, 8, 23),
        open: 43.93,
        high: 44.17,
        low: 43.51,
        close: 43.87,
        volume: 17057235
      },
      {
        time: new Date(2015, 8, 24),
        open: 43.45,
        high: 44.13,
        low: 43.27,
        close: 43.91,
        volume: 27652655
      },
      {
        time: new Date(2015, 8, 25),
        open: 44.48,
        high: 44.73,
        low: 43.76,
        close: 43.94,
        volume: 29177316
      },
      {
        time: new Date(2015, 8, 28),
        open: 43.83,
        high: 44.08,
        low: 43.2,
        close: 43.29,
        volume: 27219415
      },
      {
        time: new Date(2015, 8, 29),
        open: 43.37,
        high: 43.57,
        low: 43.05,
        close: 43.44,
        volume: 32653952
      },
      {
        time: new Date(2015, 8, 30),
        open: 43.88,
        high: 44.3,
        low: 43.66,
        close: 44.26,
        volume: 34589501
      },
      {
        time: new Date(2015, 9, 1),
        open: 44.75,
        high: 44.75,
        low: 43.75,
        close: 44.61,
        volume: 28470381
      },
      {
        time: new Date(2015, 9, 2),
        open: 44.27,
        high: 45.57,
        low: 43.92,
        close: 45.57,
        volume: 41571518
      },
      {
        time: new Date(2015, 9, 5),
        open: 45.74,
        high: 46.89,
        low: 45.7,
        close: 46.63,
        volume: 33015524
      },
      {
        time: new Date(2015, 9, 6),
        open: 46.33,
        high: 47.18,
        low: 46.22,
        close: 46.75,
        volume: 27017160
      },
      {
        time: new Date(2015, 9, 7),
        open: 47.1,
        high: 47.35,
        low: 45.95,
        close: 46.8,
        volume: 27381389
      },
      {
        time: new Date(2015, 9, 8),
        open: 46.56,
        high: 47.52,
        low: 46.5,
        close: 47.45,
        volume: 33679346
      },
      {
        time: new Date(2015, 9, 9),
        open: 47.45,
        high: 47.54,
        low: 46.92,
        close: 47.11,
        volume: 28397372
      },
      {
        time: new Date(2015, 9, 12),
        open: 46.98,
        high: 47.07,
        low: 46.5,
        close: 47.0,
        volume: 19734079
      },
      {
        time: new Date(2015, 9, 13),
        open: 46.56,
        high: 47.13,
        low: 46.56,
        close: 46.89,
        volume: 18937148
      },
      {
        time: new Date(2015, 9, 14),
        open: 46.65,
        high: 47.1,
        low: 46.53,
        close: 46.68,
        volume: 24645420
      },
      {
        time: new Date(2015, 9, 15),
        open: 47.01,
        high: 47.03,
        low: 46.53,
        close: 47.01,
        volume: 27118898
      },
      {
        time: new Date(2015, 9, 16),
        open: 47.02,
        high: 47.54,
        low: 46.9,
        close: 47.51,
        volume: 25779279
      },
      {
        time: new Date(2015, 9, 19),
        open: 47.42,
        high: 47.88,
        low: 47.02,
        close: 47.62,
        volume: 29106758
      },
      {
        time: new Date(2015, 9, 20),
        open: 47.44,
        high: 47.81,
        low: 47.02,
        close: 47.77,
        volume: 30573983
      },
      {
        time: new Date(2015, 9, 21),
        open: 47.92,
        high: 47.99,
        low: 47.11,
        close: 47.2,
        volume: 25144337
      },
      {
        time: new Date(2015, 9, 22),
        open: 47.53,
        high: 48.95,
        low: 47.09,
        close: 48.03,
        volume: 54435667
      },
      {
        time: new Date(2015, 9, 23),
        open: 52.3,
        high: 54.07,
        low: 52.25,
        close: 52.87,
        volume: 134828496
      },
      {
        time: new Date(2015, 9, 26),
        open: 52.53,
        high: 54.32,
        low: 52.5,
        close: 54.25,
        volume: 63486782
      },
      {
        time: new Date(2015, 9, 27),
        open: 53.99,
        high: 54.37,
        low: 53.58,
        close: 53.69,
        volume: 48640174
      },
      {
        time: new Date(2015, 9, 28),
        open: 53.54,
        high: 53.98,
        low: 52.86,
        close: 53.98,
        volume: 45353604
      },
      {
        time: new Date(2015, 9, 29),
        open: 53.54,
        high: 53.83,
        low: 53.22,
        close: 53.36,
        volume: 30036258
      },
      {
        time: new Date(2015, 9, 30),
        open: 53.32,
        high: 53.99,
        low: 52.62,
        close: 52.64,
        volume: 46473085
      },
      {
        time: new Date(2015, 10, 2),
        open: 52.85,
        high: 53.36,
        low: 52.62,
        close: 53.24,
        volume: 29946039
      },
      {
        time: new Date(2015, 10, 3),
        open: 52.93,
        high: 54.39,
        low: 52.9,
        close: 54.15,
        volume: 35842280
      },
      {
        time: new Date(2015, 10, 4),
        open: 54.18,
        high: 54.88,
        low: 54.06,
        close: 54.4,
        volume: 37020378
      },
      {
        time: new Date(2015, 10, 5),
        open: 54.49,
        high: 54.7,
        low: 54.0,
        close: 54.38,
        volume: 30648155
      },
      {
        time: new Date(2015, 10, 6),
        open: 54.08,
        high: 54.98,
        low: 53.96,
        close: 54.92,
        volume: 30488633
      },
      {
        time: new Date(2015, 10, 9),
        open: 54.55,
        high: 54.87,
        low: 53.56,
        close: 54.16,
        volume: 32466376
      },
      {
        time: new Date(2015, 10, 10),
        open: 54.07,
        high: 54.13,
        low: 53.27,
        close: 53.51,
        volume: 55020334
      },
      {
        time: new Date(2015, 10, 11),
        open: 53.7,
        high: 54.2,
        low: 53.46,
        close: 53.65,
        volume: 34004446
      },
      {
        time: new Date(2015, 10, 12),
        open: 53.48,
        high: 53.98,
        low: 53.19,
        close: 53.32,
        volume: 34485469
      },
      {
        time: new Date(2015, 10, 13),
        open: 53.07,
        high: 53.29,
        low: 52.53,
        close: 52.84,
        volume: 36399856
      },
      {
        time: new Date(2015, 10, 16),
        open: 53.08,
        high: 53.89,
        low: 52.85,
        close: 53.76,
        volume: 31610450
      },
      {
        time: new Date(2015, 10, 17),
        open: 53.17,
        high: 53.53,
        low: 52.85,
        close: 52.97,
        volume: 31211644
      },
      {
        time: new Date(2015, 10, 18),
        open: 53.0,
        high: 53.98,
        low: 52.98,
        close: 53.85,
        volume: 28794418
      },
      {
        time: new Date(2015, 10, 19),
        open: 53.99,
        high: 54.66,
        low: 53.78,
        close: 53.94,
        volume: 28131212
      },
      {
        time: new Date(2015, 10, 20),
        open: 54.25,
        high: 54.3,
        low: 53.26,
        close: 54.19,
        volume: 37100507
      },
      {
        time: new Date(2015, 10, 23),
        open: 54.25,
        high: 54.46,
        low: 53.75,
        close: 54.19,
        volume: 27767280
      },
      {
        time: new Date(2015, 10, 24),
        open: 53.92,
        high: 54.44,
        low: 53.58,
        close: 54.25,
        volume: 24482130
      },
      {
        time: new Date(2015, 10, 25),
        open: 54.09,
        high: 54.23,
        low: 53.69,
        close: 53.69,
        volume: 21005147
      },
      {
        time: new Date(2015, 10, 27),
        open: 53.8,
        high: 54.08,
        low: 53.79,
        close: 53.93,
        volume: 9009113
      },
      {
        time: new Date(2015, 10, 30),
        open: 54.54,
        high: 54.96,
        low: 54.0,
        close: 54.35,
        volume: 53885371
      },
      {
        time: new Date(2015, 11, 1),
        open: 54.41,
        high: 55.23,
        low: 54.3,
        close: 55.22,
        volume: 39848647
      },
      {
        time: new Date(2015, 11, 2),
        open: 55.32,
        high: 55.96,
        low: 55.06,
        close: 55.21,
        volume: 47244551
      },
      {
        time: new Date(2015, 11, 3),
        open: 55.49,
        high: 55.77,
        low: 53.93,
        close: 54.2,
        volume: 38627835
      },
      {
        time: new Date(2015, 11, 4),
        open: 54.12,
        high: 56.23,
        low: 54.1,
        close: 55.91,
        volume: 43963662
      },
      {
        time: new Date(2015, 11, 7),
        open: 55.79,
        high: 55.97,
        low: 55.29,
        close: 55.81,
        volume: 30709765
      },
      {
        time: new Date(2015, 11, 8),
        open: 55.47,
        high: 56.1,
        low: 54.99,
        close: 55.79,
        volume: 32878026
      },
      {
        time: new Date(2015, 11, 9),
        open: 54.75,
        high: 55.87,
        low: 54.51,
        close: 54.98,
        volume: 36373209
      },
      {
        time: new Date(2015, 11, 10),
        open: 55.39,
        high: 55.66,
        low: 55.01,
        close: 55.27,
        volume: 31775826
      },
      {
        time: new Date(2015, 11, 11),
        open: 54.71,
        high: 55.1,
        low: 54.01,
        close: 54.06,
        volume: 39549497
      },
      {
        time: new Date(2015, 11, 14),
        open: 54.33,
        high: 55.21,
        low: 53.68,
        close: 55.14,
        volume: 46768924
      },
      {
        time: new Date(2015, 11, 15),
        open: 55.66,
        high: 55.9,
        low: 55.09,
        close: 55.2,
        volume: 39842998
      },
      {
        time: new Date(2015, 11, 16),
        open: 55.54,
        high: 56.24,
        low: 54.76,
        close: 56.13,
        volume: 37503300
      },
      {
        time: new Date(2015, 11, 17),
        open: 56.36,
        high: 56.79,
        low: 55.53,
        close: 55.7,
        volume: 41280907
      },
      {
        time: new Date(2015, 11, 18),
        open: 54.78,
        high: 56.0,
        low: 54.03,
        close: 54.13,
        volume: 84684164
      },
      {
        time: new Date(2015, 11, 21),
        open: 54.88,
        high: 55.35,
        low: 54.23,
        close: 54.83,
        volume: 37246325
      },
      {
        time: new Date(2015, 11, 22),
        open: 54.99,
        high: 55.48,
        low: 54.5,
        close: 55.35,
        volume: 28322241
      },
      {
        time: new Date(2015, 11, 23),
        open: 55.7,
        high: 55.88,
        low: 55.44,
        close: 55.82,
        volume: 27279832
      },
      {
        time: new Date(2015, 11, 24),
        open: 55.86,
        high: 55.96,
        low: 55.43,
        close: 55.67,
        volume: 9570002
      },
      {
        time: new Date(2015, 11, 28),
        open: 55.35,
        high: 55.95,
        low: 54.98,
        close: 55.95,
        volume: 22458293
      },
      {
        time: new Date(2015, 11, 29),
        open: 56.29,
        high: 56.85,
        low: 56.06,
        close: 56.55,
        volume: 27731403
      },
      {
        time: new Date(2015, 11, 30),
        open: 56.47,
        high: 56.78,
        low: 56.29,
        close: 56.31,
        volume: 21704505
      },
      {
        time: new Date(2015, 11, 31),
        open: 56.04,
        high: 56.19,
        low: 55.42,
        close: 55.48,
        volume: 27334061
      },
      {
        time: new Date(2016, 0, 4),
        open: 54.32,
        high: 54.8,
        low: 53.39,
        close: 54.8,
        volume: 52843210
      },
      {
        time: new Date(2016, 0, 5),
        open: 54.93,
        high: 55.39,
        low: 54.54,
        close: 55.05,
        volume: 34079674
      },
      {
        time: new Date(2016, 0, 6),
        open: 54.32,
        high: 54.4,
        low: 53.64,
        close: 54.05,
        volume: 39518863
      },
      {
        time: new Date(2016, 0, 7),
        open: 52.7,
        high: 53.48,
        low: 52.07,
        close: 52.17,
        volume: 56564852
      },
      {
        time: new Date(2016, 0, 8),
        open: 52.37,
        high: 53.28,
        low: 52.15,
        close: 52.33,
        volume: 48753969
      },
      {
        time: new Date(2016, 0, 11),
        open: 52.51,
        high: 52.85,
        low: 51.46,
        close: 52.3,
        volume: 36943756
      },
      {
        time: new Date(2016, 0, 12),
        open: 52.76,
        high: 53.1,
        low: 52.06,
        close: 52.78,
        volume: 36095539
      },
      {
        time: new Date(2016, 0, 13),
        open: 53.8,
        high: 54.07,
        low: 51.3,
        close: 51.64,
        volume: 66119018
      },
      {
        time: new Date(2016, 0, 14),
        open: 52.0,
        high: 53.42,
        low: 51.57,
        close: 53.11,
        volume: 51429807
      },
      {
        time: new Date(2016, 0, 15),
        open: 51.31,
        high: 51.97,
        low: 50.34,
        close: 50.99,
        volume: 70739137
      },
      {
        time: new Date(2016, 0, 19),
        open: 51.48,
        high: 51.68,
        low: 50.06,
        close: 50.56,
        volume: 43128276
      },
      {
        time: new Date(2016, 0, 20),
        open: 49.98,
        high: 51.38,
        low: 49.1,
        close: 50.79,
        volume: 63162940
      },
      {
        time: new Date(2016, 0, 21),
        open: 51.0,
        high: 51.58,
        low: 50.3,
        close: 50.48,
        volume: 40169367
      },
      {
        time: new Date(2016, 0, 22),
        open: 51.41,
        high: 52.33,
        low: 51.26,
        close: 52.29,
        volume: 36878402
      },
      {
        time: new Date(2016, 0, 25),
        open: 51.94,
        high: 52.65,
        low: 51.65,
        close: 51.79,
        volume: 34497323
      },
      {
        time: new Date(2016, 0, 26),
        open: 51.79,
        high: 52.44,
        low: 51.55,
        close: 52.17,
        volume: 28699484
      },
      {
        time: new Date(2016, 0, 27),
        open: 52.01,
        high: 52.2,
        low: 51.02,
        close: 51.22,
        volume: 36266102
      },
      {
        time: new Date(2016, 0, 28),
        open: 51.86,
        high: 52.21,
        low: 51.25,
        close: 52.06,
        volume: 58489190
      },
      {
        time: new Date(2016, 0, 29),
        open: 54.73,
        high: 55.09,
        low: 54.0,
        close: 55.09,
        volume: 83137039
      },
      {
        time: new Date(2016, 1, 1),
        open: 54.88,
        high: 55.09,
        low: 54.5,
        close: 54.71,
        volume: 43587105
      },
      {
        time: new Date(2016, 1, 2),
        open: 54.17,
        high: 54.26,
        low: 52.65,
        close: 53.0,
        volume: 54453559
      },
      {
        time: new Date(2016, 1, 3),
        open: 53.25,
        high: 53.39,
        low: 51.26,
        close: 52.16,
        volume: 57347519
      },
      {
        time: new Date(2016, 1, 4),
        open: 52.1,
        high: 52.81,
        low: 51.37,
        close: 52.0,
        volume: 46803371
      },
      {
        time: new Date(2016, 1, 5),
        open: 51.94,
        high: 52.0,
        low: 49.56,
        close: 50.16,
        volume: 60651115
      },
      {
        time: new Date(2016, 1, 8),
        open: 49.55,
        high: 49.57,
        low: 48.19,
        close: 49.41,
        volume: 57006105
      },
      {
        time: new Date(2016, 1, 9),
        open: 49.02,
        high: 50.24,
        low: 48.67,
        close: 49.28,
        volume: 45822192
      },
      {
        time: new Date(2016, 1, 10),
        open: 49.89,
        high: 50.39,
        low: 49.52,
        close: 49.71,
        volume: 37899918
      },
      {
        time: new Date(2016, 1, 11),
        open: 48.68,
        high: 50.11,
        low: 48.51,
        close: 49.69,
        volume: 48448154
      },
      {
        time: new Date(2016, 1, 12),
        open: 50.25,
        high: 50.68,
        low: 49.75,
        close: 50.5,
        volume: 33292336
      },
      {
        time: new Date(2016, 1, 16),
        open: 50.9,
        high: 51.09,
        low: 50.13,
        close: 51.09,
        volume: 35937137
      },
      {
        time: new Date(2016, 1, 17),
        open: 51.49,
        high: 52.77,
        low: 51.45,
        close: 52.42,
        volume: 39670289
      },
      {
        time: new Date(2016, 1, 18),
        open: 52.33,
        high: 52.95,
        low: 52.1,
        close: 52.19,
        volume: 26244683
      },
      {
        time: new Date(2016, 1, 19),
        open: 51.97,
        high: 52.28,
        low: 51.53,
        close: 51.82,
        volume: 33275399
      },
      {
        time: new Date(2016, 1, 22),
        open: 52.28,
        high: 53.0,
        low: 52.28,
        close: 52.65,
        volume: 24854437
      },
      {
        time: new Date(2016, 1, 23),
        open: 52.34,
        high: 52.37,
        low: 50.98,
        close: 51.18,
        volume: 28390773
      },
      {
        time: new Date(2016, 1, 24),
        open: 50.69,
        high: 51.5,
        low: 50.2,
        close: 51.36,
        volume: 32076012
      },
      {
        time: new Date(2016, 1, 25),
        open: 51.73,
        high: 52.1,
        low: 50.61,
        close: 52.1,
        volume: 26695920
      },
      {
        time: new Date(2016, 1, 26),
        open: 52.6,
        high: 52.68,
        low: 51.1,
        close: 51.3,
        volume: 35869193
      },
      {
        time: new Date(2016, 1, 29),
        open: 51.35,
        high: 51.65,
        low: 50.66,
        close: 50.88,
        volume: 31247142
      },
      {
        time: new Date(2016, 2, 1),
        open: 50.97,
        high: 52.59,
        low: 50.92,
        close: 52.58,
        volume: 32778474
      },
      {
        time: new Date(2016, 2, 2),
        open: 52.41,
        high: 52.96,
        low: 52.16,
        close: 52.95,
        volume: 29049172
      },
      {
        time: new Date(2016, 2, 3),
        open: 52.97,
        high: 52.97,
        low: 51.78,
        close: 52.35,
        volume: 24418148
      },
      {
        time: new Date(2016, 2, 4),
        open: 52.4,
        high: 52.45,
        low: 51.71,
        close: 52.03,
        volume: 32280449
      },
      {
        time: new Date(2016, 2, 7),
        open: 51.56,
        high: 51.8,
        low: 50.58,
        close: 51.03,
        volume: 38407847
      },
      {
        time: new Date(2016, 2, 8),
        open: 50.8,
        high: 52.13,
        low: 50.6,
        close: 51.65,
        volume: 33352218
      },
      {
        time: new Date(2016, 2, 9),
        open: 51.89,
        high: 52.85,
        low: 51.86,
        close: 52.84,
        volume: 28145151
      },
      {
        time: new Date(2016, 2, 10),
        open: 52.93,
        high: 52.94,
        low: 51.16,
        close: 52.05,
        volume: 38384242
      },
      {
        time: new Date(2016, 2, 11),
        open: 53.0,
        high: 53.07,
        low: 52.38,
        close: 53.07,
        volume: 32174336
      },
      {
        time: new Date(2016, 2, 14),
        open: 52.71,
        high: 53.59,
        low: 52.63,
        close: 53.17,
        volume: 23751138
      },
      {
        time: new Date(2016, 2, 15),
        open: 52.75,
        high: 53.59,
        low: 52.74,
        close: 53.59,
        volume: 21104763
      },
      {
        time: new Date(2016, 2, 16),
        open: 53.45,
        high: 54.6,
        low: 53.4,
        close: 54.35,
        volume: 31297892
      },
      {
        time: new Date(2016, 2, 17),
        open: 54.21,
        high: 55.0,
        low: 54.0,
        close: 54.66,
        volume: 28186465
      },
      {
        time: new Date(2016, 2, 18),
        open: 54.92,
        high: 54.97,
        low: 53.44,
        close: 53.49,
        volume: 67422879
      },
      {
        time: new Date(2016, 2, 21),
        open: 53.25,
        high: 53.93,
        low: 52.93,
        close: 53.86,
        volume: 23807263
      },
      {
        time: new Date(2016, 2, 22),
        open: 53.61,
        high: 54.25,
        low: 53.46,
        close: 54.07,
        volume: 22911577
      },
      {
        time: new Date(2016, 2, 23),
        open: 54.11,
        high: 54.24,
        low: 53.74,
        close: 53.97,
        volume: 19905295
      },
      {
        time: new Date(2016, 2, 24),
        open: 53.84,
        high: 54.33,
        low: 53.73,
        close: 54.21,
        volume: 18842667
      },
      {
        time: new Date(2016, 2, 28),
        open: 54.21,
        high: 54.29,
        low: 53.33,
        close: 53.54,
        volume: 16988240
      },
      {
        time: new Date(2016, 2, 29),
        open: 53.66,
        high: 54.86,
        low: 53.45,
        close: 54.71,
        volume: 23375017
      },
      {
        time: new Date(2016, 2, 30),
        open: 54.93,
        high: 55.64,
        low: 54.9,
        close: 55.05,
        volume: 22920330
      },
      {
        time: new Date(2016, 2, 31),
        open: 54.95,
        high: 55.59,
        low: 54.86,
        close: 55.23,
        volume: 26173764
      },
      {
        time: new Date(2016, 3, 1),
        open: 55.05,
        high: 55.61,
        low: 54.57,
        close: 55.57,
        volume: 24298612
      },
      {
        time: new Date(2016, 3, 4),
        open: 55.43,
        high: 55.66,
        low: 55.0,
        close: 55.43,
        volume: 18832210
      },
      {
        time: new Date(2016, 3, 5),
        open: 55.19,
        high: 55.3,
        low: 54.46,
        close: 54.56,
        volume: 19148783
      },
      {
        time: new Date(2016, 3, 6),
        open: 54.36,
        high: 55.2,
        low: 54.21,
        close: 55.12,
        volume: 21032057
      },
      {
        time: new Date(2016, 3, 7),
        open: 54.87,
        high: 54.91,
        low: 54.23,
        close: 54.46,
        volume: 18584125
      },
      {
        time: new Date(2016, 3, 8),
        open: 54.67,
        high: 55.28,
        low: 54.32,
        close: 54.42,
        volume: 22157037
      },
      {
        time: new Date(2016, 3, 11),
        open: 54.49,
        high: 55.15,
        low: 54.3,
        close: 54.31,
        volume: 21332336
      },
      {
        time: new Date(2016, 3, 12),
        open: 54.37,
        high: 54.78,
        low: 53.76,
        close: 54.65,
        volume: 24574169
      },
      {
        time: new Date(2016, 3, 13),
        open: 55.12,
        high: 55.44,
        low: 54.89,
        close: 55.35,
        volume: 20601278
      },
      {
        time: new Date(2016, 3, 14),
        open: 55.22,
        high: 55.58,
        low: 55.07,
        close: 55.36,
        volume: 20875102
      },
      {
        time: new Date(2016, 3, 15),
        open: 55.3,
        high: 55.92,
        low: 55.11,
        close: 55.65,
        volume: 28377584
      },
      {
        time: new Date(2016, 3, 18),
        open: 55.49,
        high: 56.59,
        low: 55.21,
        close: 56.46,
        volume: 23150318
      },
      {
        time: new Date(2016, 3, 19),
        open: 56.63,
        high: 56.77,
        low: 55.68,
        close: 56.39,
        volume: 29533701
      },
      {
        time: new Date(2016, 3, 20),
        open: 56.29,
        high: 56.5,
        low: 55.48,
        close: 55.59,
        volume: 36014074
      },
      {
        time: new Date(2016, 3, 21),
        open: 55.8,
        high: 56.23,
        low: 55.42,
        close: 55.78,
        volume: 36826521
      },
      {
        time: new Date(2016, 3, 22),
        open: 51.91,
        high: 52.43,
        low: 50.77,
        close: 51.78,
        volume: 125600219
      },
      {
        time: new Date(2016, 3, 25),
        open: 51.78,
        high: 52.13,
        low: 51.63,
        close: 52.11,
        volume: 33106540
      },
      {
        time: new Date(2016, 3, 26),
        open: 52.26,
        high: 52.35,
        low: 51.09,
        close: 51.44,
        volume: 33262278
      },
      {
        time: new Date(2016, 3, 27),
        open: 51.48,
        high: 51.5,
        low: 50.55,
        close: 50.94,
        volume: 43145896
      },
      {
        time: new Date(2016, 3, 28),
        open: 50.62,
        high: 50.77,
        low: 49.56,
        close: 49.9,
        volume: 42758226
      },
      {
        time: new Date(2016, 3, 29),
        open: 49.35,
        high: 50.25,
        low: 49.35,
        close: 49.87,
        volume: 48339735
      },
      {
        time: new Date(2016, 4, 2),
        open: 50.0,
        high: 50.75,
        low: 49.78,
        close: 50.61,
        volume: 33004106
      },
      {
        time: new Date(2016, 4, 3),
        open: 50.34,
        high: 50.41,
        low: 49.6,
        close: 49.78,
        volume: 26196074
      },
      {
        time: new Date(2016, 4, 4),
        open: 49.84,
        high: 50.06,
        low: 49.46,
        close: 49.87,
        volume: 24171449
      },
      {
        time: new Date(2016, 4, 5),
        open: 49.87,
        high: 50.3,
        low: 49.73,
        close: 49.94,
        volume: 25309543
      },
      {
        time: new Date(2016, 4, 6),
        open: 49.92,
        high: 50.39,
        low: 49.66,
        close: 50.39,
        volume: 24715575
      },
      {
        time: new Date(2016, 4, 9),
        open: 50.49,
        high: 50.58,
        low: 50.0,
        close: 50.07,
        volume: 17844648
      },
      {
        time: new Date(2016, 4, 10),
        open: 50.33,
        high: 51.1,
        low: 50.19,
        close: 51.02,
        volume: 22741527
      },
      {
        time: new Date(2016, 4, 11),
        open: 51.13,
        high: 51.78,
        low: 51.0,
        close: 51.05,
        volume: 23910684
      },
      {
        time: new Date(2016, 4, 12),
        open: 51.2,
        high: 51.81,
        low: 50.92,
        close: 51.51,
        volume: 24099431
      },
      {
        time: new Date(2016, 4, 13),
        open: 51.44,
        high: 51.9,
        low: 51.04,
        close: 51.08,
        volume: 22436700
      },
      {
        time: new Date(2016, 4, 16),
        open: 50.8,
        high: 51.96,
        low: 50.75,
        close: 51.83,
        volume: 19944632
      },
      {
        time: new Date(2016, 4, 17),
        open: 51.72,
        high: 51.73,
        low: 50.36,
        close: 50.51,
        volume: 27766669
      },
      {
        time: new Date(2016, 4, 18),
        open: 50.48,
        high: 51.14,
        low: 50.3,
        close: 50.81,
        volume: 24803172
      },
      {
        time: new Date(2016, 4, 19),
        open: 50.47,
        high: 50.62,
        low: 49.82,
        close: 50.32,
        volume: 23722753
      },
      {
        time: new Date(2016, 4, 20),
        open: 50.48,
        high: 51.22,
        low: 50.4,
        close: 50.62,
        volume: 23692434
      },
      {
        time: new Date(2016, 4, 23),
        open: 50.6,
        high: 50.68,
        low: 49.98,
        close: 50.03,
        volume: 25999674
      },
      {
        time: new Date(2016, 4, 24),
        open: 50.7,
        high: 51.71,
        low: 50.4,
        close: 51.59,
        volume: 34621638
      },
      {
        time: new Date(2016, 4, 25),
        open: 51.92,
        high: 52.49,
        low: 51.79,
        close: 52.12,
        volume: 24040186
      },
      {
        time: new Date(2016, 4, 26),
        open: 51.93,
        high: 51.98,
        low: 51.36,
        close: 51.89,
        volume: 24182929
      },
      {
        time: new Date(2016, 4, 27),
        open: 51.92,
        high: 52.32,
        low: 51.77,
        close: 52.32,
        volume: 17653660
      },
      {
        time: new Date(2016, 4, 31),
        open: 52.26,
        high: 53.0,
        low: 52.08,
        close: 53.0,
        volume: 37653081
      },
      {
        time: new Date(2016, 5, 1),
        open: 52.44,
        high: 52.95,
        low: 52.44,
        close: 52.85,
        volume: 25324828
      },
      {
        time: new Date(2016, 5, 2),
        open: 52.64,
        high: 52.74,
        low: 51.84,
        close: 52.48,
        volume: 22840779
      },
      {
        time: new Date(2016, 5, 3),
        open: 52.38,
        high: 52.42,
        low: 51.6,
        close: 51.79,
        volume: 23368291
      },
      {
        time: new Date(2016, 5, 6),
        open: 51.99,
        high: 52.35,
        low: 51.89,
        close: 52.13,
        volume: 18243271
      },
      {
        time: new Date(2016, 5, 7),
        open: 52.24,
        high: 52.73,
        low: 52.1,
        close: 52.1,
        volume: 20866770
      },
      {
        time: new Date(2016, 5, 8),
        open: 52.02,
        high: 52.44,
        low: 51.87,
        close: 52.04,
        volume: 21149438
      },
      {
        time: new Date(2016, 5, 9),
        open: 52.0,
        high: 52.0,
        low: 51.49,
        close: 51.62,
        volume: 20305664
      },
      {
        time: new Date(2016, 5, 10),
        open: 51.05,
        high: 52.05,
        low: 51.04,
        close: 51.48,
        volume: 25833151
      },
      {
        time: new Date(2016, 5, 13),
        open: 49.58,
        high: 50.72,
        low: 49.06,
        close: 50.14,
        volume: 83217844
      },
      {
        time: new Date(2016, 5, 14),
        open: 49.9,
        high: 50.1,
        low: 49.57,
        close: 49.83,
        volume: 42577106
      },
      {
        time: new Date(2016, 5, 15),
        open: 49.78,
        high: 50.12,
        low: 49.69,
        close: 49.69,
        volume: 33757639
      },
      {
        time: new Date(2016, 5, 16),
        open: 49.52,
        high: 50.47,
        low: 49.51,
        close: 50.39,
        volume: 31188605
      },
      {
        time: new Date(2016, 5, 17),
        open: 50.41,
        high: 50.43,
        low: 49.82,
        close: 50.13,
        volume: 45710516
      },
      {
        time: new Date(2016, 5, 20),
        open: 50.64,
        high: 50.83,
        low: 50.03,
        close: 50.07,
        volume: 35607946
      },
      {
        time: new Date(2016, 5, 21),
        open: 50.2,
        high: 51.43,
        low: 50.16,
        close: 51.19,
        volume: 34097825
      },
      {
        time: new Date(2016, 5, 22),
        open: 51.08,
        high: 51.46,
        low: 50.95,
        close: 50.99,
        volume: 28816848
      },
      {
        time: new Date(2016, 5, 23),
        open: 51.28,
        high: 52.06,
        low: 51.15,
        close: 51.91,
        volume: 29028833
      },
      {
        time: new Date(2016, 5, 24),
        open: 49.81,
        high: 50.94,
        low: 49.52,
        close: 49.83,
        volume: 133502985
      },
      {
        time: new Date(2016, 5, 27),
        open: 49.1,
        high: 49.15,
        low: 48.04,
        close: 48.43,
        volume: 50576699
      },
      {
        time: new Date(2016, 5, 28),
        open: 48.92,
        high: 49.47,
        low: 48.67,
        close: 49.44,
        volume: 38140658
      },
      {
        time: new Date(2016, 5, 29),
        open: 49.91,
        high: 50.72,
        low: 49.8,
        close: 50.54,
        volume: 31304021
      },
      {
        time: new Date(2016, 5, 30),
        open: 50.72,
        high: 51.3,
        low: 50.5,
        close: 51.17,
        volume: 28527781
      },
      {
        time: new Date(2016, 6, 1),
        open: 51.13,
        high: 51.72,
        low: 51.07,
        close: 51.16,
        volume: 21400392
      },
      {
        time: new Date(2016, 6, 5),
        open: 50.83,
        high: 51.28,
        low: 50.74,
        close: 51.17,
        volume: 24806351
      },
      {
        time: new Date(2016, 6, 6),
        open: 50.78,
        high: 51.54,
        low: 50.39,
        close: 51.38,
        volume: 28167461
      },
      {
        time: new Date(2016, 6, 7),
        open: 51.42,
        high: 51.61,
        low: 51.07,
        close: 51.38,
        volume: 19585194
      },
      {
        time: new Date(2016, 6, 8),
        open: 51.73,
        high: 52.36,
        low: 51.55,
        close: 52.3,
        volume: 28391026
      },
      {
        time: new Date(2016, 6, 11),
        open: 52.5,
        high: 52.83,
        low: 52.47,
        close: 52.59,
        volume: 22269203
      },
      {
        time: new Date(2016, 6, 12),
        open: 52.94,
        high: 53.4,
        low: 52.78,
        close: 53.21,
        volume: 27317555
      },
      {
        time: new Date(2016, 6, 13),
        open: 53.56,
        high: 53.86,
        low: 53.18,
        close: 53.51,
        volume: 25356841
      },
      {
        time: new Date(2016, 6, 14),
        open: 53.84,
        high: 53.99,
        low: 53.58,
        close: 53.74,
        volume: 24545520
      },
      {
        time: new Date(2016, 6, 15),
        open: 53.95,
        high: 54.0,
        low: 53.21,
        close: 53.7,
        volume: 32024385
      },
      {
        time: new Date(2016, 6, 18),
        open: 53.7,
        high: 54.34,
        low: 53.55,
        close: 53.96,
        volume: 31433864
      },
      {
        time: new Date(2016, 6, 19),
        open: 53.71,
        high: 53.9,
        low: 52.93,
        close: 53.09,
        volume: 53336533
      },
      {
        time: new Date(2016, 6, 20),
        open: 56.15,
        high: 56.84,
        low: 55.53,
        close: 55.91,
        volume: 89893301
      },
      {
        time: new Date(2016, 6, 21),
        open: 55.98,
        high: 56.23,
        low: 55.76,
        close: 55.8,
        volume: 32776653
      },
      {
        time: new Date(2016, 6, 22),
        open: 56.08,
        high: 56.63,
        low: 55.78,
        close: 56.57,
        volume: 32157167
      },
      {
        time: new Date(2016, 6, 25),
        open: 56.47,
        high: 56.74,
        low: 56.26,
        close: 56.73,
        volume: 25610587
      },
      {
        time: new Date(2016, 6, 26),
        open: 56.52,
        high: 57.29,
        low: 56.51,
        close: 56.76,
        volume: 28078995
      },
      {
        time: new Date(2016, 6, 27),
        open: 56.61,
        high: 56.8,
        low: 56.11,
        close: 56.19,
        volume: 32327477
      },
      {
        time: new Date(2016, 6, 28),
        open: 56.0,
        high: 56.37,
        low: 55.72,
        close: 56.21,
        volume: 37550411
      },
      {
        time: new Date(2016, 6, 29),
        open: 56.26,
        high: 56.76,
        low: 56.05,
        close: 56.68,
        volume: 30558718
      },
      {
        time: new Date(2016, 7, 1),
        open: 56.6,
        high: 56.75,
        low: 56.14,
        close: 56.58,
        volume: 26003419
      },
      {
        time: new Date(2016, 7, 2),
        open: 56.85,
        high: 56.9,
        low: 56.31,
        close: 56.58,
        volume: 35121958
      },
      {
        time: new Date(2016, 7, 3),
        open: 56.68,
        high: 57.11,
        low: 56.49,
        close: 56.97,
        volume: 22075616
      },
      {
        time: new Date(2016, 7, 4),
        open: 56.8,
        high: 57.52,
        low: 56.67,
        close: 57.39,
        volume: 26587749
      },
      {
        time: new Date(2016, 7, 5),
        open: 57.65,
        high: 58.21,
        low: 57.45,
        close: 57.96,
        volume: 29335221
      },
      {
        time: new Date(2016, 7, 8),
        open: 58.06,
        high: 58.08,
        low: 57.78,
        close: 58.06,
        volume: 19473499
      },
      {
        time: new Date(2016, 7, 9),
        open: 58.17,
        high: 58.5,
        low: 58.02,
        close: 58.2,
        volume: 16920721
      },
      {
        time: new Date(2016, 7, 10),
        open: 58.16,
        high: 58.32,
        low: 57.82,
        close: 58.02,
        volume: 15756913
      },
      {
        time: new Date(2016, 7, 11),
        open: 58.03,
        high: 58.45,
        low: 58.03,
        close: 58.3,
        volume: 18162301
      },
      {
        time: new Date(2016, 7, 12),
        open: 58.03,
        high: 58.19,
        low: 57.62,
        close: 57.94,
        volume: 21655161
      },
      {
        time: new Date(2016, 7, 15),
        open: 58.01,
        high: 58.5,
        low: 57.96,
        close: 58.12,
        volume: 19283902
      },
      {
        time: new Date(2016, 7, 16),
        open: 57.61,
        high: 57.62,
        low: 57.27,
        close: 57.44,
        volume: 20523493
      },
      {
        time: new Date(2016, 7, 17),
        open: 57.54,
        high: 57.68,
        low: 57.23,
        close: 57.56,
        volume: 18856423
      },
      {
        time: new Date(2016, 7, 18),
        open: 57.42,
        high: 57.7,
        low: 57.27,
        close: 57.6,
        volume: 14214341
      },
      {
        time: new Date(2016, 7, 19),
        open: 57.43,
        high: 57.73,
        low: 57.2,
        close: 57.62,
        volume: 17271044
      },
      {
        time: new Date(2016, 7, 22),
        open: 57.6,
        high: 57.75,
        low: 57.26,
        close: 57.67,
        volume: 15221922
      },
      {
        time: new Date(2016, 7, 23),
        open: 57.9,
        high: 58.18,
        low: 57.85,
        close: 57.89,
        volume: 18732373
      },
      {
        time: new Date(2016, 7, 24),
        open: 57.8,
        high: 58.04,
        low: 57.72,
        close: 57.95,
        volume: 18151506
      },
      {
        time: new Date(2016, 7, 25),
        open: 57.88,
        high: 58.29,
        low: 57.78,
        close: 58.17,
        volume: 18552579
      },
      {
        time: new Date(2016, 7, 26),
        open: 58.28,
        high: 58.7,
        low: 57.69,
        close: 58.03,
        volume: 20971202
      },
      {
        time: new Date(2016, 7, 29),
        open: 58.18,
        high: 58.6,
        low: 58.1,
        close: 58.1,
        volume: 16417207
      },
      {
        time: new Date(2016, 7, 30),
        open: 57.98,
        high: 58.19,
        low: 57.61,
        close: 57.89,
        volume: 16930185
      },
      {
        time: new Date(2016, 7, 31),
        open: 57.65,
        high: 57.8,
        low: 57.3,
        close: 57.46,
        volume: 20860269
      },
      {
        time: new Date(2016, 8, 1),
        open: 57.01,
        high: 57.82,
        low: 57.01,
        close: 57.59,
        volume: 26075363
      },
      {
        time: new Date(2016, 8, 2),
        open: 57.67,
        high: 58.19,
        low: 57.42,
        close: 57.67,
        volume: 18900489
      },
      {
        time: new Date(2016, 8, 6),
        open: 57.78,
        high: 57.8,
        low: 57.21,
        close: 57.61,
        volume: 16278416
      },
      {
        time: new Date(2016, 8, 7),
        open: 57.47,
        high: 57.84,
        low: 57.4,
        close: 57.66,
        volume: 17493359
      },
      {
        time: new Date(2016, 8, 8),
        open: 57.63,
        high: 57.79,
        low: 57.18,
        close: 57.43,
        volume: 20146083
      },
      {
        time: new Date(2016, 8, 9),
        open: 56.79,
        high: 57.52,
        low: 56.21,
        close: 56.21,
        volume: 35113934
      },
      {
        time: new Date(2016, 8, 12),
        open: 56.0,
        high: 57.2,
        low: 55.61,
        close: 57.05,
        volume: 29302962
      },
      {
        time: new Date(2016, 8, 13),
        open: 56.5,
        high: 56.65,
        low: 56.05,
        close: 56.53,
        volume: 30130213
      },
      {
        time: new Date(2016, 8, 14),
        open: 56.39,
        high: 56.63,
        low: 56.03,
        close: 56.26,
        volume: 24274273
      },
      {
        time: new Date(2016, 8, 15),
        open: 56.15,
        high: 57.35,
        low: 55.98,
        close: 57.19,
        volume: 27062614
      },
      {
        time: new Date(2016, 8, 16),
        open: 57.63,
        high: 57.63,
        low: 56.75,
        close: 57.25,
        volume: 44606965
      },
      {
        time: new Date(2016, 8, 19),
        open: 57.27,
        high: 57.75,
        low: 56.85,
        close: 56.93,
        volume: 20937104
      },
      {
        time: new Date(2016, 8, 20),
        open: 57.35,
        high: 57.35,
        low: 56.75,
        close: 56.81,
        volume: 17383982
      },
      {
        time: new Date(2016, 8, 21),
        open: 57.51,
        high: 57.85,
        low: 57.08,
        close: 57.76,
        volume: 33707272
      },
      {
        time: new Date(2016, 8, 22),
        open: 57.92,
        high: 58.0,
        low: 57.63,
        close: 57.82,
        volume: 19822203
      },
      {
        time: new Date(2016, 8, 23),
        open: 57.87,
        high: 57.91,
        low: 57.38,
        close: 57.43,
        volume: 19955336
      },
      {
        time: new Date(2016, 8, 26),
        open: 57.08,
        high: 57.14,
        low: 56.83,
        close: 56.9,
        volume: 21688720
      },
      {
        time: new Date(2016, 8, 27),
        open: 56.93,
        high: 58.06,
        low: 56.68,
        close: 57.95,
        volume: 28065071
      },
      {
        time: new Date(2016, 8, 28),
        open: 57.88,
        high: 58.06,
        low: 57.67,
        close: 58.03,
        volume: 20536400
      },
      {
        time: new Date(2016, 8, 29),
        open: 57.81,
        high: 58.17,
        low: 57.21,
        close: 57.4,
        volume: 25463536
      },
      {
        time: new Date(2016, 8, 30),
        open: 57.57,
        high: 57.77,
        low: 57.34,
        close: 57.6,
        volume: 29910788
      },
      {
        time: new Date(2016, 9, 3),
        open: 57.4,
        high: 57.55,
        low: 57.06,
        close: 57.42,
        volume: 19189515
      },
      {
        time: new Date(2016, 9, 4),
        open: 57.27,
        high: 57.6,
        low: 56.97,
        close: 57.24,
        volume: 20085874
      },
      {
        time: new Date(2016, 9, 5),
        open: 57.29,
        high: 57.96,
        low: 57.26,
        close: 57.64,
        volume: 16726411
      },
      {
        time: new Date(2016, 9, 6),
        open: 57.74,
        high: 57.86,
        low: 57.28,
        close: 57.74,
        volume: 16212611
      },
      {
        time: new Date(2016, 9, 7),
        open: 57.85,
        high: 57.98,
        low: 57.42,
        close: 57.8,
        volume: 20089020
      },
      {
        time: new Date(2016, 9, 10),
        open: 57.91,
        high: 58.39,
        low: 57.87,
        close: 58.04,
        volume: 18196509
      },
      {
        time: new Date(2016, 9, 11),
        open: 57.89,
        high: 58.02,
        low: 56.89,
        close: 57.19,
        volume: 26497418
      },
      {
        time: new Date(2016, 9, 12),
        open: 57.11,
        high: 57.27,
        low: 56.4,
        close: 57.11,
        volume: 22177464
      },
      {
        time: new Date(2016, 9, 13),
        open: 56.7,
        high: 57.3,
        low: 56.32,
        close: 56.92,
        volume: 25313748
      },
      {
        time: new Date(2016, 9, 14),
        open: 57.12,
        high: 57.74,
        low: 57.12,
        close: 57.42,
        volume: 27402451
      },
      {
        time: new Date(2016, 9, 17),
        open: 57.36,
        high: 57.46,
        low: 56.87,
        close: 57.22,
        volume: 23830014
      },
      {
        time: new Date(2016, 9, 18),
        open: 57.53,
        high: 57.94,
        low: 57.41,
        close: 57.66,
        volume: 19149538
      },
      {
        time: new Date(2016, 9, 19),
        open: 57.47,
        high: 57.84,
        low: 57.4,
        close: 57.53,
        volume: 22878397
      },
      {
        time: new Date(2016, 9, 20),
        open: 57.5,
        high: 57.52,
        low: 56.66,
        close: 57.25,
        volume: 49455612
      },
      {
        time: new Date(2016, 9, 21),
        open: 60.28,
        high: 60.45,
        low: 59.48,
        close: 59.66,
        volume: 80032206
      },
      {
        time: new Date(2016, 9, 24),
        open: 59.94,
        high: 61.0,
        low: 59.93,
        close: 61.0,
        volume: 54066978
      },
      {
        time: new Date(2016, 9, 25),
        open: 60.85,
        high: 61.37,
        low: 60.8,
        close: 60.99,
        volume: 35137164
      },
      {
        time: new Date(2016, 9, 26),
        open: 60.81,
        high: 61.2,
        low: 60.47,
        close: 60.63,
        volume: 29911608
      },
      {
        time: new Date(2016, 9, 27),
        open: 60.61,
        high: 60.83,
        low: 60.09,
        close: 60.1,
        volume: 28479856
      },
      {
        time: new Date(2016, 9, 28),
        open: 60.01,
        high: 60.52,
        low: 59.58,
        close: 59.87,
        volume: 33574684
      },
      {
        time: new Date(2016, 9, 31),
        open: 60.16,
        high: 60.42,
        low: 59.92,
        close: 59.92,
        volume: 26434697
      },
      {
        time: new Date(2016, 10, 1),
        open: 59.97,
        high: 60.02,
        low: 59.25,
        close: 59.8,
        volume: 24532986
      },
      {
        time: new Date(2016, 10, 2),
        open: 59.82,
        high: 59.93,
        low: 59.3,
        close: 59.43,
        volume: 22147005
      },
      {
        time: new Date(2016, 10, 3),
        open: 59.53,
        high: 59.64,
        low: 59.11,
        close: 59.21,
        volume: 21600427
      },
      {
        time: new Date(2016, 10, 4),
        open: 58.65,
        high: 59.28,
        low: 58.52,
        close: 58.71,
        volume: 28697016
      },
      {
        time: new Date(2016, 10, 7),
        open: 59.78,
        high: 60.52,
        low: 59.78,
        close: 60.42,
        volume: 31664798
      },
      {
        time: new Date(2016, 10, 8),
        open: 60.55,
        high: 60.78,
        low: 60.15,
        close: 60.47,
        volume: 22935355
      },
      {
        time: new Date(2016, 10, 9),
        open: 60.0,
        high: 60.59,
        low: 59.2,
        close: 60.17,
        volume: 49632479
      },
      {
        time: new Date(2016, 10, 10),
        open: 60.48,
        high: 60.49,
        low: 57.63,
        close: 58.7,
        volume: 57822394
      },
      {
        time: new Date(2016, 10, 11),
        open: 58.23,
        high: 59.12,
        low: 58.01,
        close: 59.02,
        volume: 38767843
      },
      {
        time: new Date(2016, 10, 14),
        open: 59.02,
        high: 59.08,
        low: 57.28,
        close: 58.12,
        volume: 41328422
      },
      {
        time: new Date(2016, 10, 15),
        open: 58.33,
        high: 59.49,
        low: 58.32,
        close: 58.87,
        volume: 35904126
      },
      {
        time: new Date(2016, 10, 16),
        open: 58.94,
        high: 59.66,
        low: 58.81,
        close: 59.65,
        volume: 27332475
      },
      {
        time: new Date(2016, 10, 17),
        open: 60.41,
        high: 60.95,
        low: 59.96,
        close: 60.64,
        volume: 31463728
      },
      {
        time: new Date(2016, 10, 18),
        open: 60.78,
        high: 61.14,
        low: 60.3,
        close: 60.35,
        volume: 27686311
      },
      {
        time: new Date(2016, 10, 21),
        open: 60.5,
        high: 60.97,
        low: 60.42,
        close: 60.86,
        volume: 19652595
      },
      {
        time: new Date(2016, 10, 22),
        open: 60.98,
        high: 61.26,
        low: 60.8,
        close: 61.12,
        volume: 23206700
      },
      {
        time: new Date(2016, 10, 23),
        open: 61.01,
        high: 61.1,
        low: 60.25,
        close: 60.4,
        volume: 21848913
      },
      {
        time: new Date(2016, 10, 25),
        open: 60.3,
        high: 60.53,
        low: 60.13,
        close: 60.53,
        volume: 8409616
      },
      {
        time: new Date(2016, 10, 28),
        open: 60.34,
        high: 61.02,
        low: 60.21,
        close: 60.61,
        volume: 20732619
      },
      {
        time: new Date(2016, 10, 29),
        open: 60.65,
        high: 61.41,
        low: 60.52,
        close: 61.09,
        volume: 22366721
      },
      {
        time: new Date(2016, 10, 30),
        open: 60.86,
        high: 61.18,
        low: 60.22,
        close: 60.26,
        volume: 34655435
      },
      {
        time: new Date(2016, 11, 1),
        open: 60.11,
        high: 60.15,
        low: 58.94,
        close: 59.2,
        volume: 34542121
      },
      {
        time: new Date(2016, 11, 2),
        open: 59.08,
        high: 59.47,
        low: 58.8,
        close: 59.25,
        volume: 25515665
      },
      {
        time: new Date(2016, 11, 5),
        open: 59.7,
        high: 60.58,
        low: 59.56,
        close: 60.22,
        volume: 23552658
      },
      {
        time: new Date(2016, 11, 6),
        open: 60.43,
        high: 60.46,
        low: 59.8,
        close: 59.95,
        volume: 19907035
      },
      {
        time: new Date(2016, 11, 7),
        open: 60.01,
        high: 61.38,
        low: 59.8,
        close: 61.37,
        volume: 30808969
      },
      {
        time: new Date(2016, 11, 8),
        open: 61.3,
        high: 61.58,
        low: 60.84,
        close: 61.01,
        volume: 21220753
      },
      {
        time: new Date(2016, 11, 9),
        open: 61.18,
        high: 61.99,
        low: 61.12,
        close: 61.97,
        volume: 27349356
      },
      {
        time: new Date(2016, 11, 12),
        open: 61.82,
        high: 62.3,
        low: 61.72,
        close: 62.17,
        volume: 20198081
      },
      {
        time: new Date(2016, 11, 13),
        open: 62.5,
        high: 63.42,
        low: 62.24,
        close: 62.98,
        volume: 35718868
      },
      {
        time: new Date(2016, 11, 14),
        open: 63.0,
        high: 63.45,
        low: 62.53,
        close: 62.68,
        volume: 30352654
      },
      {
        time: new Date(2016, 11, 15),
        open: 62.7,
        high: 63.15,
        low: 62.3,
        close: 62.58,
        volume: 27669868
      },
      {
        time: new Date(2016, 11, 16),
        open: 62.95,
        high: 62.95,
        low: 62.12,
        close: 62.3,
        volume: 42453083
      },
      {
        time: new Date(2016, 11, 19),
        open: 62.56,
        high: 63.77,
        low: 62.42,
        close: 63.62,
        volume: 34338219
      },
      {
        time: new Date(2016, 11, 20),
        open: 63.69,
        high: 63.8,
        low: 63.02,
        close: 63.54,
        volume: 26028379
      },
      {
        time: new Date(2016, 11, 21),
        open: 63.43,
        high: 63.7,
        low: 63.12,
        close: 63.54,
        volume: 17096304
      },
      {
        time: new Date(2016, 11, 22),
        open: 63.84,
        high: 64.1,
        low: 63.4,
        close: 63.55,
        volume: 22176585
      },
      {
        time: new Date(2016, 11, 23),
        open: 63.45,
        high: 63.54,
        low: 62.8,
        close: 63.24,
        volume: 12403819
      },
      {
        time: new Date(2016, 11, 27),
        open: 63.21,
        high: 64.07,
        low: 63.21,
        close: 63.28,
        volume: 11763173
      },
      {
        time: new Date(2016, 11, 28),
        open: 63.4,
        high: 63.4,
        low: 62.83,
        close: 62.99,
        volume: 14653348
      },
      {
        time: new Date(2016, 11, 29),
        open: 62.86,
        high: 63.2,
        low: 62.73,
        close: 62.9,
        volume: 10250582
      },
      {
        time: new Date(2016, 11, 30),
        open: 62.96,
        high: 62.99,
        low: 62.03,
        close: 62.14,
        volume: 25579908
      },
      {
        time: new Date(2017, 0, 3),
        open: 62.79,
        high: 62.84,
        low: 62.12,
        close: 62.58,
        volume: 20694101
      },
      {
        time: new Date(2017, 0, 4),
        open: 62.48,
        high: 62.75,
        low: 62.12,
        close: 62.3,
        volume: 21339969
      },
      {
        time: new Date(2017, 0, 5),
        open: 62.19,
        high: 62.66,
        low: 62.03,
        close: 62.3,
        volume: 24875968
      },
      {
        time: new Date(2017, 0, 6),
        open: 62.3,
        high: 63.15,
        low: 62.04,
        close: 62.84,
        volume: 19922919
      },
      {
        time: new Date(2017, 0, 9),
        open: 62.76,
        high: 63.08,
        low: 62.54,
        close: 62.64,
        volume: 20382730
      },
      {
        time: new Date(2017, 0, 10),
        open: 62.73,
        high: 63.07,
        low: 62.28,
        close: 62.62,
        volume: 18593004
      },
      {
        time: new Date(2017, 0, 11),
        open: 62.61,
        high: 63.23,
        low: 62.43,
        close: 63.19,
        volume: 21517335
      },
      {
        time: new Date(2017, 0, 12),
        open: 63.06,
        high: 63.4,
        low: 61.95,
        close: 62.61,
        volume: 20968223
      },
      {
        time: new Date(2017, 0, 13),
        open: 62.62,
        high: 62.86,
        low: 62.35,
        close: 62.7,
        volume: 19422310
      },
      {
        time: new Date(2017, 0, 17),
        open: 62.68,
        high: 62.7,
        low: 62.03,
        close: 62.53,
        volume: 20663983
      },
      {
        time: new Date(2017, 0, 18),
        open: 62.67,
        high: 62.7,
        low: 62.12,
        close: 62.5,
        volume: 19670102
      },
      {
        time: new Date(2017, 0, 19),
        open: 62.24,
        high: 62.98,
        low: 62.2,
        close: 62.3,
        volume: 18451655
      },
      {
        time: new Date(2017, 0, 20),
        open: 62.67,
        high: 62.82,
        low: 62.37,
        close: 62.74,
        volume: 30213462
      },
      {
        time: new Date(2017, 0, 23),
        open: 62.7,
        high: 63.12,
        low: 62.57,
        close: 62.96,
        volume: 23097581
      },
      {
        time: new Date(2017, 0, 24),
        open: 63.2,
        high: 63.74,
        low: 62.94,
        close: 63.52,
        volume: 24672940
      },
      {
        time: new Date(2017, 0, 25),
        open: 63.95,
        high: 64.1,
        low: 63.45,
        close: 63.68,
        volume: 24654933
      },
      {
        time: new Date(2017, 0, 26),
        open: 64.12,
        high: 64.54,
        low: 63.55,
        close: 64.27,
        volume: 43554645
      },
      {
        time: new Date(2017, 0, 27),
        open: 65.39,
        high: 65.91,
        low: 64.89,
        close: 65.78,
        volume: 44817972
      },
      {
        time: new Date(2017, 0, 30),
        open: 65.69,
        high: 65.79,
        low: 64.8,
        close: 65.13,
        volume: 31651445
      },
      {
        time: new Date(2017, 0, 31),
        open: 64.86,
        high: 65.15,
        low: 64.26,
        close: 64.65,
        volume: 25270549
      },
      {
        time: new Date(2017, 1, 1),
        open: 64.36,
        high: 64.62,
        low: 63.47,
        close: 63.58,
        volume: 39671528
      },
      {
        time: new Date(2017, 1, 2),
        open: 63.25,
        high: 63.41,
        low: 62.75,
        close: 63.17,
        volume: 45827013
      },
      {
        time: new Date(2017, 1, 3),
        open: 63.5,
        high: 63.7,
        low: 63.07,
        close: 63.68,
        volume: 30301759
      },
      {
        time: new Date(2017, 1, 6),
        open: 63.5,
        high: 63.65,
        low: 63.14,
        close: 63.64,
        volume: 19796360
      },
      {
        time: new Date(2017, 1, 7),
        open: 63.74,
        high: 63.78,
        low: 63.23,
        close: 63.43,
        volume: 20277226
      },
      {
        time: new Date(2017, 1, 8),
        open: 63.57,
        high: 63.81,
        low: 63.22,
        close: 63.34,
        volume: 18096358
      },
      {
        time: new Date(2017, 1, 9),
        open: 63.52,
        high: 64.44,
        low: 63.32,
        close: 64.06,
        volume: 22644443
      },
      {
        time: new Date(2017, 1, 10),
        open: 64.25,
        high: 64.3,
        low: 63.98,
        close: 64.0,
        volume: 18170729
      },
      {
        time: new Date(2017, 1, 13),
        open: 64.24,
        high: 64.86,
        low: 64.13,
        close: 64.72,
        volume: 22920101
      },
      {
        time: new Date(2017, 1, 14),
        open: 64.41,
        high: 64.72,
        low: 64.02,
        close: 64.57,
        volume: 23108426
      },
      {
        time: new Date(2017, 1, 15),
        open: 64.5,
        high: 64.57,
        low: 64.16,
        close: 64.53,
        volume: 17005157
      },
      {
        time: new Date(2017, 1, 16),
        open: 64.74,
        high: 65.24,
        low: 64.44,
        close: 64.52,
        volume: 20546345
      },
      {
        time: new Date(2017, 1, 17),
        open: 64.47,
        high: 64.69,
        low: 64.3,
        close: 64.62,
        volume: 21248818
      },
      {
        time: new Date(2017, 1, 21),
        open: 64.61,
        high: 64.95,
        low: 64.45,
        close: 64.49,
        volume: 20655869
      },
      {
        time: new Date(2017, 1, 22),
        open: 64.33,
        high: 64.39,
        low: 64.05,
        close: 64.36,
        volume: 19292651
      },
      {
        time: new Date(2017, 1, 23),
        open: 64.42,
        high: 64.73,
        low: 64.2,
        close: 64.62,
        volume: 20273128
      },
      {
        time: new Date(2017, 1, 24),
        open: 64.53,
        high: 64.8,
        low: 64.14,
        close: 64.62,
        volume: 21796800
      },
      {
        time: new Date(2017, 1, 27),
        open: 64.54,
        high: 64.54,
        low: 64.04,
        close: 64.23,
        volume: 15871507
      },
      {
        time: new Date(2017, 1, 28),
        open: 64.08,
        high: 64.2,
        low: 63.76,
        close: 63.98,
        volume: 23239825
      },
      {
        time: new Date(2017, 2, 1),
        open: 64.13,
        high: 64.99,
        low: 64.02,
        close: 64.94,
        volume: 26937459
      },
      {
        time: new Date(2017, 2, 2),
        open: 64.69,
        high: 64.75,
        low: 63.88,
        close: 64.01,
        volume: 24539597
      },
      {
        time: new Date(2017, 2, 3),
        open: 63.99,
        high: 64.28,
        low: 63.62,
        close: 64.25,
        volume: 18139405
      },
      {
        time: new Date(2017, 2, 6),
        open: 63.97,
        high: 64.56,
        low: 63.81,
        close: 64.27,
        volume: 18750255
      },
      {
        time: new Date(2017, 2, 7),
        open: 64.19,
        high: 64.78,
        low: 64.19,
        close: 64.4,
        volume: 18520987
      },
      {
        time: new Date(2017, 2, 8),
        open: 64.26,
        high: 65.08,
        low: 64.25,
        close: 64.99,
        volume: 21510907
      },
      {
        time: new Date(2017, 2, 9),
        open: 65.19,
        high: 65.2,
        low: 64.48,
        close: 64.73,
        volume: 19846832
      },
      {
        time: new Date(2017, 2, 10),
        open: 65.11,
        high: 65.26,
        low: 64.75,
        close: 64.93,
        volume: 19538245
      },
      {
        time: new Date(2017, 2, 13),
        open: 65.01,
        high: 65.2,
        low: 64.57,
        close: 64.71,
        volume: 20100035
      },
      {
        time: new Date(2017, 2, 14),
        open: 64.53,
        high: 64.55,
        low: 64.15,
        close: 64.41,
        volume: 14280202
      },
      {
        time: new Date(2017, 2, 15),
        open: 64.55,
        high: 64.92,
        low: 64.25,
        close: 64.75,
        volume: 24833810
      },
      {
        time: new Date(2017, 2, 16),
        open: 64.75,
        high: 64.76,
        low: 64.3,
        close: 64.64,
        volume: 20674296
      },
      {
        time: new Date(2017, 2, 17),
        open: 64.91,
        high: 65.24,
        low: 64.68,
        close: 64.87,
        volume: 49219686
      },
      {
        time: new Date(2017, 2, 20),
        open: 64.91,
        high: 65.18,
        low: 64.72,
        close: 64.93,
        volume: 14598083
      },
      {
        time: new Date(2017, 2, 21),
        open: 65.19,
        high: 65.5,
        low: 64.13,
        close: 64.21,
        volume: 26640480
      },
      {
        time: new Date(2017, 2, 22),
        open: 64.12,
        high: 65.14,
        low: 64.12,
        close: 65.03,
        volume: 20680015
      },
      {
        time: new Date(2017, 2, 23),
        open: 64.94,
        high: 65.24,
        low: 64.76,
        close: 64.87,
        volume: 19269203
      },
      {
        time: new Date(2017, 2, 24),
        open: 65.36,
        high: 65.45,
        low: 64.76,
        close: 64.98,
        volume: 22617105
      },
      {
        time: new Date(2017, 2, 27),
        open: 64.63,
        high: 65.22,
        low: 64.35,
        close: 65.1,
        volume: 18614662
      },
      {
        time: new Date(2017, 2, 28),
        open: 64.96,
        high: 65.47,
        low: 64.65,
        close: 65.29,
        volume: 20080358
      },
      {
        time: new Date(2017, 2, 29),
        open: 65.12,
        high: 65.5,
        low: 64.95,
        close: 65.47,
        volume: 13618424
      },
      {
        time: new Date(2017, 2, 30),
        open: 65.42,
        high: 65.98,
        low: 65.36,
        close: 65.71,
        volume: 15122823
      },
      {
        time: new Date(2017, 2, 31),
        open: 65.65,
        high: 66.19,
        low: 65.45,
        close: 65.86,
        volume: 21040331
      },
      {
        time: new Date(2017, 3, 3),
        open: 65.81,
        high: 65.94,
        low: 65.19,
        close: 65.55,
        volume: 20400871
      },
      {
        time: new Date(2017, 3, 4),
        open: 65.39,
        high: 65.81,
        low: 65.28,
        close: 65.73,
        volume: 12997449
      },
      {
        time: new Date(2017, 3, 5),
        open: 66.3,
        high: 66.35,
        low: 65.44,
        close: 65.56,
        volume: 21448594
      },
      {
        time: new Date(2017, 3, 6),
        open: 65.6,
        high: 66.06,
        low: 65.48,
        close: 65.73,
        volume: 18103453
      },
      {
        time: new Date(2017, 3, 7),
        open: 65.85,
        high: 65.96,
        low: 65.44,
        close: 65.68,
        volume: 14108533
      },
      {
        time: new Date(2017, 3, 10),
        open: 65.61,
        high: 65.82,
        low: 65.36,
        close: 65.53,
        volume: 17952742
      },
      {
        time: new Date(2017, 3, 11),
        open: 65.6,
        high: 65.61,
        low: 64.85,
        close: 65.48,
        volume: 18791533
      },
      {
        time: new Date(2017, 3, 12),
        open: 65.42,
        high: 65.51,
        low: 65.11,
        close: 65.23,
        volume: 17108513
      },
      {
        time: new Date(2017, 3, 13),
        open: 65.29,
        high: 65.86,
        low: 64.95,
        close: 64.95,
        volume: 17896483
      },
      {
        time: new Date(2017, 3, 17),
        open: 65.04,
        high: 65.49,
        low: 65.01,
        close: 65.48,
        volume: 16689265
      },
      {
        time: new Date(2017, 3, 18),
        open: 65.33,
        high: 65.71,
        low: 65.16,
        close: 65.39,
        volume: 15155611
      },
      {
        time: new Date(2017, 3, 19),
        open: 65.65,
        high: 65.75,
        low: 64.89,
        close: 65.04,
        volume: 26992771
      },
      {
        time: new Date(2017, 3, 20),
        open: 65.46,
        high: 65.75,
        low: 65.14,
        close: 65.5,
        volume: 22299477
      },
      {
        time: new Date(2017, 3, 21),
        open: 65.67,
        high: 66.7,
        low: 65.45,
        close: 66.4,
        volume: 32522645
      },
      {
        time: new Date(2017, 3, 24),
        open: 67.48,
        high: 67.66,
        low: 67.1,
        close: 67.53,
        volume: 29769976
      },
      {
        time: new Date(2017, 3, 25),
        open: 67.9,
        high: 68.04,
        low: 67.6,
        close: 67.92,
        volume: 30242730
      },
      {
        time: new Date(2017, 3, 26),
        open: 68.08,
        high: 68.31,
        low: 67.62,
        close: 67.83,
        volume: 26190770
      },
      {
        time: new Date(2017, 3, 27),
        open: 68.15,
        high: 68.38,
        low: 67.58,
        close: 68.27,
        volume: 34970953
      },
      {
        time: new Date(2017, 3, 28),
        open: 68.91,
        high: 69.14,
        low: 67.69,
        close: 68.46,
        volume: 39548818
      },
      {
        time: new Date(2017, 4, 1),
        open: 68.68,
        high: 69.55,
        low: 68.5,
        close: 69.41,
        volume: 31954362
      },
      {
        time: new Date(2017, 4, 2),
        open: 69.71,
        high: 69.71,
        low: 69.13,
        close: 69.3,
        volume: 23906119
      },
      {
        time: new Date(2017, 4, 3),
        open: 69.38,
        high: 69.38,
        low: 68.71,
        close: 69.08,
        volume: 28927973
      },
      {
        time: new Date(2017, 4, 4),
        open: 69.03,
        high: 69.08,
        low: 68.64,
        close: 68.81,
        volume: 21749409
      },
      {
        time: new Date(2017, 4, 5),
        open: 68.9,
        high: 69.03,
        low: 68.48,
        close: 69.0,
        volume: 19128782
      },
      {
        time: new Date(2017, 4, 8),
        open: 68.97,
        high: 69.05,
        low: 68.42,
        close: 68.94,
        volume: 18566087
      },
      {
        time: new Date(2017, 4, 9),
        open: 68.86,
        high: 69.28,
        low: 68.68,
        close: 69.04,
        volume: 22858414
      },
      {
        time: new Date(2017, 4, 10),
        open: 68.99,
        high: 69.56,
        low: 68.92,
        close: 69.31,
        volume: 17977830
      },
      {
        time: new Date(2017, 4, 11),
        open: 68.36,
        high: 68.73,
        low: 68.12,
        close: 68.46,
        volume: 28789413
      },
      {
        time: new Date(2017, 4, 12),
        open: 68.61,
        high: 68.61,
        low: 68.04,
        close: 68.38,
        volume: 18714123
      },
      {
        time: new Date(2017, 4, 15),
        open: 68.14,
        high: 68.48,
        low: 67.57,
        close: 68.43,
        volume: 31530301
      },
      {
        time: new Date(2017, 4, 16),
        open: 68.23,
        high: 69.44,
        low: 68.16,
        close: 69.41,
        volume: 34956038
      },
      {
        time: new Date(2017, 4, 17),
        open: 68.89,
        high: 69.1,
        low: 67.43,
        close: 67.48,
        volume: 30548781
      },
      {
        time: new Date(2017, 4, 18),
        open: 67.4,
        high: 68.13,
        low: 67.14,
        close: 67.71,
        volume: 25201274
      },
      {
        time: new Date(2017, 4, 19),
        open: 67.5,
        high: 68.1,
        low: 67.43,
        close: 67.69,
        volume: 26961119
      },
      {
        time: new Date(2017, 4, 22),
        open: 67.89,
        high: 68.5,
        low: 67.5,
        close: 68.45,
        volume: 16237550
      },
      {
        time: new Date(2017, 4, 23),
        open: 68.72,
        high: 68.75,
        low: 68.38,
        close: 68.68,
        volume: 15425824
      },
      {
        time: new Date(2017, 4, 24),
        open: 68.87,
        high: 68.88,
        low: 68.45,
        close: 68.77,
        volume: 14666865
      },
      {
        time: new Date(2017, 4, 25),
        open: 68.97,
        high: 69.88,
        low: 68.91,
        close: 69.62,
        volume: 21854095
      },
      {
        time: new Date(2017, 4, 26),
        open: 69.8,
        high: 70.22,
        low: 69.52,
        close: 69.96,
        volume: 19827923
      },
      {
        time: new Date(2017, 4, 30),
        open: 69.79,
        high: 70.41,
        low: 69.77,
        close: 70.41,
        volume: 17072838
      },
      {
        time: new Date(2017, 4, 31),
        open: 70.53,
        high: 70.74,
        low: 69.81,
        close: 69.84,
        volume: 30436364
      },
      {
        time: new Date(2017, 5, 1),
        open: 70.24,
        high: 70.61,
        low: 69.45,
        close: 70.1,
        volume: 21603601
      },
      {
        time: new Date(2017, 5, 2),
        open: 70.44,
        high: 71.86,
        low: 70.24,
        close: 71.76,
        volume: 34770261
      },
      {
        time: new Date(2017, 5, 5),
        open: 71.97,
        high: 72.89,
        low: 71.81,
        close: 72.28,
        volume: 33316760
      },
      {
        time: new Date(2017, 5, 6),
        open: 72.3,
        high: 72.62,
        low: 72.27,
        close: 72.52,
        volume: 31511065
      },
      {
        time: new Date(2017, 5, 7),
        open: 72.64,
        high: 72.77,
        low: 71.95,
        close: 72.39,
        volume: 22301765
      },
      {
        time: new Date(2017, 5, 8),
        open: 72.51,
        high: 72.52,
        low: 71.5,
        close: 71.95,
        volume: 24588270
      },
      {
        time: new Date(2017, 5, 9),
        open: 72.04,
        high: 72.08,
        low: 68.59,
        close: 70.32,
        volume: 49187396
      },
      {
        time: new Date(2017, 5, 12),
        open: 69.25,
        high: 69.94,
        low: 68.13,
        close: 69.78,
        volume: 47761743
      },
      {
        time: new Date(2017, 5, 13),
        open: 70.02,
        high: 70.82,
        low: 69.96,
        close: 70.65,
        volume: 25258614
      },
      {
        time: new Date(2017, 5, 14),
        open: 70.91,
        high: 71.1,
        low: 69.43,
        close: 70.27,
        volume: 25510685
      },
      {
        time: new Date(2017, 5, 15),
        open: 69.27,
        high: 70.21,
        low: 68.8,
        close: 69.9,
        volume: 26068709
      },
      {
        time: new Date(2017, 5, 16),
        open: 69.73,
        high: 70.03,
        low: 69.22,
        close: 70.0,
        volume: 48345085
      },
      {
        time: new Date(2017, 5, 19),
        open: 70.5,
        high: 70.94,
        low: 70.35,
        close: 70.87,
        volume: 23798268
      },
      {
        time: new Date(2017, 5, 20),
        open: 70.82,
        high: 70.87,
        low: 69.87,
        close: 69.91,
        volume: 21512231
      },
      {
        time: new Date(2017, 5, 21),
        open: 70.21,
        high: 70.62,
        low: 69.94,
        close: 70.27,
        volume: 19891051
      },
      {
        time: new Date(2017, 5, 22),
        open: 70.54,
        high: 70.59,
        low: 69.71,
        close: 70.26,
        volume: 22965738
      },
      {
        time: new Date(2017, 5, 23),
        open: 70.09,
        high: 71.25,
        low: 69.92,
        close: 71.21,
        volume: 27617291
      },
      {
        time: new Date(2017, 5, 26),
        open: 71.4,
        high: 71.71,
        low: 70.44,
        close: 70.53,
        volume: 19606974
      },
      {
        time: new Date(2017, 5, 27),
        open: 70.11,
        high: 70.18,
        low: 69.18,
        close: 69.21,
        volume: 25215128
      },
      {
        time: new Date(2017, 5, 28),
        open: 69.21,
        high: 69.84,
        low: 68.79,
        close: 69.8,
        volume: 25806200
      },
      {
        time: new Date(2017, 5, 29),
        open: 69.38,
        high: 69.49,
        low: 68.09,
        close: 68.49,
        volume: 28918715
      },
      {
        time: new Date(2017, 5, 30),
        open: 68.78,
        high: 69.38,
        low: 68.74,
        close: 68.93,
        volume: 24161068
      },
      {
        time: new Date(2017, 6, 3),
        open: 69.33,
        high: 69.6,
        low: 68.02,
        close: 68.17,
        volume: 16165538
      },
      {
        time: new Date(2017, 6, 5),
        open: 68.26,
        high: 69.44,
        low: 68.22,
        close: 69.08,
        volume: 21176272
      },
      {
        time: new Date(2017, 6, 6),
        open: 68.27,
        high: 68.78,
        low: 68.12,
        close: 68.57,
        volume: 21117572
      },
      {
        time: new Date(2017, 6, 7),
        open: 68.7,
        high: 69.84,
        low: 68.7,
        close: 69.46,
        volume: 16878317
      },
      {
        time: new Date(2017, 6, 10),
        open: 69.46,
        high: 70.25,
        low: 69.2,
        close: 69.98,
        volume: 15014503
      },
      {
        time: new Date(2017, 6, 11),
        open: 70.11,
        high: 70.68,
        low: 69.75,
        close: 69.99,
        volume: 17460022
      },
      {
        time: new Date(2017, 6, 12),
        open: 70.69,
        high: 71.28,
        low: 70.55,
        close: 71.15,
        volume: 17750925
      },
      {
        time: new Date(2017, 6, 13),
        open: 71.5,
        high: 72.04,
        low: 71.31,
        close: 71.77,
        volume: 20269816
      },
      {
        time: new Date(2017, 6, 14),
        open: 72.24,
        high: 73.27,
        low: 71.96,
        close: 72.78,
        volume: 25868086
      },
      {
        time: new Date(2017, 6, 17),
        open: 72.8,
        high: 73.45,
        low: 72.72,
        close: 73.35,
        volume: 21803907
      },
      {
        time: new Date(2017, 6, 18),
        open: 73.09,
        high: 73.39,
        low: 72.66,
        close: 73.3,
        volume: 26435296
      },
      {
        time: new Date(2017, 6, 19),
        open: 73.5,
        high: 74.04,
        low: 73.45,
        close: 73.86,
        volume: 22416222
      },
      {
        time: new Date(2017, 6, 20),
        open: 74.18,
        high: 74.3,
        low: 73.28,
        close: 74.22,
        volume: 42361025
      },
      {
        time: new Date(2017, 6, 21),
        open: 73.45,
        high: 74.29,
        low: 73.17,
        close: 73.79,
        volume: 46717082
      },
      {
        time: new Date(2017, 6, 24),
        open: 73.53,
        high: 73.75,
        low: 73.13,
        close: 73.6,
        volume: 21394826
      },
      {
        time: new Date(2017, 6, 25),
        open: 73.8,
        high: 74.31,
        low: 73.5,
        close: 74.19,
        volume: 22018681
      },
      {
        time: new Date(2017, 6, 26),
        open: 74.34,
        high: 74.38,
        low: 73.81,
        close: 74.05,
        volume: 16252233
      },
      {
        time: new Date(2017, 6, 27),
        open: 73.76,
        high: 74.42,
        low: 72.32,
        close: 73.16,
        volume: 36844220
      },
      {
        time: new Date(2017, 6, 28),
        open: 72.67,
        high: 73.31,
        low: 72.54,
        close: 73.04,
        volume: 18306680
      },
      {
        time: new Date(2017, 6, 31),
        open: 73.3,
        high: 73.44,
        low: 72.41,
        close: 72.7,
        volume: 23600054
      },
      {
        time: new Date(2017, 7, 1),
        open: 73.1,
        high: 73.42,
        low: 72.49,
        close: 72.58,
        volume: 20823890
      },
      {
        time: new Date(2017, 7, 2),
        open: 72.55,
        high: 72.56,
        low: 71.44,
        close: 72.26,
        volume: 26499158
      },
      {
        time: new Date(2017, 7, 3),
        open: 72.19,
        high: 72.44,
        low: 71.84,
        close: 72.15,
        volume: 18214424
      },
      {
        time: new Date(2017, 7, 4),
        open: 72.4,
        high: 73.04,
        low: 72.24,
        close: 72.68,
        volume: 22578952
      },
      {
        time: new Date(2017, 7, 7),
        open: 72.8,
        high: 72.9,
        low: 72.26,
        close: 72.4,
        volume: 18705681
      },
      {
        time: new Date(2017, 7, 8),
        open: 72.09,
        high: 73.13,
        low: 71.75,
        close: 72.79,
        volume: 22044587
      },
      {
        time: new Date(2017, 7, 9),
        open: 72.25,
        high: 72.51,
        low: 72.05,
        close: 72.47,
        volume: 22213410
      },
      {
        time: new Date(2017, 7, 10),
        open: 71.9,
        high: 72.19,
        low: 71.35,
        close: 71.41,
        volume: 24734461
      },
      {
        time: new Date(2017, 7, 11),
        open: 71.61,
        high: 72.7,
        low: 71.28,
        close: 72.5,
        volume: 21443675
      },
      {
        time: new Date(2017, 7, 14),
        open: 73.06,
        high: 73.72,
        low: 72.95,
        close: 73.59,
        volume: 20096592
      },
      {
        time: new Date(2017, 7, 15),
        open: 73.59,
        high: 73.59,
        low: 73.04,
        close: 73.22,
        volume: 19181402
      },
      {
        time: new Date(2017, 7, 16),
        open: 73.34,
        high: 74.1,
        low: 73.17,
        close: 73.65,
        volume: 18150402
      },
      {
        time: new Date(2017, 7, 17),
        open: 73.58,
        high: 73.87,
        low: 72.4,
        close: 72.4,
        volume: 22977519
      },
      {
        time: new Date(2017, 7, 18),
        open: 72.27,
        high: 72.84,
        low: 71.93,
        close: 72.49,
        volume: 18761491
      },
      {
        time: new Date(2017, 7, 21),
        open: 72.47,
        high: 72.48,
        low: 71.7,
        close: 72.15,
        volume: 17734767
      },
      {
        time: new Date(2017, 7, 22),
        open: 72.35,
        high: 73.24,
        low: 72.35,
        close: 73.16,
        volume: 14343674
      },
      {
        time: new Date(2017, 7, 23),
        open: 72.96,
        high: 73.15,
        low: 72.53,
        close: 72.72,
        volume: 13766507
      },
      {
        time: new Date(2017, 7, 24),
        open: 72.74,
        high: 72.86,
        low: 72.07,
        close: 72.69,
        volume: 17098282
      },
      {
        time: new Date(2017, 7, 25),
        open: 72.86,
        high: 73.35,
        low: 72.48,
        close: 72.82,
        volume: 12794301
      },
      {
        time: new Date(2017, 7, 28),
        open: 73.06,
        high: 73.09,
        low: 72.55,
        close: 72.83,
        volume: 14569715
      },
      {
        time: new Date(2017, 7, 29),
        open: 72.25,
        high: 73.16,
        low: 72.05,
        close: 73.05,
        volume: 11478382
      },
      {
        time: new Date(2017, 7, 30),
        open: 73.01,
        high: 74.21,
        low: 72.83,
        close: 74.01,
        volume: 16897801
      },
      {
        time: new Date(2017, 7, 31),
        open: 74.03,
        high: 74.96,
        low: 73.8,
        close: 74.77,
        volume: 27652811
      },
      {
        time: new Date(2017, 8, 1),
        open: 74.71,
        high: 74.74,
        low: 73.64,
        close: 73.94,
        volume: 21736161
      },
      {
        time: new Date(2017, 8, 5),
        open: 73.34,
        high: 73.89,
        low: 72.98,
        close: 73.61,
        volume: 22242384
      },
      {
        time: new Date(2017, 8, 6),
        open: 73.74,
        high: 74.04,
        low: 73.35,
        close: 73.4,
        volume: 16535785
      },
      {
        time: new Date(2017, 8, 7),
        open: 73.68,
        high: 74.6,
        low: 73.6,
        close: 74.34,
        volume: 17471200
      },
      {
        time: new Date(2017, 8, 8),
        open: 74.33,
        high: 74.44,
        low: 73.84,
        close: 73.98,
        volume: 14703816
      },
      {
        time: new Date(2017, 8, 11),
        open: 74.31,
        high: 74.94,
        low: 74.31,
        close: 74.76,
        volume: 17910383
      },
      {
        time: new Date(2017, 8, 12),
        open: 74.76,
        high: 75.24,
        low: 74.37,
        close: 74.68,
        volume: 14394850
      },
      {
        time: new Date(2017, 8, 13),
        open: 74.93,
        high: 75.23,
        low: 74.55,
        close: 75.21,
        volume: 13380802
      },
      {
        time: new Date(2017, 8, 14),
        open: 75.0,
        high: 75.49,
        low: 74.52,
        close: 74.77,
        volume: 15733914
      },
      {
        time: new Date(2017, 8, 15),
        open: 74.83,
        high: 75.39,
        low: 74.07,
        close: 75.31,
        volume: 38578441
      },
      {
        time: new Date(2017, 8, 18),
        open: 75.23,
        high: 75.97,
        low: 75.04,
        close: 75.16,
        volume: 23306959
      },
      {
        time: new Date(2017, 8, 19),
        open: 75.21,
        high: 75.71,
        low: 75.01,
        close: 75.44,
        volume: 16093344
      },
      {
        time: new Date(2017, 8, 20),
        open: 75.35,
        high: 75.55,
        low: 74.31,
        close: 74.94,
        volume: 21587878
      },
      {
        time: new Date(2017, 8, 21),
        open: 75.11,
        high: 75.24,
        low: 74.11,
        close: 74.21,
        volume: 19186140
      },
      {
        time: new Date(2017, 8, 22),
        open: 73.99,
        high: 74.51,
        low: 73.85,
        close: 74.41,
        volume: 14111365
      },
      {
        time: new Date(2017, 8, 25),
        open: 74.09,
        high: 74.25,
        low: 72.92,
        close: 73.26,
        volume: 24149163
      },
      {
        time: new Date(2017, 8, 26),
        open: 73.67,
        high: 73.81,
        low: 72.99,
        close: 73.26,
        volume: 18019577
      },
      {
        time: new Date(2017, 8, 27),
        open: 73.55,
        high: 74.17,
        low: 73.17,
        close: 73.85,
        volume: 19375099
      },
      {
        time: new Date(2017, 8, 28),
        open: 73.54,
        high: 73.97,
        low: 73.31,
        close: 73.87,
        volume: 10883787
      },
      {
        time: new Date(2017, 8, 29),
        open: 73.94,
        high: 74.54,
        low: 73.88,
        close: 74.49,
        volume: 17079114
      },
      {
        time: new Date(2017, 9, 2),
        open: 74.71,
        high: 75.01,
        low: 74.3,
        close: 74.61,
        volume: 15304762
      },
      {
        time: new Date(2017, 9, 3),
        open: 74.67,
        high: 74.88,
        low: 74.2,
        close: 74.26,
        volume: 12190403
      },
      {
        time: new Date(2017, 9, 4),
        open: 74.09,
        high: 74.72,
        low: 73.71,
        close: 74.69,
        volume: 13317681
      },
      {
        time: new Date(2017, 9, 5),
        open: 75.22,
        high: 76.12,
        low: 74.96,
        close: 75.97,
        volume: 21195261
      },
      {
        time: new Date(2017, 9, 6),
        open: 75.67,
        high: 76.03,
        low: 75.54,
        close: 76.0,
        volume: 13959814
      },
      {
        time: new Date(2017, 9, 9),
        open: 75.97,
        high: 76.55,
        low: 75.86,
        close: 76.29,
        volume: 11386502
      },
      {
        time: new Date(2017, 9, 10),
        open: 76.33,
        high: 76.63,
        low: 76.14,
        close: 76.29,
        volume: 13944545
      },
      {
        time: new Date(2017, 9, 11),
        open: 76.36,
        high: 76.46,
        low: 75.95,
        close: 76.42,
        volume: 15388898
      },
      {
        time: new Date(2017, 9, 12),
        open: 76.49,
        high: 77.29,
        low: 76.37,
        close: 77.12,
        volume: 16876538
      },
      {
        time: new Date(2017, 9, 13),
        open: 77.59,
        high: 77.87,
        low: 77.29,
        close: 77.49,
        volume: 15335742
      },
      {
        time: new Date(2017, 9, 16),
        open: 77.42,
        high: 77.81,
        low: 77.35,
        close: 77.65,
        volume: 12380093
      },
      {
        time: new Date(2017, 9, 17),
        open: 77.47,
        high: 77.62,
        low: 77.25,
        close: 77.59,
        volume: 16823989
      },
      {
        time: new Date(2017, 9, 18),
        open: 77.67,
        high: 77.85,
        low: 77.37,
        close: 77.61,
        volume: 13300701
      },
      {
        time: new Date(2017, 9, 19),
        open: 77.57,
        high: 77.93,
        low: 77.35,
        close: 77.91,
        volume: 15092758
      },
      {
        time: new Date(2017, 9, 20),
        open: 78.32,
        high: 78.97,
        low: 78.22,
        close: 78.81,
        volume: 22866426
      },
      {
        time: new Date(2017, 9, 23),
        open: 78.99,
        high: 79.34,
        low: 78.76,
        close: 78.83,
        volume: 20627173
      },
      {
        time: new Date(2017, 9, 24),
        open: 78.9,
        high: 79.2,
        low: 78.46,
        close: 78.86,
        volume: 17517182
      },
      {
        time: new Date(2017, 9, 25),
        open: 78.58,
        high: 79.1,
        low: 78.01,
        close: 78.63,
        volume: 20410808
      },
      {
        time: new Date(2017, 9, 26),
        open: 79.2,
        high: 79.42,
        low: 78.75,
        close: 78.76,
        volume: 32120717
      },
      {
        time: new Date(2017, 9, 27),
        open: 84.37,
        high: 86.2,
        low: 83.61,
        close: 83.81,
        volume: 71066729
      },
      {
        time: new Date(2017, 9, 30),
        open: 83.7,
        high: 84.32,
        low: 83.1,
        close: 83.89,
        volume: 31756653
      },
      {
        time: new Date(2017, 9, 31),
        open: 84.36,
        high: 84.36,
        low: 83.11,
        close: 83.18,
        volume: 27086575
      },
      {
        time: new Date(2017, 10, 1),
        open: 83.68,
        high: 83.76,
        low: 82.88,
        close: 83.18,
        volume: 22307371
      },
      {
        time: new Date(2017, 10, 2),
        open: 83.35,
        high: 84.46,
        low: 83.12,
        close: 84.05,
        volume: 23992945
      },
      {
        time: new Date(2017, 10, 3),
        open: 84.08,
        high: 84.54,
        low: 83.4,
        close: 84.14,
        volume: 17633543
      },
      {
        time: new Date(2017, 10, 6),
        open: 84.2,
        high: 84.7,
        low: 84.08,
        close: 84.47,
        volume: 19860852
      },
      {
        time: new Date(2017, 10, 7),
        open: 84.77,
        high: 84.9,
        low: 83.93,
        close: 84.27,
        volume: 17939727
      },
      {
        time: new Date(2017, 10, 8),
        open: 84.14,
        high: 84.61,
        low: 83.83,
        close: 84.56,
        volume: 18034170
      },
      {
        time: new Date(2017, 10, 9),
        open: 84.11,
        high: 84.27,
        low: 82.9,
        close: 84.09,
        volume: 21178356
      },
      {
        time: new Date(2017, 10, 10),
        open: 83.79,
        high: 84.1,
        low: 83.23,
        close: 83.87,
        volume: 19397793
      },
      {
        time: new Date(2017, 10, 13),
        open: 83.66,
        high: 83.94,
        low: 83.46,
        close: 83.93,
        volume: 14196896
      },
      {
        time: new Date(2017, 10, 14),
        open: 83.5,
        high: 84.1,
        low: 82.98,
        close: 84.05,
        volume: 18801280
      },
      {
        time: new Date(2017, 10, 15),
        open: 83.47,
        high: 83.69,
        low: 82.69,
        close: 82.98,
        volume: 19383102
      },
      {
        time: new Date(2017, 10, 16),
        open: 83.1,
        high: 83.42,
        low: 82.94,
        close: 83.2,
        volume: 20962750
      },
      {
        time: new Date(2017, 10, 17),
        open: 83.12,
        high: 83.12,
        low: 82.24,
        close: 82.4,
        volume: 22078993
      },
      {
        time: new Date(2017, 10, 20),
        open: 82.4,
        high: 82.59,
        low: 82.25,
        close: 82.53,
        volume: 16314978
      },
      {
        time: new Date(2017, 10, 21),
        open: 82.74,
        high: 83.84,
        low: 82.74,
        close: 83.72,
        volume: 21237454
      },
      {
        time: new Date(2017, 10, 22),
        open: 83.83,
        high: 83.9,
        low: 83.04,
        close: 83.11,
        volume: 20553089
      },
      {
        time: new Date(2017, 10, 24),
        open: 83.01,
        high: 83.43,
        low: 82.78,
        close: 83.26,
        volume: 7425603
      },
      {
        time: new Date(2017, 10, 27),
        open: 83.31,
        high: 83.98,
        low: 83.3,
        close: 83.87,
        volume: 18265242
      },
      {
        time: new Date(2017, 10, 28),
        open: 84.07,
        high: 85.06,
        low: 84.02,
        close: 84.88,
        volume: 21925959
      },
      {
        time: new Date(2017, 10, 29),
        open: 84.71,
        high: 84.92,
        low: 83.18,
        close: 83.34,
        volume: 27381109
      },
      {
        time: new Date(2017, 10, 30),
        open: 83.51,
        high: 84.52,
        low: 83.34,
        close: 84.17,
        volume: 33054647
      },
      {
        time: new Date(2017, 11, 1),
        open: 83.6,
        high: 84.81,
        low: 83.22,
        close: 84.26,
        volume: 29532132
      },
      {
        time: new Date(2017, 11, 4),
        open: 84.42,
        high: 84.43,
        low: 80.7,
        close: 81.08,
        volume: 39094880
      },
      {
        time: new Date(2017, 11, 5),
        open: 81.34,
        high: 82.68,
        low: 80.98,
        close: 81.59,
        volume: 26152261
      },
      {
        time: new Date(2017, 11, 6),
        open: 81.55,
        high: 83.14,
        low: 81.43,
        close: 82.78,
        volume: 26162054
      },
      {
        time: new Date(2017, 11, 7),
        open: 82.54,
        high: 82.8,
        low: 82.0,
        close: 82.49,
        volume: 23184547
      },
      {
        time: new Date(2017, 11, 8),
        open: 83.63,
        high: 84.58,
        low: 83.33,
        close: 84.16,
        volume: 24489106
      },
      {
        time: new Date(2017, 11, 11),
        open: 84.29,
        high: 85.37,
        low: 84.12,
        close: 85.23,
        volume: 22857854
      },
      {
        time: new Date(2017, 11, 12),
        open: 85.31,
        high: 86.05,
        low: 85.08,
        close: 85.58,
        volume: 23924105
      },
      {
        time: new Date(2017, 11, 13),
        open: 85.74,
        high: 86.0,
        low: 85.17,
        close: 85.35,
        volume: 22062679
      },
      {
        time: new Date(2017, 11, 14),
        open: 85.43,
        high: 85.87,
        low: 84.53,
        close: 84.69,
        volume: 19305961
      },
      {
        time: new Date(2017, 11, 15),
        open: 85.26,
        high: 87.09,
        low: 84.88,
        close: 86.85,
        volume: 53936687
      },
      {
        time: new Date(2017, 11, 18),
        open: 87.12,
        high: 87.5,
        low: 86.23,
        close: 86.38,
        volume: 22283752
      },
      {
        time: new Date(2017, 11, 19),
        open: 86.35,
        high: 86.35,
        low: 85.27,
        close: 85.83,
        volume: 23524787
      },
      {
        time: new Date(2017, 11, 20),
        open: 86.2,
        high: 86.3,
        low: 84.71,
        close: 85.52,
        volume: 23674931
      },
      {
        time: new Date(2017, 11, 21),
        open: 86.05,
        high: 86.1,
        low: 85.4,
        close: 85.5,
        volume: 17990745
      },
      {
        time: new Date(2017, 11, 22),
        open: 85.4,
        high: 85.63,
        low: 84.92,
        close: 85.51,
        volume: 14145841
      },
      {
        time: new Date(2017, 11, 26),
        open: 85.31,
        high: 85.53,
        low: 85.03,
        close: 85.4,
        volume: 9891237
      },
      {
        time: new Date(2017, 11, 27),
        open: 85.65,
        high: 85.98,
        low: 85.22,
        close: 85.71,
        volume: 14678025
      },
      {
        time: new Date(2017, 11, 28),
        open: 85.9,
        high: 85.93,
        low: 85.55,
        close: 85.72,
        volume: 10594344
      },
      {
        time: new Date(2017, 11, 29),
        open: 85.63,
        high: 86.05,
        low: 85.5,
        close: 85.54,
        volume: 18717406
      },
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
        time: new Date(2013, 1, 1),
        open: 38.17,
        high: 38.5,
        low: 37.62,
        close: 38.3,
        volume: 1100590
      },
      {
        time: new Date(2013, 1, 4),
        open: 38.4,
        high: 38.42,
        low: 37.59,
        close: 37.74,
        volume: 1127989
      },
      {
        time: new Date(2013, 1, 5),
        open: 38.0,
        high: 38.65,
        low: 37.68,
        close: 38.13,
        volume: 1310192
      },
      {
        time: new Date(2013, 1, 6),
        open: 38.18,
        high: 39.39,
        low: 37.9,
        close: 39.17,
        volume: 1893148
      },
      {
        time: new Date(2013, 1, 7),
        open: 39.19,
        high: 39.68,
        low: 38.95,
        close: 39.48,
        volume: 1197521
      },
      {
        time: new Date(2013, 1, 8),
        open: 39.45,
        high: 40.0,
        low: 39.14,
        close: 39.24,
        volume: 1139733
      },
      {
        time: new Date(2013, 1, 11),
        open: 37.98,
        high: 39.15,
        low: 37.5,
        close: 38.42,
        volume: 3266248
      },
      {
        time: new Date(2013, 1, 12),
        open: 38.45,
        high: 38.87,
        low: 37.29,
        close: 37.89,
        volume: 2261246
      },
      {
        time: new Date(2013, 1, 13),
        open: 38.3,
        high: 39.0,
        low: 38.05,
        close: 38.45,
        volume: 967102
      },
      {
        time: new Date(2013, 1, 14),
        open: 38.64,
        high: 38.75,
        low: 38.21,
        close: 38.3,
        volume: 990640
      },
      {
        time: new Date(2013, 1, 15),
        open: 38.5,
        high: 38.51,
        low: 36.95,
        close: 37.04,
        volume: 2018269
      },
      {
        time: new Date(2013, 1, 19),
        open: 37.36,
        high: 39.29,
        low: 37.31,
        close: 39.28,
        volume: 2701340
      },
      {
        time: new Date(2013, 1, 20),
        open: 39.3,
        high: 39.65,
        low: 38.46,
        close: 38.54,
        volume: 3121910
      },
      {
        time: new Date(2013, 1, 21),
        open: 36.49,
        high: 37.39,
        low: 34.54,
        close: 35.16,
        volume: 9038212
      },
      {
        time: new Date(2013, 1, 22),
        open: 35.72,
        high: 36.39,
        low: 35.6,
        close: 36.11,
        volume: 2547831
      },
      {
        time: new Date(2013, 1, 25),
        open: 36.15,
        high: 36.75,
        low: 34.34,
        close: 34.38,
        volume: 2890772
      },
      {
        time: new Date(2013, 1, 26),
        open: 34.46,
        high: 34.96,
        low: 33.8,
        close: 34.43,
        volume: 2763050
      },
      {
        time: new Date(2013, 1, 27),
        open: 34.41,
        high: 35.41,
        low: 34.4,
        close: 35.1,
        volume: 1959129
      },
      {
        time: new Date(2013, 1, 28),
        open: 35.89,
        high: 36.1,
        low: 34.37,
        close: 34.83,
        volume: 1964893
      },
      {
        time: new Date(2013, 2, 1),
        open: 35.0,
        high: 35.08,
        low: 34.25,
        close: 34.65,
        volume: 1546600
      },
      {
        time: new Date(2013, 2, 4),
        open: 34.77,
        high: 35.83,
        low: 34.7,
        close: 35.58,
        volume: 1757660
      },
      {
        time: new Date(2013, 2, 5),
        open: 36.0,
        high: 36.92,
        low: 35.79,
        close: 36.65,
        volume: 2086969
      },
      {
        time: new Date(2013, 2, 6),
        open: 37.01,
        high: 37.88,
        low: 36.97,
        close: 37.69,
        volume: 1149925
      },
      {
        time: new Date(2013, 2, 7),
        open: 37.73,
        high: 38.65,
        low: 36.88,
        close: 38.23,
        volume: 1158354
      },
      {
        time: new Date(2013, 2, 8),
        open: 38.06,
        high: 39.44,
        low: 37.36,
        close: 38.47,
        volume: 912052
      },
      {
        time: new Date(2013, 2, 11),
        open: 38.87,
        high: 39.44,
        low: 38.65,
        close: 39.1,
        volume: 1579440
      },
      {
        time: new Date(2013, 2, 12),
        open: 38.9,
        high: 39.38,
        low: 38.85,
        close: 39.12,
        volume: 1275062
      },
      {
        time: new Date(2013, 2, 13),
        open: 39.0,
        high: 39.49,
        low: 38.81,
        close: 38.98,
        volume: 821986
      },
      {
        time: new Date(2013, 2, 14),
        open: 38.9,
        high: 38.91,
        low: 36.77,
        close: 36.85,
        volume: 2024459
      },
      {
        time: new Date(2013, 2, 15),
        open: 36.64,
        high: 36.65,
        low: 35.21,
        close: 35.29,
        volume: 3279777
      },
      {
        time: new Date(2013, 2, 18),
        open: 35.3,
        high: 36.06,
        low: 34.92,
        close: 35.15,
        volume: 1316336
      },
      {
        time: new Date(2013, 2, 19),
        open: 35.25,
        high: 35.6,
        low: 34.94,
        close: 35.08,
        volume: 1098475
      },
      {
        time: new Date(2013, 2, 20),
        open: 35.26,
        high: 36.07,
        low: 35.16,
        close: 35.95,
        volume: 1423684
      },
      {
        time: new Date(2013, 2, 21),
        open: 35.95,
        high: 37.06,
        low: 35.74,
        close: 36.01,
        volume: 1146287
      },
      {
        time: new Date(2013, 2, 22),
        open: 36.2,
        high: 36.8,
        low: 36.2,
        close: 36.62,
        volume: 446235
      },
      {
        time: new Date(2013, 2, 25),
        open: 37.1,
        high: 38.52,
        low: 36.77,
        close: 37.53,
        volume: 2379354
      },
      {
        time: new Date(2013, 2, 26),
        open: 37.98,
        high: 38.22,
        low: 37.66,
        close: 37.86,
        volume: 1808137
      },
      {
        time: new Date(2013, 2, 27),
        open: 37.94,
        high: 38.38,
        low: 37.31,
        close: 38.16,
        volume: 1296283
      },
      {
        time: new Date(2013, 2, 28),
        open: 38.23,
        high: 38.24,
        low: 37.75,
        close: 37.89,
        volume: 1158652
      },
      {
        time: new Date(2013, 3, 1),
        open: 42.36,
        high: 46.68,
        low: 41.7,
        close: 43.93,
        volume: 14105873
      },
      {
        time: new Date(2013, 3, 2),
        open: 43.6,
        high: 45.5,
        low: 43.51,
        close: 44.34,
        volume: 6652374
      },
      {
        time: new Date(2013, 3, 3),
        open: 43.1,
        high: 43.47,
        low: 40.21,
        close: 41.1,
        volume: 5644995
      },
      {
        time: new Date(2013, 3, 4),
        open: 41.11,
        high: 42.25,
        low: 40.81,
        close: 42.01,
        volume: 2264867
      },
      {
        time: new Date(2013, 3, 5),
        open: 42.0,
        high: 42.0,
        low: 40.5,
        close: 41.37,
        volume: 1552389
      },
      {
        time: new Date(2013, 3, 8),
        open: 41.97,
        high: 42.55,
        low: 41.51,
        close: 41.83,
        volume: 1679001
      },
      {
        time: new Date(2013, 3, 9),
        open: 41.8,
        high: 41.83,
        low: 40.33,
        close: 40.5,
        volume: 1696036
      },
      {
        time: new Date(2013, 3, 10),
        open: 40.7,
        high: 42.01,
        low: 40.61,
        close: 41.86,
        volume: 2121088
      },
      {
        time: new Date(2013, 3, 11),
        open: 42.06,
        high: 44.55,
        low: 41.75,
        close: 43.59,
        volume: 3448081
      },
      {
        time: new Date(2013, 3, 12),
        open: 43.25,
        high: 45.14,
        low: 43.05,
        close: 43.75,
        volume: 3149372
      },
      {
        time: new Date(2013, 3, 15),
        open: 43.5,
        high: 43.8,
        low: 42.51,
        close: 43.3,
        volume: 1685984
      },
      {
        time: new Date(2013, 3, 16),
        open: 44.19,
        high: 46.14,
        low: 43.91,
        close: 45.59,
        volume: 3180438
      },
      {
        time: new Date(2013, 3, 17),
        open: 45.5,
        high: 45.95,
        low: 44.54,
        close: 45.45,
        volume: 2118428
      },
      {
        time: new Date(2013, 3, 18),
        open: 45.98,
        high: 47.6,
        low: 45.39,
        close: 46.97,
        volume: 3368700
      },
      {
        time: new Date(2013, 3, 19),
        open: 47.46,
        high: 49.88,
        low: 47.07,
        close: 47.83,
        volume: 3012136
      },
      {
        time: new Date(2013, 3, 22),
        open: 48.6,
        high: 50.2,
        low: 47.75,
        close: 50.19,
        volume: 3939327
      },
      {
        time: new Date(2013, 3, 23),
        open: 51.0,
        high: 52.92,
        low: 50.66,
        close: 51.01,
        volume: 3737550
      },
      {
        time: new Date(2013, 3, 24),
        open: 50.9,
        high: 51.05,
        low: 48.98,
        close: 50.43,
        volume: 2630108
      },
      {
        time: new Date(2013, 3, 25),
        open: 50.5,
        high: 52.4,
        low: 50.5,
        close: 52.0,
        volume: 2796207
      },
      {
        time: new Date(2013, 3, 26),
        open: 53.13,
        high: 53.74,
        low: 50.62,
        close: 51.2,
        volume: 3622430
      },
      {
        time: new Date(2013, 3, 29),
        open: 51.76,
        high: 54.99,
        low: 51.2,
        close: 54.94,
        volume: 3642206
      },
      {
        time: new Date(2013, 3, 30),
        open: 56.0,
        high: 58.18,
        low: 53.76,
        close: 53.99,
        volume: 5523948
      },
      {
        time: new Date(2013, 4, 1),
        open: 55.99,
        high: 55.99,
        low: 53.0,
        close: 53.28,
        volume: 2742778
      },
      {
        time: new Date(2013, 4, 2),
        open: 53.85,
        high: 55.27,
        low: 53.7,
        close: 54.11,
        volume: 3052333
      },
      {
        time: new Date(2013, 4, 3),
        open: 56.47,
        high: 56.47,
        low: 54.5,
        close: 54.55,
        volume: 3379403
      },
      {
        time: new Date(2013, 4, 6),
        open: 56.39,
        high: 59.66,
        low: 55.5,
        close: 59.5,
        volume: 4372799
      },
      {
        time: new Date(2013, 4, 7),
        open: 62.0,
        high: 62.37,
        low: 55.12,
        close: 55.51,
        volume: 9994549
      },
      {
        time: new Date(2013, 4, 8),
        open: 57.5,
        high: 58.2,
        low: 55.71,
        close: 55.79,
        volume: 6769859
      },
      {
        time: new Date(2013, 4, 9),
        open: 70.12,
        high: 75.77,
        low: 63.69,
        close: 69.4,
        volume: 28604970
      },
      {
        time: new Date(2013, 4, 10),
        open: 69.65,
        high: 81.0,
        low: 69.25,
        close: 76.76,
        volume: 25086430
      },
      {
        time: new Date(2013, 4, 13),
        open: 80.99,
        high: 88.0,
        low: 79.15,
        close: 87.8,
        volume: 22416815
      },
      {
        time: new Date(2013, 4, 14),
        open: 94.22,
        high: 97.12,
        low: 81.15,
        close: 83.24,
        volume: 37163898
      },
      {
        time: new Date(2013, 4, 15),
        open: 81.8,
        high: 86.88,
        low: 78.11,
        close: 84.84,
        volume: 16878700
      },
      {
        time: new Date(2013, 4, 16),
        open: 94.7,
        high: 95.0,
        low: 88.66,
        close: 92.25,
        volume: 21614002
      },
      {
        time: new Date(2013, 4, 17),
        open: 92.5,
        high: 94.44,
        low: 87.5,
        close: 91.5,
        volume: 19008450
      },
      {
        time: new Date(2013, 4, 20),
        open: 91.12,
        high: 92.5,
        low: 88.63,
        close: 89.94,
        volume: 8348331
      },
      {
        time: new Date(2013, 4, 21),
        open: 88.5,
        high: 89.99,
        low: 85.28,
        close: 87.59,
        volume: 9001763
      },
      {
        time: new Date(2013, 4, 22),
        open: 86.37,
        high: 90.96,
        low: 85.5,
        close: 87.24,
        volume: 8573776
      },
      {
        time: new Date(2013, 4, 23),
        open: 84.8,
        high: 93.01,
        low: 83.05,
        close: 92.73,
        volume: 12044257
      },
      {
        time: new Date(2013, 4, 24),
        open: 92.6,
        high: 97.95,
        low: 92.0,
        close: 97.08,
        volume: 16124194
      },
      {
        time: new Date(2013, 4, 28),
        open: 101.55,
        high: 110.75,
        low: 100.3,
        close: 110.33,
        volume: 19691824
      },
      {
        time: new Date(2013, 4, 29),
        open: 113.55,
        high: 114.9,
        low: 99.0,
        close: 104.63,
        volume: 25099480
      },
      {
        time: new Date(2013, 4, 30),
        open: 102.46,
        high: 109.54,
        low: 101.2,
        close: 104.95,
        volume: 16140554
      },
      {
        time: new Date(2013, 4, 31),
        open: 106.26,
        high: 106.44,
        low: 97.73,
        close: 97.76,
        volume: 15171929
      },
      {
        time: new Date(2013, 5, 3),
        open: 93.51,
        high: 97.62,
        low: 88.25,
        close: 92.59,
        volume: 19143475
      },
      {
        time: new Date(2013, 5, 4),
        open: 92.75,
        high: 96.42,
        low: 92.4,
        close: 94.84,
        volume: 8856045
      },
      {
        time: new Date(2013, 5, 5),
        open: 93.66,
        high: 97.97,
        low: 89.11,
        close: 95.37,
        volume: 12224731
      },
      {
        time: new Date(2013, 5, 6),
        open: 95.25,
        high: 99.27,
        low: 95.11,
        close: 97.35,
        volume: 9514406
      },
      {
        time: new Date(2013, 5, 7),
        open: 98.0,
        high: 102.9,
        low: 96.7,
        close: 102.04,
        volume: 10717217
      },
      {
        time: new Date(2013, 5, 10),
        open: 98.93,
        high: 102.52,
        low: 98.57,
        close: 100.05,
        volume: 9234215
      },
      {
        time: new Date(2013, 5, 11),
        open: 98.18,
        high: 98.68,
        low: 94.05,
        close: 94.47,
        volume: 7385845
      },
      {
        time: new Date(2013, 5, 12),
        open: 96.8,
        high: 100.48,
        low: 95.75,
        close: 97.73,
        volume: 9197523
      },
      {
        time: new Date(2013, 5, 13),
        open: 99.0,
        high: 99.28,
        low: 95.12,
        close: 98.18,
        volume: 5965124
      },
      {
        time: new Date(2013, 5, 14),
        open: 100.0,
        high: 102.52,
        low: 99.33,
        close: 100.3,
        volume: 6554483
      },
      {
        time: new Date(2013, 5, 17),
        open: 103.6,
        high: 104.75,
        low: 101.2,
        close: 102.2,
        volume: 7075640
      },
      {
        time: new Date(2013, 5, 18),
        open: 101.75,
        high: 103.98,
        low: 99.2,
        close: 103.39,
        volume: 8803563
      },
      {
        time: new Date(2013, 5, 19),
        open: 102.06,
        high: 106.67,
        low: 102.01,
        close: 104.68,
        volume: 8588734
      },
      {
        time: new Date(2013, 5, 20),
        open: 104.65,
        high: 107.13,
        low: 99.45,
        close: 100.65,
        volume: 10111221
      },
      {
        time: new Date(2013, 5, 21),
        open: 103.7,
        high: 103.7,
        low: 97.5,
        close: 99.55,
        volume: 11714123
      },
      {
        time: new Date(2013, 5, 24),
        open: 96.5,
        high: 102.87,
        low: 95.3,
        close: 101.49,
        volume: 7127020
      },
      {
        time: new Date(2013, 5, 25),
        open: 103.1,
        high: 104.2,
        low: 100.55,
        close: 102.4,
        volume: 5850832
      },
      {
        time: new Date(2013, 5, 26),
        open: 103.8,
        high: 105.87,
        low: 102.66,
        close: 105.72,
        volume: 6610159
      },
      {
        time: new Date(2013, 5, 27),
        open: 106.75,
        high: 110.25,
        low: 106.13,
        close: 109.25,
        volume: 8750826
      },
      {
        time: new Date(2013, 5, 28),
        open: 108.57,
        high: 109.44,
        low: 106.71,
        close: 107.36,
        volume: 5750431
      },
      {
        time: new Date(2013, 6, 1),
        open: 109.36,
        high: 117.77,
        low: 109.15,
        close: 117.18,
        volume: 10903601
      },
      {
        time: new Date(2013, 6, 2),
        open: 118.26,
        high: 121.89,
        low: 115.5,
        close: 117.82,
        volume: 12070315
      },
      {
        time: new Date(2013, 6, 3),
        open: 118.0,
        high: 119.25,
        low: 114.27,
        close: 115.24,
        volume: 4806662
      },
      {
        time: new Date(2013, 6, 5),
        open: 118.32,
        high: 120.28,
        low: 115.7,
        close: 120.09,
        volume: 6827497
      },
      {
        time: new Date(2013, 6, 8),
        open: 121.37,
        high: 122.18,
        low: 118.82,
        close: 121.61,
        volume: 7820816
      },
      {
        time: new Date(2013, 6, 9),
        open: 124.64,
        high: 125.32,
        low: 121.91,
        close: 123.45,
        volume: 8603207
      },
      {
        time: new Date(2013, 6, 10),
        open: 123.19,
        high: 123.25,
        low: 120.79,
        close: 122.27,
        volume: 5600012
      },
      {
        time: new Date(2013, 6, 11),
        open: 124.88,
        high: 126.09,
        low: 122.35,
        close: 125.61,
        volume: 7486958
      },
      {
        time: new Date(2013, 6, 12),
        open: 125.5,
        high: 129.94,
        low: 124.51,
        close: 129.9,
        volume: 11349186
      },
      {
        time: new Date(2013, 6, 15),
        open: 133.03,
        high: 133.26,
        low: 126.82,
        close: 127.26,
        volume: 9924336
      },
      {
        time: new Date(2013, 6, 16),
        open: 126.28,
        high: 126.32,
        low: 107.3,
        close: 109.05,
        volume: 32371868
      },
      {
        time: new Date(2013, 6, 17),
        open: 106.52,
        high: 121.62,
        low: 104.5,
        close: 120.25,
        volume: 26028947
      },
      {
        time: new Date(2013, 6, 18),
        open: 120.97,
        high: 122.73,
        low: 116.18,
        close: 119.03,
        volume: 11407358
      },
      {
        time: new Date(2013, 6, 19),
        open: 118.5,
        high: 120.55,
        low: 116.51,
        close: 119.68,
        volume: 5891439
      },
      {
        time: new Date(2013, 6, 22),
        open: 119.89,
        high: 126.68,
        low: 119.88,
        close: 122.43,
        volume: 9804810
      },
      {
        time: new Date(2013, 6, 23),
        open: 124.0,
        high: 125.56,
        low: 121.82,
        close: 122.74,
        volume: 7740469
      },
      {
        time: new Date(2013, 6, 24),
        open: 124.47,
        high: 124.5,
        low: 119.56,
        close: 121.7,
        volume: 6871372
      },
      {
        time: new Date(2013, 6, 25),
        open: 120.4,
        high: 124.75,
        low: 120.19,
        close: 124.07,
        volume: 5287144
      },
      {
        time: new Date(2013, 6, 26),
        open: 128.14,
        high: 130.68,
        low: 126.61,
        close: 129.39,
        volume: 9640703
      },
      {
        time: new Date(2013, 6, 29),
        open: 129.32,
        high: 135.37,
        low: 128.25,
        close: 134.62,
        volume: 9686072
      },
      {
        time: new Date(2013, 6, 30),
        open: 134.8,
        high: 137.49,
        low: 128.18,
        close: 131.74,
        volume: 13130267
      },
      {
        time: new Date(2013, 6, 31),
        open: 132.57,
        high: 134.98,
        low: 131.45,
        close: 134.28,
        volume: 6351637
      },
      {
        time: new Date(2013, 7, 1),
        open: 135.0,
        high: 136.52,
        low: 132.63,
        close: 135.55,
        volume: 5323599
      },
      {
        time: new Date(2013, 7, 2),
        open: 134.59,
        high: 138.25,
        low: 133.61,
        close: 138.0,
        volume: 6269838
      },
      {
        time: new Date(2013, 7, 5),
        open: 140.01,
        high: 144.89,
        low: 139.65,
        close: 144.68,
        volume: 10200629
      },
      {
        time: new Date(2013, 7, 6),
        open: 144.75,
        high: 145.73,
        low: 141.1,
        close: 142.15,
        volume: 9261092
      },
      {
        time: new Date(2013, 7, 7),
        open: 141.89,
        high: 141.95,
        low: 132.36,
        close: 134.23,
        volume: 18212138
      },
      {
        time: new Date(2013, 7, 8),
        open: 154.36,
        high: 158.88,
        low: 150.46,
        close: 153.48,
        volume: 27246763
      },
      {
        time: new Date(2013, 7, 9),
        open: 152.4,
        high: 155.95,
        low: 151.25,
        close: 153.0,
        volume: 8936029
      },
      {
        time: new Date(2013, 7, 12),
        open: 149.43,
        high: 150.5,
        low: 142.05,
        close: 147.38,
        volume: 14912175
      },
      {
        time: new Date(2013, 7, 13),
        open: 149.5,
        high: 149.84,
        low: 144.45,
        close: 145.43,
        volume: 8748863
      },
      {
        time: new Date(2013, 7, 14),
        open: 142.72,
        high: 144.84,
        low: 138.05,
        close: 139.36,
        volume: 11693743
      },
      {
        time: new Date(2013, 7, 15),
        open: 136.43,
        high: 143.6,
        low: 135.0,
        close: 139.67,
        volume: 10188877
      },
      {
        time: new Date(2013, 7, 16),
        open: 141.63,
        high: 143.91,
        low: 140.97,
        close: 142.0,
        volume: 7108086
      },
      {
        time: new Date(2013, 7, 19),
        open: 143.43,
        high: 147.38,
        low: 142.83,
        close: 144.9,
        volume: 8037640
      },
      {
        time: new Date(2013, 7, 20),
        open: 148.65,
        high: 149.78,
        low: 147.0,
        close: 149.58,
        volume: 6418108
      },
      {
        time: new Date(2013, 7, 21),
        open: 150.0,
        high: 150.31,
        low: 146.25,
        close: 147.86,
        volume: 6266262
      },
      {
        time: new Date(2013, 7, 22),
        open: 149.22,
        high: 157.48,
        low: 148.14,
        close: 157.1,
        volume: 10592391
      },
      {
        time: new Date(2013, 7, 23),
        open: 157.0,
        high: 162.3,
        low: 155.0,
        close: 161.84,
        volume: 12931842
      },
      {
        time: new Date(2013, 7, 26),
        open: 165.15,
        high: 173.0,
        low: 160.25,
        close: 164.22,
        volume: 24171096
      },
      {
        time: new Date(2013, 7, 27),
        open: 162.3,
        high: 168.8,
        low: 160.95,
        close: 167.01,
        volume: 17566816
      },
      {
        time: new Date(2013, 7, 28),
        open: 169.06,
        high: 171.5,
        low: 163.25,
        close: 166.45,
        volume: 14740006
      },
      {
        time: new Date(2013, 7, 29),
        open: 164.22,
        high: 167.75,
        low: 162.51,
        close: 166.06,
        volume: 9445720
      },
      {
        time: new Date(2013, 7, 30),
        open: 166.37,
        high: 169.21,
        low: 163.96,
        close: 169.0,
        volume: 11028358
      },
      {
        time: new Date(2013, 8, 3),
        open: 173.4,
        high: 173.7,
        low: 166.4,
        close: 168.94,
        volume: 12061100
      },
      {
        time: new Date(2013, 8, 4),
        open: 169.77,
        high: 171.62,
        low: 165.56,
        close: 170.62,
        volume: 11475647
      },
      {
        time: new Date(2013, 8, 5),
        open: 170.1,
        high: 171.5,
        low: 168.25,
        close: 169.93,
        volume: 6693202
      },
      {
        time: new Date(2013, 8, 6),
        open: 168.57,
        high: 169.7,
        low: 165.15,
        close: 166.97,
        volume: 8619630
      },
      {
        time: new Date(2013, 8, 9),
        open: 163.12,
        high: 164.5,
        low: 158.51,
        close: 160.7,
        volume: 14344473
      },
      {
        time: new Date(2013, 8, 10),
        open: 161.45,
        high: 167.5,
        low: 160.63,
        close: 166.37,
        volume: 8967786
      },
      {
        time: new Date(2013, 8, 11),
        open: 166.41,
        high: 167.9,
        low: 162.13,
        close: 163.52,
        volume: 5811072
      },
      {
        time: new Date(2013, 8, 12),
        open: 164.0,
        high: 166.76,
        low: 160.51,
        close: 164.93,
        volume: 6159993
      },
      {
        time: new Date(2013, 8, 13),
        open: 162.77,
        high: 166.37,
        low: 162.16,
        close: 165.54,
        volume: 5409888
      },
      {
        time: new Date(2013, 8, 16),
        open: 168.0,
        high: 170.85,
        low: 165.85,
        close: 166.58,
        volume: 7592598
      },
      {
        time: new Date(2013, 8, 17),
        open: 165.08,
        high: 168.42,
        low: 163.36,
        close: 166.23,
        volume: 5500719
      },
      {
        time: new Date(2013, 8, 18),
        open: 167.07,
        high: 167.45,
        low: 164.2,
        close: 166.22,
        volume: 5439615
      },
      {
        time: new Date(2013, 8, 19),
        open: 170.8,
        high: 180.47,
        low: 169.08,
        close: 177.92,
        volume: 15594568
      },
      {
        time: new Date(2013, 8, 20),
        open: 178.9,
        high: 185.83,
        low: 178.56,
        close: 183.39,
        volume: 13401689
      },
      {
        time: new Date(2013, 8, 23),
        open: 184.48,
        high: 185.48,
        low: 177.11,
        close: 181.11,
        volume: 8191841
      },
      {
        time: new Date(2013, 8, 24),
        open: 179.14,
        high: 184.96,
        low: 177.65,
        close: 182.33,
        volume: 6282431
      },
      {
        time: new Date(2013, 8, 25),
        open: 183.56,
        high: 186.3,
        low: 180.5,
        close: 185.24,
        volume: 8252621
      },
      {
        time: new Date(2013, 8, 26),
        open: 186.7,
        high: 189.68,
        low: 185.61,
        close: 188.64,
        volume: 6621592
      },
      {
        time: new Date(2013, 8, 27),
        open: 187.52,
        high: 191.28,
        low: 186.43,
        close: 190.9,
        volume: 5923881
      },
      {
        time: new Date(2013, 8, 30),
        open: 189.0,
        high: 194.5,
        low: 188.0,
        close: 193.37,
        volume: 8934541
      },
      {
        time: new Date(2013, 9, 1),
        open: 193.96,
        high: 194.23,
        low: 188.37,
        close: 193.0,
        volume: 7761429
      },
      {
        time: new Date(2013, 9, 2),
        open: 188.59,
        high: 191.83,
        low: 175.4,
        close: 180.95,
        volume: 20775410
      },
      {
        time: new Date(2013, 9, 3),
        open: 175.04,
        high: 179.69,
        low: 168.0,
        close: 173.31,
        volume: 23816504
      },
      {
        time: new Date(2013, 9, 4),
        open: 176.4,
        high: 181.18,
        low: 172.65,
        close: 180.98,
        volume: 14413965
      },
      {
        time: new Date(2013, 9, 7),
        open: 182.46,
        high: 186.73,
        low: 180.26,
        close: 183.07,
        volume: 11485579
      },
      {
        time: new Date(2013, 9, 8),
        open: 184.4,
        high: 185.93,
        low: 173.21,
        close: 174.73,
        volume: 13757218
      },
      {
        time: new Date(2013, 9, 9),
        open: 174.73,
        high: 174.99,
        low: 161.5,
        close: 168.78,
        volume: 15316481
      },
      {
        time: new Date(2013, 9, 10),
        open: 173.09,
        high: 175.75,
        low: 169.69,
        close: 172.93,
        volume: 8883910
      },
      {
        time: new Date(2013, 9, 11),
        open: 172.75,
        high: 179.29,
        low: 171.2,
        close: 178.7,
        volume: 8311086
      },
      {
        time: new Date(2013, 9, 14),
        open: 175.0,
        high: 182.5,
        low: 174.15,
        close: 179.72,
        volume: 7769630
      },
      {
        time: new Date(2013, 9, 15),
        open: 185.28,
        high: 188.79,
        low: 183.18,
        close: 183.94,
        volume: 10978536
      },
      {
        time: new Date(2013, 9, 16),
        open: 184.9,
        high: 187.3,
        low: 182.09,
        close: 183.56,
        volume: 8205367
      },
      {
        time: new Date(2013, 9, 17),
        open: 183.54,
        high: 184.8,
        low: 180.99,
        close: 182.8,
        volume: 6704968
      },
      {
        time: new Date(2013, 9, 18),
        open: 184.15,
        high: 185.96,
        low: 182.52,
        close: 183.4,
        volume: 5930815
      },
      {
        time: new Date(2013, 9, 21),
        open: 183.28,
        high: 183.39,
        low: 171.0,
        close: 172.6,
        volume: 11532131
      },
      {
        time: new Date(2013, 9, 22),
        open: 170.5,
        high: 177.78,
        low: 166.11,
        close: 171.54,
        volume: 11394675
      },
      {
        time: new Date(2013, 9, 23),
        open: 168.91,
        high: 171.81,
        low: 160.15,
        close: 164.5,
        volume: 13327739
      },
      {
        time: new Date(2013, 9, 24),
        open: 165.0,
        high: 174.5,
        low: 162.83,
        close: 173.15,
        volume: 10825667
      },
      {
        time: new Date(2013, 9, 25),
        open: 174.21,
        high: 174.5,
        low: 166.8,
        close: 169.66,
        volume: 7595458
      },
      {
        time: new Date(2013, 9, 28),
        open: 170.18,
        high: 170.5,
        low: 162.2,
        close: 162.86,
        volume: 7841727
      },
      {
        time: new Date(2013, 9, 29),
        open: 162.76,
        high: 165.45,
        low: 153.0,
        close: 164.47,
        volume: 14111737
      },
      {
        time: new Date(2013, 9, 30),
        open: 164.63,
        high: 167.68,
        low: 158.17,
        close: 159.22,
        volume: 8401756
      },
      {
        time: new Date(2013, 9, 31),
        open: 155.67,
        high: 162.44,
        low: 153.3,
        close: 159.94,
        volume: 9340455
      },
      {
        time: new Date(2013, 10, 1),
        open: 163.0,
        high: 165.9,
        low: 160.41,
        close: 162.17,
        volume: 7180583
      },
      {
        time: new Date(2013, 10, 4),
        open: 165.0,
        high: 175.39,
        low: 164.22,
        close: 175.2,
        volume: 13120374
      },
      {
        time: new Date(2013, 10, 5),
        open: 180.0,
        high: 181.43,
        low: 171.36,
        close: 176.81,
        volume: 22467101
      },
      {
        time: new Date(2013, 10, 6),
        open: 154.81,
        high: 160.73,
        low: 146.36,
        close: 151.16,
        volume: 31071726
      },
      {
        time: new Date(2013, 10, 7),
        open: 144.19,
        high: 145.65,
        low: 137.62,
        close: 139.77,
        volume: 22284744
      },
      {
        time: new Date(2013, 10, 8),
        open: 136.48,
        high: 140.6,
        low: 132.32,
        close: 137.95,
        volume: 22477861
      },
      {
        time: new Date(2013, 10, 11),
        open: 141.0,
        high: 145.42,
        low: 137.1,
        close: 144.7,
        volume: 13997591
      },
      {
        time: new Date(2013, 10, 12),
        open: 144.69,
        high: 144.7,
        low: 136.18,
        close: 137.8,
        volume: 14985162
      },
      {
        time: new Date(2013, 10, 13),
        open: 140.84,
        high: 142.37,
        low: 136.34,
        close: 138.7,
        volume: 12658272
      },
      {
        time: new Date(2013, 10, 14),
        open: 138.92,
        high: 140.4,
        low: 134.11,
        close: 137.6,
        volume: 12203700
      },
      {
        time: new Date(2013, 10, 15),
        open: 136.85,
        high: 137.95,
        low: 134.35,
        close: 135.45,
        volume: 9900176
      },
      {
        time: new Date(2013, 10, 18),
        open: 135.27,
        high: 135.45,
        low: 119.61,
        close: 121.58,
        volume: 23138242
      },
      {
        time: new Date(2013, 10, 19),
        open: 119.43,
        high: 129.0,
        low: 119.22,
        close: 126.09,
        volume: 19816154
      },
      {
        time: new Date(2013, 10, 20),
        open: 126.08,
        high: 127.45,
        low: 119.06,
        close: 121.11,
        volume: 13849554
      },
      {
        time: new Date(2013, 10, 21),
        open: 122.89,
        high: 124.79,
        low: 120.25,
        close: 122.1,
        volume: 11903803
      },
      {
        time: new Date(2013, 10, 22),
        open: 121.58,
        high: 122.75,
        low: 117.93,
        close: 121.38,
        volume: 11104146
      },
      {
        time: new Date(2013, 10, 25),
        open: 124.5,
        high: 125.84,
        low: 120.3,
        close: 120.84,
        volume: 10275348
      },
      {
        time: new Date(2013, 10, 26),
        open: 119.38,
        high: 122.72,
        low: 116.1,
        close: 120.5,
        volume: 13885522
      },
      {
        time: new Date(2013, 10, 27),
        open: 121.31,
        high: 126.95,
        low: 119.52,
        close: 126.94,
        volume: 12367634
      },
      {
        time: new Date(2013, 10, 29),
        open: 129.77,
        high: 130.59,
        low: 126.98,
        close: 127.28,
        volume: 9716219
      },
      {
        time: new Date(2013, 11, 2),
        open: 126.35,
        high: 128.55,
        low: 123.93,
        close: 124.17,
        volume: 7751211
      },
      {
        time: new Date(2013, 11, 3),
        open: 132.68,
        high: 144.94,
        low: 131.59,
        close: 144.7,
        volume: 25682404
      },
      {
        time: new Date(2013, 11, 4),
        open: 144.32,
        high: 144.43,
        low: 137.13,
        close: 138.95,
        volume: 13147688
      },
      {
        time: new Date(2013, 11, 5),
        open: 140.15,
        high: 143.35,
        low: 139.5,
        close: 140.48,
        volume: 9288415
      },
      {
        time: new Date(2013, 11, 6),
        open: 141.51,
        high: 142.49,
        low: 136.3,
        close: 137.36,
        volume: 7909596
      },
      {
        time: new Date(2013, 11, 9),
        open: 137.01,
        high: 141.7,
        low: 134.21,
        close: 141.6,
        volume: 9061485
      },
      {
        time: new Date(2013, 11, 10),
        open: 139.96,
        high: 145.87,
        low: 139.86,
        close: 142.19,
        volume: 10748234
      },
      {
        time: new Date(2013, 11, 11),
        open: 141.89,
        high: 143.05,
        low: 139.49,
        close: 139.65,
        volume: 7137842
      },
      {
        time: new Date(2013, 11, 12),
        open: 139.81,
        high: 148.24,
        low: 138.53,
        close: 147.47,
        volume: 10767791
      },
      {
        time: new Date(2013, 11, 13),
        open: 148.37,
        high: 151.8,
        low: 147.32,
        close: 147.65,
        volume: 10599775
      },
      {
        time: new Date(2013, 11, 16),
        open: 148.57,
        high: 150.43,
        low: 146.1,
        close: 147.94,
        volume: 6675276
      },
      {
        time: new Date(2013, 11, 17),
        open: 146.93,
        high: 154.63,
        low: 146.32,
        close: 152.46,
        volume: 10494969
      },
      {
        time: new Date(2013, 11, 18),
        open: 152.28,
        high: 154.9,
        low: 145.95,
        close: 147.98,
        volume: 11581897
      },
      {
        time: new Date(2013, 11, 19),
        open: 146.91,
        high: 147.0,
        low: 139.1,
        close: 140.72,
        volume: 12758613
      },
      {
        time: new Date(2013, 11, 20),
        open: 141.88,
        high: 144.35,
        low: 141.58,
        close: 143.24,
        volume: 7422537
      },
      {
        time: new Date(2013, 11, 23),
        open: 144.85,
        high: 146.24,
        low: 142.6,
        close: 143.55,
        volume: 5385506
      },
      {
        time: new Date(2013, 11, 24),
        open: 150.0,
        high: 154.97,
        low: 149.82,
        close: 151.41,
        volume: 9941485
      },
      {
        time: new Date(2013, 11, 26),
        open: 155.04,
        high: 158.0,
        low: 154.29,
        close: 155.5,
        volume: 7129526
      },
      {
        time: new Date(2013, 11, 27),
        open: 155.3,
        high: 155.5,
        low: 150.8,
        close: 151.12,
        volume: 5469064
      },
      {
        time: new Date(2013, 11, 30),
        open: 151.12,
        high: 154.81,
        low: 150.75,
        close: 152.44,
        volume: 4472076
      },
      {
        time: new Date(2013, 11, 31),
        open: 152.32,
        high: 153.2,
        low: 148.66,
        close: 150.43,
        volume: 4266710
      },
      {
        time: new Date(2014, 0, 2),
        open: 149.8,
        high: 152.48,
        low: 146.55,
        close: 150.1,
        volume: 6195355
      },
      {
        time: new Date(2014, 0, 3),
        open: 150.0,
        high: 152.19,
        low: 148.6,
        close: 149.56,
        volume: 4698839
      },
      {
        time: new Date(2014, 0, 6),
        open: 150.0,
        high: 150.4,
        low: 145.24,
        close: 147.0,
        volume: 5367320
      },
      {
        time: new Date(2014, 0, 7),
        open: 147.62,
        high: 150.4,
        low: 145.25,
        close: 149.36,
        volume: 5041806
      },
      {
        time: new Date(2014, 0, 8),
        open: 148.85,
        high: 153.7,
        low: 148.76,
        close: 151.28,
        volume: 6166674
      },
      {
        time: new Date(2014, 0, 9),
        open: 152.5,
        high: 153.43,
        low: 146.85,
        close: 147.53,
        volume: 5388905
      },
      {
        time: new Date(2014, 0, 10),
        open: 148.46,
        high: 148.9,
        low: 142.25,
        close: 145.72,
        volume: 7450531
      },
      {
        time: new Date(2014, 0, 13),
        open: 145.78,
        high: 147.0,
        low: 137.82,
        close: 139.34,
        volume: 6324647
      },
      {
        time: new Date(2014, 0, 14),
        open: 140.5,
        high: 162.0,
        low: 136.67,
        close: 161.27,
        volume: 27935828
      },
      {
        time: new Date(2014, 0, 15),
        open: 168.45,
        high: 172.23,
        low: 162.1,
        close: 164.13,
        volume: 20488981
      },
      {
        time: new Date(2014, 0, 16),
        open: 162.5,
        high: 172.7,
        low: 162.4,
        close: 170.97,
        volume: 11982099
      },
      {
        time: new Date(2014, 0, 17),
        open: 170.19,
        high: 173.2,
        low: 167.95,
        close: 170.01,
        volume: 9216028
      },
      {
        time: new Date(2014, 0, 21),
        open: 171.24,
        high: 177.29,
        low: 170.81,
        close: 176.68,
        volume: 9745765
      },
      {
        time: new Date(2014, 0, 22),
        open: 177.81,
        high: 180.32,
        low: 174.76,
        close: 178.56,
        volume: 7036758
      },
      {
        time: new Date(2014, 0, 23),
        open: 177.23,
        high: 182.38,
        low: 173.42,
        close: 181.5,
        volume: 7899515
      },
      {
        time: new Date(2014, 0, 24),
        open: 177.85,
        high: 180.48,
        low: 173.53,
        close: 174.6,
        volume: 7711296
      },
      {
        time: new Date(2014, 0, 27),
        open: 175.16,
        high: 177.92,
        low: 164.71,
        close: 169.62,
        volume: 8737773
      },
      {
        time: new Date(2014, 0, 28),
        open: 171.5,
        high: 178.98,
        low: 171.0,
        close: 178.38,
        volume: 6128237
      },
      {
        time: new Date(2014, 0, 29),
        open: 175.3,
        high: 179.09,
        low: 173.13,
        close: 175.23,
        volume: 5956817
      },
      {
        time: new Date(2014, 0, 30),
        open: 178.0,
        high: 184.78,
        low: 177.01,
        close: 182.84,
        volume: 8575210
      },
      {
        time: new Date(2014, 0, 31),
        open: 178.85,
        high: 186.0,
        low: 178.51,
        close: 181.41,
        volume: 6512951
      },
      {
        time: new Date(2014, 1, 3),
        open: 182.89,
        high: 184.88,
        low: 175.16,
        close: 177.11,
        volume: 6778609
      },
      {
        time: new Date(2014, 1, 4),
        open: 180.7,
        high: 181.6,
        low: 176.2,
        close: 178.73,
        volume: 4690883
      },
      {
        time: new Date(2014, 1, 5),
        open: 178.3,
        high: 180.59,
        low: 169.36,
        close: 174.42,
        volume: 7275952
      },
      {
        time: new Date(2014, 1, 6),
        open: 176.3,
        high: 180.11,
        low: 176.0,
        close: 178.38,
        volume: 5847953
      },
      {
        time: new Date(2014, 1, 7),
        open: 181.01,
        high: 186.63,
        low: 179.6,
        close: 186.53,
        volume: 8964054
      },
      {
        time: new Date(2014, 1, 10),
        open: 189.34,
        high: 199.3,
        low: 189.32,
        close: 196.56,
        volume: 12989286
      },
      {
        time: new Date(2014, 1, 11),
        open: 198.97,
        high: 202.2,
        low: 192.7,
        close: 196.62,
        volume: 10734472
      },
      {
        time: new Date(2014, 1, 12),
        open: 195.78,
        high: 198.27,
        low: 194.32,
        close: 195.32,
        volume: 5181313
      },
      {
        time: new Date(2014, 1, 13),
        open: 193.34,
        high: 202.72,
        low: 193.25,
        close: 199.63,
        volume: 8174049
      },
      {
        time: new Date(2014, 1, 14),
        open: 198.1,
        high: 201.88,
        low: 197.0,
        close: 198.23,
        volume: 6173462
      },
      {
        time: new Date(2014, 1, 18),
        open: 205.24,
        high: 206.0,
        low: 201.36,
        close: 203.7,
        volume: 9355871
      },
      {
        time: new Date(2014, 1, 19),
        open: 203.7,
        high: 203.7,
        low: 193.41,
        close: 193.64,
        volume: 16419899
      },
      {
        time: new Date(2014, 1, 20),
        open: 215.01,
        high: 215.21,
        low: 206.27,
        close: 209.97,
        volume: 18022262
      },
      {
        time: new Date(2014, 1, 21),
        open: 211.64,
        high: 213.98,
        low: 209.19,
        close: 209.6,
        volume: 7828981
      },
      {
        time: new Date(2014, 1, 24),
        open: 208.76,
        high: 218.36,
        low: 208.32,
        close: 217.65,
        volume: 8303133
      },
      {
        time: new Date(2014, 1, 25),
        open: 230.0,
        high: 259.2,
        low: 228.45,
        close: 248.0,
        volume: 32797000
      },
      {
        time: new Date(2014, 1, 26),
        open: 258.58,
        high: 265.0,
        low: 247.5,
        close: 253.0,
        volume: 24771194
      },
      {
        time: new Date(2014, 1, 27),
        open: 263.25,
        high: 261.9,
        low: 248.33,
        close: 252.54,
        volume: 17970707
      },
      {
        time: new Date(2014, 1, 28),
        open: 249.65,
        high: 252.68,
        low: 242.55,
        close: 244.81,
        volume: 14612693
      },
      {
        time: new Date(2014, 2, 3),
        open: 237.26,
        high: 251.65,
        low: 234.99,
        close: 250.56,
        volume: 13109303
      },
      {
        time: new Date(2014, 2, 4),
        open: 258.48,
        high: 260.0,
        low: 252.83,
        close: 254.84,
        volume: 8765392
      },
      {
        time: new Date(2014, 2, 5),
        open: 256.72,
        high: 256.99,
        low: 251.8,
        close: 252.66,
        volume: 5946736
      },
      {
        time: new Date(2014, 2, 6),
        open: 254.14,
        high: 257.5,
        low: 249.45,
        close: 252.94,
        volume: 7374719
      },
      {
        time: new Date(2014, 2, 7),
        open: 252.94,
        high: 254.85,
        low: 244.41,
        close: 246.21,
        volume: 7818465
      },
      {
        time: new Date(2014, 2, 10),
        open: 242.7,
        high: 243.0,
        low: 236.06,
        close: 238.84,
        volume: 7745751
      },
      {
        time: new Date(2014, 2, 11),
        open: 236.5,
        high: 244.6,
        low: 232.43,
        close: 234.41,
        volume: 8836349
      },
      {
        time: new Date(2014, 2, 12),
        open: 231.5,
        high: 247.5,
        low: 231.11,
        close: 241.49,
        volume: 9763911
      },
      {
        time: new Date(2014, 2, 13),
        open: 243.79,
        high: 244.19,
        low: 234.0,
        close: 237.79,
        volume: 6236325
      },
      {
        time: new Date(2014, 2, 14),
        open: 235.29,
        high: 236.94,
        low: 228.32,
        close: 230.97,
        volume: 8289733
      },
      {
        time: new Date(2014, 2, 17),
        open: 234.95,
        high: 237.93,
        low: 230.5,
        close: 233.98,
        volume: 5912592
      },
      {
        time: new Date(2014, 2, 18),
        open: 236.95,
        high: 241.5,
        low: 235.02,
        close: 240.04,
        volume: 6242349
      },
      {
        time: new Date(2014, 2, 19),
        open: 241.39,
        high: 241.55,
        low: 233.51,
        close: 235.84,
        volume: 5071327
      },
      {
        time: new Date(2014, 2, 20),
        open: 236.16,
        high: 239.25,
        low: 233.36,
        close: 234.91,
        volume: 3817905
      },
      {
        time: new Date(2014, 2, 21),
        open: 236.02,
        high: 236.2,
        low: 227.5,
        close: 228.89,
        volume: 8227311
      },
      {
        time: new Date(2014, 2, 24),
        open: 229.75,
        high: 229.9,
        low: 210.27,
        close: 220.17,
        volume: 11332947
      },
      {
        time: new Date(2014, 2, 25),
        open: 224.14,
        high: 227.05,
        low: 217.9,
        close: 220.44,
        volume: 7865375
      },
      {
        time: new Date(2014, 2, 26),
        open: 221.95,
        high: 222.6,
        low: 211.35,
        close: 212.96,
        volume: 6907306
      },
      {
        time: new Date(2014, 2, 27),
        open: 212.37,
        high: 213.6,
        low: 203.0,
        close: 207.32,
        volume: 9505307
      },
      {
        time: new Date(2014, 2, 28),
        open: 212.8,
        high: 216.72,
        low: 210.27,
        close: 212.37,
        volume: 9684761
      },
      {
        time: new Date(2014, 2, 31),
        open: 216.5,
        high: 216.75,
        low: 206.39,
        close: 208.45,
        volume: 8380023
      },
      {
        time: new Date(2014, 3, 1),
        open: 209.02,
        high: 218.16,
        low: 208.58,
        close: 216.97,
        volume: 7371422
      },
      {
        time: new Date(2014, 3, 2),
        open: 220.0,
        high: 230.89,
        low: 218.05,
        close: 230.29,
        volume: 10782251
      },
      {
        time: new Date(2014, 3, 3),
        open: 230.3,
        high: 235.73,
        low: 222.0,
        close: 225.4,
        volume: 10923734
      },
      {
        time: new Date(2014, 3, 4),
        open: 226.01,
        high: 228.27,
        low: 211.25,
        close: 212.22,
        volume: 11345618
      },
      {
        time: new Date(2014, 3, 7),
        open: 205.81,
        high: 216.2,
        low: 203.51,
        close: 207.52,
        volume: 9855478
      },
      {
        time: new Date(2014, 3, 8),
        open: 210.05,
        high: 216.49,
        low: 206.42,
        close: 215.46,
        volume: 6889296
      },
      {
        time: new Date(2014, 3, 9),
        open: 216.76,
        high: 218.45,
        low: 210.89,
        close: 216.93,
        volume: 5157923
      },
      {
        time: new Date(2014, 3, 10),
        open: 216.82,
        high: 217.5,
        low: 203.79,
        close: 204.19,
        volume: 7211492
      },
      {
        time: new Date(2014, 3, 11),
        open: 200.61,
        high: 207.0,
        low: 198.6,
        close: 203.78,
        volume: 9071300
      },
      {
        time: new Date(2014, 3, 14),
        open: 207.6,
        high: 208.44,
        low: 194.41,
        close: 198.09,
        volume: 7703031
      },
      {
        time: new Date(2014, 3, 15),
        open: 199.09,
        high: 199.29,
        low: 184.32,
        close: 193.91,
        volume: 13667071
      },
      {
        time: new Date(2014, 3, 16),
        open: 197.0,
        high: 199.99,
        low: 190.82,
        close: 199.11,
        volume: 7205319
      },
      {
        time: new Date(2014, 3, 17),
        open: 199.61,
        high: 202.29,
        low: 194.08,
        close: 198.12,
        volume: 5929506
      },
      {
        time: new Date(2014, 3, 21),
        open: 197.08,
        high: 206.2,
        low: 194.0,
        close: 204.38,
        volume: 5266490
      },
      {
        time: new Date(2014, 3, 22),
        open: 206.36,
        high: 219.33,
        low: 205.01,
        close: 218.64,
        volume: 9809333
      },
      {
        time: new Date(2014, 3, 23),
        open: 216.33,
        high: 216.74,
        low: 207.0,
        close: 207.99,
        volume: 7295609
      },
      {
        time: new Date(2014, 3, 24),
        open: 210.81,
        high: 212.8,
        low: 203.2,
        close: 207.86,
        volume: 5504768
      },
      {
        time: new Date(2014, 3, 25),
        open: 202.0,
        high: 206.7,
        low: 197.65,
        close: 199.85,
        volume: 6996658
      },
      {
        time: new Date(2014, 3, 28),
        open: 200.0,
        high: 203.79,
        low: 190.5,
        close: 198.51,
        volume: 7041983
      },
      {
        time: new Date(2014, 3, 29),
        open: 198.21,
        high: 207.15,
        low: 195.53,
        close: 206.92,
        volume: 5787369
      },
      {
        time: new Date(2014, 3, 30),
        open: 203.6,
        high: 208.16,
        low: 201.28,
        close: 207.89,
        volume: 4443453
      },
      {
        time: new Date(2014, 4, 1),
        open: 207.08,
        high: 214.02,
        low: 205.69,
        close: 207.73,
        volume: 5444670
      },
      {
        time: new Date(2014, 4, 2),
        open: 208.6,
        high: 211.36,
        low: 206.52,
        close: 210.91,
        volume: 4091394
      },
      {
        time: new Date(2014, 4, 5),
        open: 209.48,
        high: 217.69,
        low: 208.52,
        close: 216.61,
        volume: 5152343
      },
      {
        time: new Date(2014, 4, 6),
        open: 216.6,
        high: 218.66,
        low: 206.85,
        close: 207.28,
        volume: 5636725
      },
      {
        time: new Date(2014, 4, 7),
        open: 209.64,
        high: 210.2,
        low: 197.25,
        close: 201.35,
        volume: 10179291
      },
      {
        time: new Date(2014, 4, 8),
        open: 182.0,
        high: 194.4,
        low: 178.0,
        close: 178.59,
        volume: 20056591
      },
      {
        time: new Date(2014, 4, 9),
        open: 179.86,
        high: 183.4,
        low: 177.22,
        close: 182.26,
        volume: 8495159
      },
      {
        time: new Date(2014, 4, 12),
        open: 183.87,
        high: 187.19,
        low: 179.88,
        close: 184.67,
        volume: 7004330
      },
      {
        time: new Date(2014, 4, 13),
        open: 183.76,
        high: 191.34,
        low: 183.0,
        close: 190.16,
        volume: 7097242
      },
      {
        time: new Date(2014, 4, 14),
        open: 188.95,
        high: 193.48,
        low: 187.1,
        close: 190.62,
        volume: 5414945
      },
      {
        time: new Date(2014, 4, 15),
        open: 189.98,
        high: 192.66,
        low: 185.3,
        close: 188.59,
        volume: 6046139
      },
      {
        time: new Date(2014, 4, 16),
        open: 188.95,
        high: 192.04,
        low: 187.72,
        close: 191.56,
        volume: 4489312
      },
      {
        time: new Date(2014, 4, 19),
        open: 190.72,
        high: 196.89,
        low: 190.0,
        close: 196.09,
        volume: 4571660
      },
      {
        time: new Date(2014, 4, 20),
        open: 196.94,
        high: 199.33,
        low: 193.07,
        close: 195.3,
        volume: 5553877
      },
      {
        time: new Date(2014, 4, 21),
        open: 196.18,
        high: 199.87,
        low: 194.79,
        close: 199.45,
        volume: 5290755
      },
      {
        time: new Date(2014, 4, 22),
        open: 200.35,
        high: 206.88,
        low: 199.56,
        close: 204.88,
        volume: 6216255
      },
      {
        time: new Date(2014, 4, 23),
        open: 204.53,
        high: 207.76,
        low: 202.5,
        close: 207.3,
        volume: 4010931
      },
      {
        time: new Date(2014, 4, 27),
        open: 208.52,
        high: 213.87,
        low: 207.7,
        close: 211.56,
        volume: 5346788
      },
      {
        time: new Date(2014, 4, 28),
        open: 210.02,
        high: 212.77,
        low: 205.26,
        close: 210.24,
        volume: 5496278
      },
      {
        time: new Date(2014, 4, 29),
        open: 210.57,
        high: 212.49,
        low: 207.72,
        close: 210.24,
        volume: 3694596
      },
      {
        time: new Date(2014, 4, 30),
        open: 210.3,
        high: 214.8,
        low: 207.02,
        close: 207.77,
        volume: 5586068
      },
      {
        time: new Date(2014, 5, 2),
        open: 207.33,
        high: 209.35,
        low: 201.67,
        close: 204.7,
        volume: 4668115
      },
      {
        time: new Date(2014, 5, 3),
        open: 203.49,
        high: 208.0,
        low: 202.59,
        close: 204.94,
        volume: 3866182
      },
      {
        time: new Date(2014, 5, 4),
        open: 204.35,
        high: 206.26,
        low: 200.4,
        close: 203.99,
        volume: 3434502
      },
      {
        time: new Date(2014, 5, 5),
        open: 204.47,
        high: 209.2,
        low: 204.05,
        close: 206.9,
        volume: 4059285
      },
      {
        time: new Date(2014, 5, 6),
        open: 209.75,
        high: 210.81,
        low: 207.18,
        close: 208.17,
        volume: 3074900
      },
      {
        time: new Date(2014, 5, 9),
        open: 207.95,
        high: 209.99,
        low: 204.2,
        close: 205.31,
        volume: 2813066
      },
      {
        time: new Date(2014, 5, 10),
        open: 204.43,
        high: 206.97,
        low: 201.55,
        close: 202.3,
        volume: 3522336
      },
      {
        time: new Date(2014, 5, 11),
        open: 201.5,
        high: 205.0,
        low: 199.25,
        close: 204.47,
        volume: 3980491
      },
      {
        time: new Date(2014, 5, 12),
        open: 205.1,
        high: 209.88,
        low: 202.71,
        close: 203.52,
        volume: 5997144
      },
      {
        time: new Date(2014, 5, 13),
        open: 204.78,
        high: 206.79,
        low: 201.58,
        close: 206.42,
        volume: 3546789
      },
      {
        time: new Date(2014, 5, 16),
        open: 206.76,
        high: 225.49,
        low: 206.26,
        close: 224.61,
        volume: 13246352
      },
      {
        time: new Date(2014, 5, 17),
        open: 224.11,
        high: 235.54,
        low: 222.85,
        close: 231.67,
        volume: 13304907
      },
      {
        time: new Date(2014, 5, 18),
        open: 231.5,
        high: 231.71,
        low: 226.12,
        close: 227.12,
        volume: 6947053
      },
      {
        time: new Date(2014, 5, 19),
        open: 228.88,
        high: 235.31,
        low: 227.0,
        close: 227.79,
        volume: 8801907
      },
      {
        time: new Date(2014, 5, 20),
        open: 228.52,
        high: 231.29,
        low: 226.2,
        close: 229.59,
        volume: 4908077
      },
      {
        time: new Date(2014, 5, 23),
        open: 229.51,
        high: 238.99,
        low: 228.22,
        close: 237.22,
        volume: 7800189
      },
      {
        time: new Date(2014, 5, 24),
        open: 238.97,
        high: 241.88,
        low: 231.63,
        close: 232.5,
        volume: 8081109
      },
      {
        time: new Date(2014, 5, 25),
        open: 233.05,
        high: 237.55,
        low: 230.24,
        close: 236.89,
        volume: 5803257
      },
      {
        time: new Date(2014, 5, 26),
        open: 237.17,
        high: 240.4,
        low: 234.21,
        close: 235.6,
        volume: 5122972
      },
      {
        time: new Date(2014, 5, 27),
        open: 234.69,
        high: 240.0,
        low: 234.5,
        close: 239.06,
        volume: 5638787
      },
      {
        time: new Date(2014, 5, 30),
        open: 239.55,
        high: 244.49,
        low: 239.0,
        close: 240.06,
        volume: 4833602
      },
      {
        time: new Date(2014, 6, 1),
        open: 242.46,
        high: 243.44,
        low: 238.7,
        close: 239.72,
        volume: 4341242
      },
      {
        time: new Date(2014, 6, 2),
        open: 240.66,
        high: 242.33,
        low: 227.07,
        close: 229.42,
        volume: 8035072
      },
      {
        time: new Date(2014, 6, 3),
        open: 231.29,
        high: 231.9,
        low: 224.0,
        close: 229.25,
        volume: 5166716
      },
      {
        time: new Date(2014, 6, 7),
        open: 227.5,
        high: 229.78,
        low: 220.4,
        close: 222.66,
        volume: 5901080
      },
      {
        time: new Date(2014, 6, 8),
        open: 218.65,
        high: 220.96,
        low: 214.27,
        close: 219.07,
        volume: 7846165
      },
      {
        time: new Date(2014, 6, 9),
        open: 221.27,
        high: 224.22,
        low: 219.21,
        close: 223.06,
        volume: 4117729
      },
      {
        time: new Date(2014, 6, 10),
        open: 217.18,
        high: 222.22,
        low: 216.04,
        close: 219.46,
        volume: 4865246
      },
      {
        time: new Date(2014, 6, 11),
        open: 220.61,
        high: 221.6,
        low: 217.6,
        close: 218.13,
        volume: 3307113
      },
      {
        time: new Date(2014, 6, 14),
        open: 219.99,
        high: 228.79,
        low: 215.45,
        close: 226.7,
        volume: 7208573
      },
      {
        time: new Date(2014, 6, 15),
        open: 226.73,
        high: 227.65,
        low: 218.1,
        close: 219.58,
        volume: 5732031
      },
      {
        time: new Date(2014, 6, 16),
        open: 221.82,
        high: 224.8,
        low: 216.82,
        close: 217.16,
        volume: 4051097
      },
      {
        time: new Date(2014, 6, 17),
        open: 216.16,
        high: 220.55,
        low: 213.6,
        close: 215.4,
        volume: 4650956
      },
      {
        time: new Date(2014, 6, 18),
        open: 215.95,
        high: 221.21,
        low: 215.93,
        close: 220.02,
        volume: 4260618
      },
      {
        time: new Date(2014, 6, 21),
        open: 217.25,
        high: 223.21,
        low: 216.72,
        close: 220.54,
        volume: 3825251
      },
      {
        time: new Date(2014, 6, 22),
        open: 222.19,
        high: 223.3,
        low: 219.11,
        close: 219.58,
        volume: 2732485
      },
      {
        time: new Date(2014, 6, 23),
        open: 220.01,
        high: 224.75,
        low: 219.43,
        close: 222.49,
        volume: 3088731
      },
      {
        time: new Date(2014, 6, 24),
        open: 223.25,
        high: 225.1,
        low: 220.8,
        close: 223.54,
        volume: 3248410
      },
      {
        time: new Date(2014, 6, 25),
        open: 222.72,
        high: 226.97,
        low: 221.75,
        close: 223.57,
        volume: 3090383
      },
      {
        time: new Date(2014, 6, 28),
        open: 224.25,
        high: 232.0,
        low: 221.4,
        close: 224.82,
        volume: 6517611
      },
      {
        time: new Date(2014, 6, 29),
        open: 226.61,
        high: 228.3,
        low: 224.86,
        close: 225.01,
        volume: 3387187
      },
      {
        time: new Date(2014, 6, 30),
        open: 221.92,
        high: 229.6,
        low: 221.04,
        close: 228.92,
        volume: 4927823
      },
      {
        time: new Date(2014, 6, 31),
        open: 229.26,
        high: 231.4,
        low: 221.5,
        close: 223.3,
        volume: 7749058
      },
      {
        time: new Date(2014, 7, 1),
        open: 226.09,
        high: 237.5,
        low: 226.0,
        close: 233.27,
        volume: 11898133
      },
      {
        time: new Date(2014, 7, 4),
        open: 234.38,
        high: 240.5,
        low: 233.27,
        close: 238.52,
        volume: 5967406
      },
      {
        time: new Date(2014, 7, 5),
        open: 237.47,
        high: 242.99,
        low: 235.69,
        close: 238.49,
        volume: 5388581
      },
      {
        time: new Date(2014, 7, 6),
        open: 238.9,
        high: 251.42,
        low: 238.58,
        close: 248.93,
        volume: 9249265
      },
      {
        time: new Date(2014, 7, 7),
        open: 250.12,
        high: 256.69,
        low: 249.12,
        close: 252.39,
        volume: 7478926
      },
      {
        time: new Date(2014, 7, 8),
        open: 251.16,
        high: 251.76,
        low: 246.5,
        close: 248.13,
        volume: 5099061
      },
      {
        time: new Date(2014, 7, 11),
        open: 255.48,
        high: 263.74,
        low: 255.0,
        close: 259.32,
        volume: 8101276
      },
      {
        time: new Date(2014, 7, 12),
        open: 258.08,
        high: 260.3,
        low: 254.58,
        close: 259.96,
        volume: 6390412
      },
      {
        time: new Date(2014, 7, 13),
        open: 262.01,
        high: 265.64,
        low: 259.61,
        close: 260.31,
        volume: 6932628
      },
      {
        time: new Date(2014, 7, 14),
        open: 262.49,
        high: 263.0,
        low: 258.54,
        close: 261.38,
        volume: 4126634
      },
      {
        time: new Date(2014, 7, 15),
        open: 261.48,
        high: 262.09,
        low: 258.5,
        close: 262.01,
        volume: 3867874
      },
      {
        time: new Date(2014, 7, 18),
        open: 263.25,
        high: 267.26,
        low: 259.75,
        close: 259.94,
        volume: 5849231
      },
      {
        time: new Date(2014, 7, 19),
        open: 258.87,
        high: 259.33,
        low: 251.62,
        close: 256.76,
        volume: 5340136
      },
      {
        time: new Date(2014, 7, 20),
        open: 254.67,
        high: 258.74,
        low: 253.0,
        close: 255.71,
        volume: 3027863
      },
      {
        time: new Date(2014, 7, 21),
        open: 256.52,
        high: 258.8,
        low: 253.26,
        close: 254.34,
        volume: 2919241
      },
      {
        time: new Date(2014, 7, 22),
        open: 254.54,
        high: 256.95,
        low: 252.61,
        close: 256.78,
        volume: 2836959
      },
      {
        time: new Date(2014, 7, 25),
        open: 258.19,
        high: 263.68,
        low: 258.19,
        close: 262.55,
        volume: 4318053
      },
      {
        time: new Date(2014, 7, 26),
        open: 264.98,
        high: 265.5,
        low: 261.66,
        close: 261.74,
        volume: 3822572
      },
      {
        time: new Date(2014, 7, 27),
        open: 263.5,
        high: 264.24,
        low: 260.29,
        close: 263.25,
        volume: 2990532
      },
      {
        time: new Date(2014, 7, 28),
        open: 261.89,
        high: 264.48,
        low: 261.64,
        close: 263.86,
        volume: 2854737
      },
      {
        time: new Date(2014, 7, 29),
        open: 268.7,
        high: 272.0,
        low: 267.51,
        close: 269.7,
        volume: 6453958
      },
      {
        time: new Date(2014, 8, 2),
        open: 275.5,
        high: 284.89,
        low: 274.3,
        close: 284.12,
        volume: 9852351
      },
      {
        time: new Date(2014, 8, 3),
        open: 287.67,
        high: 288.0,
        low: 280.1,
        close: 281.19,
        volume: 6779735
      },
      {
        time: new Date(2014, 8, 4),
        open: 284.01,
        high: 291.42,
        low: 280.4,
        close: 286.04,
        volume: 8341749
      },
      {
        time: new Date(2014, 8, 5),
        open: 282.55,
        high: 282.9,
        low: 272.51,
        close: 277.39,
        volume: 11176167
      },
      {
        time: new Date(2014, 8, 8),
        open: 277.62,
        high: 284.88,
        low: 277.52,
        close: 282.11,
        volume: 5505040
      },
      {
        time: new Date(2014, 8, 9),
        open: 282.99,
        high: 285.49,
        low: 277.0,
        close: 278.48,
        volume: 4567958
      },
      {
        time: new Date(2014, 8, 10),
        open: 279.5,
        high: 281.41,
        low: 273.66,
        close: 281.1,
        volume: 3785988
      },
      {
        time: new Date(2014, 8, 11),
        open: 280.46,
        high: 284.79,
        low: 278.63,
        close: 280.31,
        volume: 3768584
      },
      {
        time: new Date(2014, 8, 12),
        open: 280.5,
        high: 282.39,
        low: 277.0,
        close: 279.2,
        volume: 3328302
      },
      {
        time: new Date(2014, 8, 15),
        open: 274.37,
        high: 274.4,
        low: 249.13,
        close: 253.86,
        volume: 16464952
      },
      {
        time: new Date(2014, 8, 16),
        open: 255.15,
        high: 262.46,
        low: 252.42,
        close: 260.74,
        volume: 8303972
      },
      {
        time: new Date(2014, 8, 17),
        open: 262.41,
        high: 264.7,
        low: 259.5,
        close: 261.38,
        volume: 5179923
      },
      {
        time: new Date(2014, 8, 18),
        open: 263.36,
        high: 265.6,
        low: 262.32,
        close: 263.82,
        volume: 3699314
      },
      {
        time: new Date(2014, 8, 19),
        open: 257.99,
        high: 261.43,
        low: 255.27,
        close: 259.32,
        volume: 6811714
      },
      {
        time: new Date(2014, 8, 22),
        open: 255.0,
        high: 256.02,
        low: 244.71,
        close: 250.03,
        volume: 8222963
      },
      {
        time: new Date(2014, 8, 23),
        open: 245.22,
        high: 253.8,
        low: 245.0,
        close: 250.41,
        volume: 5660048
      },
      {
        time: new Date(2014, 8, 24),
        open: 251.12,
        high: 252.84,
        low: 247.04,
        close: 252.14,
        volume: 3754376
      },
      {
        time: new Date(2014, 8, 25),
        open: 252.52,
        high: 254.96,
        low: 246.1,
        close: 246.95,
        volume: 4843712
      },
      {
        time: new Date(2014, 8, 26),
        open: 248.25,
        high: 249.73,
        low: 246.07,
        close: 246.6,
        volume: 3798841
      },
      {
        time: new Date(2014, 8, 29),
        open: 244.0,
        high: 248.64,
        low: 241.38,
        close: 245.26,
        volume: 4854687
      },
      {
        time: new Date(2014, 8, 30),
        open: 246.92,
        high: 247.65,
        low: 240.12,
        close: 242.68,
        volume: 4248127
      },
      {
        time: new Date(2014, 9, 1),
        open: 242.2,
        high: 242.66,
        low: 235.65,
        close: 240.24,
        volume: 5946510
      },
      {
        time: new Date(2014, 9, 2),
        open: 250.2,
        high: 252.79,
        low: 245.36,
        close: 251.42,
        volume: 9002001
      },
      {
        time: new Date(2014, 9, 3),
        open: 253.06,
        high: 256.5,
        low: 251.03,
        close: 255.21,
        volume: 5408665
      },
      {
        time: new Date(2014, 9, 6),
        open: 259.13,
        high: 262.49,
        low: 257.8,
        close: 260.62,
        volume: 7719055
      },
      {
        time: new Date(2014, 9, 7),
        open: 258.53,
        high: 261.46,
        low: 255.73,
        close: 259.57,
        volume: 4491569
      },
      {
        time: new Date(2014, 9, 8),
        open: 260.1,
        high: 262.88,
        low: 252.64,
        close: 259.28,
        volume: 5062615
      },
      {
        time: new Date(2014, 9, 9),
        open: 262.25,
        high: 265.54,
        low: 254.4,
        close: 257.01,
        volume: 7361316
      },
      {
        time: new Date(2014, 9, 10),
        open: 244.64,
        high: 245.89,
        low: 235.2,
        close: 236.91,
        volume: 12898275
      },
      {
        time: new Date(2014, 9, 13),
        open: 238.57,
        high: 238.96,
        low: 221.0,
        close: 224.59,
        volume: 11276552
      },
      {
        time: new Date(2014, 9, 14),
        open: 228.25,
        high: 232.47,
        low: 223.0,
        close: 227.06,
        volume: 7112339
      },
      {
        time: new Date(2014, 9, 15),
        open: 220.0,
        high: 230.99,
        low: 217.32,
        close: 229.7,
        volume: 9151648
      },
      {
        time: new Date(2014, 9, 16),
        open: 219.72,
        high: 229.92,
        low: 219.1,
        close: 226.35,
        volume: 5404565
      },
      {
        time: new Date(2014, 9, 17),
        open: 233.38,
        high: 234.77,
        low: 226.55,
        close: 227.48,
        volume: 10551850
      },
      {
        time: new Date(2014, 9, 20),
        open: 226.72,
        high: 232.4,
        low: 225.51,
        close: 230.47,
        volume: 3499686
      },
      {
        time: new Date(2014, 9, 21),
        open: 234.27,
        high: 235.39,
        low: 230.8,
        close: 235.34,
        volume: 4130345
      },
      {
        time: new Date(2014, 9, 22),
        open: 233.19,
        high: 237.39,
        low: 230.56,
        close: 231.1,
        volume: 4123397
      },
      {
        time: new Date(2014, 9, 23),
        open: 234.66,
        high: 236.28,
        low: 232.0,
        close: 235.29,
        volume: 3499882
      },
      {
        time: new Date(2014, 9, 24),
        open: 236.27,
        high: 237.8,
        low: 231.2,
        close: 235.24,
        volume: 3466927
      },
      {
        time: new Date(2014, 9, 27),
        open: 234.25,
        high: 234.61,
        low: 220.31,
        close: 221.67,
        volume: 9553348
      },
      {
        time: new Date(2014, 9, 28),
        open: 229.6,
        high: 244.6,
        low: 228.25,
        close: 242.77,
        volume: 10516297
      },
      {
        time: new Date(2014, 9, 29),
        open: 241.13,
        high: 241.5,
        low: 235.64,
        close: 238.1,
        volume: 4967640
      },
      {
        time: new Date(2014, 9, 30),
        open: 238.14,
        high: 240.5,
        low: 235.06,
        close: 238.66,
        volume: 3228371
      },
      {
        time: new Date(2014, 9, 31),
        open: 242.51,
        high: 243.12,
        low: 238.75,
        close: 241.7,
        volume: 3775327
      },
      {
        time: new Date(2014, 10, 3),
        open: 243.0,
        high: 247.56,
        low: 241.32,
        close: 242.59,
        volume: 4207268
      },
      {
        time: new Date(2014, 10, 4),
        open: 240.49,
        high: 242.35,
        low: 236.53,
        close: 238.93,
        volume: 3682572
      },
      {
        time: new Date(2014, 10, 5),
        open: 241.0,
        high: 241.36,
        low: 230.53,
        close: 230.97,
        volume: 9045925
      },
      {
        time: new Date(2014, 10, 6),
        open: 234.49,
        high: 246.69,
        low: 228.5,
        close: 241.22,
        volume: 15354717
      },
      {
        time: new Date(2014, 10, 7),
        open: 242.19,
        high: 242.84,
        low: 237.2,
        close: 240.2,
        volume: 5161023
      },
      {
        time: new Date(2014, 10, 10),
        open: 239.11,
        high: 242.88,
        low: 236.8,
        close: 241.93,
        volume: 4577208
      },
      {
        time: new Date(2014, 10, 11),
        open: 242.55,
        high: 251.82,
        low: 242.0,
        close: 251.08,
        volume: 7952565
      },
      {
        time: new Date(2014, 10, 12),
        open: 249.72,
        high: 252.34,
        low: 245.58,
        close: 249.1,
        volume: 5870818
      },
      {
        time: new Date(2014, 10, 13),
        open: 250.62,
        high: 255.75,
        low: 250.25,
        close: 251.7,
        volume: 6236036
      },
      {
        time: new Date(2014, 10, 14),
        open: 250.0,
        high: 258.85,
        low: 248.5,
        close: 258.68,
        volume: 6101145
      },
      {
        time: new Date(2014, 10, 17),
        open: 257.49,
        high: 259.0,
        low: 252.02,
        close: 253.98,
        volume: 4025695
      },
      {
        time: new Date(2014, 10, 18),
        open: 255.86,
        high: 259.99,
        low: 255.51,
        close: 257.7,
        volume: 4474294
      },
      {
        time: new Date(2014, 10, 19),
        open: 250.61,
        high: 251.88,
        low: 245.6,
        close: 247.74,
        volume: 7918486
      },
      {
        time: new Date(2014, 10, 20),
        open: 247.95,
        high: 250.93,
        low: 246.0,
        close: 248.71,
        volume: 3587220
      },
      {
        time: new Date(2014, 10, 21),
        open: 252.21,
        high: 252.78,
        low: 242.17,
        close: 242.78,
        volume: 7485059
      },
      {
        time: new Date(2014, 10, 24),
        open: 245.2,
        high: 247.6,
        low: 240.64,
        close: 246.72,
        volume: 4789708
      },
      {
        time: new Date(2014, 10, 25),
        open: 247.35,
        high: 249.72,
        low: 246.09,
        close: 248.09,
        volume: 3159804
      },
      {
        time: new Date(2014, 10, 26),
        open: 248.34,
        high: 249.0,
        low: 246.6,
        close: 248.44,
        volume: 1981819
      },
      {
        time: new Date(2014, 10, 28),
        open: 245.35,
        high: 246.69,
        low: 242.52,
        close: 244.52,
        volume: 2119688
      },
      {
        time: new Date(2014, 11, 1),
        open: 241.16,
        high: 242.47,
        low: 229.01,
        close: 231.64,
        volume: 8619351
      },
      {
        time: new Date(2014, 11, 2),
        open: 234.57,
        high: 234.88,
        low: 228.0,
        close: 231.43,
        volume: 5887046
      },
      {
        time: new Date(2014, 11, 3),
        open: 226.25,
        high: 229.72,
        low: 225.5,
        close: 229.3,
        volume: 5307733
      },
      {
        time: new Date(2014, 11, 4),
        open: 228.6,
        high: 230.9,
        low: 227.81,
        close: 228.28,
        volume: 3879208
      },
      {
        time: new Date(2014, 11, 5),
        open: 228.67,
        high: 229.39,
        low: 222.26,
        close: 223.71,
        volume: 6063619
      },
      {
        time: new Date(2014, 11, 8),
        open: 221.54,
        high: 224.86,
        low: 212.34,
        close: 214.36,
        volume: 9225619
      },
      {
        time: new Date(2014, 11, 9),
        open: 209.34,
        high: 217.73,
        low: 204.27,
        close: 216.89,
        volume: 9431502
      },
      {
        time: new Date(2014, 11, 10),
        open: 214.13,
        high: 216.77,
        low: 207.7,
        close: 209.84,
        volume: 7314139
      },
      {
        time: new Date(2014, 11, 11),
        open: 210.53,
        high: 215.43,
        low: 208.23,
        close: 208.88,
        volume: 6694398
      },
      {
        time: new Date(2014, 11, 12),
        open: 204.82,
        high: 211.68,
        low: 204.5,
        close: 207.0,
        volume: 7173782
      },
      {
        time: new Date(2014, 11, 15),
        open: 209.29,
        high: 209.8,
        low: 202.67,
        close: 204.04,
        volume: 5218252
      },
      {
        time: new Date(2014, 11, 16),
        open: 200.89,
        high: 203.68,
        low: 195.37,
        close: 197.81,
        volume: 8426105
      },
      {
        time: new Date(2014, 11, 17),
        open: 193.06,
        high: 206.65,
        low: 192.65,
        close: 205.82,
        volume: 7367834
      },
      {
        time: new Date(2014, 11, 18),
        open: 212.38,
        high: 218.44,
        low: 211.8,
        close: 218.26,
        volume: 7483349
      },
      {
        time: new Date(2014, 11, 19),
        open: 220.19,
        high: 220.4,
        low: 214.5,
        close: 219.29,
        volume: 6910461
      },
      {
        time: new Date(2014, 11, 22),
        open: 220.0,
        high: 224.06,
        low: 218.26,
        close: 222.6,
        volume: 4806917
      },
      {
        time: new Date(2014, 11, 23),
        open: 223.81,
        high: 224.32,
        low: 219.52,
        close: 220.97,
        volume: 4513321
      },
      {
        time: new Date(2014, 11, 24),
        open: 219.77,
        high: 222.5,
        low: 219.25,
        close: 222.26,
        volume: 1333518
      },
      {
        time: new Date(2014, 11, 26),
        open: 221.51,
        high: 228.5,
        low: 221.5,
        close: 227.82,
        volume: 3327016
      },
      {
        time: new Date(2014, 11, 29),
        open: 226.9,
        high: 227.91,
        low: 224.02,
        close: 225.71,
        volume: 2811828
      },
      {
        time: new Date(2014, 11, 30),
        open: 223.99,
        high: 225.65,
        low: 221.4,
        close: 222.23,
        volume: 2903242
      },
      {
        time: new Date(2014, 11, 31),
        open: 223.09,
        high: 225.68,
        low: 222.25,
        close: 222.41,
        volume: 2402097
      },
      {
        time: new Date(2015, 0, 2),
        open: 222.87,
        high: 223.25,
        low: 213.26,
        close: 219.31,
        volume: 4764443
      },
      {
        time: new Date(2015, 0, 5),
        open: 214.55,
        high: 216.5,
        low: 207.16,
        close: 210.09,
        volume: 5368477
      },
      {
        time: new Date(2015, 0, 6),
        open: 210.06,
        high: 214.2,
        low: 204.21,
        close: 211.28,
        volume: 6261936
      },
      {
        time: new Date(2015, 0, 7),
        open: 213.35,
        high: 214.78,
        low: 209.78,
        close: 210.95,
        volume: 2968390
      },
      {
        time: new Date(2015, 0, 8),
        open: 212.81,
        high: 213.8,
        low: 210.01,
        close: 210.62,
        volume: 3442509
      },
      {
        time: new Date(2015, 0, 9),
        open: 208.92,
        high: 209.98,
        low: 204.96,
        close: 206.66,
        volume: 4668295
      },
      {
        time: new Date(2015, 0, 12),
        open: 203.05,
        high: 204.47,
        low: 199.25,
        close: 202.21,
        volume: 5950280
      },
      {
        time: new Date(2015, 0, 13),
        open: 203.32,
        high: 207.61,
        low: 200.91,
        close: 204.25,
        volume: 4477320
      },
      {
        time: new Date(2015, 0, 14),
        open: 185.83,
        high: 195.2,
        low: 185.0,
        close: 192.69,
        volume: 11551855
      },
      {
        time: new Date(2015, 0, 15),
        open: 194.49,
        high: 195.75,
        low: 190.0,
        close: 191.87,
        volume: 5216524
      },
      {
        time: new Date(2015, 0, 16),
        open: 190.7,
        high: 194.49,
        low: 189.65,
        close: 193.07,
        volume: 3603158
      },
      {
        time: new Date(2015, 0, 20),
        open: 193.87,
        high: 194.12,
        low: 187.04,
        close: 191.93,
        volume: 4503182
      },
      {
        time: new Date(2015, 0, 21),
        open: 189.55,
        high: 198.68,
        low: 189.51,
        close: 196.57,
        volume: 4153043
      },
      {
        time: new Date(2015, 0, 22),
        open: 197.0,
        high: 203.24,
        low: 195.2,
        close: 201.62,
        volume: 4116905
      },
      {
        time: new Date(2015, 0, 23),
        open: 200.29,
        high: 203.5,
        low: 198.33,
        close: 201.29,
        volume: 3442371
      },
      {
        time: new Date(2015, 0, 26),
        open: 201.83,
        high: 208.62,
        low: 201.05,
        close: 206.55,
        volume: 3234522
      },
      {
        time: new Date(2015, 0, 27),
        open: 204.42,
        high: 208.03,
        low: 203.3,
        close: 205.98,
        volume: 2781024
      },
      {
        time: new Date(2015, 0, 28),
        open: 206.11,
        high: 206.37,
        low: 198.42,
        close: 199.37,
        volume: 3149606
      },
      {
        time: new Date(2015, 0, 29),
        open: 201.07,
        high: 205.98,
        low: 196.5,
        close: 205.2,
        volume: 3548106
      },
      {
        time: new Date(2015, 0, 30),
        open: 203.96,
        high: 207.47,
        low: 203.0,
        close: 203.6,
        volume: 3006959
      },
      {
        time: new Date(2015, 1, 2),
        open: 203.97,
        high: 211.95,
        low: 203.3,
        close: 210.94,
        volume: 4149186
      },
      {
        time: new Date(2015, 1, 3),
        open: 213.22,
        high: 220.37,
        low: 211.27,
        close: 218.36,
        volume: 4826244
      },
      {
        time: new Date(2015, 1, 4),
        open: 218.29,
        high: 221.48,
        low: 216.8,
        close: 218.55,
        volume: 3305377
      },
      {
        time: new Date(2015, 1, 5),
        open: 219.88,
        high: 225.48,
        low: 219.64,
        close: 220.99,
        volume: 3522947
      },
      {
        time: new Date(2015, 1, 6),
        open: 222.0,
        high: 223.4,
        low: 216.5,
        close: 217.36,
        volume: 3243931
      },
      {
        time: new Date(2015, 1, 9),
        open: 215.38,
        high: 217.93,
        low: 211.99,
        close: 217.48,
        volume: 3472423
      },
      {
        time: new Date(2015, 1, 10),
        open: 217.55,
        high: 220.5,
        low: 215.0,
        close: 216.29,
        volume: 5390542
      },
      {
        time: new Date(2015, 1, 11),
        open: 212.21,
        high: 214.74,
        low: 207.28,
        close: 212.8,
        volume: 9769102
      },
      {
        time: new Date(2015, 1, 12),
        open: 193.57,
        high: 203.09,
        low: 193.28,
        close: 202.88,
        volume: 15649607
      },
      {
        time: new Date(2015, 1, 13),
        open: 202.9,
        high: 205.99,
        low: 200.91,
        close: 203.77,
        volume: 6191003
      },
      {
        time: new Date(2015, 1, 17),
        open: 205.7,
        high: 205.7,
        low: 201.5,
        close: 204.35,
        volume: 3979647
      },
      {
        time: new Date(2015, 1, 18),
        open: 204.17,
        high: 206.17,
        low: 202.6,
        close: 204.46,
        volume: 2713598
      },
      {
        time: new Date(2015, 1, 19),
        open: 205.0,
        high: 212.44,
        low: 203.75,
        close: 211.7,
        volume: 5154148
      },
      {
        time: new Date(2015, 1, 20),
        open: 210.78,
        high: 217.6,
        low: 209.81,
        close: 217.11,
        volume: 5982089
      },
      {
        time: new Date(2015, 1, 23),
        open: 215.66,
        high: 218.2,
        low: 206.33,
        close: 207.34,
        volume: 8499775
      },
      {
        time: new Date(2015, 1, 24),
        open: 207.29,
        high: 207.29,
        low: 201.7,
        close: 204.11,
        volume: 6603560
      },
      {
        time: new Date(2015, 1, 25),
        open: 204.94,
        high: 207.14,
        low: 202.58,
        close: 203.76,
        volume: 3909520
      },
      {
        time: new Date(2015, 1, 26),
        open: 204.0,
        high: 211.09,
        low: 202.22,
        close: 207.19,
        volume: 6472855
      },
      {
        time: new Date(2015, 1, 27),
        open: 206.9,
        high: 208.55,
        low: 202.8,
        close: 203.34,
        volume: 3882084
      },
      {
        time: new Date(2015, 2, 2),
        open: 202.7,
        high: 203.34,
        low: 195.82,
        close: 197.32,
        volume: 7922065
      },
      {
        time: new Date(2015, 2, 3),
        open: 196.81,
        high: 200.24,
        low: 195.32,
        close: 199.56,
        volume: 4432329
      },
      {
        time: new Date(2015, 2, 4),
        open: 199.25,
        high: 202.52,
        low: 197.21,
        close: 202.44,
        volume: 4221962
      },
      {
        time: new Date(2015, 2, 5),
        open: 202.85,
        high: 206.19,
        low: 200.15,
        close: 200.63,
        volume: 4877015
      },
      {
        time: new Date(2015, 2, 6),
        open: 199.21,
        high: 200.75,
        low: 192.15,
        close: 193.88,
        volume: 6712438
      },
      {
        time: new Date(2015, 2, 9),
        open: 194.39,
        high: 194.49,
        low: 188.25,
        close: 190.88,
        volume: 6736724
      },
      {
        time: new Date(2015, 2, 10),
        open: 188.46,
        high: 193.5,
        low: 187.6,
        close: 190.32,
        volume: 5579691
      },
      {
        time: new Date(2015, 2, 11),
        open: 191.15,
        high: 196.18,
        low: 191.01,
        close: 193.74,
        volume: 4974871
      },
      {
        time: new Date(2015, 2, 12),
        open: 193.75,
        high: 194.45,
        low: 189.75,
        close: 191.07,
        volume: 4149294
      },
      {
        time: new Date(2015, 2, 13),
        open: 188.95,
        high: 191.75,
        low: 187.32,
        close: 188.68,
        volume: 5434298
      },
      {
        time: new Date(2015, 2, 16),
        open: 192.0,
        high: 195.91,
        low: 189.8,
        close: 195.7,
        volume: 5628783
      },
      {
        time: new Date(2015, 2, 17),
        open: 195.43,
        high: 198.71,
        low: 193.94,
        close: 194.73,
        volume: 4894052
      },
      {
        time: new Date(2015, 2, 18),
        open: 194.96,
        high: 200.88,
        low: 193.11,
        close: 200.71,
        volume: 4820936
      },
      {
        time: new Date(2015, 2, 19),
        open: 202.0,
        high: 204.59,
        low: 194.53,
        close: 195.65,
        volume: 8475244
      },
      {
        time: new Date(2015, 2, 20),
        open: 197.45,
        high: 198.99,
        low: 195.62,
        close: 198.08,
        volume: 4269467
      },
      {
        time: new Date(2015, 2, 23),
        open: 198.5,
        high: 200.5,
        low: 197.47,
        close: 199.63,
        volume: 2631626
      },
      {
        time: new Date(2015, 2, 24),
        open: 201.58,
        high: 203.79,
        low: 199.75,
        close: 201.72,
        volume: 3649860
      },
      {
        time: new Date(2015, 2, 25),
        open: 198.27,
        high: 198.59,
        low: 192.7,
        close: 194.3,
        volume: 5730389
      },
      {
        time: new Date(2015, 2, 26),
        open: 193.92,
        high: 194.79,
        low: 189.7,
        close: 190.4,
        volume: 4127956
      },
      {
        time: new Date(2015, 2, 27),
        open: 189.07,
        high: 189.29,
        low: 181.4,
        close: 185.0,
        volume: 8604947
      },
      {
        time: new Date(2015, 2, 30),
        open: 185.85,
        high: 192.25,
        low: 181.8,
        close: 190.57,
        volume: 10089516
      },
      {
        time: new Date(2015, 2, 31),
        open: 193.53,
        high: 193.76,
        low: 188.41,
        close: 188.77,
        volume: 5026569
      },
      {
        time: new Date(2015, 3, 1),
        open: 188.7,
        high: 192.3,
        low: 186.05,
        close: 187.59,
        volume: 3794621
      },
      {
        time: new Date(2015, 3, 2),
        open: 190.23,
        high: 193.23,
        low: 190.0,
        close: 191.0,
        volume: 5010368
      },
      {
        time: new Date(2015, 3, 6),
        open: 198.0,
        high: 207.75,
        low: 197.5,
        close: 203.1,
        volume: 12455811
      },
      {
        time: new Date(2015, 3, 7),
        open: 202.51,
        high: 205.06,
        low: 201.14,
        close: 203.25,
        volume: 4347864
      },
      {
        time: new Date(2015, 3, 8),
        open: 208.2,
        high: 210.9,
        low: 205.87,
        close: 207.67,
        volume: 6303117
      },
      {
        time: new Date(2015, 3, 9),
        open: 208.43,
        high: 210.37,
        low: 206.12,
        close: 210.09,
        volume: 3800225
      },
      {
        time: new Date(2015, 3, 10),
        open: 209.85,
        high: 211.65,
        low: 209.0,
        close: 210.9,
        volume: 4067676
      },
      {
        time: new Date(2015, 3, 13),
        open: 210.44,
        high: 213.0,
        low: 209.05,
        close: 209.78,
        volume: 3758230
      },
      {
        time: new Date(2015, 3, 14),
        open: 208.57,
        high: 209.49,
        low: 205.5,
        close: 207.46,
        volume: 3025963
      },
      {
        time: new Date(2015, 3, 15),
        open: 207.46,
        high: 209.59,
        low: 206.6,
        close: 207.83,
        volume: 1952378
      },
      {
        time: new Date(2015, 3, 16),
        open: 207.7,
        high: 209.17,
        low: 206.29,
        close: 206.7,
        volume: 1659059
      },
      {
        time: new Date(2015, 3, 17),
        open: 204.99,
        high: 206.88,
        low: 203.5,
        close: 206.79,
        volume: 2469926
      },
      {
        time: new Date(2015, 3, 20),
        open: 206.78,
        high: 207.85,
        low: 203.85,
        close: 205.27,
        volume: 2559251
      },
      {
        time: new Date(2015, 3, 21),
        open: 205.8,
        high: 210.75,
        low: 204.31,
        close: 209.41,
        volume: 3432541
      },
      {
        time: new Date(2015, 3, 22),
        open: 212.5,
        high: 221.88,
        low: 211.69,
        close: 219.44,
        volume: 7863037
      },
      {
        time: new Date(2015, 3, 23),
        open: 218.27,
        high: 221.48,
        low: 217.15,
        close: 218.6,
        volume: 4411184
      },
      {
        time: new Date(2015, 3, 24),
        open: 220.5,
        high: 220.8,
        low: 218.01,
        close: 218.42,
        volume: 2427843
      },
      {
        time: new Date(2015, 3, 27),
        open: 222.56,
        high: 238.75,
        low: 222.0,
        close: 231.55,
        volume: 11672627
      },
      {
        time: new Date(2015, 3, 28),
        open: 234.75,
        high: 235.5,
        low: 228.03,
        close: 230.48,
        volume: 6085379
      },
      {
        time: new Date(2015, 3, 29),
        open: 230.05,
        high: 234.97,
        low: 227.63,
        close: 232.45,
        volume: 3936077
      },
      {
        time: new Date(2015, 3, 30),
        open: 230.39,
        high: 232.89,
        low: 225.17,
        close: 226.05,
        volume: 3911857
      },
      {
        time: new Date(2015, 4, 1),
        open: 229.94,
        high: 231.77,
        low: 220.4,
        close: 226.03,
        volume: 5281689
      },
      {
        time: new Date(2015, 4, 4),
        open: 228.18,
        high: 234.73,
        low: 227.11,
        close: 230.51,
        volume: 4434596
      },
      {
        time: new Date(2015, 4, 5),
        open: 237.76,
        high: 239.5,
        low: 229.13,
        close: 232.95,
        volume: 5796873
      },
      {
        time: new Date(2015, 4, 6),
        open: 234.1,
        high: 234.47,
        low: 228.2,
        close: 230.43,
        volume: 5270933
      },
      {
        time: new Date(2015, 4, 7),
        open: 221.0,
        high: 237.48,
        low: 220.25,
        close: 236.8,
        volume: 9455909
      },
      {
        time: new Date(2015, 4, 8),
        open: 235.99,
        high: 238.41,
        low: 233.7,
        close: 236.61,
        volume: 4668236
      },
      {
        time: new Date(2015, 4, 11),
        open: 236.29,
        high: 242.88,
        low: 235.31,
        close: 239.49,
        volume: 5672262
      },
      {
        time: new Date(2015, 4, 12),
        open: 240.11,
        high: 246.35,
        low: 238.19,
        close: 244.74,
        volume: 6363429
      },
      {
        time: new Date(2015, 4, 13),
        open: 247.61,
        high: 248.3,
        low: 242.25,
        close: 243.18,
        volume: 5440165
      },
      {
        time: new Date(2015, 4, 14),
        open: 244.82,
        high: 244.89,
        low: 241.25,
        close: 244.1,
        volume: 2895936
      },
      {
        time: new Date(2015, 4, 15),
        open: 243.93,
        high: 249.4,
        low: 242.5,
        close: 248.84,
        volume: 4527563
      },
      {
        time: new Date(2015, 4, 18),
        open: 247.0,
        high: 249.9,
        low: 246.0,
        close: 248.75,
        volume: 3353212
      },
      {
        time: new Date(2015, 4, 19),
        open: 248.43,
        high: 251.0,
        low: 246.15,
        close: 247.14,
        volume: 3674231
      },
      {
        time: new Date(2015, 4, 20),
        open: 247.13,
        high: 247.74,
        low: 241.37,
        close: 244.35,
        volume: 3755569
      },
      {
        time: new Date(2015, 4, 21),
        open: 243.03,
        high: 246.62,
        low: 242.36,
        close: 245.62,
        volume: 1970643
      },
      {
        time: new Date(2015, 4, 22),
        open: 245.38,
        high: 248.6,
        low: 245.01,
        close: 247.73,
        volume: 2223089
      },
      {
        time: new Date(2015, 4, 26),
        open: 247.68,
        high: 252.0,
        low: 246.5,
        close: 247.46,
        volume: 3498682
      },
      {
        time: new Date(2015, 4, 27),
        open: 248.51,
        high: 249.5,
        low: 245.55,
        close: 247.43,
        volume: 3408200
      },
      {
        time: new Date(2015, 4, 28),
        open: 247.03,
        high: 251.8,
        low: 245.05,
        close: 251.45,
        volume: 3647283
      },
      {
        time: new Date(2015, 4, 29),
        open: 251.0,
        high: 252.87,
        low: 249.43,
        close: 250.8,
        volume: 3789283
      },
      {
        time: new Date(2015, 5, 1),
        open: 251.41,
        high: 251.6,
        low: 247.47,
        close: 249.45,
        volume: 2505057
      },
      {
        time: new Date(2015, 5, 2),
        open: 248.92,
        high: 249.4,
        low: 246.3,
        close: 248.35,
        volume: 2134809
      },
      {
        time: new Date(2015, 5, 3),
        open: 248.2,
        high: 250.72,
        low: 247.01,
        close: 248.99,
        volume: 1781505
      },
      {
        time: new Date(2015, 5, 4),
        open: 247.5,
        high: 249.3,
        low: 245.71,
        close: 245.92,
        volume: 2453615
      },
      {
        time: new Date(2015, 5, 5),
        open: 246.0,
        high: 249.7,
        low: 245.68,
        close: 249.14,
        volume: 3022026
      },
      {
        time: new Date(2015, 5, 8),
        open: 250.85,
        high: 258.75,
        low: 250.31,
        close: 256.29,
        volume: 5016997
      },
      {
        time: new Date(2015, 5, 9),
        open: 255.4,
        high: 257.74,
        low: 254.14,
        close: 256.0,
        volume: 2611146
      },
      {
        time: new Date(2015, 5, 10),
        open: 251.9,
        high: 254.0,
        low: 248.5,
        close: 250.7,
        volume: 3454453
      },
      {
        time: new Date(2015, 5, 11),
        open: 253.26,
        high: 254.37,
        low: 250.43,
        close: 251.41,
        volume: 2044058
      },
      {
        time: new Date(2015, 5, 12),
        open: 250.21,
        high: 253.46,
        low: 250.21,
        close: 250.69,
        volume: 1422335
      },
      {
        time: new Date(2015, 5, 15),
        open: 249.7,
        high: 251.28,
        low: 246.01,
        close: 250.38,
        volume: 2186175
      },
      {
        time: new Date(2015, 5, 16),
        open: 250.13,
        high: 253.44,
        low: 249.1,
        close: 253.12,
        volume: 1984678
      },
      {
        time: new Date(2015, 5, 17),
        open: 252.17,
        high: 264.36,
        low: 252.02,
        close: 260.41,
        volume: 5512920
      },
      {
        time: new Date(2015, 5, 18),
        open: 262.0,
        high: 263.46,
        low: 260.02,
        close: 261.89,
        volume: 2782703
      },
      {
        time: new Date(2015, 5, 19),
        open: 262.4,
        high: 263.8,
        low: 260.1,
        close: 262.51,
        volume: 2463013
      },
      {
        time: new Date(2015, 5, 22),
        open: 262.15,
        high: 264.4,
        low: 255.69,
        close: 259.79,
        volume: 4561079
      },
      {
        time: new Date(2015, 5, 23),
        open: 260.32,
        high: 268.0,
        low: 258.57,
        close: 267.67,
        volume: 3870818
      },
      {
        time: new Date(2015, 5, 24),
        open: 266.98,
        high: 267.35,
        low: 263.72,
        close: 265.17,
        volume: 2412293
      },
      {
        time: new Date(2015, 5, 25),
        open: 266.45,
        high: 271.41,
        low: 265.25,
        close: 268.79,
        volume: 2849204
      },
      {
        time: new Date(2015, 5, 26),
        open: 268.89,
        high: 269.11,
        low: 266.0,
        close: 267.09,
        volume: 3838434
      },
      {
        time: new Date(2015, 5, 29),
        open: 261.95,
        high: 265.95,
        low: 260.7,
        close: 262.02,
        volume: 3478909
      },
      {
        time: new Date(2015, 5, 30),
        open: 264.8,
        high: 270.92,
        low: 264.0,
        close: 268.26,
        volume: 3086935
      },
      {
        time: new Date(2015, 6, 1),
        open: 271.11,
        high: 272.62,
        low: 267.85,
        close: 269.15,
        volume: 2101224
      },
      {
        time: new Date(2015, 6, 2),
        open: 280.2,
        high: 282.45,
        low: 273.31,
        close: 280.02,
        volume: 7163930
      },
      {
        time: new Date(2015, 6, 6),
        open: 278.88,
        high: 281.69,
        low: 276.3,
        close: 279.72,
        volume: 4121933
      },
      {
        time: new Date(2015, 6, 7),
        open: 275.0,
        high: 275.2,
        low: 260.77,
        close: 267.88,
        volume: 6105126
      },
      {
        time: new Date(2015, 6, 8),
        open: 259.32,
        high: 260.8,
        low: 254.31,
        close: 254.96,
        volume: 6221077
      },
      {
        time: new Date(2015, 6, 9),
        open: 259.08,
        high: 262.95,
        low: 256.79,
        close: 257.92,
        volume: 3334077
      },
      {
        time: new Date(2015, 6, 10),
        open: 262.22,
        high: 263.0,
        low: 257.82,
        close: 259.15,
        volume: 2610858
      },
      {
        time: new Date(2015, 6, 13),
        open: 262.25,
        high: 262.55,
        low: 256.05,
        close: 262.16,
        volume: 2960319
      },
      {
        time: new Date(2015, 6, 14),
        open: 262.1,
        high: 265.99,
        low: 260.51,
        close: 265.65,
        volume: 1907641
      },
      {
        time: new Date(2015, 6, 15),
        open: 266.74,
        high: 267.49,
        low: 262.08,
        close: 263.14,
        volume: 2021621
      },
      {
        time: new Date(2015, 6, 16),
        open: 264.22,
        high: 267.2,
        low: 263.16,
        close: 266.68,
        volume: 1615961
      },
      {
        time: new Date(2015, 6, 17),
        open: 272.5,
        high: 275.54,
        low: 268.25,
        close: 274.66,
        volume: 5004099
      },
      {
        time: new Date(2015, 6, 20),
        open: 275.0,
        high: 286.65,
        low: 272.54,
        close: 282.26,
        volume: 4978454
      },
      {
        time: new Date(2015, 6, 21),
        open: 270.05,
        high: 273.5,
        low: 266.55,
        close: 266.77,
        volume: 6108686
      },
      {
        time: new Date(2015, 6, 22),
        open: 261.27,
        high: 269.44,
        low: 260.86,
        close: 267.87,
        volume: 3104960
      },
      {
        time: new Date(2015, 6, 23),
        open: 269.65,
        high: 269.9,
        low: 265.27,
        close: 267.2,
        volume: 2227239
      },
      {
        time: new Date(2015, 6, 24),
        open: 267.38,
        high: 271.09,
        low: 263.92,
        close: 265.41,
        volume: 2836498
      },
      {
        time: new Date(2015, 6, 27),
        open: 262.43,
        high: 264.43,
        low: 250.79,
        close: 253.01,
        volume: 4694192
      },
      {
        time: new Date(2015, 6, 28),
        open: 255.75,
        high: 265.4,
        low: 251.84,
        close: 264.82,
        volume: 3895808
      },
      {
        time: new Date(2015, 6, 29),
        open: 264.27,
        high: 267.89,
        low: 262.0,
        close: 263.82,
        volume: 2790095
      },
      {
        time: new Date(2015, 6, 30),
        open: 262.69,
        high: 266.94,
        low: 262.11,
        close: 266.79,
        volume: 2034560
      },
      {
        time: new Date(2015, 6, 31),
        open: 267.6,
        high: 269.36,
        low: 265.12,
        close: 266.15,
        volume: 2222552
      },
      {
        time: new Date(2015, 7, 3),
        open: 266.29,
        high: 266.71,
        low: 257.07,
        close: 259.99,
        volume: 2553474
      },
      {
        time: new Date(2015, 7, 4),
        open: 260.01,
        high: 266.72,
        low: 258.34,
        close: 266.28,
        volume: 2352530
      },
      {
        time: new Date(2015, 7, 5),
        open: 263.58,
        high: 271.0,
        low: 260.4,
        close: 270.13,
        volume: 6214319
      },
      {
        time: new Date(2015, 7, 6),
        open: 249.54,
        high: 255.0,
        low: 236.12,
        close: 246.13,
        volume: 14623754
      },
      {
        time: new Date(2015, 7, 7),
        open: 243.58,
        high: 243.73,
        low: 238.39,
        close: 242.51,
        volume: 5073390
      },
      {
        time: new Date(2015, 7, 10),
        open: 238.15,
        high: 242.97,
        low: 236.05,
        close: 241.14,
        volume: 4185860
      },
      {
        time: new Date(2015, 7, 11),
        open: 237.15,
        high: 239.3,
        low: 234.44,
        close: 237.37,
        volume: 4264939
      },
      {
        time: new Date(2015, 7, 12),
        open: 235.0,
        high: 239.77,
        low: 232.74,
        close: 238.17,
        volume: 3739157
      },
      {
        time: new Date(2015, 7, 13),
        open: 239.86,
        high: 246.48,
        low: 239.12,
        close: 242.51,
        volume: 4689182
      },
      {
        time: new Date(2015, 7, 14),
        open: 247.24,
        high: 247.93,
        low: 241.77,
        close: 243.15,
        volume: 4364810
      },
      {
        time: new Date(2015, 7, 17),
        open: 255.56,
        high: 256.59,
        low: 250.51,
        close: 254.99,
        volume: 7176690
      },
      {
        time: new Date(2015, 7, 18),
        open: 255.38,
        high: 260.95,
        low: 253.56,
        close: 260.72,
        volume: 4195035
      },
      {
        time: new Date(2015, 7, 19),
        open: 260.33,
        high: 260.65,
        low: 255.02,
        close: 255.25,
        volume: 3604282
      },
      {
        time: new Date(2015, 7, 20),
        open: 252.06,
        high: 254.56,
        low: 241.9,
        close: 242.18,
        volume: 4887192
      },
      {
        time: new Date(2015, 7, 21),
        open: 236.0,
        high: 243.8,
        low: 230.51,
        close: 230.77,
        volume: 6564012
      },
      {
        time: new Date(2015, 7, 24),
        open: 202.79,
        high: 231.4,
        low: 195.0,
        close: 218.87,
        volume: 9565541
      },
      {
        time: new Date(2015, 7, 25),
        open: 230.52,
        high: 230.9,
        low: 219.12,
        close: 220.03,
        volume: 4304953
      },
      {
        time: new Date(2015, 7, 26),
        open: 227.93,
        high: 228.0,
        low: 215.51,
        close: 224.84,
        volume: 4948119
      },
      {
        time: new Date(2015, 7, 27),
        open: 231.0,
        high: 244.75,
        low: 230.81,
        close: 242.99,
        volume: 7642840
      },
      {
        time: new Date(2015, 7, 28),
        open: 241.86,
        high: 251.45,
        low: 241.57,
        close: 248.48,
        volume: 5495169
      },
      {
        time: new Date(2015, 7, 31),
        open: 245.62,
        high: 254.95,
        low: 245.51,
        close: 249.06,
        volume: 4680798
      },
      {
        time: new Date(2015, 8, 1),
        open: 240.34,
        high: 246.0,
        low: 236.97,
        close: 238.63,
        volume: 5437046
      },
      {
        time: new Date(2015, 8, 2),
        open: 245.3,
        high: 247.88,
        low: 239.78,
        close: 247.69,
        volume: 4584918
      },
      {
        time: new Date(2015, 8, 3),
        open: 252.06,
        high: 252.08,
        low: 245.0,
        close: 245.57,
        volume: 4131503
      },
      {
        time: new Date(2015, 8, 4),
        open: 240.89,
        high: 244.09,
        low: 238.2,
        close: 241.93,
        volume: 3682146
      },
      {
        time: new Date(2015, 8, 8),
        open: 245.05,
        high: 249.16,
        low: 244.05,
        close: 248.17,
        volume: 3120348
      },
      {
        time: new Date(2015, 8, 9),
        open: 252.05,
        high: 254.25,
        low: 248.3,
        close: 248.91,
        volume: 3384661
      },
      {
        time: new Date(2015, 8, 10),
        open: 247.23,
        high: 250.72,
        low: 245.33,
        close: 248.48,
        volume: 2705437
      },
      {
        time: new Date(2015, 8, 11),
        open: 247.64,
        high: 250.24,
        low: 244.73,
        close: 250.24,
        volume: 2342654
      },
      {
        time: new Date(2015, 8, 14),
        open: 251.1,
        high: 254.25,
        low: 249.67,
        close: 253.19,
        volume: 2883100
      },
      {
        time: new Date(2015, 8, 15),
        open: 252.75,
        high: 254.6,
        low: 249.5,
        close: 253.57,
        volume: 2929278
      },
      {
        time: new Date(2015, 8, 16),
        open: 253.04,
        high: 262.88,
        low: 252.88,
        close: 262.25,
        volume: 4404454
      },
      {
        time: new Date(2015, 8, 17),
        open: 263.96,
        high: 265.5,
        low: 260.69,
        close: 262.07,
        volume: 3574923
      },
      {
        time: new Date(2015, 8, 18),
        open: 257.96,
        high: 263.82,
        low: 257.5,
        close: 260.62,
        volume: 3739826
      },
      {
        time: new Date(2015, 8, 21),
        open: 263.98,
        high: 271.57,
        low: 255.8,
        close: 264.2,
        volume: 6110390
      },
      {
        time: new Date(2015, 8, 22),
        open: 259.03,
        high: 262.65,
        low: 255.87,
        close: 260.94,
        volume: 3657582
      },
      {
        time: new Date(2015, 8, 23),
        open: 261.95,
        high: 262.08,
        low: 257.58,
        close: 261.06,
        volume: 2594257
      },
      {
        time: new Date(2015, 8, 24),
        open: 259.53,
        high: 263.45,
        low: 256.21,
        close: 263.12,
        volume: 3442247
      },
      {
        time: new Date(2015, 8, 25),
        open: 266.61,
        high: 266.91,
        low: 256.15,
        close: 256.91,
        volume: 3767096
      },
      {
        time: new Date(2015, 8, 28),
        open: 257.35,
        high: 259.79,
        low: 246.61,
        close: 248.43,
        volume: 4892501
      },
      {
        time: new Date(2015, 8, 29),
        open: 250.46,
        high: 254.73,
        low: 245.46,
        close: 246.65,
        volume: 3693383
      },
      {
        time: new Date(2015, 8, 30),
        open: 252.0,
        high: 252.4,
        low: 242.34,
        close: 248.4,
        volume: 4923331
      },
      {
        time: new Date(2015, 9, 1),
        open: 247.51,
        high: 248.5,
        low: 237.13,
        close: 239.88,
        volume: 4566941
      },
      {
        time: new Date(2015, 9, 2),
        open: 235.6,
        high: 247.7,
        low: 234.93,
        close: 247.57,
        volume: 4390140
      },
      {
        time: new Date(2015, 9, 5),
        open: 248.84,
        high: 249.84,
        low: 244.13,
        close: 246.15,
        volume: 3678195
      },
      {
        time: new Date(2015, 9, 6),
        open: 240.0,
        high: 243.03,
        low: 235.58,
        close: 241.46,
        volume: 5225174
      },
      {
        time: new Date(2015, 9, 7),
        open: 236.63,
        high: 237.7,
        low: 229.12,
        close: 231.96,
        volume: 6803172
      },
      {
        time: new Date(2015, 9, 8),
        open: 230.08,
        high: 230.72,
        low: 221.31,
        close: 226.72,
        volume: 6119688
      },
      {
        time: new Date(2015, 9, 9),
        open: 220.93,
        high: 224.37,
        low: 218.36,
        close: 220.69,
        volume: 6150458
      },
      {
        time: new Date(2015, 9, 12),
        open: 222.99,
        high: 223.0,
        low: 215.27,
        close: 215.58,
        volume: 3803779
      },
      {
        time: new Date(2015, 9, 13),
        open: 213.28,
        high: 222.52,
        low: 211.13,
        close: 219.25,
        volume: 5162453
      },
      {
        time: new Date(2015, 9, 14),
        open: 220.67,
        high: 220.95,
        low: 215.43,
        close: 216.88,
        volume: 3086784
      },
      {
        time: new Date(2015, 9, 15),
        open: 216.43,
        high: 221.73,
        low: 213.7,
        close: 221.31,
        volume: 2833931
      },
      {
        time: new Date(2015, 9, 16),
        open: 223.04,
        high: 230.48,
        low: 222.87,
        close: 227.01,
        volume: 4320797
      },
      {
        time: new Date(2015, 9, 19),
        open: 226.5,
        high: 231.15,
        low: 224.94,
        close: 228.1,
        volume: 2499326
      },
      {
        time: new Date(2015, 9, 20),
        open: 227.72,
        high: 228.6,
        low: 202.0,
        close: 213.03,
        volume: 14863266
      },
      {
        time: new Date(2015, 9, 21),
        open: 211.99,
        high: 214.81,
        low: 208.8,
        close: 210.09,
        volume: 4151463
      },
      {
        time: new Date(2015, 9, 22),
        open: 211.56,
        high: 215.75,
        low: 209.4,
        close: 211.72,
        volume: 2809155
      },
      {
        time: new Date(2015, 9, 23),
        open: 215.0,
        high: 215.35,
        low: 207.69,
        close: 209.09,
        volume: 4142080
      },
      {
        time: new Date(2015, 9, 26),
        open: 211.38,
        high: 215.88,
        low: 210.0,
        close: 215.26,
        volume: 3387107
      },
      {
        time: new Date(2015, 9, 27),
        open: 214.84,
        high: 217.1,
        low: 207.51,
        close: 210.35,
        volume: 3500711
      },
      {
        time: new Date(2015, 9, 28),
        open: 211.31,
        high: 213.45,
        low: 208.3,
        close: 212.96,
        volume: 2672551
      },
      {
        time: new Date(2015, 9, 29),
        open: 211.75,
        high: 213.75,
        low: 210.64,
        close: 211.63,
        volume: 1782358
      },
      {
        time: new Date(2015, 9, 30),
        open: 210.4,
        high: 211.63,
        low: 203.89,
        close: 206.93,
        volume: 4372936
      },
      {
        time: new Date(2015, 10, 2),
        open: 208.92,
        high: 215.8,
        low: 207.22,
        close: 213.79,
        volume: 3919308
      },
      {
        time: new Date(2015, 10, 3),
        open: 210.0,
        high: 214.44,
        low: 207.75,
        close: 208.35,
        volume: 7141113
      },
      {
        time: new Date(2015, 10, 4),
        open: 230.68,
        high: 232.74,
        low: 225.2,
        close: 231.63,
        volume: 12706650
      },
      {
        time: new Date(2015, 10, 5),
        open: 230.58,
        high: 234.58,
        low: 229.19,
        close: 231.77,
        volume: 4493263
      },
      {
        time: new Date(2015, 10, 6),
        open: 230.7,
        high: 233.36,
        low: 229.5,
        close: 232.36,
        volume: 2443465
      },
      {
        time: new Date(2015, 10, 9),
        open: 232.99,
        high: 232.99,
        low: 224.31,
        close: 225.33,
        volume: 3843824
      },
      {
        time: new Date(2015, 10, 10),
        open: 223.48,
        high: 223.7,
        low: 216.08,
        close: 216.5,
        volume: 4568414
      },
      {
        time: new Date(2015, 10, 11),
        open: 217.77,
        high: 219.48,
        low: 213.63,
        close: 219.08,
        volume: 3334955
      },
      {
        time: new Date(2015, 10, 12),
        open: 217.85,
        high: 219.0,
        low: 212.66,
        close: 212.94,
        volume: 2910023
      },
      {
        time: new Date(2015, 10, 13),
        open: 212.95,
        high: 212.99,
        low: 206.52,
        close: 207.19,
        volume: 3412083
      },
      {
        time: new Date(2015, 10, 16),
        open: 206.09,
        high: 214.98,
        low: 205.8,
        close: 214.31,
        volume: 2917082
      },
      {
        time: new Date(2015, 10, 17),
        open: 215.2,
        high: 216.0,
        low: 211.4,
        close: 214.0,
        volume: 2143269
      },
      {
        time: new Date(2015, 10, 18),
        open: 214.5,
        high: 221.38,
        low: 212.52,
        close: 221.07,
        volume: 2805192
      },
      {
        time: new Date(2015, 10, 19),
        open: 220.54,
        high: 226.19,
        low: 220.3,
        close: 221.8,
        volume: 2499363
      },
      {
        time: new Date(2015, 10, 20),
        open: 223.49,
        high: 225.0,
        low: 213.58,
        close: 220.01,
        volume: 4388932
      },
      {
        time: new Date(2015, 10, 23),
        open: 217.35,
        high: 219.18,
        low: 214.68,
        close: 217.75,
        volume: 2524994
      },
      {
        time: new Date(2015, 10, 24),
        open: 215.37,
        high: 221.0,
        low: 215.0,
        close: 218.25,
        volume: 2452304
      },
      {
        time: new Date(2015, 10, 25),
        open: 221.34,
        high: 230.82,
        low: 220.38,
        close: 229.64,
        volume: 3990779
      },
      {
        time: new Date(2015, 10, 27),
        open: 231.06,
        high: 232.25,
        low: 227.01,
        close: 231.61,
        volume: 1949127
      },
      {
        time: new Date(2015, 10, 30),
        open: 231.79,
        high: 234.28,
        low: 229.08,
        close: 230.26,
        volume: 2585753
      },
      {
        time: new Date(2015, 11, 1),
        open: 231.06,
        high: 238.0,
        low: 231.05,
        close: 237.19,
        volume: 3728287
      },
      {
        time: new Date(2015, 11, 2),
        open: 237.0,
        high: 238.6,
        low: 231.23,
        close: 231.99,
        volume: 2975721
      },
      {
        time: new Date(2015, 11, 3),
        open: 235.48,
        high: 237.45,
        low: 230.0,
        close: 232.71,
        volume: 2939564
      },
      {
        time: new Date(2015, 11, 4),
        open: 232.46,
        high: 233.27,
        low: 227.66,
        close: 230.38,
        volume: 2573603
      },
      {
        time: new Date(2015, 11, 7),
        open: 227.7,
        high: 235.63,
        low: 226.15,
        close: 231.13,
        volume: 3144223
      },
      {
        time: new Date(2015, 11, 8),
        open: 227.52,
        high: 228.8,
        low: 224.2,
        close: 226.72,
        volume: 2687636
      },
      {
        time: new Date(2015, 11, 9),
        open: 226.7,
        high: 227.5,
        low: 220.72,
        close: 224.52,
        volume: 3057753
      },
      {
        time: new Date(2015, 11, 10),
        open: 224.71,
        high: 228.49,
        low: 223.64,
        close: 227.07,
        volume: 2071692
      },
      {
        time: new Date(2015, 11, 11),
        open: 225.24,
        high: 225.75,
        low: 216.64,
        close: 217.02,
        volume: 3268726
      },
      {
        time: new Date(2015, 11, 14),
        open: 217.51,
        high: 220.92,
        low: 214.87,
        close: 218.58,
        volume: 2827068
      },
      {
        time: new Date(2015, 11, 15),
        open: 221.82,
        high: 222.22,
        low: 218.0,
        close: 221.09,
        volume: 2244424
      },
      {
        time: new Date(2015, 11, 16),
        open: 222.1,
        high: 234.88,
        low: 220.73,
        close: 234.51,
        volume: 5104341
      },
      {
        time: new Date(2015, 11, 17),
        open: 233.94,
        high: 237.76,
        low: 229.81,
        close: 233.39,
        volume: 3298638
      },
      {
        time: new Date(2015, 11, 18),
        open: 232.89,
        high: 235.9,
        low: 229.29,
        close: 230.46,
        volume: 3014170
      },
      {
        time: new Date(2015, 11, 21),
        open: 231.69,
        high: 235.83,
        low: 231.08,
        close: 232.56,
        volume: 1953174
      },
      {
        time: new Date(2015, 11, 22),
        open: 234.99,
        high: 236.55,
        low: 229.63,
        close: 229.95,
        volume: 1961495
      },
      {
        time: new Date(2015, 11, 23),
        open: 232.18,
        high: 233.45,
        low: 228.13,
        close: 229.7,
        volume: 1554979
      },
      {
        time: new Date(2015, 11, 24),
        open: 230.56,
        high: 231.88,
        low: 228.28,
        close: 230.57,
        volume: 710277
      },
      {
        time: new Date(2015, 11, 28),
        open: 231.49,
        high: 231.98,
        low: 225.54,
        close: 228.95,
        volume: 1901304
      },
      {
        time: new Date(2015, 11, 29),
        open: 230.06,
        high: 237.72,
        low: 229.55,
        close: 237.19,
        volume: 2406290
      },
      {
        time: new Date(2015, 11, 30),
        open: 236.6,
        high: 243.63,
        low: 235.67,
        close: 238.09,
        volume: 3697921
      },
      {
        time: new Date(2015, 11, 31),
        open: 238.51,
        high: 243.45,
        low: 238.37,
        close: 240.01,
        volume: 2715038
      },
      {
        time: new Date(2016, 0, 4),
        open: 230.72,
        high: 231.38,
        low: 219.0,
        close: 223.41,
        volume: 6819737
      },
      {
        time: new Date(2016, 0, 5),
        open: 226.36,
        high: 226.89,
        low: 220.0,
        close: 223.43,
        volume: 3186752
      },
      {
        time: new Date(2016, 0, 6),
        open: 220.0,
        high: 220.05,
        low: 215.98,
        close: 219.04,
        volume: 3779128
      },
      {
        time: new Date(2016, 0, 7),
        open: 214.19,
        high: 218.44,
        low: 213.67,
        close: 215.65,
        volume: 3554251
      },
      {
        time: new Date(2016, 0, 8),
        open: 217.86,
        high: 220.44,
        low: 210.77,
        close: 211.0,
        volume: 3628058
      },
      {
        time: new Date(2016, 0, 11),
        open: 214.01,
        high: 214.45,
        low: 203.0,
        close: 207.85,
        volume: 4091422
      },
      {
        time: new Date(2016, 0, 12),
        open: 211.6,
        high: 213.74,
        low: 205.31,
        close: 209.97,
        volume: 3091917
      },
      {
        time: new Date(2016, 0, 13),
        open: 212.01,
        high: 212.65,
        low: 200.0,
        close: 200.31,
        volume: 4039093
      },
      {
        time: new Date(2016, 0, 14),
        open: 202.21,
        high: 210.0,
        low: 193.38,
        close: 206.18,
        volume: 6452623
      },
      {
        time: new Date(2016, 0, 15),
        open: 198.97,
        high: 205.07,
        low: 197.25,
        close: 204.99,
        volume: 5322235
      },
      {
        time: new Date(2016, 0, 19),
        open: 208.71,
        high: 210.47,
        low: 200.78,
        close: 204.72,
        volume: 3997509
      },
      {
        time: new Date(2016, 0, 20),
        open: 199.4,
        high: 201.28,
        low: 191.25,
        close: 198.7,
        volume: 5825431
      },
      {
        time: new Date(2016, 0, 21),
        open: 201.55,
        high: 203.23,
        low: 195.02,
        close: 199.97,
        volume: 3163432
      },
      {
        time: new Date(2016, 0, 22),
        open: 204.8,
        high: 205.5,
        low: 199.03,
        close: 202.55,
        volume: 3120106
      },
      {
        time: new Date(2016, 0, 25),
        open: 200.06,
        high: 203.57,
        low: 195.88,
        close: 196.38,
        volume: 2694564
      },
      {
        time: new Date(2016, 0, 26),
        open: 196.7,
        high: 197.82,
        low: 188.88,
        close: 193.56,
        volume: 4946841
      },
      {
        time: new Date(2016, 0, 27),
        open: 192.38,
        high: 193.26,
        low: 185.77,
        close: 188.07,
        volume: 3565378
      },
      {
        time: new Date(2016, 0, 28),
        open: 190.79,
        high: 191.28,
        low: 182.41,
        close: 189.7,
        volume: 4581652
      },
      {
        time: new Date(2016, 0, 29),
        open: 189.95,
        high: 193.74,
        low: 188.08,
        close: 191.2,
        volume: 2841003
      },
      {
        time: new Date(2016, 1, 1),
        open: 188.76,
        high: 199.52,
        low: 182.75,
        close: 196.94,
        volume: 5293766
      },
      {
        time: new Date(2016, 1, 2),
        open: 192.42,
        high: 193.12,
        low: 180.23,
        close: 182.78,
        volume: 5762855
      },
      {
        time: new Date(2016, 1, 3),
        open: 183.59,
        high: 183.94,
        low: 170.18,
        close: 173.48,
        volume: 7879454
      },
      {
        time: new Date(2016, 1, 4),
        open: 170.7,
        high: 175.98,
        low: 166.99,
        close: 175.33,
        volume: 4363924
      },
      {
        time: new Date(2016, 1, 5),
        open: 171.3,
        high: 173.0,
        low: 157.74,
        close: 162.6,
        volume: 9426933
      },
      {
        time: new Date(2016, 1, 8),
        open: 157.1,
        high: 157.15,
        low: 146.0,
        close: 147.99,
        volume: 9297941
      },
      {
        time: new Date(2016, 1, 9),
        open: 142.32,
        high: 159.79,
        low: 141.05,
        close: 148.25,
        volume: 8575099
      },
      {
        time: new Date(2016, 1, 10),
        open: 150.5,
        high: 154.97,
        low: 141.74,
        close: 143.67,
        volume: 9067292
      },
      {
        time: new Date(2016, 1, 11),
        open: 152.0,
        high: 163.26,
        low: 147.0,
        close: 150.47,
        volume: 14231392
      },
      {
        time: new Date(2016, 1, 12),
        open: 155.0,
        high: 157.01,
        low: 143.7,
        close: 151.04,
        volume: 7202970
      },
      {
        time: new Date(2016, 1, 16),
        open: 158.7,
        high: 162.95,
        low: 154.11,
        close: 155.17,
        volume: 5556314
      },
      {
        time: new Date(2016, 1, 17),
        open: 159.0,
        high: 169.34,
        low: 156.68,
        close: 168.68,
        volume: 5807071
      },
      {
        time: new Date(2016, 1, 18),
        open: 172.42,
        high: 172.95,
        low: 164.77,
        close: 166.77,
        volume: 3785336
      },
      {
        time: new Date(2016, 1, 19),
        open: 163.66,
        high: 167.49,
        low: 162.5,
        close: 166.58,
        volume: 2952880
      },
      {
        time: new Date(2016, 1, 22),
        open: 170.12,
        high: 178.91,
        low: 169.85,
        close: 177.74,
        volume: 5051180
      },
      {
        time: new Date(2016, 1, 23),
        open: 176.16,
        high: 181.73,
        low: 173.68,
        close: 177.21,
        volume: 5968028
      },
      {
        time: new Date(2016, 1, 24),
        open: 172.75,
        high: 179.5,
        low: 167.84,
        close: 179.0,
        volume: 5380712
      },
      {
        time: new Date(2016, 1, 25),
        open: 178.65,
        high: 188.52,
        low: 175.2,
        close: 187.43,
        volume: 5720514
      },
      {
        time: new Date(2016, 1, 26),
        open: 188.7,
        high: 192.0,
        low: 185.0,
        close: 190.34,
        volume: 6052910
      },
      {
        time: new Date(2016, 1, 29),
        open: 192.4,
        high: 196.35,
        low: 189.22,
        close: 191.93,
        volume: 4479719
      },
      {
        time: new Date(2016, 2, 1),
        open: 194.25,
        high: 195.95,
        low: 182.7,
        close: 186.35,
        volume: 6701674
      },
      {
        time: new Date(2016, 2, 2),
        open: 183.73,
        high: 188.52,
        low: 181.5,
        close: 188.34,
        volume: 4832986
      },
      {
        time: new Date(2016, 2, 3),
        open: 188.28,
        high: 197.42,
        low: 184.22,
        close: 195.74,
        volume: 4820497
      },
      {
        time: new Date(2016, 2, 4),
        open: 198.0,
        high: 204.03,
        low: 197.5,
        close: 201.04,
        volume: 6469772
      },
      {
        time: new Date(2016, 2, 7),
        open: 197.68,
        high: 209.7,
        low: 197.4,
        close: 205.29,
        volume: 5329369
      },
      {
        time: new Date(2016, 2, 8),
        open: 203.5,
        high: 207.5,
        low: 202.2,
        close: 202.6,
        volume: 4130816
      },
      {
        time: new Date(2016, 2, 9),
        open: 204.52,
        high: 209.37,
        low: 202.79,
        close: 208.72,
        volume: 3160081
      },
      {
        time: new Date(2016, 2, 10),
        open: 210.0,
        high: 213.29,
        low: 200.67,
        close: 205.18,
        volume: 5183177
      },
      {
        time: new Date(2016, 2, 11),
        open: 207.93,
        high: 209.42,
        low: 205.33,
        close: 207.5,
        volume: 3300358
      },
      {
        time: new Date(2016, 2, 14),
        open: 212.65,
        high: 216.72,
        low: 210.64,
        close: 215.15,
        volume: 4054723
      },
      {
        time: new Date(2016, 2, 15),
        open: 214.27,
        high: 218.97,
        low: 211.5,
        close: 218.34,
        volume: 3180452
      },
      {
        time: new Date(2016, 2, 16),
        open: 218.0,
        high: 222.58,
        low: 217.02,
        close: 221.93,
        volume: 3462107
      },
      {
        time: new Date(2016, 2, 17),
        open: 221.47,
        high: 228.5,
        low: 220.0,
        close: 226.38,
        volume: 3754756
      },
      {
        time: new Date(2016, 2, 18),
        open: 229.1,
        high: 234.48,
        low: 228.06,
        close: 232.74,
        volume: 4698180
      },
      {
        time: new Date(2016, 2, 21),
        open: 235.34,
        high: 239.88,
        low: 235.0,
        close: 238.32,
        volume: 5286697
      },
      {
        time: new Date(2016, 2, 22),
        open: 237.21,
        high: 238.99,
        low: 232.56,
        close: 234.24,
        volume: 4300628
      },
      {
        time: new Date(2016, 2, 23),
        open: 232.37,
        high: 234.73,
        low: 222.03,
        close: 222.58,
        volume: 4921013
      },
      {
        time: new Date(2016, 2, 24),
        open: 215.78,
        high: 228.89,
        low: 215.0,
        close: 227.75,
        volume: 4954411
      },
      {
        time: new Date(2016, 2, 28),
        open: 231.61,
        high: 234.81,
        low: 225.0,
        close: 230.26,
        volume: 3875451
      },
      {
        time: new Date(2016, 2, 29),
        open: 229.89,
        high: 232.38,
        low: 225.33,
        close: 230.13,
        volume: 4004940
      },
      {
        time: new Date(2016, 2, 30),
        open: 235.09,
        high: 235.5,
        low: 226.5,
        close: 226.89,
        volume: 4019667
      },
      {
        time: new Date(2016, 2, 31),
        open: 229.34,
        high: 237.42,
        low: 225.01,
        close: 229.77,
        volume: 7956740
      },
      {
        time: new Date(2016, 3, 1),
        open: 244.82,
        high: 247.9,
        low: 233.25,
        close: 237.59,
        volume: 15962015
      },
      {
        time: new Date(2016, 3, 4),
        open: 249.12,
        high: 252.12,
        low: 243.64,
        close: 246.99,
        volume: 13289584
      },
      {
        time: new Date(2016, 3, 5),
        open: 240.5,
        high: 256.56,
        low: 240.0,
        close: 255.47,
        volume: 9915160
      },
      {
        time: new Date(2016, 3, 6),
        open: 253.97,
        high: 267.74,
        low: 253.45,
        close: 265.42,
        volume: 11679883
      },
      {
        time: new Date(2016, 3, 7),
        open: 266.45,
        high: 269.34,
        low: 254.51,
        close: 257.2,
        volume: 8836815
      },
      {
        time: new Date(2016, 3, 8),
        open: 260.5,
        high: 260.82,
        low: 248.02,
        close: 250.07,
        volume: 7332157
      },
      {
        time: new Date(2016, 3, 11),
        open: 251.0,
        high: 258.99,
        low: 245.3,
        close: 249.92,
        volume: 9153901
      },
      {
        time: new Date(2016, 3, 12),
        open: 249.5,
        high: 251.8,
        low: 243.63,
        close: 247.82,
        volume: 5750757
      },
      {
        time: new Date(2016, 3, 13),
        open: 248.51,
        high: 255.5,
        low: 247.33,
        close: 254.53,
        volume: 4917930
      },
      {
        time: new Date(2016, 3, 14),
        open: 253.0,
        high: 256.84,
        low: 251.05,
        close: 251.86,
        volume: 4119980
      },
      {
        time: new Date(2016, 3, 15),
        open: 251.31,
        high: 254.6,
        low: 249.12,
        close: 254.51,
        volume: 3742018
      },
      {
        time: new Date(2016, 3, 18),
        open: 252.23,
        high: 258.31,
        low: 251.66,
        close: 253.88,
        volume: 4261782
      },
      {
        time: new Date(2016, 3, 19),
        open: 253.12,
        high: 254.37,
        low: 241.25,
        close: 247.37,
        volume: 6349403
      },
      {
        time: new Date(2016, 3, 20),
        open: 246.26,
        high: 253.66,
        low: 241.5,
        close: 249.97,
        volume: 5190831
      },
      {
        time: new Date(2016, 3, 21),
        open: 248.99,
        high: 250.9,
        low: 246.91,
        close: 248.29,
        volume: 2783059
      },
      {
        time: new Date(2016, 3, 22),
        open: 248.89,
        high: 254.0,
        low: 245.71,
        close: 253.75,
        volume: 3774648
      },
      {
        time: new Date(2016, 3, 25),
        open: 253.01,
        high: 257.38,
        low: 250.76,
        close: 251.82,
        volume: 3664293
      },
      {
        time: new Date(2016, 3, 26),
        open: 252.05,
        high: 255.73,
        low: 249.39,
        close: 253.74,
        volume: 3212470
      },
      {
        time: new Date(2016, 3, 27),
        open: 252.75,
        high: 255.0,
        low: 249.4,
        close: 251.47,
        volume: 3190682
      },
      {
        time: new Date(2016, 3, 28),
        open: 249.85,
        high: 253.43,
        low: 247.44,
        close: 247.71,
        volume: 2509509
      },
      {
        time: new Date(2016, 3, 29),
        open: 248.14,
        high: 248.43,
        low: 237.81,
        close: 240.76,
        volume: 5388701
      },
      {
        time: new Date(2016, 4, 2),
        open: 241.5,
        high: 243.19,
        low: 234.82,
        close: 241.8,
        volume: 3836429
      },
      {
        time: new Date(2016, 4, 3),
        open: 237.36,
        high: 238.91,
        low: 231.62,
        close: 232.32,
        volume: 4289174
      },
      {
        time: new Date(2016, 4, 4),
        open: 230.29,
        high: 234.46,
        low: 220.4,
        close: 222.56,
        volume: 8262540
      },
      {
        time: new Date(2016, 4, 5),
        open: 228.46,
        high: 228.64,
        low: 209.79,
        close: 211.53,
        volume: 11235835
      },
      {
        time: new Date(2016, 4, 6),
        open: 210.87,
        high: 216.37,
        low: 208.11,
        close: 214.93,
        volume: 5681078
      },
      {
        time: new Date(2016, 4, 9),
        open: 215.72,
        high: 216.15,
        low: 206.8,
        close: 208.92,
        volume: 4758131
      },
      {
        time: new Date(2016, 4, 10),
        open: 207.55,
        high: 209.47,
        low: 205.0,
        close: 208.69,
        volume: 4065214
      },
      {
        time: new Date(2016, 4, 11),
        open: 207.59,
        high: 215.48,
        low: 206.05,
        close: 208.96,
        volume: 5153730
      },
      {
        time: new Date(2016, 4, 12),
        open: 211.44,
        high: 211.67,
        low: 203.66,
        close: 207.28,
        volume: 3646943
      },
      {
        time: new Date(2016, 4, 13),
        open: 207.78,
        high: 211.2,
        low: 206.7,
        close: 207.61,
        volume: 2819264
      },
      {
        time: new Date(2016, 4, 16),
        open: 208.15,
        high: 213.15,
        low: 207.92,
        close: 208.29,
        volume: 2945072
      },
      {
        time: new Date(2016, 4, 17),
        open: 209.05,
        high: 209.82,
        low: 204.02,
        close: 204.66,
        volume: 2841168
      },
      {
        time: new Date(2016, 4, 18),
        open: 209.15,
        high: 215.31,
        low: 207.75,
        close: 211.17,
        volume: 5384698
      },
      {
        time: new Date(2016, 4, 19),
        open: 213.62,
        high: 216.79,
        low: 207.3,
        close: 215.21,
        volume: 6811976
      },
      {
        time: new Date(2016, 4, 20),
        open: 216.99,
        high: 220.55,
        low: 216.35,
        close: 220.28,
        volume: 8951773
      },
      {
        time: new Date(2016, 4, 23),
        open: 219.87,
        high: 222.6,
        low: 215.86,
        close: 216.22,
        volume: 5093158
      },
      {
        time: new Date(2016, 4, 24),
        open: 216.6,
        high: 218.74,
        low: 215.18,
        close: 217.91,
        volume: 3008774
      },
      {
        time: new Date(2016, 4, 25),
        open: 217.91,
        high: 221.36,
        low: 216.51,
        close: 219.58,
        volume: 3126822
      },
      {
        time: new Date(2016, 4, 26),
        open: 220.5,
        high: 225.26,
        low: 219.05,
        close: 225.12,
        volume: 4064013
      },
      {
        time: new Date(2016, 4, 27),
        open: 224.99,
        high: 225.93,
        low: 220.75,
        close: 223.04,
        volume: 3642740
      },
      {
        time: new Date(2016, 4, 31),
        open: 223.04,
        high: 224.75,
        low: 221.5,
        close: 223.23,
        volume: 2789002
      },
      {
        time: new Date(2016, 5, 1),
        open: 221.48,
        high: 222.4,
        low: 216.89,
        close: 219.56,
        volume: 2982695
      },
      {
        time: new Date(2016, 5, 2),
        open: 219.59,
        high: 219.91,
        low: 217.11,
        close: 218.96,
        volume: 2032832
      },
      {
        time: new Date(2016, 5, 3),
        open: 220.0,
        high: 221.94,
        low: 218.01,
        close: 218.99,
        volume: 2228970
      },
      {
        time: new Date(2016, 5, 6),
        open: 218.0,
        high: 220.9,
        low: 215.45,
        close: 220.68,
        volume: 2249508
      },
      {
        time: new Date(2016, 5, 7),
        open: 222.24,
        high: 234.44,
        low: 221.52,
        close: 232.34,
        volume: 6213573
      },
      {
        time: new Date(2016, 5, 8),
        open: 233.8,
        high: 240.84,
        low: 232.6,
        close: 235.52,
        volume: 5971995
      },
      {
        time: new Date(2016, 5, 9),
        open: 234.98,
        high: 235.33,
        low: 227.06,
        close: 229.36,
        volume: 4492075
      },
      {
        time: new Date(2016, 5, 10),
        open: 227.39,
        high: 227.97,
        low: 218.42,
        close: 218.79,
        volume: 6026603
      },
      {
        time: new Date(2016, 5, 13),
        open: 219.5,
        high: 225.77,
        low: 217.66,
        close: 217.87,
        volume: 4193022
      },
      {
        time: new Date(2016, 5, 14),
        open: 218.88,
        high: 222.2,
        low: 212.53,
        close: 214.96,
        volume: 3580167
      },
      {
        time: new Date(2016, 5, 15),
        open: 216.95,
        high: 221.9,
        low: 215.13,
        close: 217.7,
        volume: 2908522
      },
      {
        time: new Date(2016, 5, 16),
        open: 217.42,
        high: 218.04,
        low: 213.5,
        close: 217.93,
        volume: 2440259
      },
      {
        time: new Date(2016, 5, 17),
        open: 217.81,
        high: 219.99,
        low: 214.5,
        close: 215.47,
        volume: 3112620
      },
      {
        time: new Date(2016, 5, 20),
        open: 219.5,
        high: 223.75,
        low: 218.23,
        close: 219.7,
        volume: 3555471
      },
      {
        time: new Date(2016, 5, 21),
        open: 220.68,
        high: 222.57,
        low: 218.81,
        close: 219.61,
        volume: 4529005
      },
      {
        time: new Date(2016, 5, 22),
        open: 199.47,
        high: 205.95,
        low: 195.75,
        close: 196.66,
        volume: 23742414
      },
      {
        time: new Date(2016, 5, 23),
        open: 195.69,
        high: 197.55,
        low: 192.13,
        close: 196.4,
        volume: 10130748
      },
      {
        time: new Date(2016, 5, 24),
        open: 190.05,
        high: 195.12,
        low: 189.73,
        close: 193.15,
        volume: 7026516
      },
      {
        time: new Date(2016, 5, 27),
        open: 190.86,
        high: 198.81,
        low: 187.87,
        close: 198.55,
        volume: 7220323
      },
      {
        time: new Date(2016, 5, 28),
        open: 201.89,
        high: 204.05,
        low: 199.41,
        close: 201.79,
        volume: 6212422
      },
      {
        time: new Date(2016, 5, 29),
        open: 205.13,
        high: 211.78,
        low: 203.0,
        close: 210.19,
        volume: 5994908
      },
      {
        time: new Date(2016, 5, 30),
        open: 212.97,
        high: 213.5,
        low: 209.02,
        close: 212.28,
        volume: 4843111
      },
      {
        time: new Date(2016, 6, 1),
        open: 206.14,
        high: 218.24,
        low: 206.0,
        close: 216.5,
        volume: 5399951
      },
      {
        time: new Date(2016, 6, 5),
        open: 209.73,
        high: 214.54,
        low: 208.0,
        close: 213.98,
        volume: 5175345
      },
      {
        time: new Date(2016, 6, 6),
        open: 210.0,
        high: 215.23,
        low: 209.0,
        close: 214.44,
        volume: 4919855
      },
      {
        time: new Date(2016, 6, 7),
        open: 213.1,
        high: 218.12,
        low: 213.01,
        close: 215.94,
        volume: 3612022
      },
      {
        time: new Date(2016, 6, 8),
        open: 217.8,
        high: 219.81,
        low: 214.5,
        close: 216.78,
        volume: 4074785
      },
      {
        time: new Date(2016, 6, 11),
        open: 219.96,
        high: 226.78,
        low: 219.51,
        close: 224.78,
        volume: 5429823
      },
      {
        time: new Date(2016, 6, 12),
        open: 224.1,
        high: 227.5,
        low: 223.22,
        close: 224.65,
        volume: 4576165
      },
      {
        time: new Date(2016, 6, 13),
        open: 225.5,
        high: 225.59,
        low: 220.29,
        close: 222.53,
        volume: 3567062
      },
      {
        time: new Date(2016, 6, 14),
        open: 223.12,
        high: 224.94,
        low: 221.05,
        close: 221.53,
        volume: 2675834
      },
      {
        time: new Date(2016, 6, 15),
        open: 222.52,
        high: 222.75,
        low: 219.64,
        close: 220.4,
        volume: 2234247
      },
      {
        time: new Date(2016, 6, 18),
        open: 219.64,
        high: 227.09,
        low: 218.3,
        close: 226.25,
        volume: 3412055
      },
      {
        time: new Date(2016, 6, 19),
        open: 225.0,
        high: 229.1,
        low: 224.75,
        close: 225.26,
        volume: 3115065
      },
      {
        time: new Date(2016, 6, 20),
        open: 226.47,
        high: 229.8,
        low: 225.0,
        close: 228.36,
        volume: 2568498
      },
      {
        time: new Date(2016, 6, 21),
        open: 226.0,
        high: 227.85,
        low: 219.1,
        close: 220.5,
        volume: 4428651
      },
      {
        time: new Date(2016, 6, 22),
        open: 221.99,
        high: 224.5,
        low: 218.88,
        close: 222.27,
        volume: 2579692
      },
      {
        time: new Date(2016, 6, 25),
        open: 222.27,
        high: 231.39,
        low: 221.37,
        close: 230.01,
        volume: 4490683
      },
      {
        time: new Date(2016, 6, 26),
        open: 227.69,
        high: 230.0,
        low: 225.3,
        close: 229.51,
        volume: 3430042
      },
      {
        time: new Date(2016, 6, 27),
        open: 229.34,
        high: 233.36,
        low: 226.92,
        close: 228.49,
        volume: 2889007
      },
      {
        time: new Date(2016, 6, 28),
        open: 227.95,
        high: 230.76,
        low: 226.6,
        close: 230.61,
        volume: 2419059
      },
      {
        time: new Date(2016, 6, 29),
        open: 230.7,
        high: 235.28,
        low: 230.24,
        close: 234.79,
        volume: 3070813
      },
      {
        time: new Date(2016, 7, 1),
        open: 235.5,
        high: 236.63,
        low: 229.38,
        close: 230.01,
        volume: 4016284
      },
      {
        time: new Date(2016, 7, 2),
        open: 229.37,
        high: 229.87,
        low: 221.4,
        close: 227.2,
        volume: 3934432
      },
      {
        time: new Date(2016, 7, 3),
        open: 227.37,
        high: 229.7,
        low: 224.21,
        close: 225.79,
        volume: 3887759
      },
      {
        time: new Date(2016, 7, 4),
        open: 225.69,
        high: 230.86,
        low: 222.05,
        close: 230.61,
        volume: 4146997
      },
      {
        time: new Date(2016, 7, 5),
        open: 230.0,
        high: 232.0,
        low: 227.4,
        close: 230.03,
        volume: 3205215
      },
      {
        time: new Date(2016, 7, 8),
        open: 228.0,
        high: 229.6,
        low: 226.09,
        close: 226.16,
        volume: 2263584
      },
      {
        time: new Date(2016, 7, 9),
        open: 226.82,
        high: 231.54,
        low: 226.65,
        close: 229.08,
        volume: 2207833
      },
      {
        time: new Date(2016, 7, 10),
        open: 228.24,
        high: 229.87,
        low: 224.62,
        close: 225.65,
        volume: 2338301
      },
      {
        time: new Date(2016, 7, 11),
        open: 226.17,
        high: 227.57,
        low: 223.41,
        close: 224.91,
        volume: 1880936
      },
      {
        time: new Date(2016, 7, 12),
        open: 225.41,
        high: 226.65,
        low: 224.04,
        close: 225.61,
        volume: 1813540
      },
      {
        time: new Date(2016, 7, 15),
        open: 226.02,
        high: 229.5,
        low: 224.93,
        close: 225.59,
        volume: 2034328
      },
      {
        time: new Date(2016, 7, 16),
        open: 225.49,
        high: 227.19,
        low: 223.41,
        close: 223.61,
        volume: 2267147
      },
      {
        time: new Date(2016, 7, 17),
        open: 224.33,
        high: 224.83,
        low: 222.8,
        close: 223.24,
        volume: 1787127
      },
      {
        time: new Date(2016, 7, 18),
        open: 223.82,
        high: 225.66,
        low: 222.29,
        close: 223.51,
        volume: 1714467
      },
      {
        time: new Date(2016, 7, 19),
        open: 223.54,
        high: 225.17,
        low: 222.53,
        close: 225.0,
        volume: 1659530
      },
      {
        time: new Date(2016, 7, 22),
        open: 224.17,
        high: 225.11,
        low: 222.68,
        close: 222.93,
        volume: 2065493
      },
      {
        time: new Date(2016, 7, 23),
        open: 224.32,
        high: 228.49,
        low: 222.8,
        close: 224.84,
        volume: 4784418
      },
      {
        time: new Date(2016, 7, 24),
        open: 227.05,
        high: 227.15,
        low: 222.22,
        close: 222.62,
        volume: 2570693
      },
      {
        time: new Date(2016, 7, 25),
        open: 223.11,
        high: 223.8,
        low: 220.77,
        close: 220.96,
        volume: 1762519
      },
      {
        time: new Date(2016, 7, 26),
        open: 222.14,
        high: 222.86,
        low: 218.82,
        close: 219.99,
        volume: 2238992
      },
      {
        time: new Date(2016, 7, 29),
        open: 220.15,
        high: 220.4,
        low: 215.0,
        close: 215.2,
        volume: 3266334
      },
      {
        time: new Date(2016, 7, 30),
        open: 216.11,
        high: 216.11,
        low: 210.52,
        close: 211.34,
        volume: 3168862
      },
      {
        time: new Date(2016, 7, 31),
        open: 210.43,
        high: 212.6,
        low: 208.65,
        close: 212.01,
        volume: 3276548
      },
      {
        time: new Date(2016, 8, 1),
        open: 209.01,
        high: 211.1,
        low: 200.5,
        close: 200.77,
        volume: 7943138
      },
      {
        time: new Date(2016, 8, 2),
        open: 202.33,
        high: 203.2,
        low: 196.2,
        close: 197.78,
        volume: 5977413
      },
      {
        time: new Date(2016, 8, 6),
        open: 199.02,
        high: 203.25,
        low: 199.0,
        close: 202.83,
        volume: 4390572
      },
      {
        time: new Date(2016, 8, 7),
        open: 205.5,
        high: 206.5,
        low: 200.71,
        close: 201.71,
        volume: 3640923
      },
      {
        time: new Date(2016, 8, 8),
        open: 199.55,
        high: 199.89,
        low: 196.36,
        close: 197.36,
        volume: 3377946
      },
      {
        time: new Date(2016, 8, 9),
        open: 199.09,
        high: 199.92,
        low: 193.7,
        close: 194.47,
        volume: 3756992
      },
      {
        time: new Date(2016, 8, 12),
        open: 195.0,
        high: 201.37,
        low: 194.1,
        close: 198.3,
        volume: 3715161
      },
      {
        time: new Date(2016, 8, 13),
        open: 197.06,
        high: 198.49,
        low: 193.45,
        close: 196.05,
        volume: 3589379
      },
      {
        time: new Date(2016, 8, 14),
        open: 195.75,
        high: 197.92,
        low: 194.86,
        close: 196.41,
        volume: 2259231
      },
      {
        time: new Date(2016, 8, 15),
        open: 196.49,
        high: 202.52,
        low: 196.4,
        close: 200.42,
        volume: 3085115
      },
      {
        time: new Date(2016, 8, 16),
        open: 200.42,
        high: 205.7,
        low: 199.0,
        close: 205.4,
        volume: 3107808
      },
      {
        time: new Date(2016, 8, 19),
        open: 207.0,
        high: 209.43,
        low: 205.0,
        close: 206.34,
        volume: 2299498
      },
      {
        time: new Date(2016, 8, 20),
        open: 206.85,
        high: 207.75,
        low: 203.91,
        close: 204.64,
        volume: 2410488
      },
      {
        time: new Date(2016, 8, 21),
        open: 206.37,
        high: 207.0,
        low: 201.56,
        close: 205.22,
        volume: 2633503
      },
      {
        time: new Date(2016, 8, 22),
        open: 206.4,
        high: 207.28,
        low: 203.0,
        close: 206.43,
        volume: 2382902
      },
      {
        time: new Date(2016, 8, 23),
        open: 205.99,
        high: 210.18,
        low: 205.67,
        close: 207.45,
        volume: 2905229
      },
      {
        time: new Date(2016, 8, 26),
        open: 206.5,
        high: 211.0,
        low: 206.5,
        close: 208.99,
        volume: 2394358
      },
      {
        time: new Date(2016, 8, 27),
        open: 209.65,
        high: 209.98,
        low: 204.61,
        close: 205.81,
        volume: 3373180
      },
      {
        time: new Date(2016, 8, 28),
        open: 207.51,
        high: 208.25,
        low: 205.26,
        close: 206.27,
        volume: 2088374
      },
      {
        time: new Date(2016, 8, 29),
        open: 205.6,
        high: 207.33,
        low: 200.58,
        close: 200.7,
        volume: 2727029
      },
      {
        time: new Date(2016, 8, 30),
        open: 202.21,
        high: 204.98,
        low: 199.55,
        close: 204.03,
        volume: 2586273
      },
      {
        time: new Date(2016, 9, 3),
        open: 212.3,
        high: 215.67,
        low: 208.25,
        close: 213.7,
        volume: 5999892
      },
      {
        time: new Date(2016, 9, 4),
        open: 213.1,
        high: 213.32,
        low: 208.82,
        close: 211.41,
        volume: 3541481
      },
      {
        time: new Date(2016, 9, 5),
        open: 212.24,
        high: 213.15,
        low: 208.12,
        close: 208.46,
        volume: 1877534
      },
      {
        time: new Date(2016, 9, 6),
        open: 202.46,
        high: 204.21,
        low: 200.21,
        close: 201.0,
        volume: 4703402
      },
      {
        time: new Date(2016, 9, 7),
        open: 201.0,
        high: 201.32,
        low: 195.8,
        close: 196.61,
        volume: 3493018
      },
      {
        time: new Date(2016, 9, 10),
        open: 201.35,
        high: 204.14,
        low: 199.66,
        close: 200.95,
        volume: 3316297
      },
      {
        time: new Date(2016, 9, 11),
        open: 201.85,
        high: 202.2,
        low: 198.31,
        close: 200.1,
        volume: 2328422
      },
      {
        time: new Date(2016, 9, 12),
        open: 200.95,
        high: 203.88,
        low: 200.42,
        close: 201.51,
        volume: 1970689
      },
      {
        time: new Date(2016, 9, 13),
        open: 200.5,
        high: 200.9,
        low: 197.05,
        close: 200.24,
        volume: 2495413
      },
      {
        time: new Date(2016, 9, 14),
        open: 200.66,
        high: 201.43,
        low: 196.3,
        close: 196.51,
        volume: 4269850
      },
      {
        time: new Date(2016, 9, 17),
        open: 197.05,
        high: 198.39,
        low: 192.0,
        close: 193.96,
        volume: 4554080
      },
      {
        time: new Date(2016, 9, 18),
        open: 195.99,
        high: 199.47,
        low: 193.26,
        close: 199.1,
        volume: 5680475
      },
      {
        time: new Date(2016, 9, 19),
        open: 199.74,
        high: 206.66,
        low: 198.06,
        close: 203.56,
        volume: 6991183
      },
      {
        time: new Date(2016, 9, 20),
        open: 202.12,
        high: 203.0,
        low: 197.05,
        close: 199.1,
        volume: 5072877
      },
      {
        time: new Date(2016, 9, 21),
        open: 198.6,
        high: 201.57,
        low: 197.41,
        close: 200.09,
        volume: 2943402
      },
      {
        time: new Date(2016, 9, 24),
        open: 201.0,
        high: 203.95,
        low: 200.25,
        close: 202.76,
        volume: 2751562
      },
      {
        time: new Date(2016, 9, 25),
        open: 202.9,
        high: 204.69,
        low: 201.2,
        close: 202.34,
        volume: 2445014
      },
      {
        time: new Date(2016, 9, 26),
        open: 201.0,
        high: 203.19,
        low: 200.1,
        close: 202.24,
        volume: 5632841
      },
      {
        time: new Date(2016, 9, 27),
        open: 211.34,
        high: 213.7,
        low: 201.65,
        close: 204.01,
        volume: 13093744
      },
      {
        time: new Date(2016, 9, 28),
        open: 204.0,
        high: 205.32,
        low: 199.83,
        close: 199.97,
        volume: 4280141
      },
      {
        time: new Date(2016, 9, 31),
        open: 202.49,
        high: 202.49,
        low: 195.81,
        close: 197.73,
        volume: 4692273
      },
      {
        time: new Date(2016, 10, 1),
        open: 198.04,
        high: 198.5,
        low: 188.1,
        close: 190.79,
        volume: 7060036
      },
      {
        time: new Date(2016, 10, 2),
        open: 190.05,
        high: 192.7,
        low: 187.5,
        close: 188.02,
        volume: 4253382
      },
      {
        time: new Date(2016, 10, 3),
        open: 189.0,
        high: 191.47,
        low: 187.04,
        close: 187.42,
        volume: 2653023
      },
      {
        time: new Date(2016, 10, 4),
        open: 189.0,
        high: 193.46,
        low: 185.96,
        close: 190.56,
        volume: 5146043
      },
      {
        time: new Date(2016, 10, 7),
        open: 193.59,
        high: 194.29,
        low: 190.05,
        close: 193.21,
        volume: 3870112
      },
      {
        time: new Date(2016, 10, 8),
        open: 193.79,
        high: 197.49,
        low: 191.26,
        close: 194.94,
        volume: 3267580
      },
      {
        time: new Date(2016, 10, 9),
        open: 186.88,
        high: 192.0,
        low: 183.95,
        close: 190.06,
        volume: 8173065
      },
      {
        time: new Date(2016, 10, 10),
        open: 191.05,
        high: 191.61,
        low: 180.42,
        close: 185.35,
        volume: 6750341
      },
      {
        time: new Date(2016, 10, 11),
        open: 184.24,
        high: 188.88,
        low: 183.0,
        close: 188.56,
        volume: 3988504
      },
      {
        time: new Date(2016, 10, 14),
        open: 188.0,
        high: 188.25,
        low: 178.19,
        close: 181.45,
        volume: 6552205
      },
      {
        time: new Date(2016, 10, 15),
        open: 182.78,
        high: 186.43,
        low: 182.05,
        close: 183.77,
        volume: 3902018
      },
      {
        time: new Date(2016, 10, 16),
        open: 182.65,
        high: 184.73,
        low: 181.21,
        close: 183.93,
        volume: 3434437
      },
      {
        time: new Date(2016, 10, 17),
        open: 183.49,
        high: 189.49,
        low: 182.11,
        close: 188.66,
        volume: 4887067
      },
      {
        time: new Date(2016, 10, 18),
        open: 190.65,
        high: 193.0,
        low: 185.0,
        close: 185.02,
        volume: 5210347
      },
      {
        time: new Date(2016, 10, 21),
        open: 185.04,
        high: 188.89,
        low: 184.41,
        close: 184.52,
        volume: 4361043
      },
      {
        time: new Date(2016, 10, 22),
        open: 185.84,
        high: 191.47,
        low: 183.71,
        close: 191.17,
        volume: 5603361
      },
      {
        time: new Date(2016, 10, 23),
        open: 190.61,
        high: 195.64,
        low: 189.0,
        close: 193.14,
        volume: 4891893
      },
      {
        time: new Date(2016, 10, 25),
        open: 193.64,
        high: 197.24,
        low: 193.64,
        close: 196.65,
        volume: 2366098
      },
      {
        time: new Date(2016, 10, 28),
        open: 195.48,
        high: 199.35,
        low: 194.55,
        close: 196.12,
        volume: 4529182
      },
      {
        time: new Date(2016, 10, 29),
        open: 195.56,
        high: 196.73,
        low: 189.5,
        close: 189.57,
        volume: 4439256
      },
      {
        time: new Date(2016, 10, 30),
        open: 191.0,
        high: 191.89,
        low: 187.5,
        close: 189.4,
        volume: 3547104
      },
      {
        time: new Date(2016, 11, 1),
        open: 188.25,
        high: 188.53,
        low: 181.0,
        close: 181.88,
        volume: 5126401
      },
      {
        time: new Date(2016, 11, 2),
        open: 182.88,
        high: 184.88,
        low: 180.0,
        close: 181.47,
        volume: 4042324
      },
      {
        time: new Date(2016, 11, 5),
        open: 182.51,
        high: 188.89,
        low: 182.51,
        close: 186.8,
        volume: 4072239
      },
      {
        time: new Date(2016, 11, 6),
        open: 185.52,
        high: 186.58,
        low: 182.68,
        close: 185.85,
        volume: 3391622
      },
      {
        time: new Date(2016, 11, 7),
        open: 186.15,
        high: 193.4,
        low: 185.0,
        close: 193.15,
        volume: 5461851
      },
      {
        time: new Date(2016, 11, 8),
        open: 192.05,
        high: 192.5,
        low: 189.54,
        close: 192.29,
        volume: 3194148
      },
      {
        time: new Date(2016, 11, 9),
        open: 190.87,
        high: 193.84,
        low: 190.81,
        close: 192.18,
        volume: 2722505
      },
      {
        time: new Date(2016, 11, 12),
        open: 192.8,
        high: 194.42,
        low: 191.04,
        close: 192.43,
        volume: 2438876
      },
      {
        time: new Date(2016, 11, 13),
        open: 193.18,
        high: 201.28,
        low: 193.0,
        close: 198.15,
        volume: 6823884
      },
      {
        time: new Date(2016, 11, 14),
        open: 198.74,
        high: 203.0,
        low: 196.76,
        close: 198.69,
        volume: 4150927
      },
      {
        time: new Date(2016, 11, 15),
        open: 198.41,
        high: 200.74,
        low: 197.39,
        close: 197.58,
        volume: 3219567
      },
      {
        time: new Date(2016, 11, 16),
        open: 198.08,
        high: 202.59,
        low: 197.6,
        close: 202.49,
        volume: 3796889
      },
      {
        time: new Date(2016, 11, 19),
        open: 202.49,
        high: 204.45,
        low: 199.84,
        close: 202.73,
        volume: 3488071
      },
      {
        time: new Date(2016, 11, 20),
        open: 203.05,
        high: 209.0,
        low: 202.5,
        close: 208.79,
        volume: 4689071
      },
      {
        time: new Date(2016, 11, 21),
        open: 208.45,
        high: 212.23,
        low: 207.41,
        close: 207.7,
        volume: 5207622
      },
      {
        time: new Date(2016, 11, 22),
        open: 208.22,
        high: 209.99,
        low: 206.5,
        close: 208.45,
        volume: 3111108
      },
      {
        time: new Date(2016, 11, 23),
        open: 208.0,
        high: 213.45,
        low: 207.71,
        close: 213.34,
        volume: 4670464
      },
      {
        time: new Date(2016, 11, 27),
        open: 214.88,
        high: 222.25,
        low: 214.42,
        close: 219.53,
        volume: 5915732
      },
      {
        time: new Date(2016, 11, 28),
        open: 221.53,
        high: 223.8,
        low: 217.2,
        close: 219.74,
        volume: 3782456
      },
      {
        time: new Date(2016, 11, 29),
        open: 218.56,
        high: 219.2,
        low: 214.12,
        close: 214.68,
        volume: 4044968
      },
      {
        time: new Date(2016, 11, 30),
        open: 216.3,
        high: 217.5,
        low: 211.68,
        close: 213.69,
        volume: 4642620
      },
      {
        time: new Date(2017, 0, 3),
        open: 214.86,
        high: 220.33,
        low: 210.96,
        close: 216.99,
        volume: 5923254
      },
      {
        time: new Date(2017, 0, 4),
        open: 214.75,
        high: 228.0,
        low: 214.31,
        close: 226.99,
        volume: 11213471
      },
      {
        time: new Date(2017, 0, 5),
        open: 226.42,
        high: 227.48,
        low: 221.95,
        close: 226.75,
        volume: 5911695
      },
      {
        time: new Date(2017, 0, 6),
        open: 226.93,
        high: 230.31,
        low: 225.45,
        close: 229.01,
        volume: 5527893
      },
      {
        time: new Date(2017, 0, 9),
        open: 228.97,
        high: 231.92,
        low: 228.0,
        close: 231.28,
        volume: 3979484
      },
      {
        time: new Date(2017, 0, 10),
        open: 232.0,
        high: 232.0,
        low: 226.89,
        close: 229.87,
        volume: 3659955
      },
      {
        time: new Date(2017, 0, 11),
        open: 229.07,
        high: 229.98,
        low: 226.68,
        close: 229.73,
        volume: 3650825
      },
      {
        time: new Date(2017, 0, 12),
        open: 229.06,
        high: 230.7,
        low: 225.58,
        close: 229.59,
        volume: 3790229
      },
      {
        time: new Date(2017, 0, 13),
        open: 230.0,
        high: 237.85,
        low: 229.59,
        close: 237.75,
        volume: 6092960
      },
      {
        time: new Date(2017, 0, 17),
        open: 236.7,
        high: 239.96,
        low: 234.37,
        close: 235.58,
        volume: 4617522
      },
      {
        time: new Date(2017, 0, 18),
        open: 236.65,
        high: 239.71,
        low: 235.58,
        close: 238.36,
        volume: 3768967
      },
      {
        time: new Date(2017, 0, 19),
        open: 247.25,
        high: 248.68,
        low: 240.75,
        close: 243.76,
        volume: 7732303
      },
      {
        time: new Date(2017, 0, 20),
        open: 245.46,
        high: 246.0,
        low: 243.01,
        close: 244.73,
        volume: 4204275
      },
      {
        time: new Date(2017, 0, 23),
        open: 245.85,
        high: 250.89,
        low: 245.5,
        close: 248.92,
        volume: 6262938
      },
      {
        time: new Date(2017, 0, 24),
        open: 250.0,
        high: 254.8,
        low: 249.65,
        close: 254.61,
        volume: 4965451
      },
      {
        time: new Date(2017, 0, 25),
        open: 257.31,
        high: 258.46,
        low: 251.8,
        close: 254.47,
        volume: 5146361
      },
      {
        time: new Date(2017, 0, 26),
        open: 254.29,
        high: 255.74,
        low: 250.75,
        close: 252.51,
        volume: 3152123
      },
      {
        time: new Date(2017, 0, 27),
        open: 251.38,
        high: 253.0,
        low: 248.52,
        close: 252.95,
        volume: 3166336
      },
      {
        time: new Date(2017, 0, 30),
        open: 252.53,
        high: 255.29,
        low: 247.1,
        close: 250.63,
        volume: 3801074
      },
      {
        time: new Date(2017, 0, 31),
        open: 249.24,
        high: 255.89,
        low: 247.7,
        close: 251.93,
        volume: 4116104
      },
      {
        time: new Date(2017, 1, 1),
        open: 253.05,
        high: 253.2,
        low: 249.05,
        close: 249.24,
        volume: 3958829
      },
      {
        time: new Date(2017, 1, 2),
        open: 248.34,
        high: 252.42,
        low: 247.71,
        close: 251.55,
        volume: 2499775
      },
      {
        time: new Date(2017, 1, 3),
        open: 251.91,
        high: 252.18,
        low: 249.68,
        close: 251.33,
        volume: 2186723
      },
      {
        time: new Date(2017, 1, 6),
        open: 251.0,
        high: 257.82,
        low: 250.63,
        close: 257.77,
        volume: 3562517
      },
      {
        time: new Date(2017, 1, 7),
        open: 258.19,
        high: 260.0,
        low: 256.42,
        close: 257.48,
        volume: 4244775
      },
      {
        time: new Date(2017, 1, 8),
        open: 257.35,
        high: 263.36,
        low: 256.2,
        close: 262.08,
        volume: 3933014
      },
      {
        time: new Date(2017, 1, 9),
        open: 266.25,
        high: 271.18,
        low: 266.15,
        close: 269.2,
        volume: 7820222
      },
      {
        time: new Date(2017, 1, 10),
        open: 269.79,
        high: 270.95,
        low: 266.11,
        close: 269.23,
        volume: 3619739
      },
      {
        time: new Date(2017, 1, 13),
        open: 270.74,
        high: 280.79,
        low: 270.51,
        close: 280.6,
        volume: 7029605
      },
      {
        time: new Date(2017, 1, 14),
        open: 279.03,
        high: 287.39,
        low: 278.61,
        close: 280.98,
        volume: 7345224
      },
      {
        time: new Date(2017, 1, 15),
        open: 280.0,
        high: 282.24,
        low: 276.44,
        close: 279.76,
        volume: 4947856
      },
      {
        time: new Date(2017, 1, 16),
        open: 277.6,
        high: 280.0,
        low: 268.5,
        close: 268.95,
        volume: 7077322
      },
      {
        time: new Date(2017, 1, 17),
        open: 265.8,
        high: 272.89,
        low: 264.15,
        close: 272.23,
        volume: 6257149
      },
      {
        time: new Date(2017, 1, 21),
        open: 275.45,
        high: 281.4,
        low: 274.01,
        close: 277.39,
        volume: 5676747
      },
      {
        time: new Date(2017, 1, 22),
        open: 280.31,
        high: 283.45,
        low: 272.6,
        close: 273.51,
        volume: 8754975
      },
      {
        time: new Date(2017, 1, 23),
        open: 264.0,
        high: 264.66,
        low: 255.56,
        close: 255.99,
        volume: 14915249
      },
      {
        time: new Date(2017, 1, 24),
        open: 252.66,
        high: 258.25,
        low: 250.2,
        close: 257.0,
        volume: 8171626
      },
      {
        time: new Date(2017, 1, 27),
        open: 248.17,
        high: 248.36,
        low: 242.01,
        close: 246.23,
        volume: 11460810
      },
      {
        time: new Date(2017, 1, 28),
        open: 244.19,
        high: 251.0,
        low: 243.9,
        close: 249.99,
        volume: 6078145
      },
      {
        time: new Date(2017, 2, 1),
        open: 254.18,
        high: 254.85,
        low: 249.11,
        close: 250.02,
        volume: 4809488
      },
      {
        time: new Date(2017, 2, 2),
        open: 249.71,
        high: 253.28,
        low: 248.27,
        close: 250.48,
        volume: 3351833
      },
      {
        time: new Date(2017, 2, 3),
        open: 251.33,
        high: 251.9,
        low: 249.0,
        close: 251.57,
        volume: 2929234
      },
      {
        time: new Date(2017, 2, 6),
        open: 247.91,
        high: 251.7,
        low: 247.51,
        close: 251.21,
        volume: 3355500
      },
      {
        time: new Date(2017, 2, 7),
        open: 251.92,
        high: 253.89,
        low: 248.32,
        close: 248.59,
        volume: 3459470
      },
      {
        time: new Date(2017, 2, 8),
        open: 247.0,
        high: 250.07,
        low: 245.32,
        close: 246.87,
        volume: 3728649
      },
      {
        time: new Date(2017, 2, 9),
        open: 247.63,
        high: 248.66,
        low: 243.0,
        close: 244.9,
        volume: 3879293
      },
      {
        time: new Date(2017, 2, 10),
        open: 246.21,
        high: 246.5,
        low: 243.0,
        close: 243.69,
        volume: 3066272
      },
      {
        time: new Date(2017, 2, 13),
        open: 244.82,
        high: 246.85,
        low: 242.78,
        close: 246.17,
        volume: 3022625
      },
      {
        time: new Date(2017, 2, 14),
        open: 246.11,
        high: 258.12,
        low: 246.02,
        close: 258.0,
        volume: 7598446
      },
      {
        time: new Date(2017, 2, 15),
        open: 257.0,
        high: 261.0,
        low: 254.27,
        close: 255.73,
        volume: 5330806
      },
      {
        time: new Date(2017, 2, 16),
        open: 262.4,
        high: 265.75,
        low: 259.06,
        close: 262.05,
        volume: 7132153
      },
      {
        time: new Date(2017, 2, 17),
        open: 264.0,
        high: 265.33,
        low: 261.2,
        close: 261.5,
        volume: 6497496
      },
      {
        time: new Date(2017, 2, 20),
        open: 260.6,
        high: 264.55,
        low: 258.82,
        close: 261.92,
        volume: 3614294
      },
      {
        time: new Date(2017, 2, 21),
        open: 262.83,
        high: 264.8,
        low: 250.24,
        close: 250.68,
        volume: 6908554
      },
      {
        time: new Date(2017, 2, 22),
        open: 251.56,
        high: 255.07,
        low: 250.51,
        close: 255.01,
        volume: 4059297
      },
      {
        time: new Date(2017, 2, 23),
        open: 255.39,
        high: 257.67,
        low: 253.3,
        close: 254.78,
        volume: 3320245
      },
      {
        time: new Date(2017, 2, 24),
        open: 255.7,
        high: 263.89,
        low: 255.01,
        close: 263.16,
        volume: 5647253
      },
      {
        time: new Date(2017, 2, 27),
        open: 260.6,
        high: 270.57,
        low: 259.75,
        close: 270.22,
        volume: 6230795
      },
      {
        time: new Date(2017, 2, 28),
        open: 277.02,
        high: 280.68,
        low: 275.0,
        close: 277.45,
        volume: 7987604
      },
      {
        time: new Date(2017, 2, 29),
        open: 278.34,
        high: 279.6,
        low: 275.54,
        close: 277.38,
        volume: 3676157
      },
      {
        time: new Date(2017, 2, 30),
        open: 278.04,
        high: 282.0,
        low: 277.21,
        close: 277.92,
        volume: 4148426
      },
      {
        time: new Date(2017, 2, 31),
        open: 278.73,
        high: 279.68,
        low: 276.32,
        close: 278.3,
        volume: 3294640
      },
      {
        time: new Date(2017, 3, 3),
        open: 286.9,
        high: 299.0,
        low: 284.58,
        close: 298.52,
        volume: 13888618
      },
      {
        time: new Date(2017, 3, 4),
        open: 296.89,
        high: 304.81,
        low: 294.53,
        close: 303.7,
        volume: 10134556
      },
      {
        time: new Date(2017, 3, 5),
        open: 302.04,
        high: 304.88,
        low: 294.2,
        close: 295.0,
        volume: 7880938
      },
      {
        time: new Date(2017, 3, 6),
        open: 296.88,
        high: 301.94,
        low: 294.1,
        close: 298.7,
        volume: 5520588
      },
      {
        time: new Date(2017, 3, 7),
        open: 297.5,
        high: 302.69,
        low: 297.15,
        close: 302.54,
        volume: 4579613
      },
      {
        time: new Date(2017, 3, 10),
        open: 309.15,
        high: 313.73,
        low: 308.71,
        close: 312.39,
        volume: 7664458
      },
      {
        time: new Date(2017, 3, 11),
        open: 313.38,
        high: 313.47,
        low: 305.5,
        close: 308.71,
        volume: 5724577
      },
      {
        time: new Date(2017, 3, 12),
        open: 306.34,
        high: 308.45,
        low: 296.32,
        close: 296.84,
        volume: 6050682
      },
      {
        time: new Date(2017, 3, 13),
        open: 296.7,
        high: 307.39,
        low: 295.3,
        close: 304.0,
        volume: 9284634
      },
      {
        time: new Date(2017, 3, 17),
        open: 302.7,
        high: 304.0,
        low: 298.68,
        close: 301.44,
        volume: 4138736
      },
      {
        time: new Date(2017, 3, 18),
        open: 299.7,
        high: 300.84,
        low: 297.9,
        close: 300.25,
        volume: 3035698
      },
      {
        time: new Date(2017, 3, 19),
        open: 302.46,
        high: 306.62,
        low: 302.11,
        close: 305.52,
        volume: 3898024
      },
      {
        time: new Date(2017, 3, 20),
        open: 306.51,
        high: 309.15,
        low: 300.23,
        close: 302.51,
        volume: 6149352
      },
      {
        time: new Date(2017, 3, 21),
        open: 302.0,
        high: 306.4,
        low: 300.42,
        close: 305.6,
        volume: 4509756
      },
      {
        time: new Date(2017, 3, 24),
        open: 309.22,
        high: 310.55,
        low: 306.02,
        close: 308.03,
        volume: 5083505
      },
      {
        time: new Date(2017, 3, 25),
        open: 308.0,
        high: 313.98,
        low: 305.86,
        close: 313.79,
        volume: 6737708
      },
      {
        time: new Date(2017, 3, 26),
        open: 312.37,
        high: 314.5,
        low: 309.0,
        close: 310.17,
        volume: 4695044
      },
      {
        time: new Date(2017, 3, 27),
        open: 311.69,
        high: 313.09,
        low: 307.5,
        close: 308.63,
        volume: 3468569
      },
      {
        time: new Date(2017, 3, 28),
        open: 309.83,
        high: 314.8,
        low: 308.0,
        close: 314.07,
        volume: 4505478
      },
      {
        time: new Date(2017, 4, 1),
        open: 314.88,
        high: 327.25,
        low: 314.81,
        close: 322.83,
        volume: 8829565
      },
      {
        time: new Date(2017, 4, 2),
        open: 324.0,
        high: 327.66,
        low: 316.56,
        close: 318.89,
        volume: 5382777
      },
      {
        time: new Date(2017, 4, 3),
        open: 317.67,
        high: 321.53,
        low: 310.45,
        close: 311.02,
        volume: 7133365
      },
      {
        time: new Date(2017, 4, 4),
        open: 307.44,
        high: 307.77,
        low: 290.76,
        close: 295.46,
        volume: 14152008
      },
      {
        time: new Date(2017, 4, 5),
        open: 298.0,
        high: 308.55,
        low: 296.8,
        close: 308.35,
        volume: 8177347
      },
      {
        time: new Date(2017, 4, 8),
        open: 310.9,
        high: 313.79,
        low: 305.82,
        close: 307.19,
        volume: 7006471
      },
      {
        time: new Date(2017, 4, 9),
        open: 309.38,
        high: 321.99,
        low: 309.1,
        close: 321.26,
        volume: 9676537
      },
      {
        time: new Date(2017, 4, 10),
        open: 321.56,
        high: 325.5,
        low: 318.12,
        close: 325.22,
        volume: 5741607
      },
      {
        time: new Date(2017, 4, 11),
        open: 323.4,
        high: 326.0,
        low: 319.6,
        close: 323.1,
        volume: 4753819
      },
      {
        time: new Date(2017, 4, 12),
        open: 325.48,
        high: 327.0,
        low: 321.53,
        close: 324.81,
        volume: 4121612
      },
      {
        time: new Date(2017, 4, 15),
        open: 318.38,
        high: 320.2,
        low: 312.53,
        close: 315.88,
        volume: 7622004
      },
      {
        time: new Date(2017, 4, 16),
        open: 317.59,
        high: 320.06,
        low: 315.14,
        close: 317.01,
        volume: 4152484
      },
      {
        time: new Date(2017, 4, 17),
        open: 314.39,
        high: 314.63,
        low: 305.5,
        close: 306.11,
        volume: 6711940
      },
      {
        time: new Date(2017, 4, 18),
        open: 307.0,
        high: 313.94,
        low: 305.31,
        close: 313.06,
        volume: 5653801
      },
      {
        time: new Date(2017, 4, 19),
        open: 315.5,
        high: 316.5,
        low: 310.2,
        close: 310.83,
        volume: 4687572
      },
      {
        time: new Date(2017, 4, 22),
        open: 312.8,
        high: 314.37,
        low: 306.8,
        close: 310.35,
        volume: 4329178
      },
      {
        time: new Date(2017, 4, 23),
        open: 310.46,
        high: 310.73,
        low: 303.48,
        close: 303.86,
        volume: 4318354
      },
      {
        time: new Date(2017, 4, 24),
        open: 306.51,
        high: 311.0,
        low: 305.4,
        close: 310.22,
        volume: 5041692
      },
      {
        time: new Date(2017, 4, 25),
        open: 311.02,
        high: 316.97,
        low: 307.81,
        close: 316.83,
        volume: 5013963
      },
      {
        time: new Date(2017, 4, 26),
        open: 317.28,
        high: 325.49,
        low: 316.31,
        close: 325.14,
        volume: 7802199
      },
      {
        time: new Date(2017, 4, 30),
        open: 326.0,
        high: 336.28,
        low: 325.76,
        close: 335.1,
        volume: 7782916
      },
      {
        time: new Date(2017, 4, 31),
        open: 337.69,
        high: 342.89,
        low: 335.16,
        close: 341.01,
        volume: 9963444
      },
      {
        time: new Date(2017, 5, 1),
        open: 344.0,
        high: 344.88,
        low: 337.29,
        close: 340.37,
        volume: 7607996
      },
      {
        time: new Date(2017, 5, 2),
        open: 339.77,
        high: 342.88,
        low: 335.93,
        close: 339.85,
        volume: 5590239
      },
      {
        time: new Date(2017, 5, 5),
        open: 338.5,
        high: 348.44,
        low: 334.21,
        close: 347.32,
        volume: 6784368
      },
      {
        time: new Date(2017, 5, 6),
        open: 344.7,
        high: 359.49,
        low: 339.97,
        close: 352.85,
        volume: 11086798
      },
      {
        time: new Date(2017, 5, 7),
        open: 356.34,
        high: 360.5,
        low: 355.14,
        close: 359.65,
        volume: 9397959
      },
      {
        time: new Date(2017, 5, 8),
        open: 363.75,
        high: 371.9,
        low: 360.22,
        close: 370.0,
        volume: 9061496
      },
      {
        time: new Date(2017, 5, 9),
        open: 374.42,
        high: 376.87,
        low: 354.8,
        close: 357.32,
        volume: 17261435
      },
      {
        time: new Date(2017, 5, 12),
        open: 357.99,
        high: 364.5,
        low: 350.62,
        close: 359.01,
        volume: 10517660
      },
      {
        time: new Date(2017, 5, 13),
        open: 367.62,
        high: 376.0,
        low: 366.61,
        close: 375.95,
        volume: 11807920
      },
      {
        time: new Date(2017, 5, 14),
        open: 381.08,
        high: 384.25,
        low: 376.31,
        close: 380.66,
        volume: 12818429
      },
      {
        time: new Date(2017, 5, 15),
        open: 372.5,
        high: 375.46,
        low: 366.49,
        close: 375.34,
        volume: 10426469
      },
      {
        time: new Date(2017, 5, 16),
        open: 377.98,
        high: 378.01,
        low: 370.1,
        close: 371.4,
        volume: 6730973
      },
      {
        time: new Date(2017, 5, 19),
        open: 375.0,
        high: 376.7,
        low: 367.8,
        close: 369.8,
        volume: 6549332
      },
      {
        time: new Date(2017, 5, 20),
        open: 376.67,
        high: 378.88,
        low: 369.73,
        close: 372.24,
        volume: 7438701
      },
      {
        time: new Date(2017, 5, 21),
        open: 374.35,
        high: 376.99,
        low: 368.02,
        close: 376.4,
        volume: 4923210
      },
      {
        time: new Date(2017, 5, 22),
        open: 377.99,
        high: 385.0,
        low: 373.57,
        close: 382.61,
        volume: 7529778
      },
      {
        time: new Date(2017, 5, 23),
        open: 382.45,
        high: 386.99,
        low: 379.34,
        close: 383.45,
        volume: 6445758
      },
      {
        time: new Date(2017, 5, 26),
        open: 386.69,
        high: 386.95,
        low: 373.1,
        close: 377.49,
        volume: 6604099
      },
      {
        time: new Date(2017, 5, 27),
        open: 376.4,
        high: 376.4,
        low: 362.02,
        close: 362.37,
        volume: 6996399
      },
      {
        time: new Date(2017, 5, 28),
        open: 366.68,
        high: 371.74,
        low: 362.52,
        close: 371.24,
        volume: 6302463
      },
      {
        time: new Date(2017, 5, 29),
        open: 370.61,
        high: 371.0,
        low: 354.1,
        close: 360.75,
        volume: 8221038
      },
      {
        time: new Date(2017, 5, 30),
        open: 363.71,
        high: 366.77,
        low: 359.62,
        close: 361.61,
        volume: 5848521
      },
      {
        time: new Date(2017, 6, 3),
        open: 370.24,
        high: 371.35,
        low: 351.5,
        close: 352.62,
        volume: 6305401
      },
      {
        time: new Date(2017, 6, 5),
        open: 347.2,
        high: 347.24,
        low: 326.33,
        close: 327.09,
        volume: 17046701
      },
      {
        time: new Date(2017, 6, 6),
        open: 317.26,
        high: 320.79,
        low: 306.3,
        close: 308.83,
        volume: 19324495
      },
      {
        time: new Date(2017, 6, 7),
        open: 313.5,
        high: 317.0,
        low: 307.38,
        close: 313.22,
        volume: 14176915
      },
      {
        time: new Date(2017, 6, 10),
        open: 312.9,
        high: 317.94,
        low: 303.13,
        close: 316.05,
        volume: 13820889
      },
      {
        time: new Date(2017, 6, 11),
        open: 316.0,
        high: 327.28,
        low: 314.3,
        close: 327.22,
        volume: 11559402
      },
      {
        time: new Date(2017, 6, 12),
        open: 330.4,
        high: 333.1,
        low: 324.5,
        close: 329.52,
        volume: 10346127
      },
      {
        time: new Date(2017, 6, 13),
        open: 330.11,
        high: 331.6,
        low: 319.97,
        close: 323.41,
        volume: 8594466
      },
      {
        time: new Date(2017, 6, 14),
        open: 323.19,
        high: 328.42,
        low: 321.22,
        close: 327.78,
        volume: 5625211
      },
      {
        time: new Date(2017, 6, 17),
        open: 325.54,
        high: 327.1,
        low: 313.45,
        close: 319.57,
        volume: 9876912
      },
      {
        time: new Date(2017, 6, 18),
        open: 317.5,
        high: 329.13,
        low: 315.66,
        close: 328.24,
        volume: 6373720
      },
      {
        time: new Date(2017, 6, 19),
        open: 328.23,
        high: 331.65,
        low: 323.22,
        close: 325.26,
        volume: 6357014
      },
      {
        time: new Date(2017, 6, 20),
        open: 326.9,
        high: 330.22,
        low: 324.2,
        close: 329.92,
        volume: 5166188
      },
      {
        time: new Date(2017, 6, 21),
        open: 329.46,
        high: 331.26,
        low: 325.8,
        close: 328.4,
        volume: 4901606
      },
      {
        time: new Date(2017, 6, 24),
        open: 330.24,
        high: 343.4,
        low: 330.01,
        close: 342.52,
        volume: 8637082
      },
      {
        time: new Date(2017, 6, 25),
        open: 345.0,
        high: 345.6,
        low: 334.15,
        close: 339.6,
        volume: 6989197
      },
      {
        time: new Date(2017, 6, 26),
        open: 340.36,
        high: 345.5,
        low: 338.12,
        close: 343.85,
        volume: 4820790
      },
      {
        time: new Date(2017, 6, 27),
        open: 346.0,
        high: 347.5,
        low: 326.29,
        close: 334.46,
        volume: 8302405
      },
      {
        time: new Date(2017, 6, 28),
        open: 336.89,
        high: 339.6,
        low: 332.51,
        close: 335.07,
        volume: 4880414
      },
      {
        time: new Date(2017, 6, 31),
        open: 335.5,
        high: 341.49,
        low: 321.04,
        close: 323.47,
        volume: 8535136
      },
      {
        time: new Date(2017, 7, 1),
        open: 323.0,
        high: 324.45,
        low: 316.13,
        close: 319.57,
        volume: 8303102
      },
      {
        time: new Date(2017, 7, 2),
        open: 318.94,
        high: 327.12,
        low: 311.22,
        close: 325.89,
        volume: 13091462
      },
      {
        time: new Date(2017, 7, 3),
        open: 345.33,
        high: 350.0,
        low: 343.15,
        close: 347.09,
        volume: 13535033
      },
      {
        time: new Date(2017, 7, 4),
        open: 347.0,
        high: 357.27,
        low: 343.3,
        close: 356.91,
        volume: 9268909
      },
      {
        time: new Date(2017, 7, 7),
        open: 357.35,
        high: 359.48,
        low: 352.75,
        close: 355.17,
        volume: 6324480
      },
      {
        time: new Date(2017, 7, 8),
        open: 357.53,
        high: 368.58,
        low: 357.4,
        close: 365.22,
        volume: 7449837
      },
      {
        time: new Date(2017, 7, 9),
        open: 361.0,
        high: 370.0,
        low: 358.95,
        close: 363.53,
        volume: 6892096
      },
      {
        time: new Date(2017, 7, 10),
        open: 361.6,
        high: 366.65,
        low: 354.66,
        close: 355.4,
        volume: 7092858
      },
      {
        time: new Date(2017, 7, 11),
        open: 356.97,
        high: 361.26,
        low: 353.62,
        close: 357.87,
        volume: 4365783
      },
      {
        time: new Date(2017, 7, 14),
        open: 364.63,
        high: 367.66,
        low: 362.6,
        close: 363.8,
        volume: 4519186
      },
      {
        time: new Date(2017, 7, 15),
        open: 365.2,
        high: 365.49,
        low: 359.37,
        close: 362.33,
        volume: 3085088
      },
      {
        time: new Date(2017, 7, 16),
        open: 363.0,
        high: 366.5,
        low: 362.52,
        close: 362.91,
        volume: 3413773
      },
      {
        time: new Date(2017, 7, 17),
        open: 361.21,
        high: 363.3,
        low: 351.59,
        close: 351.92,
        volume: 5027660
      },
      {
        time: new Date(2017, 7, 18),
        open: 352.91,
        high: 354.0,
        low: 345.8,
        close: 347.46,
        volume: 5408183
      },
      {
        time: new Date(2017, 7, 21),
        open: 345.82,
        high: 345.82,
        low: 331.85,
        close: 337.86,
        volume: 6495424
      },
      {
        time: new Date(2017, 7, 22),
        open: 341.13,
        high: 342.24,
        low: 337.37,
        close: 341.35,
        volume: 4321966
      },
      {
        time: new Date(2017, 7, 23),
        open: 338.99,
        high: 353.49,
        low: 338.3,
        close: 352.77,
        volume: 4954504
      },
      {
        time: new Date(2017, 7, 24),
        open: 352.52,
        high: 356.66,
        low: 349.74,
        close: 352.93,
        volume: 4584687
      },
      {
        time: new Date(2017, 7, 25),
        open: 354.24,
        high: 355.69,
        low: 347.3,
        close: 348.05,
        volume: 3483956
      },
      {
        time: new Date(2017, 7, 28),
        open: 347.28,
        high: 347.35,
        low: 339.72,
        close: 345.66,
        volume: 3763956
      },
      {
        time: new Date(2017, 7, 29),
        open: 339.48,
        high: 349.05,
        low: 338.75,
        close: 347.36,
        volume: 4073675
      },
      {
        time: new Date(2017, 7, 30),
        open: 349.67,
        high: 353.47,
        low: 347.0,
        close: 353.18,
        volume: 3412943
      },
      {
        time: new Date(2017, 7, 31),
        open: 353.55,
        high: 358.44,
        low: 352.82,
        close: 355.9,
        volume: 4072795
      },
      {
        time: new Date(2017, 8, 1),
        open: 356.12,
        high: 357.59,
        low: 353.69,
        close: 355.4,
        volume: 3049546
      },
      {
        time: new Date(2017, 8, 5),
        open: 353.8,
        high: 355.49,
        low: 345.89,
        close: 349.59,
        volume: 3848382
      },
      {
        time: new Date(2017, 8, 6),
        open: 349.5,
        high: 350.98,
        low: 341.56,
        close: 344.53,
        volume: 4091351
      },
      {
        time: new Date(2017, 8, 7),
        open: 345.98,
        high: 352.48,
        low: 343.45,
        close: 350.61,
        volume: 4239213
      },
      {
        time: new Date(2017, 8, 8),
        open: 348.99,
        high: 349.78,
        low: 342.3,
        close: 343.4,
        volume: 3263508
      },
      {
        time: new Date(2017, 8, 11),
        open: 351.35,
        high: 363.71,
        low: 350.0,
        close: 363.69,
        volume: 7667055
      },
      {
        time: new Date(2017, 8, 12),
        open: 364.49,
        high: 368.76,
        low: 360.4,
        close: 362.75,
        volume: 5972907
      },
      {
        time: new Date(2017, 8, 13),
        open: 363.82,
        high: 368.07,
        low: 359.59,
        close: 366.23,
        volume: 4185231
      },
      {
        time: new Date(2017, 8, 14),
        open: 364.33,
        high: 377.96,
        low: 362.63,
        close: 377.64,
        volume: 7202524
      },
      {
        time: new Date(2017, 8, 15),
        open: 374.51,
        high: 380.0,
        low: 372.7,
        close: 379.81,
        volume: 5420496
      },
      {
        time: new Date(2017, 8, 18),
        open: 380.25,
        high: 389.61,
        low: 377.68,
        close: 385.0,
        volume: 7187980
      },
      {
        time: new Date(2017, 8, 19),
        open: 380.0,
        high: 382.39,
        low: 373.57,
        close: 375.1,
        volume: 6451886
      },
      {
        time: new Date(2017, 8, 20),
        open: 373.0,
        high: 378.25,
        low: 371.07,
        close: 373.91,
        volume: 4919052
      },
      {
        time: new Date(2017, 8, 21),
        open: 374.9,
        high: 376.83,
        low: 364.51,
        close: 366.48,
        volume: 4618190
      },
      {
        time: new Date(2017, 8, 22),
        open: 366.49,
        high: 369.9,
        low: 350.88,
        close: 351.09,
        volume: 8159418
      },
      {
        time: new Date(2017, 8, 25),
        open: 353.15,
        high: 357.47,
        low: 342.88,
        close: 344.99,
        volume: 7605946
      },
      {
        time: new Date(2017, 8, 26),
        open: 350.93,
        high: 351.24,
        low: 340.9,
        close: 345.25,
        volume: 7156274
      },
      {
        time: new Date(2017, 8, 27),
        open: 349.9,
        high: 351.49,
        low: 340.5,
        close: 340.97,
        volume: 6020950
      },
      {
        time: new Date(2017, 8, 28),
        open: 339.88,
        high: 342.75,
        low: 335.4,
        close: 339.6,
        volume: 5319617
      },
      {
        time: new Date(2017, 8, 29),
        open: 341.86,
        high: 344.68,
        low: 338.6,
        close: 341.1,
        volume: 5107082
      },
      {
        time: new Date(2017, 9, 2),
        open: 342.52,
        high: 343.7,
        low: 335.51,
        close: 341.53,
        volume: 5286774
      },
      {
        time: new Date(2017, 9, 3),
        open: 335.9,
        high: 348.55,
        low: 331.28,
        close: 348.14,
        volume: 10153596
      },
      {
        time: new Date(2017, 9, 4),
        open: 351.25,
        high: 358.62,
        low: 349.6,
        close: 355.01,
        volume: 8163543
      },
      {
        time: new Date(2017, 9, 5),
        open: 356.0,
        high: 357.44,
        low: 351.35,
        close: 355.33,
        volume: 4171675
      },
      {
        time: new Date(2017, 9, 6),
        open: 353.1,
        high: 360.1,
        low: 352.25,
        close: 356.88,
        volume: 4297474
      },
      {
        time: new Date(2017, 9, 9),
        open: 349.65,
        high: 351.75,
        low: 342.67,
        close: 342.94,
        volume: 7493654
      },
      {
        time: new Date(2017, 9, 10),
        open: 346.8,
        high: 355.63,
        low: 345.53,
        close: 355.59,
        volume: 6978495
      },
      {
        time: new Date(2017, 9, 11),
        open: 353.89,
        high: 357.6,
        low: 351.15,
        close: 354.6,
        volume: 4500831
      },
      {
        time: new Date(2017, 9, 12),
        open: 352.95,
        high: 359.78,
        low: 352.64,
        close: 355.68,
        volume: 4087048
      },
      {
        time: new Date(2017, 9, 13),
        open: 356.98,
        high: 358.49,
        low: 353.68,
        close: 355.57,
        volume: 3540533
      },
      {
        time: new Date(2017, 9, 16),
        open: 353.76,
        high: 354.48,
        low: 347.16,
        close: 350.6,
        volume: 5375486
      },
      {
        time: new Date(2017, 9, 17),
        open: 350.91,
        high: 356.22,
        low: 350.07,
        close: 355.75,
        volume: 3293345
      },
      {
        time: new Date(2017, 9, 18),
        open: 355.97,
        high: 363.0,
        low: 354.13,
        close: 359.65,
        volume: 4939074
      },
      {
        time: new Date(2017, 9, 19),
        open: 355.56,
        high: 357.15,
        low: 348.2,
        close: 351.81,
        volume: 5061843
      },
      {
        time: new Date(2017, 9, 20),
        open: 352.69,
        high: 354.55,
        low: 344.34,
        close: 345.1,
        volume: 4930395
      },
      {
        time: new Date(2017, 9, 23),
        open: 349.88,
        high: 349.95,
        low: 336.25,
        close: 337.02,
        volume: 5747346
      },
      {
        time: new Date(2017, 9, 24),
        open: 338.8,
        high: 342.8,
        low: 336.16,
        close: 337.34,
        volume: 4491672
      },
      {
        time: new Date(2017, 9, 25),
        open: 336.7,
        high: 337.5,
        low: 323.56,
        close: 325.84,
        volume: 8594073
      },
      {
        time: new Date(2017, 9, 26),
        open: 327.78,
        high: 330.23,
        low: 323.2,
        close: 326.17,
        volume: 5023500
      },
      {
        time: new Date(2017, 9, 27),
        open: 319.75,
        high: 324.59,
        low: 316.66,
        close: 320.87,
        volume: 6979704
      },
      {
        time: new Date(2017, 9, 30),
        open: 319.18,
        high: 323.78,
        low: 317.25,
        close: 320.08,
        volume: 4254378
      },
      {
        time: new Date(2017, 9, 31),
        open: 320.23,
        high: 331.95,
        low: 320.18,
        close: 331.53,
        volume: 5672347
      },
      {
        time: new Date(2017, 10, 1),
        open: 332.25,
        high: 332.61,
        low: 320.26,
        close: 321.08,
        volume: 8457336
      },
      {
        time: new Date(2017, 10, 2),
        open: 300.13,
        high: 308.69,
        low: 292.63,
        close: 299.26,
        volume: 19791416
      },
      {
        time: new Date(2017, 10, 3),
        open: 299.5,
        high: 306.25,
        low: 295.13,
        close: 306.09,
        volume: 8893974
      },
      {
        time: new Date(2017, 10, 6),
        open: 307.0,
        high: 307.5,
        low: 299.01,
        close: 302.78,
        volume: 6486009
      },
      {
        time: new Date(2017, 10, 7),
        open: 301.02,
        high: 306.5,
        low: 300.03,
        close: 306.05,
        volume: 5294274
      },
      {
        time: new Date(2017, 10, 8),
        open: 305.5,
        high: 306.89,
        low: 301.3,
        close: 304.39,
        volume: 4725271
      },
      {
        time: new Date(2017, 10, 9),
        open: 302.5,
        high: 304.46,
        low: 296.3,
        close: 302.99,
        volume: 5447147
      },
      {
        time: new Date(2017, 10, 10),
        open: 302.5,
        high: 308.36,
        low: 301.85,
        close: 302.99,
        volume: 4625429
      },
      {
        time: new Date(2017, 10, 13),
        open: 300.13,
        high: 316.8,
        low: 299.11,
        close: 315.4,
        volume: 7584944
      },
      {
        time: new Date(2017, 10, 14),
        open: 315.0,
        high: 316.35,
        low: 306.9,
        close: 308.7,
        volume: 5676076
      },
      {
        time: new Date(2017, 10, 15),
        open: 306.01,
        high: 312.49,
        low: 301.5,
        close: 311.3,
        volume: 5978665
      },
      {
        time: new Date(2017, 10, 16),
        open: 313.99,
        high: 318.14,
        low: 311.3,
        close: 312.5,
        volume: 5822073
      },
      {
        time: new Date(2017, 10, 17),
        open: 325.67,
        high: 326.67,
        low: 313.15,
        close: 315.05,
        volume: 13735139
      },
      {
        time: new Date(2017, 10, 20),
        open: 313.79,
        high: 315.5,
        low: 304.75,
        close: 308.74,
        volume: 8247650
      },
      {
        time: new Date(2017, 10, 21),
        open: 310.86,
        high: 318.23,
        low: 308.71,
        close: 317.81,
        volume: 7261273
      },
      {
        time: new Date(2017, 10, 22),
        open: 316.77,
        high: 317.42,
        low: 311.84,
        close: 312.6,
        volume: 4917636
      },
      {
        time: new Date(2017, 10, 24),
        open: 313.79,
        high: 316.41,
        low: 311.0,
        close: 315.55,
        volume: 3244065
      },
      {
        time: new Date(2017, 10, 27),
        open: 313.25,
        high: 317.34,
        low: 309.51,
        close: 316.81,
        volume: 4555894
      },
      {
        time: new Date(2017, 10, 28),
        open: 316.36,
        high: 320.0,
        low: 313.92,
        close: 317.55,
        volume: 4949491
      },
      {
        time: new Date(2017, 10, 29),
        open: 317.3,
        high: 318.0,
        low: 301.23,
        close: 307.54,
        volume: 8767398
      },
      {
        time: new Date(2017, 10, 30),
        open: 308.56,
        high: 310.7,
        low: 304.54,
        close: 308.85,
        volume: 4351587
      },
      {
        time: new Date(2017, 11, 1),
        open: 305.44,
        high: 310.32,
        low: 305.05,
        close: 306.53,
        volume: 4292868
      },
      {
        time: new Date(2017, 11, 4),
        open: 306.5,
        high: 308.26,
        low: 300.61,
        close: 305.2,
        volume: 5835140
      },
      {
        time: new Date(2017, 11, 5),
        open: 302.0,
        high: 308.0,
        low: 301.0,
        close: 303.7,
        volume: 4646520
      },
      {
        time: new Date(2017, 11, 6),
        open: 300.1,
        high: 313.39,
        low: 300.0,
        close: 313.26,
        volume: 7195341
      },
      {
        time: new Date(2017, 11, 7),
        open: 312.0,
        high: 318.63,
        low: 311.05,
        close: 311.24,
        volume: 4780597
      },
      {
        time: new Date(2017, 11, 8),
        open: 314.6,
        high: 316.98,
        low: 311.26,
        close: 315.13,
        volume: 3468458
      },
      {
        time: new Date(2017, 11, 11),
        open: 314.63,
        high: 329.01,
        low: 313.75,
        close: 328.91,
        volume: 7937981
      },
      {
        time: new Date(2017, 11, 12),
        open: 330.45,
        high: 341.44,
        low: 330.03,
        close: 341.03,
        volume: 8733199
      },
      {
        time: new Date(2017, 11, 13),
        open: 340.93,
        high: 344.22,
        low: 336.5,
        close: 339.03,
        volume: 6221461
      },
      {
        time: new Date(2017, 11, 14),
        open: 341.01,
        high: 347.44,
        low: 336.9,
        close: 337.89,
        volume: 5799916
      },
      {
        time: new Date(2017, 11, 15),
        open: 342.04,
        high: 343.9,
        low: 335.76,
        close: 343.45,
        volume: 6933199
      },
      {
        time: new Date(2017, 11, 18),
        open: 344.9,
        high: 346.73,
        low: 337.58,
        close: 338.87,
        volume: 5476166
      },
      {
        time: new Date(2017, 11, 19),
        open: 340.26,
        high: 341.49,
        low: 330.3,
        close: 331.1,
        volume: 6824971
      },
      {
        time: new Date(2017, 11, 20),
        open: 332.69,
        high: 333.1,
        low: 325.04,
        close: 328.98,
        volume: 5953800
      },
      {
        time: new Date(2017, 11, 21),
        open: 329.59,
        high: 333.74,
        low: 327.21,
        close: 331.66,
        volume: 4385222
      },
      {
        time: new Date(2017, 11, 22),
        open: 329.51,
        high: 330.92,
        low: 324.82,
        close: 325.2,
        volume: 4215807
      },
      {
        time: new Date(2017, 11, 26),
        open: 323.83,
        high: 323.94,
        low: 316.58,
        close: 317.29,
        volume: 4378413
      },
      {
        time: new Date(2017, 11, 27),
        open: 316.0,
        high: 317.68,
        low: 310.75,
        close: 311.64,
        volume: 4712111
      },
      {
        time: new Date(2017, 11, 28),
        open: 311.75,
        high: 315.82,
        low: 309.54,
        close: 315.36,
        volume: 4316347
      },
      {
        time: new Date(2017, 11, 29),
        open: 316.18,
        high: 316.41,
        low: 310.0,
        close: 311.35,
        volume: 3777155
      },
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
