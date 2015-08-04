(function(t) {

  console.log('test');
  t.module('QUnitPage Development Mode');

  t.pageTestInDevelopment("development mode", function (page) {

    page.open('panel.html');

    page.step('clicking ajax', ['.ajax'], function (link) {
      link.click();
    });

    page.step('check count 1', ['.result:contains("Count: 1")'], function (result) {
      t.equal(result.text(), 'Count: 1');
    });

    page.step('clicking ajax again', ['.ajax', '.result'], function (link, result) {
      link.click();
      t.equal(result.text(), 'Loading');
    });

    page.step('checking count 2', ['.result:not(:contains("Loading"))'], function (result) {
      t.equal(result.text(), 'Count: 2');
    });

    var a = 10;
    function f() {
      return a;
    }
    console.log('f', f());

    page.step('calling function', [], function() {
      //t.equal(f(), 20);
    });
  });
})(QUnit);