// define([
// 	'Squire']
// , function(Squire){

// 	var filer;

// 	var dependencies = [
// 			'src/person'
// 		]
// 		,	stubs = {
// 				'src/person' : {
//           isMale : function() { return -99;}
//         }
// 		};

// 	var mocks = {};
// 	var myStub;
		
// 	describe('Test suite', function(){

// 		before(function(done){

// 			var stubbedModules = new Squire();

// 			dependencies.forEach(function(module){
// 				stubs[module] = stubs[module] || sinon.stub();
// 				stubbedModules.mock(module, stubs[module]);
// 				console.log('Stubbed out module:',module, ' with ', stubs[module]);
// 			});

//       console.log(stubbedModules);

// 			stubbedModules
// 			.require(['src/filer'], function(component) {
// 				filer = component;
// 				done();
// 				});

//       // console.log(stubs['./person']);

// 		});

//     // after(function(done){

//     // });
	
// 		// describe('My test', function() {
// 		// 	it('Will check for equality', function(){
// 		// 		expect(1).to.equal(1);
// 		// 	});

// 		// 	it('Will check for equality', function(){
// 		// 		expect(true).to.not.equal(false);
// 		// 	});

// 		// 	it ('Will reverse a string input', function(done){
// 		// 		expect(filer.reversal('input')).to.equal('tupni');
// 		// 		expect(filer.reversal('012345')).to.equal('543210');
// 		// 		done();
// 		// 	});
// 		// });

// 		describe('The filer module',function(){

// 			var mySpy;
// 			var stubMale;

// 			beforeEach(function(){
// 				mySpy = mySpy || sinon.spy(filer,'uppercase');
// 			});

// 			afterEach(function(){
// 				mySpy.reset();
// 				// stubMale.restore();
// 			});

// 			// it('will call an uppercase function',function(){
// 			// 	filer.uppercase('apples');
// 			// 	expect(mySpy).to.be.ok;
// 			// 	expect(mySpy).calledWithExactly('apples');
// 			// });

// 			it('will tell you if you have a boys name',function(done){

// 				console.log(filer.isBoy('mark'));
// 				expect(filer.isBoy('mark')).to.be.true;
// 				expect(filer.isBoy('molly')).to.be.false;
// 				done();
// 			});
// 		});

// 	});


// })