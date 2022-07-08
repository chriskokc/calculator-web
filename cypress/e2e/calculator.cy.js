describe('empty spec', () => {

  // Positive cases

  it('should check that 7 + 9 = 16', () => {
    // 1. ARRANGE
    cy.visit('http://127.0.0.1:5500/index.html');

    // 2. ACT
    // write code that controls user input
    // .get use a css selector to find an element

    // adding
    // 7 + 9 =
    cy.get('.calculator__btn--seven').click();
    cy.get('.calculator__btn--plus').click();
    cy.get('.calculator__btn--nine').click();
    cy.get('.calculator__btn--equal').click();

    // 3. ASSERT
    // check if the result is what we expect

    // Positive cases

    // adding
    // check that the result 16 got displayed
    cy.get('.calculator__screen').should("contain", "16");

  })

  it('should check that 100 - 10 = 90', () => {
    // 1. ARRANGE
    cy.visit('http://127.0.0.1:5500/index.html');

    // subtracting
    // 100 - 10 = 
    cy.get('.calculator__btn--one').click();
    cy.get('.calculator__btn--zero').click();
    cy.get('.calculator__btn--zero').click();
    cy.get('.calculator__btn--minus').click();
    cy.get('.calculator__btn--one').click();
    cy.get('.calculator__btn--zero').click();
    cy.get('.calculator__btn--equal').click();

    // 3. ASSERT
    // check if the result is what we expect

    // subtracting
    cy.get('.calculator__screen').should("contain", "90");

  });

  it('should check that 15 * 15 = 225', () => {
    // 1. ARRANGE
    cy.visit('http://127.0.0.1:5500/index.html');

    // 2. ACT
    // multiplying
    // 15 * 15 =
    cy.get('.calculator__btn--one').click();
    cy.get('.calculator__btn--five').click();
    cy.get('.calculator__btn--multiply').click();
    cy.get('.calculator__btn--one').click();
    cy.get('.calculator__btn--five').click();
    cy.get('.calculator__btn--equal').click();
    
    // 3. ASSERT
    // multiplying
    cy.get('.calculator__screen').should("contain", "225");

  });

  it('should check that 400 / 20 = 20', () => {
    // 1. ARRANGE
    cy.visit('http://127.0.0.1:5500/index.html');

    // 2. ACT
    // dividing
    // 400 / 20 =
    cy.get('.calculator__btn--four').click();
    cy.get('.calculator__btn--zero').click();
    cy.get('.calculator__btn--zero').click();
    cy.get('.calculator__btn--division').click();
    cy.get('.calculator__btn--two').click();
    cy.get('.calculator__btn--zero').click();
    cy.get('.calculator__btn--equal').click();

    // 3. ASSERT
    // dividing
    cy.get('.calculator__screen').should("contain", "20");

  });

  it('should check that 8 - 8 / 2 + 3 = 7', () => {
    // 1. ARRANGE
    cy.visit('http://127.0.0.1:5500/index.html');

    // 2. ACT
    cy.get('.calculator__btn--eight').click();
    cy.get('.calculator__btn--minus').click();
    cy.get('.calculator__btn--eight').click();
    cy.get('.calculator__btn--division').click();
    cy.get('.calculator__btn--two').click();
    cy.get('.calculator__btn--plus').click();
    cy.get('.calculator__btn--three').click();
    cy.get('.calculator__btn--equal').click();

    // 3. ASSERT
    // precedence rule
    cy.get('.calculator__screen').should("contain", "7");

  });

  it('should check that 2 - 10 = -8', () => {
    // 1. ARRANGE
    cy.visit('http://127.0.0.1:5500/index.html');

    // 2. ACT
    cy.get('.calculator__btn--two').click();
    cy.get('.calculator__btn--minus').click();
    cy.get('.calculator__btn--one').click();
    cy.get('.calculator__btn--zero').click();
    cy.get('.calculator__btn--equal').click();

    // 3. ASSERT
    // negative number
    cy.get('.calculator__screen').should("contain", "-8"); 

  });

  it('should clear to 0', () => {
    // 1. ARRANGE
    cy.visit('http://127.0.0.1:5500/index.html');

    // 2. ACT
    // clear mode
    // 20 C
    cy.get('.calculator__btn--two').click();
    cy.get('.calculator__btn--zero').click();
    cy.get('.calculator__btn--clear').click();

    // 3. ASSERT
    // check if the result is what we expect

    // clear mode
    cy.get('.calculator__screen').should("contain", "0");  

  })

  // Negative cases

  it('should check that multiple dots not allowed for decimals', () => {
    // 1. ARRANGE
    cy.visit('http://127.0.0.1:5500/index.html');

    // 2. ACT
    // checking for multiple dots input
    // 3...
    cy.get('.calculator__btn--three').click();
    cy.get('.calculator__btn--dot').click();
    cy.get('.calculator__btn--dot').click();
    cy.get('.calculator__btn--dot').click();
    

    // 3. ASSERT
    // checking for multiple dots input
    cy.get('.calculator__screen').should("contain", "3.");

  });


})