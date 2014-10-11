(function(angular) {

  var
    dependencies;

  dependencies = [];

  angular.module('ch.InfiniteScroll', dependencies)
    .constant('SCROLL_EVENT', {
      MET: 'infiniteScroll:events:met',
      REGISTER: 'infiniteScroll:events:register',
      REMOVE: 'infiniteScroll:events:remove'
    });

})(angular);