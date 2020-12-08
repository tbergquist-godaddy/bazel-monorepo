// @flow

import { executeTestQuery } from '@tbergq/graphql-test-utils';

import app from '../../../../app';

const query = `query {
  searchTvShow(query:"the 100", first: 2) {
    edges {
      node {
        id
        name
        episodes {
          id
          name
        }
        nextEpisode
        previousEpisode
      }
    }
  }
}`;

it('gets a tvshow', async () => {
  const res = await executeTestQuery({ app, query });
  expect(res.body.data).toMatchInlineSnapshot(`
    Object {
      "searchTvShow": Object {
        "edges": Array [
          Object {
            "node": Object {
              "episodes": Array [
                Object {
                  "id": "RXBpc29kZToxNzU",
                  "name": "Pilot",
                },
                Object {
                  "id": "RXBpc29kZToxNzY",
                  "name": "Earth Skills",
                },
                Object {
                  "id": "RXBpc29kZToxNzc",
                  "name": "Earth Kills",
                },
                Object {
                  "id": "RXBpc29kZToxNzg",
                  "name": "Murphy's Law",
                },
                Object {
                  "id": "RXBpc29kZToxNzk",
                  "name": "Twilight's Last Gleaming",
                },
                Object {
                  "id": "RXBpc29kZToxODA",
                  "name": "His Sister's Keeper",
                },
                Object {
                  "id": "RXBpc29kZToxODE",
                  "name": "Contents Under Pressure",
                },
                Object {
                  "id": "RXBpc29kZToxODI",
                  "name": "Day Trip",
                },
                Object {
                  "id": "RXBpc29kZToxODM",
                  "name": "Unity Day",
                },
                Object {
                  "id": "RXBpc29kZToxODQ",
                  "name": "I Am Become Death",
                },
                Object {
                  "id": "RXBpc29kZToxODU",
                  "name": "The Calm",
                },
                Object {
                  "id": "RXBpc29kZToxODY",
                  "name": "We Are Grounders - Part I",
                },
                Object {
                  "id": "RXBpc29kZToxODc",
                  "name": "We Are Grounders - Part II",
                },
                Object {
                  "id": "RXBpc29kZToxODg",
                  "name": "The 48",
                },
                Object {
                  "id": "RXBpc29kZToxNTgzOQ",
                  "name": "Inclement Weather",
                },
                Object {
                  "id": "RXBpc29kZToxNTg0MA",
                  "name": "Reapercussions",
                },
                Object {
                  "id": "RXBpc29kZTozMjI1Mg",
                  "name": "Many Happy Returns",
                },
                Object {
                  "id": "RXBpc29kZTozOTYyMw",
                  "name": "Human Trials",
                },
                Object {
                  "id": "RXBpc29kZTo0NTc2NA",
                  "name": "Fog of War",
                },
                Object {
                  "id": "RXBpc29kZTo0NTc5Mw",
                  "name": "Long Into an Abyss",
                },
                Object {
                  "id": "RXBpc29kZTo0NTc5NA",
                  "name": "Spacewalker",
                },
                Object {
                  "id": "RXBpc29kZTo0NTc5NQ",
                  "name": "Remember Me",
                },
                Object {
                  "id": "RXBpc29kZToxMDk1NDM",
                  "name": "Survival of the Fittest",
                },
                Object {
                  "id": "RXBpc29kZToxMDk1NDQ",
                  "name": "Coup de Grâce",
                },
                Object {
                  "id": "RXBpc29kZToxMTc1MjU",
                  "name": "Rubicon",
                },
                Object {
                  "id": "RXBpc29kZToxMTc1MjY",
                  "name": "Resurrection",
                },
                Object {
                  "id": "RXBpc29kZToxMTc1Mjc",
                  "name": "Bodyguard of Lies",
                },
                Object {
                  "id": "RXBpc29kZToxMTc1OTE",
                  "name": "Blood Must Have Blood, Part One",
                },
                Object {
                  "id": "RXBpc29kZToxMTc1OTI",
                  "name": "Blood Must Have Blood, Part Two",
                },
                Object {
                  "id": "RXBpc29kZTo0ODY4Mzk",
                  "name": "Wanheda: Part One",
                },
                Object {
                  "id": "RXBpc29kZTo0ODczNzg",
                  "name": "Wanheda: Part Two",
                },
                Object {
                  "id": "RXBpc29kZTo1MjcyMTY",
                  "name": "Ye Who Enter Here",
                },
                Object {
                  "id": "RXBpc29kZTo1MjcyMTc",
                  "name": "Watch the Thrones",
                },
                Object {
                  "id": "RXBpc29kZTo1NzA0MzE",
                  "name": "Hakeldama",
                },
                Object {
                  "id": "RXBpc29kZTo2MDA2Mzk",
                  "name": "Bitter Harvest",
                },
                Object {
                  "id": "RXBpc29kZTo2MTE1Njc",
                  "name": "Thirteen",
                },
                Object {
                  "id": "RXBpc29kZTo2MjE5MDk",
                  "name": "Terms and Conditions",
                },
                Object {
                  "id": "RXBpc29kZTo2NDY5MDY",
                  "name": "Stealing Fire",
                },
                Object {
                  "id": "RXBpc29kZTo2NDczNzQ",
                  "name": "Fallen",
                },
                Object {
                  "id": "RXBpc29kZTo2NDczNzU",
                  "name": "Nevermore",
                },
                Object {
                  "id": "RXBpc29kZTo2NDczNzY",
                  "name": "Demons",
                },
                Object {
                  "id": "RXBpc29kZTo2NDczNzc",
                  "name": "Join or Die",
                },
                Object {
                  "id": "RXBpc29kZTo2NDczNzg",
                  "name": "Red Sky at Morning",
                },
                Object {
                  "id": "RXBpc29kZTo2NDczNzk",
                  "name": "Perverse Instantiation - Part One",
                },
                Object {
                  "id": "RXBpc29kZTo2NDczODA",
                  "name": "Perverse Instantiation - Part Two",
                },
                Object {
                  "id": "RXBpc29kZTo5MjE3MDk",
                  "name": "Echoes",
                },
                Object {
                  "id": "RXBpc29kZToxMDMzOTQ2",
                  "name": "Heavy Lies the Crown",
                },
                Object {
                  "id": "RXBpc29kZToxMDMzOTQ3",
                  "name": "The Four Horsemen",
                },
                Object {
                  "id": "RXBpc29kZToxMDQ3MzQ0",
                  "name": "A Lie Guarded",
                },
                Object {
                  "id": "RXBpc29kZToxMDQ5NDg5",
                  "name": "The Tinder Box",
                },
                Object {
                  "id": "RXBpc29kZToxMDQ4MjIy",
                  "name": "We Will Rise",
                },
                Object {
                  "id": "RXBpc29kZToxMDg1NDUy",
                  "name": "Gimme Shelter",
                },
                Object {
                  "id": "RXBpc29kZToxMDg4MzM4",
                  "name": "God Complex",
                },
                Object {
                  "id": "RXBpc29kZToxMTA2MTQ2",
                  "name": "DNR",
                },
                Object {
                  "id": "RXBpc29kZToxMTA2MTQ3",
                  "name": "Die All, Die Merrily",
                },
                Object {
                  "id": "RXBpc29kZToxMTA2MTQ4",
                  "name": "The Other Side",
                },
                Object {
                  "id": "RXBpc29kZToxMDQ5MjQ4",
                  "name": "The Chosen",
                },
                Object {
                  "id": "RXBpc29kZToxMDc2MjY5",
                  "name": "Praimfaya",
                },
                Object {
                  "id": "RXBpc29kZToxMjYwNzI2",
                  "name": "Eden",
                },
                Object {
                  "id": "RXBpc29kZToxMjc0ODM3",
                  "name": "Red Queen",
                },
                Object {
                  "id": "RXBpc29kZToxMjcwNTA5",
                  "name": "Sleeping Giants",
                },
                Object {
                  "id": "RXBpc29kZToxMjg1MzQx",
                  "name": "Pandora's Box",
                },
                Object {
                  "id": "RXBpc29kZToxMzAyOTA4",
                  "name": "Shifting Sands",
                },
                Object {
                  "id": "RXBpc29kZToxMzExNTMy",
                  "name": "Exit Wounds",
                },
                Object {
                  "id": "RXBpc29kZToxMzUxOTMz",
                  "name": "Acceptable Losses",
                },
                Object {
                  "id": "RXBpc29kZToxMzUxOTM0",
                  "name": "How We Get to Peace",
                },
                Object {
                  "id": "RXBpc29kZToxMzYwOTQx",
                  "name": "Sic Semper Tyrannis",
                },
                Object {
                  "id": "RXBpc29kZToxMzYwOTQy",
                  "name": "The Warriors Will",
                },
                Object {
                  "id": "RXBpc29kZToxMzg5OTYx",
                  "name": "The Dark Year",
                },
                Object {
                  "id": "RXBpc29kZToxMzg5OTYz",
                  "name": "Damocles - Part One",
                },
                Object {
                  "id": "RXBpc29kZToxNDcxNjk3",
                  "name": "Damocles - Part Two",
                },
                Object {
                  "id": "RXBpc29kZToxNTEzOTY1",
                  "name": "Sanctum",
                },
                Object {
                  "id": "RXBpc29kZToxNTEzOTY2",
                  "name": "Red Sun Rising",
                },
                Object {
                  "id": "RXBpc29kZToxNjQxODEx",
                  "name": "The Children of Gabriel",
                },
                Object {
                  "id": "RXBpc29kZToxNjUxMzQx",
                  "name": "The Face Behind the Glass",
                },
                Object {
                  "id": "RXBpc29kZToxNjU0NzIy",
                  "name": "The Gospel of Josephine",
                },
                Object {
                  "id": "RXBpc29kZToxNjYwMzI1",
                  "name": "Memento Mori",
                },
                Object {
                  "id": "RXBpc29kZToxNjYzMzEy",
                  "name": "Nevermind",
                },
                Object {
                  "id": "RXBpc29kZToxNjY0OTc1",
                  "name": "The Old Man and the Anomaly",
                },
                Object {
                  "id": "RXBpc29kZToxNjY0OTc2",
                  "name": "What You Take With You",
                },
                Object {
                  "id": "RXBpc29kZToxNjY0OTc3",
                  "name": "Matryoshka",
                },
                Object {
                  "id": "RXBpc29kZToxNjY0OTc4",
                  "name": "Ashes to Ashes",
                },
                Object {
                  "id": "RXBpc29kZToxNjY0OTc5",
                  "name": "Adjustment Protocol",
                },
                Object {
                  "id": "RXBpc29kZToxNjY0OTgw",
                  "name": "The Blood of Sanctum",
                },
                Object {
                  "id": "RXBpc29kZToxODEyMzYz",
                  "name": "From the Ashes",
                },
                Object {
                  "id": "RXBpc29kZToxODM3ODE5",
                  "name": "The Garden",
                },
                Object {
                  "id": "RXBpc29kZToxODM3ODIw",
                  "name": "False Gods",
                },
                Object {
                  "id": "RXBpc29kZToxODM3ODIx",
                  "name": "Hesperides",
                },
                Object {
                  "id": "RXBpc29kZToxODM3ODIy",
                  "name": "Welcome to Bardo",
                },
                Object {
                  "id": "RXBpc29kZToxODM3ODIz",
                  "name": "Nakara",
                },
                Object {
                  "id": "RXBpc29kZToxODM3ODI0",
                  "name": "The Queen's Gambit",
                },
                Object {
                  "id": "RXBpc29kZToxODM3ODI1",
                  "name": "Anaconda",
                },
                Object {
                  "id": "RXBpc29kZToxODM3ODI2",
                  "name": "The Flock",
                },
                Object {
                  "id": "RXBpc29kZToxOTAyNzkw",
                  "name": "A Little Sacrifice",
                },
                Object {
                  "id": "RXBpc29kZToxOTA1MzIz",
                  "name": "Etherea",
                },
                Object {
                  "id": "RXBpc29kZToxOTA4MTM5",
                  "name": "The Stranger",
                },
                Object {
                  "id": "RXBpc29kZToxOTEzMjc3",
                  "name": "Blood Giant",
                },
                Object {
                  "id": "RXBpc29kZToxOTEzMjc4",
                  "name": "A Sort of Homecoming",
                },
                Object {
                  "id": "RXBpc29kZToxOTEzMjc5",
                  "name": "The Dying of the Light",
                },
                Object {
                  "id": "RXBpc29kZToxOTEzMjgw",
                  "name": "The Last War",
                },
              ],
              "id": "VHZTaG93OjY",
              "name": "The 100",
              "nextEpisode": null,
              "previousEpisode": "2020-09-30",
            },
          },
          Object {
            "node": Object {
              "episodes": Array [
                Object {
                  "id": "RXBpc29kZToxNDYwNTY3",
                  "name": "1900 - Éljen az évszázad!",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNTY4",
                  "name": "1901 - Jönnek az uralkodók",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNTY5",
                  "name": "1903 - A Wrightt fivérek",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNTcw",
                  "name": "1906 - A földrengés",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNTcx",
                  "name": "1907 - Raszputyin",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNTcy",
                  "name": "1909 - Szüfrazsettek",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNTcz",
                  "name": "1911 - A Déli-sark",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNTc0",
                  "name": "1912 - Titanic",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNTc1",
                  "name": "1913 - Császárjubileum",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNTc3",
                  "name": "1914 - Szarajevó",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNTc4",
                  "name": "1916 - Verdun",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNTc5",
                  "name": "1917 - Az Októberi Forradalom",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNTgw",
                  "name": "1918 - Forradalom",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNTgx",
                  "name": "1919 - Versailles",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNTgy",
                  "name": "1920 - A nagy alkoholtilalom",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNTgz",
                  "name": "1922 - Mussolini",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNTg0",
                  "name": "1922 - Tutanhamon",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNTg1",
                  "name": "1923 - A hitleri puccs",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNTg3",
                  "name": "1924 - Sztálin/Lenin",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNTg4",
                  "name": "1925 - Charlie Chaplin",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNTg5",
                  "name": "1926 - Josephine Baker",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNTkw",
                  "name": "1927 - Lindbergh",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNTkx",
                  "name": "1928 - Penicillin",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNTky",
                  "name": "1929 - Fekete péntek",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNTkz",
                  "name": "1930 - Gandhi",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNTk0",
                  "name": "1932 - Weimar",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNTk1",
                  "name": "1933 - A hatalomátvétel",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNTk2",
                  "name": "1934 - Mao",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNTk5",
                  "name": "1936 - Jesse Owens",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjAw",
                  "name": "1936 - A spanyol polgárháború",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjAx",
                  "name": "1937 - Sztálin",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjAy",
                  "name": "1937 - Hindenburg",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjAz",
                  "name": "1938 - A kristályéjszaka",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjA0",
                  "name": "1938 - München - békekonferencia",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjA1",
                  "name": "1939 - Lengyelország lerohanása",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjA2",
                  "name": "1940 - Hitler Párizsban",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjA3",
                  "name": "1941 - Pearl Harbour",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjA4",
                  "name": "1941 - A Barbarossa-hadművelet",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjA5",
                  "name": "1942 - Auschwitz",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjEw",
                  "name": "1943 - A varsói gettó",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjEx",
                  "name": "1943 - Sztálingrád",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjEy",
                  "name": "1944 - A D-nap",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjEz",
                  "name": "1945 - Hirosima",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjE0",
                  "name": "1945 - A kapituláció",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjE1",
                  "name": "1946 - A nürnbergi per",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjE2",
                  "name": "1947 - Izrael",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjE3",
                  "name": "1948 - Segélyszállítmányok",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjE4",
                  "name": "1949 - Az NSZK megalapítása",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjE5",
                  "name": "1951 - Churchill",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjIw",
                  "name": "1953 - Mount Everest",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjIx",
                  "name": "1953 - II. Erzsébet",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjIy",
                  "name": "1953 - A keletnémet felkelés",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjIz",
                  "name": "1954 - Marilyn Monroe",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjI0",
                  "name": "1954 - Atomkísérlet a Bikini-szigeten",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjI1",
                  "name": "1955 - Konrad Adenauer",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjI2",
                  "name": "1956 - A magyar forradalom",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjI3",
                  "name": "1958 - Elvis Presley",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjI4",
                  "name": "1959 - Fidel Castro",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjI5",
                  "name": "1960 - Adolf Eichmann",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjMw",
                  "name": "1961 - Épül a berlini fal",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjMx",
                  "name": "1962 - A kubai válság",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjMy",
                  "name": "1963 - John F. Kennedy",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjMz",
                  "name": "1964 - Cassius Clay",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjM0",
                  "name": "1965 - A Beatles",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjM1",
                  "name": "1966 - A Wembley-gól",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjM2",
                  "name": "1967 - Benno Ohnesorg",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjM3",
                  "name": "1967 - A hatnapos háború",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjM4",
                  "name": "1968 - A halálos lövés",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjM5",
                  "name": "1968 - A prágai tavasz",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjQw",
                  "name": "1969 - Neil Armstrong",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjQx",
                  "name": "1970 - Willy Brandt",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjQy",
                  "name": "1972 - Kim Phuc",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjQz",
                  "name": "1972 - Terror az olimpián",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjQ0",
                  "name": "1974 - Watergate",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjQ1",
                  "name": "1974 - Guillaume-botrány",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjQ2",
                  "name": "1975 - Vietnam",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjQ3",
                  "name": "1976 - Soweto",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjQ4",
                  "name": "1977 - Németországi ősz",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjQ5",
                  "name": "1978 - Lombikbébi",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjUw",
                  "name": "1979 - Komeini ayatollah",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjUx",
                  "name": "1980 - A Szolidaritás",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjUy",
                  "name": "1981 - Merénylet a pápa ellen",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjUz",
                  "name": "1982 - Falklandi háború",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjU0",
                  "name": "1983 - Hitler naplója",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjU1",
                  "name": "1985 - AIDS",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjU2",
                  "name": "1986 - Csernobil",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjU3",
                  "name": "1986 - Challenger",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjU4",
                  "name": "1987 - Uwe Barschel",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjU5",
                  "name": "1988 - Gladbeck",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjYw",
                  "name": "1989 - A berlini fal",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjYx",
                  "name": "1990 - Az újraegyesülés",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjYy",
                  "name": "1991 - Az öbölháború",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjYz",
                  "name": "1991 - Puccs Moszkvában",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjY0",
                  "name": "1992 - Omarszka",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjY1",
                  "name": "1993 - Szomália",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjY2",
                  "name": "1994 - Nelson Mandela",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjY3",
                  "name": "1995 - Jichák Rabin",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjY4",
                  "name": "1997 - Lady Diana",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjY5",
                  "name": "1998 - Bill Clinton",
                },
                Object {
                  "id": "RXBpc29kZToxNDYwNjcw",
                  "name": "1999 - Egy évszázad vége",
                },
              ],
              "id": "VHZTaG93OjM2NTA4",
              "name": "100 év 100 film",
              "nextEpisode": null,
              "previousEpisode": "2001-04-10",
            },
          },
        ],
      },
    }
  `);
});
