const certificates = require('certificates.json')

it('Tests with certificate for Randy', () => {

  const userCert = Cypress._.find(certificates, { 'user': 'Randy' })
  const configCert = Cypress._.omit(userCert , ['user'])   
  Cypress.config('clientCertificates', [ configCert ])

  ...
