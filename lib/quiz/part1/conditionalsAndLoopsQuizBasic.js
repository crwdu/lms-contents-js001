const appJs = ``;

const appTestJs = `it("반복문, 조건문", function () {
  let a = 0;

  for (let i = 0; i < 10; i += 2) {
    if (i % 4 === 0) {
      a += i;
    }
  }

  const result = a;
  const guess = VACO;

  expect(guess).toEqual(result);
});

it("반복문, 조건문, 논리 연산자", function () {
  let a = 0;

  for (let i = 0; i < 10; i++) {
    if (i % 3 === 0 || i % 4 === 0) {
      a += i;
    }
  }

  const result = a;
  const guess = VACO;

  expect(guess).toEqual(result);
});
`;

const conditionalsAndLoopsQuizBasic = {
  "/app.test.js": {
    code: appTestJs,
  },
  "/app.js": {
    code: appJs,
    hidden: true,
  },
};

export default conditionalsAndLoopsQuizBasic;
