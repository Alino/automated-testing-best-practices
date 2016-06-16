module.exports = function() {
  this.When(/^I click on deposit button$/, function () {
    client.url(server.execute(function () {
            return process.env.ROOT_URL
        }));
    client.waitForExist('.bank-deposit__submit');
    client.submitForm('.bank-deposit__submit');
  });
};
