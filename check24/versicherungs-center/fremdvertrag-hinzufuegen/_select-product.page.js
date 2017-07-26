const SelectInsuranceCompanyPage = require('./_select-insurance-company.page')

class SelectProductPage {
  constructor(actor) {
      this.I = actor
  }

  async goThere() {
     await this.I.amOnPage('https://www.check24.de/versicherungsordner/vertraege/neu/products?displaymode=mainwebview');
  }

  async seeInsuranceProducts() {
    await this.I.seeElement('.ProductsSelection');
    await this.I.seeInCurrentUrl('/products');  
  }

  async selectProduct(insuranceProduct) {
    await this.I.click({ css: 'button[data-test-key="' + insuranceProduct + '"]' });
    await this.I.waitInUrl('/versicherungsordner/vertraege/neu/insurance')
    
    return new SelectInsuranceCompanyPage(this.I)
  }
}

module.exports = SelectProductPage

