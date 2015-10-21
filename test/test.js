define([
	'Squire']
, function(Squire){

	var filer;

  var stubbedModules
    , dependencies = [
			'src/person'
		]
		,	stubs = {
				'src/person' : {
          isMale : sinon.stub().returns(-220),
          isMaleSpy : sinon.spy()
        }
		};

	var mocks = {};
	var myStub;
		
	describe('Test suite', function(){

		before(function(done){

			stubbedModules = new Squire();

			dependencies.forEach(function(module){
				stubs[module] = stubs[module] || sinon.stub();
				stubbedModules.mock(module, stubs[module]);
			});

			stubbedModules
			.require(['src/filer'], function(component) {
				filer = component;
				done();
				});

		});

    after(function(done){
      done();
    });
	
		describe('My test', function() {
			it('Will check for equality', function(){
				expect(1).to.equal(1);
			});

			it('Will check for equality', function(){
				expect(true).to.not.equal(false);
			});

			it ('Will reverse a string input', function(done){
				expect(filer.reversal('input')).to.equal('tupni');
				expect(filer.reversal('012345')).to.equal('543210');
				done();
			});
		});

		describe('The filer module',function(){

			var mySpy
        , stubMale
        , isMaleSpy;

			beforeEach(function(){
        mySpy = mySpy || sinon.spy(filer,'uppercase');
			});

			afterEach(function(){
				mySpy.reset();
			});

			it('will call an uppercase function',function(){
				filer.uppercase('apples');
				expect(mySpy).to.be.ok;
				expect(mySpy).calledWithExactly('apples');
			});

			it('will tell you if you have a boys name (mocked result',function(done){
				expect(filer.isBoy('mark')).to.equal(-220);
				done();
			});

      it('will make a call to the isBoysSpy which in turn, calls isMaleSPy',function(done){
        filer.isBoySpy('mark')
        expect(stubbedModules.mocks['src/person'].isMaleSpy).to.be.called;
        expect(stubbedModules.mocks['src/person'].isMaleSpy.args[0][0]).to.equal('mark');
        done();
      });
		});

	});


})