// @flow

import request from 'supertest';

import app from '../../../../app';

const query = `query detail {
  node(id:"VHZTaG93OjY=") {
    ... on TvShow {
      id
      name
      status
      premiered
      rating
      image {
        original
      }
      summary
      withoutTags: summary(stripTags: false)
      cast {
        person {
          name
        }
        character {
          name
        }
      }
      episodes {
        id
        seasonAndNumber
        airdate
      }
      nextEpisode
      previousEpisode
    }
  }
}
`;

it('works', async () => {
  const res = await request(app)
    .post('/graphql')
    .send({
      query,
      variables: {},
    })
    .set('content-type', 'application/json');

  expect(res.body.data).toMatchInlineSnapshot(`
    Object {
      "node": Object {
        "cast": Array [
          Object {
            "character": Object {
              "name": "Clarke Griffin",
            },
            "person": Object {
              "name": "Eliza Taylor-Cotter",
            },
          },
          Object {
            "character": Object {
              "name": "Octavia Blake",
            },
            "person": Object {
              "name": "Marie Avgeropoulos",
            },
          },
          Object {
            "character": Object {
              "name": "Bellamy Blake",
            },
            "person": Object {
              "name": "Bob Morley",
            },
          },
          Object {
            "character": Object {
              "name": "Raven Reyes",
            },
            "person": Object {
              "name": "Lindsey Morgan",
            },
          },
          Object {
            "character": Object {
              "name": "Jonathan Murphy",
            },
            "person": Object {
              "name": "Richard Harmon",
            },
          },
          Object {
            "character": Object {
              "name": "Abigail Griffin",
            },
            "person": Object {
              "name": "Paige Turco",
            },
          },
          Object {
            "character": Object {
              "name": "Marcus Kane",
            },
            "person": Object {
              "name": "Henry Ian Cusick",
            },
          },
          Object {
            "character": Object {
              "name": "Monty Green",
            },
            "person": Object {
              "name": "Christopher Larkin",
            },
          },
          Object {
            "character": Object {
              "name": "Echo",
            },
            "person": Object {
              "name": "Tasya Teles",
            },
          },
          Object {
            "character": Object {
              "name": "Thelonious Jaha",
            },
            "person": Object {
              "name": "Isaiah Washington",
            },
          },
          Object {
            "character": Object {
              "name": "Jasper Jordan",
            },
            "person": Object {
              "name": "Devon Bostick",
            },
          },
          Object {
            "character": Object {
              "name": "Lincoln",
            },
            "person": Object {
              "name": "Ricky Whittle",
            },
          },
          Object {
            "character": Object {
              "name": "Finn Collins",
            },
            "person": Object {
              "name": "Thomas McDonell",
            },
          },
          Object {
            "character": Object {
              "name": "Xavier",
            },
            "person": Object {
              "name": "Chuku Modu",
            },
          },
          Object {
            "character": Object {
              "name": "Russell Lightbourne VII",
            },
            "person": Object {
              "name": "J.R. Bourne",
            },
          },
          Object {
            "character": Object {
              "name": "Jordan Jasper Green",
            },
            "person": Object {
              "name": "Shannon Kook",
            },
          },
          Object {
            "character": Object {
              "name": "Roan",
            },
            "person": Object {
              "name": "Zach McGowan",
            },
          },
          Object {
            "character": Object {
              "name": "Hope Diyoza",
            },
            "person": Object {
              "name": "Shelby Flannery",
            },
          },
          Object {
            "character": Object {
              "name": "Wells Jaha",
            },
            "person": Object {
              "name": "Eli Goree",
            },
          },
          Object {
            "character": Object {
              "name": "Callie Cartwig",
            },
            "person": Object {
              "name": "Kelly Hu",
            },
          },
        ],
        "episodes": Array [
          Object {
            "airdate": "2014-03-19",
            "id": "RXBpc29kZToxNzU",
            "seasonAndNumber": "S01E01",
          },
          Object {
            "airdate": "2014-03-26",
            "id": "RXBpc29kZToxNzY",
            "seasonAndNumber": "S01E02",
          },
          Object {
            "airdate": "2014-04-02",
            "id": "RXBpc29kZToxNzc",
            "seasonAndNumber": "S01E03",
          },
          Object {
            "airdate": "2014-04-09",
            "id": "RXBpc29kZToxNzg",
            "seasonAndNumber": "S01E04",
          },
          Object {
            "airdate": "2014-04-16",
            "id": "RXBpc29kZToxNzk",
            "seasonAndNumber": "S01E05",
          },
          Object {
            "airdate": "2014-04-23",
            "id": "RXBpc29kZToxODA",
            "seasonAndNumber": "S01E06",
          },
          Object {
            "airdate": "2014-04-30",
            "id": "RXBpc29kZToxODE",
            "seasonAndNumber": "S01E07",
          },
          Object {
            "airdate": "2014-05-07",
            "id": "RXBpc29kZToxODI",
            "seasonAndNumber": "S01E08",
          },
          Object {
            "airdate": "2014-05-14",
            "id": "RXBpc29kZToxODM",
            "seasonAndNumber": "S01E09",
          },
          Object {
            "airdate": "2014-05-21",
            "id": "RXBpc29kZToxODQ",
            "seasonAndNumber": "S01E10",
          },
          Object {
            "airdate": "2014-05-28",
            "id": "RXBpc29kZToxODU",
            "seasonAndNumber": "S01E11",
          },
          Object {
            "airdate": "2014-06-04",
            "id": "RXBpc29kZToxODY",
            "seasonAndNumber": "S01E12",
          },
          Object {
            "airdate": "2014-06-11",
            "id": "RXBpc29kZToxODc",
            "seasonAndNumber": "S01E13",
          },
          Object {
            "airdate": "2014-10-22",
            "id": "RXBpc29kZToxODg",
            "seasonAndNumber": "S02E01",
          },
          Object {
            "airdate": "2014-10-29",
            "id": "RXBpc29kZToxNTgzOQ",
            "seasonAndNumber": "S02E02",
          },
          Object {
            "airdate": "2014-11-05",
            "id": "RXBpc29kZToxNTg0MA",
            "seasonAndNumber": "S02E03",
          },
          Object {
            "airdate": "2014-11-12",
            "id": "RXBpc29kZTozMjI1Mg",
            "seasonAndNumber": "S02E04",
          },
          Object {
            "airdate": "2014-11-19",
            "id": "RXBpc29kZTozOTYyMw",
            "seasonAndNumber": "S02E05",
          },
          Object {
            "airdate": "2014-12-03",
            "id": "RXBpc29kZTo0NTc2NA",
            "seasonAndNumber": "S02E06",
          },
          Object {
            "airdate": "2014-12-10",
            "id": "RXBpc29kZTo0NTc5Mw",
            "seasonAndNumber": "S02E07",
          },
          Object {
            "airdate": "2014-12-17",
            "id": "RXBpc29kZTo0NTc5NA",
            "seasonAndNumber": "S02E08",
          },
          Object {
            "airdate": "2015-01-21",
            "id": "RXBpc29kZTo0NTc5NQ",
            "seasonAndNumber": "S02E09",
          },
          Object {
            "airdate": "2015-01-28",
            "id": "RXBpc29kZToxMDk1NDM",
            "seasonAndNumber": "S02E10",
          },
          Object {
            "airdate": "2015-02-04",
            "id": "RXBpc29kZToxMDk1NDQ",
            "seasonAndNumber": "S02E11",
          },
          Object {
            "airdate": "2015-02-11",
            "id": "RXBpc29kZToxMTc1MjU",
            "seasonAndNumber": "S02E12",
          },
          Object {
            "airdate": "2015-02-18",
            "id": "RXBpc29kZToxMTc1MjY",
            "seasonAndNumber": "S02E13",
          },
          Object {
            "airdate": "2015-02-25",
            "id": "RXBpc29kZToxMTc1Mjc",
            "seasonAndNumber": "S02E14",
          },
          Object {
            "airdate": "2015-03-04",
            "id": "RXBpc29kZToxMTc1OTE",
            "seasonAndNumber": "S02E15",
          },
          Object {
            "airdate": "2015-03-11",
            "id": "RXBpc29kZToxMTc1OTI",
            "seasonAndNumber": "S02E16",
          },
          Object {
            "airdate": "2016-01-21",
            "id": "RXBpc29kZTo0ODY4Mzk",
            "seasonAndNumber": "S03E01",
          },
          Object {
            "airdate": "2016-01-28",
            "id": "RXBpc29kZTo0ODczNzg",
            "seasonAndNumber": "S03E02",
          },
          Object {
            "airdate": "2016-02-04",
            "id": "RXBpc29kZTo1MjcyMTY",
            "seasonAndNumber": "S03E03",
          },
          Object {
            "airdate": "2016-02-11",
            "id": "RXBpc29kZTo1MjcyMTc",
            "seasonAndNumber": "S03E04",
          },
          Object {
            "airdate": "2016-02-18",
            "id": "RXBpc29kZTo1NzA0MzE",
            "seasonAndNumber": "S03E05",
          },
          Object {
            "airdate": "2016-02-25",
            "id": "RXBpc29kZTo2MDA2Mzk",
            "seasonAndNumber": "S03E06",
          },
          Object {
            "airdate": "2016-03-03",
            "id": "RXBpc29kZTo2MTE1Njc",
            "seasonAndNumber": "S03E07",
          },
          Object {
            "airdate": "2016-03-10",
            "id": "RXBpc29kZTo2MjE5MDk",
            "seasonAndNumber": "S03E08",
          },
          Object {
            "airdate": "2016-03-31",
            "id": "RXBpc29kZTo2NDY5MDY",
            "seasonAndNumber": "S03E09",
          },
          Object {
            "airdate": "2016-04-07",
            "id": "RXBpc29kZTo2NDczNzQ",
            "seasonAndNumber": "S03E10",
          },
          Object {
            "airdate": "2016-04-14",
            "id": "RXBpc29kZTo2NDczNzU",
            "seasonAndNumber": "S03E11",
          },
          Object {
            "airdate": "2016-04-21",
            "id": "RXBpc29kZTo2NDczNzY",
            "seasonAndNumber": "S03E12",
          },
          Object {
            "airdate": "2016-04-28",
            "id": "RXBpc29kZTo2NDczNzc",
            "seasonAndNumber": "S03E13",
          },
          Object {
            "airdate": "2016-05-05",
            "id": "RXBpc29kZTo2NDczNzg",
            "seasonAndNumber": "S03E14",
          },
          Object {
            "airdate": "2016-05-12",
            "id": "RXBpc29kZTo2NDczNzk",
            "seasonAndNumber": "S03E15",
          },
          Object {
            "airdate": "2016-05-19",
            "id": "RXBpc29kZTo2NDczODA",
            "seasonAndNumber": "S03E16",
          },
          Object {
            "airdate": "2017-02-01",
            "id": "RXBpc29kZTo5MjE3MDk",
            "seasonAndNumber": "S04E01",
          },
          Object {
            "airdate": "2017-02-08",
            "id": "RXBpc29kZToxMDMzOTQ2",
            "seasonAndNumber": "S04E02",
          },
          Object {
            "airdate": "2017-02-15",
            "id": "RXBpc29kZToxMDMzOTQ3",
            "seasonAndNumber": "S04E03",
          },
          Object {
            "airdate": "2017-02-22",
            "id": "RXBpc29kZToxMDQ3MzQ0",
            "seasonAndNumber": "S04E04",
          },
          Object {
            "airdate": "2017-03-01",
            "id": "RXBpc29kZToxMDQ5NDg5",
            "seasonAndNumber": "S04E05",
          },
          Object {
            "airdate": "2017-03-15",
            "id": "RXBpc29kZToxMDQ4MjIy",
            "seasonAndNumber": "S04E06",
          },
          Object {
            "airdate": "2017-03-22",
            "id": "RXBpc29kZToxMDg1NDUy",
            "seasonAndNumber": "S04E07",
          },
          Object {
            "airdate": "2017-03-29",
            "id": "RXBpc29kZToxMDg4MzM4",
            "seasonAndNumber": "S04E08",
          },
          Object {
            "airdate": "2017-04-26",
            "id": "RXBpc29kZToxMTA2MTQ2",
            "seasonAndNumber": "S04E09",
          },
          Object {
            "airdate": "2017-05-03",
            "id": "RXBpc29kZToxMTA2MTQ3",
            "seasonAndNumber": "S04E10",
          },
          Object {
            "airdate": "2017-05-10",
            "id": "RXBpc29kZToxMTA2MTQ4",
            "seasonAndNumber": "S04E11",
          },
          Object {
            "airdate": "2017-05-17",
            "id": "RXBpc29kZToxMDQ5MjQ4",
            "seasonAndNumber": "S04E12",
          },
          Object {
            "airdate": "2017-05-24",
            "id": "RXBpc29kZToxMDc2MjY5",
            "seasonAndNumber": "S04E13",
          },
          Object {
            "airdate": "2018-04-24",
            "id": "RXBpc29kZToxMjYwNzI2",
            "seasonAndNumber": "S05E01",
          },
          Object {
            "airdate": "2018-05-01",
            "id": "RXBpc29kZToxMjc0ODM3",
            "seasonAndNumber": "S05E02",
          },
          Object {
            "airdate": "2018-05-08",
            "id": "RXBpc29kZToxMjcwNTA5",
            "seasonAndNumber": "S05E03",
          },
          Object {
            "airdate": "2018-05-15",
            "id": "RXBpc29kZToxMjg1MzQx",
            "seasonAndNumber": "S05E04",
          },
          Object {
            "airdate": "2018-05-22",
            "id": "RXBpc29kZToxMzAyOTA4",
            "seasonAndNumber": "S05E05",
          },
          Object {
            "airdate": "2018-06-05",
            "id": "RXBpc29kZToxMzExNTMy",
            "seasonAndNumber": "S05E06",
          },
          Object {
            "airdate": "2018-06-19",
            "id": "RXBpc29kZToxMzUxOTMz",
            "seasonAndNumber": "S05E07",
          },
          Object {
            "airdate": "2018-06-26",
            "id": "RXBpc29kZToxMzUxOTM0",
            "seasonAndNumber": "S05E08",
          },
          Object {
            "airdate": "2018-07-10",
            "id": "RXBpc29kZToxMzYwOTQx",
            "seasonAndNumber": "S05E09",
          },
          Object {
            "airdate": "2018-07-17",
            "id": "RXBpc29kZToxMzYwOTQy",
            "seasonAndNumber": "S05E10",
          },
          Object {
            "airdate": "2018-07-24",
            "id": "RXBpc29kZToxMzg5OTYx",
            "seasonAndNumber": "S05E11",
          },
          Object {
            "airdate": "2018-07-31",
            "id": "RXBpc29kZToxMzg5OTYz",
            "seasonAndNumber": "S05E12",
          },
          Object {
            "airdate": "2018-08-07",
            "id": "RXBpc29kZToxNDcxNjk3",
            "seasonAndNumber": "S05E13",
          },
          Object {
            "airdate": "2019-04-30",
            "id": "RXBpc29kZToxNTEzOTY1",
            "seasonAndNumber": "S06E01",
          },
          Object {
            "airdate": "2019-05-07",
            "id": "RXBpc29kZToxNTEzOTY2",
            "seasonAndNumber": "S06E02",
          },
          Object {
            "airdate": "2019-05-14",
            "id": "RXBpc29kZToxNjQxODEx",
            "seasonAndNumber": "S06E03",
          },
          Object {
            "airdate": "2019-05-21",
            "id": "RXBpc29kZToxNjUxMzQx",
            "seasonAndNumber": "S06E04",
          },
          Object {
            "airdate": "2019-05-28",
            "id": "RXBpc29kZToxNjU0NzIy",
            "seasonAndNumber": "S06E05",
          },
          Object {
            "airdate": "2019-06-11",
            "id": "RXBpc29kZToxNjYwMzI1",
            "seasonAndNumber": "S06E06",
          },
          Object {
            "airdate": "2019-06-18",
            "id": "RXBpc29kZToxNjYzMzEy",
            "seasonAndNumber": "S06E07",
          },
          Object {
            "airdate": "2019-06-25",
            "id": "RXBpc29kZToxNjY0OTc1",
            "seasonAndNumber": "S06E08",
          },
          Object {
            "airdate": "2019-07-09",
            "id": "RXBpc29kZToxNjY0OTc2",
            "seasonAndNumber": "S06E09",
          },
          Object {
            "airdate": "2019-07-16",
            "id": "RXBpc29kZToxNjY0OTc3",
            "seasonAndNumber": "S06E10",
          },
          Object {
            "airdate": "2019-07-23",
            "id": "RXBpc29kZToxNjY0OTc4",
            "seasonAndNumber": "S06E11",
          },
          Object {
            "airdate": "2019-07-30",
            "id": "RXBpc29kZToxNjY0OTc5",
            "seasonAndNumber": "S06E12",
          },
          Object {
            "airdate": "2019-08-06",
            "id": "RXBpc29kZToxNjY0OTgw",
            "seasonAndNumber": "S06E13",
          },
          Object {
            "airdate": "2020-05-20",
            "id": "RXBpc29kZToxODEyMzYz",
            "seasonAndNumber": "S07E01",
          },
          Object {
            "airdate": "2020-05-27",
            "id": "RXBpc29kZToxODM3ODE5",
            "seasonAndNumber": "S07E02",
          },
          Object {
            "airdate": "2020-06-03",
            "id": "RXBpc29kZToxODM3ODIw",
            "seasonAndNumber": "S07E03",
          },
          Object {
            "airdate": "2020-06-10",
            "id": "RXBpc29kZToxODM3ODIx",
            "seasonAndNumber": "S07E04",
          },
          Object {
            "airdate": "2020-06-17",
            "id": "RXBpc29kZToxODM3ODIy",
            "seasonAndNumber": "S07E05",
          },
          Object {
            "airdate": "2020-06-24",
            "id": "RXBpc29kZToxODM3ODIz",
            "seasonAndNumber": "S07E06",
          },
          Object {
            "airdate": "2020-07-01",
            "id": "RXBpc29kZToxODM3ODI0",
            "seasonAndNumber": "S07E07",
          },
          Object {
            "airdate": "2020-07-08",
            "id": "RXBpc29kZToxODM3ODI1",
            "seasonAndNumber": "S07E08",
          },
          Object {
            "airdate": "2020-07-15",
            "id": "RXBpc29kZToxODM3ODI2",
            "seasonAndNumber": "S07E09",
          },
          Object {
            "airdate": "2020-08-05",
            "id": "RXBpc29kZToxOTAyNzkw",
            "seasonAndNumber": "S07E10",
          },
          Object {
            "airdate": "2020-08-12",
            "id": "RXBpc29kZToxOTA1MzIz",
            "seasonAndNumber": "S07E11",
          },
          Object {
            "airdate": "2020-08-19",
            "id": "RXBpc29kZToxOTA4MTM5",
            "seasonAndNumber": "S07E12",
          },
          Object {
            "airdate": "2020-09-09",
            "id": "RXBpc29kZToxOTEzMjc3",
            "seasonAndNumber": "S07E13",
          },
          Object {
            "airdate": "2020-09-16",
            "id": "RXBpc29kZToxOTEzMjc4",
            "seasonAndNumber": "S07E14",
          },
          Object {
            "airdate": "2020-09-23",
            "id": "RXBpc29kZToxOTEzMjc5",
            "seasonAndNumber": "S07E15",
          },
          Object {
            "airdate": "2020-09-30",
            "id": "RXBpc29kZToxOTEzMjgw",
            "seasonAndNumber": "S07E16",
          },
        ],
        "id": "VHZTaG93OjY",
        "image": Object {
          "original": "http://static.tvmaze.com/uploads/images/original_untouched/257/642675.jpg",
        },
        "name": "The 100",
        "nextEpisode": null,
        "premiered": "2014-03-19",
        "previousEpisode": "2020-09-30",
        "rating": 7.7,
        "status": "Ended",
        "summary": "Ninety-seven years ago, nuclear Armageddon decimated planet Earth, destroying civilization. The only survivors were the 400 inhabitants of 12 international space stations that were in orbit at the time. Three generations have been born in space, the survivors now number 4,000, and resources are running out on their dying \\"Ark\\" - the 12 stations now linked together and repurposed to keep the survivors alive. Draconian measures including capital punishment and population control are the order of the day, as the leaders of the Ark take ruthless steps to ensure their future, including secretly exiling a group of 100 juvenile prisoners to the Earth's surface to test whether it's habitable.",
        "withoutTags": "<p>Ninety-seven years ago, nuclear Armageddon decimated planet Earth, destroying civilization. The only survivors were the 400 inhabitants of 12 international space stations that were in orbit at the time. Three generations have been born in space, the survivors now number 4,000, and resources are running out on their dying \\"Ark\\" - the 12 stations now linked together and repurposed to keep the survivors alive. Draconian measures including capital punishment and population control are the order of the day, as the leaders of the Ark take ruthless steps to ensure their future, including secretly exiling a group of 100 juvenile prisoners to the Earth's surface to test whether it's habitable.</p>",
      },
    }
  `);
});
