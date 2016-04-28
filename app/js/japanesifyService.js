japanesifyApp.service('japanesifyService', ['rulesService',function(rulesService) {
  var self = this;

  self.splitIntoSyllables = function(string, ruleJP) {
    var matchedSyllables= [];
    var match = string.slice(0, 4).match(ruleJP.threeCharSyllables())[0];
    var lessString = string.replace(match, '');
    console.log(match);
    console.log(lessString);
    matchedSyllables.push(match);
    if (lessString.length === 1) {
      matchedSyllables.push(lessString);
    }
    return matchedSyllables;


    // return ['rhi', 'a'];
  };

  self.convertToJapanese = function(array, ruleJP) {
    var matcher = ruleJP.matcher();
    var newArray = array.map(function(syllable) {
      return matcher[syllable];
    });
    return newArray.join('');
  };

  function filterEmptyString(element) {
    if ((element !== '') | (element !== undefined)); {
      return element;
    }
  }

  self.translateWord =  function(string) {
    var syllableArray = self.splitIntoSyllables(string, rulesService);
    return self.convertToJapanese(syllableArray, rulesService);
  };
}]);
