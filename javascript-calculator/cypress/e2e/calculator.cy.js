describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/'); // change URL to match your dev URL
  });
});

describe('2개의 숫자에 대해 덧셈이 가능하다.', () => {
  it('100 + 7 = 107', () => {
    cy.get('.digit').contains('1').click();
    cy.get('.digit').contains('0').click();
    cy.get('.digit').contains('0').click();
    cy.get('.operation').contains('+').click();
    cy.get('.digit').contains('7').click();
    cy.get('.operation').contains('=').click();

    cy.get('#total').contains('107');
  });
});

describe('2개의 숫자에 대해 뺄셈이 가능하다.', () => {
  it('10 - 20 = -10', () => {
    cy.get('.digit').contains('1').click();
    cy.get('.digit').contains('0').click();
    cy.get('.operation').contains('-').click();
    cy.get('.digit').contains('2').click();
    cy.get('.digit').contains('0').click();
    cy.get('.operation').contains('=').click();

    cy.get('#total').contains('-10');
  });
});

describe('2개의 숫자에 대해 곱셈이 가능하다.', () => {
  it('200 * 50 = 10000', () => {
    cy.get('.digit').contains('2').click();
    cy.get('.digit').contains('0').click();
    cy.get('.digit').contains('0').click();
    cy.get('.operation').contains('X').click();
    cy.get('.digit').contains('5').click();
    cy.get('.digit').contains('0').click();
    cy.get('.operation').contains('=').click();

    cy.get('#total').contains('10000');
  });
});

describe('2개의 숫자에 대해 나눗셈이 가능하다.', () => {
  it('49 / 7 = 7', () => {
    cy.get('.digit').contains('4').click();
    cy.get('.digit').contains('9').click();
    cy.get('.operation').contains('/').click();
    cy.get('.digit').contains('7').click();
    cy.get('.operation').contains('=').click();

    cy.get('#total').contains('7');
  });
});

describe('AC(All Clear)버튼을 누르면 0으로 초기화 한다.', () => {
  it('3 + 7 = 10 -> AC = All Clear', () => {
    cy.get('.digit').contains('3').click();
    cy.get('.operation').contains('+').click();
    cy.get('.digit').contains('7').click();
    cy.get('.operation').contains('=').click();
    cy.get('#total').contains('10');

    cy.get('.modifier').contains('AC').click();
    cy.get('#total').contains('0');
  });
});

describe('숫자는 한번에 최대 3자리 수까지 입력 가능하다.', () => {
  it('1 -> 3 -> 5 -> 0 -> 2 -> 0 -> 0 -> 0 = 0', () => {
    cy.get('#total').contains('0');

    cy.get('.digit').contains('1').click();
    cy.get('#total').contains('1');

    cy.get('.digit').contains('3').click();
    cy.get('#total').contains('13');

    cy.get('.digit').contains('5').click();
    cy.get('#total').contains('135');

    cy.get('.digit').contains('0').click();
    cy.get('#total').contains('350');

    cy.get('.digit').contains('2').click();
    cy.get('#total').contains('502');

    cy.get('.digit').contains('0').click();
    cy.get('#total').contains('20');

    cy.get('.digit').contains('0').click();
    cy.get('#total').contains('200');

    cy.get('.digit').contains('0').click();
    cy.get('#total').contains('0');
  });
});

describe('계산 결과를 표현할 때 소수점 이하는 버림한다.', () => {
  it('10 / 3 = 3', () => {
    cy.get('.digit').contains('1').click();
    cy.get('.digit').contains('0').click();
    cy.get('.operation').contains('/').click();
    cy.get('.digit').contains('3').click();
    cy.get('.operation').contains('=').click();

    cy.get('#total').contains('3');
  });
});
