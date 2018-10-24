(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 768,
	height: 1366,
	fps: 60,
	color: "#000000",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.形状2 = function() {
	this.spriteSheet = ss["open_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.down = function() {
	this.spriteSheet = ss["open_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["open_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.logo_1 = function() {
	this.spriteSheet = ss["open_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.qq = function() {
	this.spriteSheet = ss["open_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.StatusBar = function() {
	this.spriteSheet = ss["open_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.up = function() {
	this.spriteSheet = ss["open_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.微信 = function() {
	this.spriteSheet = ss["open_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.矩形1 = function() {
	this.spriteSheet = ss["open_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.矩形2拷贝2 = function() {
	this.spriteSheet = ss["open_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.矩形3 = function() {
	this.spriteSheet = ss["open_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.矩形2拷贝2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.矩形2拷贝2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,517,1366);


(lib.微信_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.微信();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96,96);


(lib.矩形3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EglpAHMQhFgBgzgxQgygyAAhGIAApDQAAhFAygzQAzgyBFAAMBLTAAAQBGAAAyAyQAxAzABBFIAAJDQgBBGgxAyQgyAxhGABg");
	mask.setTransform(258,46);

	// 图层 1
	this.instance = new lib.矩形3();
	this.instance.setTransform(-125,-851);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,516,92);


(lib.qq_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.qq();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96,96);


(lib.logo_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.logo_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,242,242);


(lib.形状2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.形状2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,518,513);


(lib.矩形1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg7/BquMAAAjVbMB3+AAAMAAADVbg");
	mask.setTransform(384,683);

	// 图层 1
	this.instance = new lib.矩形1();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,768,1366);


(lib.up_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.up();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,770,1124);


(lib.StatusBar_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.StatusBar();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,727,24);


(lib.logo_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance_1 = new lib.logo();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,230,230);


(lib.down_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.down();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,770,1124);


(lib.登录 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 登录
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRCKIgTgCIgMgDIgFgFQgCgCABgEQABgEADgBQADgCAFABIAGACQAFACALABQAKACACgDQACgCAAgGIAAg7IggAXQgZARgbANQgaAMgEABQgFAAgDgCQgDgDAAgDQAAgEACgCIAHgEIAhgQQAdgPAZgSIAXgRIAGgFIAAg2Ih9AAQgEAAgCgCQgDgCAAgEQAAgEADgCQACgCAEAAIDEAAIAEgjIivAAQgCAAgDgCQgCgCAAgEQAAgFACgCQADgCADAAICwAAIABgQIAAgIQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQgCgCgFAAIirAAQgKAAABgIQAAgEADgCQACgDAEAAIC0AAQALAAAEAFQAEAEABAEIgBALIgJBKIAzAAQADAAADACQACACAAAEQgBAEgCACQgDACgDAAIh6AAIgBArIAXAXIAfAcQARAOAXAKQAXAJACACQADACABAEQABADgDADQgCADgDAAIgNgDQgJgDgQgHQgPgHgVgRQgVgSgUgUIgBBGQAAAKgCAFQgDAEgEADQgDACgHAAIgHgBgAAvAyQgEgDACgFQABgDANgLIAVgUQAJgIAGgGQAGgIAEAAQAEgBADACQACADAAAEQAAADgCADIgIAJQgFAGgTATQgUASgFABIgCAAQgEAAgCgDgAgjAlIgEgCIgNgHIgVgMIgTgKQgIgDgBgDQgCgDADgEQACgEAGAAQADAAAHAEIASAIIAVALQAOAIACAEQACAEgDAFQgCAEgEAAIgBAAg");
	this.shape.setTransform(273.6,48.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiBCFQgDAAgCgCQgDgCABgGQAAgEACgBQACgCADAAIBOAAIgKghIgEgMIgCgGIgSAAQgPAAgFgHQgEgHAAgGIAAgnQAAgFAEgHQAEgIASAAICnAAQAPAAADAHQADAHAAAEIAAAlQAAAJgEAIQgEAHgMAAIgVAAIgKAjIgGAQIBPAAQAGAAABAGQAAAGgCACQgCADgDAAgAghB0IA+AAQAGgNADgLIAFgTIACgIIhdAAIAPAzgAhYACQgDAEAAAHIAAAVQAAAJADADQADADAKAAICVAAQAJAAACgEQACgEAAgEIAAgaQAAgLgMAAIiXAAQgIAAgEACgABlgjQgagMgXgQQgXgPgOgPIgMgOIgDgFIgTAXQgHAHgRAMQgRANgZAMIglASQgGADgEAAQgDgBgCgCQgDgDABgDQAAgEACgCQACgCAGgCIAOgFIAQgIIAWgMIAFgDIgFgEIgNgKQgLgIgIgEIgLgFQgCgCgBgEQAAgEACgDQADgCAEgBQAEAAAHAFIAOAIIALAGIAWARQAGgCAIgHIAMgMIAIgHQAAgBABAAQAAgBABgBQAAAAAAAAQAAgBAAAAQgBgCgGAAIg3AAIgFgBQgCgCAAgFQAAgIAIAAIBOAAQAHAAAEAEIAFAGIALANIAKAJIABADQAKgFAHgHIALgMIAEgGQAHgIAFAFQAFAEAAAEQAAACgEAHQgEAHgJAHIgSAOIASALIASgMIAKgKIAJgLIAHgJQAEgFAFAFQAFAEAAAEQAAAEgGAIQgGAIgKAJQgKAJgJAGIASAJIAYALQALAEACADQACADgCAFQgCAGgEAAQgFAAgbgMgAg/gkQgDAAgCgCQgDgCABgEQAAgEACgCQACgCAEAAIB6AAQAHAAAAAGQAAAGgCACQgCACgDAAg");
	this.shape_1.setTransform(243,48.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 矩形 3
	this.instance = new lib.矩形3_1();
	this.instance.setTransform(259,-168,1,1,0,0,0,259,-168);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125,-851,768,1366);


(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D1D7D8").s().p("ABKCGQgIAAgFgCQgEgCgDgCQgDgDAAgDQABgEACgCQADgDAEAAIAJADQAIADAKAAQAHAAAGgEQAGgDADgIQADgHABgMIADgaIABgZIABgPQAAgGgBgCQgDgEgJAAIhhAAQgLAAgEgFQgEgDAAgLIAChSQAAgGACgCQACgDAEAAQADABACACQACADAAAEIgBBPQAAAEABADQACACAHAAIBPAAIADhkIgBgHIgDgDIgGgBIhcAAQgDAAgCgCQgCgCAAgEIACgFQABgDAEAAIBiAAQAWAAAAAUIgDBrQAHAAAGACQAFACADAEQACAGABAGIgBAWIgBAbIgDAbQgBAMgGARQgFARggAAIgOgBgAhWB5QgGAAgJgDQgKgDAAgSIAAhtIgHAMQgEAFgDABQgEABgEgCQgDgDAAgCQAAgDAGgJIAKgSQAGgKAFgQQAGgRACgMIAFghIgVAAQgEAAgCgCQgDgCAAgFQAAgDADgCQACgCADAAIBOAAQAAAAABAAQAAAAABAAQAAAAABABQABAAAAABQADACAAADQAAAEgCADQgCACgDAAIgnAAIgDAXIgEAVIgIAaIAEAAIAEgBIAbAAQAFAAAGACQAHADADAGQACAGAAAFIAAB3QAAANgFAIQgEAIgOAAgAhegcIgBAJIAABvQAAAHADADQADADAHAAIASAAQAGAAACgCIADgGIABgGIAAhtQAAgIgDgDQgDgDgIAAIgQAAQgKAAgCAEgAgKBCQgDAAgDgCQgDgCAAgEQAAgEACgCQADgCADAAIByAAQAAAAABAAQAAAAABAAQAAABABAAQABAAAAABQADACAAAEQAAADgDADQgCACgDAAg");
	this.shape.setTransform(167.8,743.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D1D7D8").s().p("AhRCLQgOAAgHgFQgGgEgCgGIgBgLIAAgsQAAgDACgDQACgCAEAAQADgBADADQACADAAADIAAAoQAAAIAEADQAEAEALAAIBHAAIAAg0QAAgDACgCQACgDADAAQAEABACACQAAABABAAQAAABAAAAQABABAAABQAAAAAAABIAAA0IBJAAQAKAAADgEQADgDABgEIABgIIAAgpIACgFQACgCAEAAQAEgBADADQACACAAADIAAAuQAAAJgDAKQgEAKgZAAgAAAA7IgTgCQgIgBgGgEQgGgFgCgDIgEgHIgSAGIgUAFIgUAFIgSADQgKACgEgEQgDgEACgFQACgFARgDIAfgGQAPgDAWgJIAAhTQAAgFACgCQADgDAEAAQADAAADADQACACAAAEIABBOQAdgNANgNQAPgNAJgLIANgTIAIgOIAGgKQACgEAFgBQAFAAACACQADADAAAEQAAAEgDAGQgKAUgOAQQgNAQgRAOQgQAPgiAPIAFAHQACADAIACQAIACAUAAQAQAAAKgCQAJgBAGgFQAGgGACgMIADgRIACgGQABgEAHAAQAEABACACQABABABAFQAAACgCAKIgEATQgCAKgIAHQgIAGgMADQgJACgcAAIgMAAgACAAvQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAAAgBgBQgCgBgCgFIgHgRQgIgTgIgJIgNgSIgGgJIgBgFQAAgCADgDQADgDADAAQAEAAADAEIAJALIAKAQIAPAWIAKAWIACAIQAAAEgDADQgDADgDAAIgBAAgAiHATQgCgFADgFIAHgJQAGgEAGgKIAJgRIAGgQIAEgPQACgHACgCQACgCAFAAQAIABAAAIQAAAHgCAHIgGAQIgIATQgGALgJAKIgNAPIgFACIgBAAQgHAAgBgEgAAHgYQgEAAgCgDIgDgKIgJgRIgIgNQgDgFgBgDQAAgEADgDQADgDADABQAEAAADAEQAEAEAGAOIALAUQACAGAAAEQAAAEgDACQgCACgDAAIgBAAgABzguIgDgEQgBgDACgFIADgMIACgLQgBgMgOAAIjHAAQgJAAgCABQgDABgBACQgCACAAAGIAAAcIgCAEQgCACgEAAQgEABgCgCQgDgCAAgDIAAglQAAgGADgEQACgEAFgDQAEgCAKAAIBnAAIgBgDIgBgJIgDgHQgBgFACgCQACgDAFAAQACAAAEADQADADACAIIACALIAAAEIBfAAQAUAAAEAKQAEAKgBAMQgBANgCAIQgDAIgCACQgCABgEABIgBAAQgBAAgBAAQAAAAgBgBQgBAAAAAAQgBAAAAgBg");
	this.shape_1.setTransform(138.1,742.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D1D7D8").s().p("AhPCKQgCgDAAgDIAAhtIgCAFIgCAEIgHAPIgIANIgHAMIgIAMQgEAEgEABQgEABgDgDQgDgCAAgCIABgFIAGgJIAIgMIAKgRIALgVIAKgUIAGgUIgtAAQgDAAgDgCQgCgCAAgEQAAgFACgBQADgCADAAIAtAAIAAgeQAAgDACgDQACgDAFAAQAEAAACADQACADAAAEIAAAdIAsAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABABQACACAAAEQABADgCADQgDACgCAAIgsAAIAAAEIAEAIIAMAPIANATIAKARIAFAIIABAIQgBAFgIAAQgEAAgCgCQgCgBgIgRQgIgRgMgTIAAB+QAAACgCADQgDADgEAAQgEgBgCgCgAAPCFQgNAAgEgFQgGgFAAgOIAAiUQAAgXAXAAIBXAAQAUAAADAIQACAJAAAGIAACUIgBALQgBAEgEAFQgFAEgNAAgAAGBlQAAAIACADQACADADABIAIABIBMAAQAJAAACgEQACgEAAgGIAAgiIhoAAgAAGA2IBoAAIAAgsIhoAAgAAIgqQgCAEAAAFIAAAdIBoAAIAAgcIgBgJQgBgDgDgBQgDgBgGAAIhMAAQgLAAgBAEgAg0g/QgGAAgBgEIgBgJIgCgNIgDgLIgeAAIgCADIgGAKIgFAGIgHAHIgGADQgDAAgDgCQgCgDAAgDQAAgBAAAAQAAgBABAAQAAgBAAgBQAAAAABgBIAFgGIAGgIIAIgMIAHgQQADgIACgBIAEgDQADgBAEADQADADAAAEIgCAHIgDAGIBPAAQABAAAAAAQABAAAAAAQABABABAAQAAAAABABQACABAAAEQAAAEgCADQgCACgDAAIgpAAIADANIACAKIAAAHQAAADgDACQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgBAAgABHhEQgEAAgBgCQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIgBgHIgCgJIgBgHIgBgEIgpAAIgCADIgKAMQgHALgGACQgFABgDgCQgCgDAAgCQAAgDACgDIAIgIQAHgHAGgMIAJgQIAFgJQACgFAFADQAFADABACIAAAHIgDAFIgCAFIBkAAQABAAAAAAQABAAAAAAQABABABAAQAAAAABABQACABAAAEQAAAEgCADQgCACgDAAIg1AAIACAKIACAKIAAAGQgBAHgGAAIgBAAg");
	this.shape_2.setTransform(382.8,628.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D1D7D8").s().p("AAhCLQgFAAgBgDQgCgCAAgDIAAjlQAAgHADgKQACgKAWAAIApAAQASAAAEAFQAFAEAAAFQABAEgCAIQgJAggHAUQgIATAAAEQABAFAEAIIAMASQANAWADAMQACANAAAKQABAKgDAJQgDAJgGAIQgGAIgKAFQgKAFgSAAQgMAAgHgCQgHgCgBgCQgCgBgCgEQgCgDADgDQACgDADgBQADAAAGABIALACIAMgCQAJgBAGgDQAHgDAGgJQAFgJgBgQQgCgTgQgaIgMgTQgEgIgBgFQAAgGADgJIAHgXIAGgXIAGgUQAAgEgBgCQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAgBAAIglAAQgMAAgDAFIgBAKIAADgQAAADgDACQgBADgEAAIgBAAgAhoB/QgaAAAAgWIAAi0QAAgHADgIQAEgIAQAAIAhAAIABggQAAgEACgCQACgDAFABQADABACACQACACAAADIAAAgIAiAAQANAAAEAEQADAFACAEQABAFAAAFIAACxQAAAIgDAJQgDAIgRAAgAg5BvIAYAAQAIAAAEgCQACgCABgEIACgKIAAhVIgpAAgAhxBdQAAAIACAEQACADADACQAEABAHAAIAVAAIAAhnIgnAAgAg5gGIApAAIAAg7IgCgLQgBgDgDgBQgDgCgNAAIgTAAgAhvhOQgCAFAAAHIAAA8IAnAAIAAhMIgZAAQgKAAgCAEg");
	this.shape_3.setTransform(353.3,628.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D1D7D8").s().p("AhQB5QgBgBAAAAQAAgBgBAAQAAgBABgBQAAAAABgBIACgGICTjfQADgFADgBQACgCADACQABAAABAAQAAAAAAABQABAAAAABQgBAAAAABIgEAJIiSDdQgDAFgDABIgDABIgDAAg");
	this.shape_4.setTransform(328.4,629);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D1D7D8").s().p("ABKCGQgIAAgFgCQgEgCgDgCQgDgDAAgDQABgEACgCQADgDAEAAIAJADQAIADAKAAQAHAAAGgEQAGgDADgIQADgHABgMIADgaIABgZIABgPQAAgGgBgCQgDgEgJAAIhhAAQgLAAgEgFQgEgDAAgLIAChSQAAgGACgCQACgDAEAAQADABACACQACADAAAEIgBBPQAAAEABADQACACAHAAIBPAAIADhkIgBgHIgDgDIgGgBIhcAAQgDAAgCgCQgCgCAAgEIACgFQABgDAEAAIBiAAQAWAAAAAUIgDBrQAHAAAGACQAFACADAEQACAGABAGIgBAWIgBAbIgDAbQgBAMgGARQgFARggAAIgOgBgAhWB5QgGAAgJgDQgKgDAAgSIAAhtIgHAMQgEAFgDABQgEABgEgCQgDgDAAgCQAAgDAGgJIAKgSQAGgKAFgQQAGgRACgMIAFghIgVAAQgEAAgCgCQgDgCAAgFQAAgDADgCQACgCADAAIBOAAQAAAAABAAQAAAAABAAQAAAAABABQABAAAAABQADACAAADQAAAEgCADQgCACgDAAIgnAAIgDAXIgEAVIgIAaIAEAAIAEgBIAbAAQAFAAAGACQAHADADAGQACAGAAAFIAAB3QAAANgFAIQgEAIgOAAgAhegcIgBAJIAABvQAAAHADADQADADAHAAIASAAQAGAAACgCIADgGIABgGIAAhtQAAgIgDgDQgDgDgIAAIgQAAQgKAAgCAEgAgKBCQgDAAgDgCQgDgCAAgEQAAgEACgCQADgCADAAIByAAQAAAAABAAQAAAAABAAQAAAAABABQABAAAAABQADACAAAEQAAADgDADQgCACgDAAg");
	this.shape_5.setTransform(303.8,629.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D1D7D8").s().p("AAUCHQg1gCgkgGQgkgHgCgBIgEgGQgCgDADgEQAEgDACgBIAVAEIAqAIQAYADAwABQAMAAALgCQAKgDAGgIQAGgIADgJIADgOIACgOQAAgJgCgDQgCgCgFAAIiDAAIgGgBQgEgBgDgDQgDgCAAgFIABgJIAIgaIhHAAQgDAAgDgCQgCgCAAgFQAAgEACgCQADgCADAAIEOAAQABAAAAAAQABAAAAABQABAAABAAQAAABABAAQACACAAAEQAAAEgCACQgCADgDAAIizAAIgHASQgBAFAAAEQABAEAIAAIB6AAQAJABAFAFQAFAEABAIQACAIgBAHQAAAGgFASQgEASgHAMQgIANgRADQgNACgRAAIgKAAgAhRgsQgHAAgHgDQgHgDgCgHQgCgHAAgIIAAgoQAAgHACgFQADgFAFgDQAEgCALAAICjAAQASAAADAJQAEAJAAAGIAAAoQAAAHgCAFQgDAGgEAEQgFAEgLAAgAhVh0QgDACAAADIgBAIIAAAbQAAAFACAFQABAGAMAAICVAAQAJAAADgDIADgGIAAgIIAAgXIgBgKIgEgGQgCgCgKAAIiRAAQgKAAgDACg");
	this.shape_6.setTransform(274.3,629.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D1D7D8").s().p("AhZCFQgCgDAAgDIAAiNIgFAOIgFAMIgIARIgIAOIgIALIgFAIQgDABgDAAQgCAAgDgDQgDgEABgCQABgEAKgPQAKgPAIgUIAKgaIALgjIgnAAQgDAAgCgBQgCgDAAgEQAAgEACgCQACgCADgBIApAAIAAgwQAAgDACgDQACgCAFAAQADAAADACQACADAAADIAAAwIAmAAQAGAAABAHQABAGgDACQgCACgDAAIgjAAIAHAMIAHAOIAGAMIAOAXQAJARgFAEQgFAFgEgCQgEgDgCgEIgIgPIgHgLIgGgMIgFgJIAACdQAAADgCADQgCACgFAAQgEAAgCgCgAhCB+QgDgEAEgGIADgEIAHgJIALgOQAGgJAFgMQAEgNACgLIAEgXIACgXIAAgaIAAhIQAAgIAEgIQACgIAQAAIBEAAQAQgBAEAJQADAKAAAGIAADDQAAAKADADQADAEAHABIAJAAQAFgBACgDQADgCABgGIABgLIABgPIAAgVIAAgNQAAgFACgBQACgCAFAAQAEAAACACQACACAAAHIAAAMIAAAQIAAAUQAAALgEAKQgDAJgIAEQgJADgMAAQgTABgHgJQgHgJAAgPIAAjCQAAgKgKAAIg8AAQgGgBgBAEIgCAHIAABJIgBAXIgBAVIgDATQgBAMgEAOQgEAOgHAMIgOAWIgLANQgEACgEABIgBAAQgEAAgDgDg");
	this.shape_7.setTransform(244.1,629.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D1D7D8").s().p("AgrCMIgUgHQgLgEgEgDQgEgCgCgDQgCgEADgFQACgEAFAAIASAKQARAJASgDQAXgEACgVQAFgVABgKIAAgXIAAgDIiHAAQgEAAgCgCQgDgDABgEQAAgEACgCQACgCAEAAICHAAIgBgCIAAgIIgBgPIgDgSIgCgOIh0ABQgEAAgCgDQgDgCAAgEQABgEACgCQACgCAEAAIBxAAIgCgLIgEgPIgLgdIgwABIgTgBIgWAAQgHAAgDgDQgDgDABgEQAAgEACgCQADgCAGAAIATABQAPABAQgBQA9AAAVgDIAkgHQAPgDAHgCIASgGQAIgCADAGQADAFgEAFQgCACgIAEQgJAEgfAFQggAGgcADIAIAaIAFAUIADAJIBlAAQADAAADACQACACAAAEQgBAEgCACQgCACgDAAIhhAAIACAOIADARIABAPIAAAFIABAGIBnAAQADAAACACQADACAAAEQgBAEgCACQgCADgDAAIhnAAIAAALIAAANQgBAegMAWQgLAWgZACIgEAAQgJAAgHgCg");
	this.shape_8.setTransform(214,629.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D1D7D8").s().p("AhQB5QgBgBAAAAQAAgBgBAAQAAgBABgBQAAAAABgBIACgGICTjfQADgFADgBQACgCADACQABAAABAAQAAAAAAABQABAAAAABQgBAAAAABIgEAJIiSDdQgDAFgDABIgDABIgDAAg");
	this.shape_9.setTransform(189.5,629);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D1D7D8").s().p("AAUCHQg1gCgkgGQgkgHgCgBIgEgGQgCgDADgEQAEgDACgBIAVAEIAqAIQAYADAwABQAMAAALgCQAKgDAGgIQAGgIADgJIADgOIACgOQAAgJgCgDQgCgCgFAAIiDAAIgGgBQgEgBgDgDQgDgCAAgFIABgJIAIgaIhHAAQgDAAgDgCQgCgCAAgFQAAgEACgCQADgCADAAIEOAAQABAAAAAAQABAAAAABQABAAABAAQAAABABAAQACACAAAEQAAAEgCACQgCADgDAAIizAAIgHASQgBAFAAAEQABAEAIAAIB6AAQAJABAFAFQAFAEABAIQACAIgBAHQAAAGgFASQgEASgHAMQgIANgRADQgNACgRAAIgKAAgAhRgsQgHAAgHgDQgHgDgCgHQgCgHAAgIIAAgoQAAgHACgFQADgFAFgDQAEgCALAAICjAAQASAAADAJQAEAJAAAGIAAAoQAAAHgCAFQgDAGgEAEQgFAEgLAAgAhVh0QgDACAAADIgBAIIAAAbQAAAFACAFQABAGAMAAICVAAQAJAAADgDIADgGIAAgIIAAgXIgBgKIgEgGQgCgCgKAAIiRAAQgKAAgDACg");
	this.shape_10.setTransform(165.4,629.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D1D7D8").s().p("AgICJIAAgGIABgEIACgDIAAgHIAAh8IgLAAQgGAAgBgDQgCgCAAgEQAAgEACgCQADgDAEAAIALAAIAAhoQAAgDABgCQACgDADAAQAEAAACACQACADABADIAABoIBtAAQAEAAACADQACADABADQgBAEgCADQgCACgFAAIhOAAIAEAHIAEAMIAMAXQAKARAMANQALANAKAKIASAQIAJAJQADADAAADQAAAEgDACQgCADgEAAQgEAAgLgKQgMgKgOgRIgTgVIgOgUQgKgPgFgNQgFgMgHgRIgNAAIAAB/IAJgFIAQgJQANgIADAAQADgBADADQADACAAAEQAAAGgLAGIgYANIgQAIQgFABgFABQgGAAgBgEgAhVCMQgEAAgCgDQgCgCAAgEIAAjSIgMABIgGABQgBAAAAAAQgBAAAAABQgBAAAAABQAAABAAAAIgBAGIgBCZQAAAEgCACQgCADgEAAQgGgBgBgCQgBgDAAgEIAAidQAAgEADgKQADgJARAAIAQAAIAAgkQAAgCACgDQACgDAEAAQAEAAACADQADACAAADIAAAkIASAAQARAAADAJIADAOIAACLIgBAJQAAAGgFAGQgEAGgNABQgKAAgCgDQgDgCgBgEQAAgDAEgDQAAAAAAAAQABgBAAAAQABAAABAAQAAAAABAAIAFAAQAFAAABgCQADgDAAgDIAAgGIAAiBIgBgJQAAAAgBgBQAAAAAAgBQgBAAAAgBQgBAAgBAAIgGgBIgNgBIAADSQAAAEgCADQgDACgDAAIgBAAgAAqgfQgCgDAAgCQAAgDAFgFIAMgPQAPgRAGgLIARgaQAJgPAEgBQADAAADABIAEAEIAAAEQgBAGgEAHQgDAHgOAUQgOAUgJAKIgPAPQgFAGgFABIgBAAQgDAAgCgDg");
	this.shape_11.setTransform(136.1,628.9);

	this.instance = new lib.登录();
	this.instance.setTransform(260,683,1,1,0,0,0,259,-168);

	this.instance_1 = new lib.形状2_1();
	this.instance_1.setTransform(259,866.5,1,1,0,0,0,259,256.5);

	this.instance_2 = new lib.qq_1();
	this.instance_2.setTransform(351,1234,1,1,0,0,0,48,48);

	this.instance_3 = new lib.微信_1();
	this.instance_3.setTransform(169,1234,1,1,0,0,0,48,48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124,0,768,1366);


// stage content:
(lib.open = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		/* 单击以转到帧并播放
		单击指定的元件实例会将播放头移动到时间轴中的指定帧并继续从该帧回放。
		可在主时间轴或影片剪辑时间轴上使用。
		
		说明:
		1. 单击元件实例时，用希望播放头移动到的帧编号替换以下代码中的数字 5。
		2. EaselJS 中的帧编号从 0 开始而不是从 1 开始
		*/
		
		this.touch.addEventListener("click", P1.bind(this));
		
		function P1()
		{
			this.gotoAndPlay(2);
		}
	}
	this.frame_24 = function() {
		/* 在此帧处停止
		时间轴将在插入此代码的帧处停止/暂停。
		也可用于停止/暂停影片剪辑的时间轴。
		*/
		
		this.stop();
		
		/* 单击以转到帧并播放
		单击指定的元件实例会将播放头移动到时间轴中的指定帧并继续从该帧回放。
		可在主时间轴或影片剪辑时间轴上使用。
		
		说明:
		1. 单击元件实例时，用希望播放头移动到的帧编号替换以下代码中的数字 5。
		2. EaselJS 中的帧编号从 0 开始而不是从 1 开始
		*/
		
		this.touch.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_2.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_2()
		{
			this.gotoAndPlay(26);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(26));

	// Status Bar
	this.instance = new lib.StatusBar_1();
	this.instance.setTransform(384.5,26,1,1,0,0,0,363.5,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

	// 图层 24
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(96,217,236,0)").s().p("AssMsQlQlQAAncQAAnbFQlRQFRlRHbAAQHcAAFQFRQFRFRAAHbQAAHclRFQQlQFRncABQnbgBlRlRg");
	this.shape.setTransform(384,640);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(96,217,236,0.071)").s().p("AssMtQlQlRAAncQAAnbFQlRQFRlQHbAAQHcAAFQFQQFRFRAAHbQAAHclRFRQlQFQncAAQnbAAlRlQg");
	this.shape_1.setTransform(384,614.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(96,217,236,0.141)").s().p("AssMtQlQlRAAncQAAnbFQlRQFRlQHbAAQHcAAFQFQQFRFRAAHbQAAHclRFRQlQFRncgBQnbABlRlRg");
	this.shape_2.setTransform(384,588.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(96,217,236,0.216)").s().p("AssMsQlQlQAAncQAAnbFQlRQFRlRHbAAQHcAAFQFRQFRFRAAHbQAAHclRFQQlQFSncAAQnbAAlRlSg");
	this.shape_3.setTransform(384,562.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(96,217,236,0.286)").s().p("AssMtQlQlRAAncQAAnbFQlRQFRlQHbAAQHcAAFQFQQFRFRAAHbQAAHclRFRQlQFRncgBQnbABlRlRg");
	this.shape_4.setTransform(384,537.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(96,217,236,0.357)").s().p("AssMsQlQlQAAncQAAnbFQlRQFRlRHbAAQHcAAFQFRQFRFRAAHbQAAHclRFQQlQFSncAAQnbAAlRlSg");
	this.shape_5.setTransform(384,511.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(96,217,236,0.427)").s().p("AssMsQlQlQAAncQAAnbFQlRQFRlQHbAAQHcAAFQFQQFRFRAAHbQAAHclRFQQlQFRncAAQnbAAlRlRg");
	this.shape_6.setTransform(384,485.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(96,217,236,0.502)").s().p("AssMsQlQlQAAncQAAnbFQlRQFRlRHbAAQHcAAFQFRQFRFRAAHbQAAHclRFQQlQFRncABQnbgBlRlRg");
	this.shape_7.setTransform(384,460);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(96,217,236,0.573)").s().p("AssMtQlQlRAAncQAAnbFQlRQFRlQHbAAQHcAAFQFQQFRFRAAHbQAAHclRFRQlQFQncAAQnbAAlRlQg");
	this.shape_8.setTransform(384,434.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(96,217,236,0.643)").s().p("AssMtQlQlRAAncQAAnbFQlRQFRlQHbAAQHcAAFQFQQFRFRAAHbQAAHclRFRQlQFRncgBQnbABlRlRg");
	this.shape_9.setTransform(384,408.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(96,217,236,0.714)").s().p("AssMsQlQlQAAncQAAnbFQlRQFRlRHbAAQHcAAFQFRQFRFRAAHbQAAHclRFQQlQFSncAAQnbAAlRlSg");
	this.shape_10.setTransform(384,382.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(96,217,236,0.784)").s().p("AssMtQlQlRAAncQAAnbFQlRQFRlQHbAAQHcAAFQFQQFRFRAAHbQAAHclRFRQlQFRncgBQnbABlRlRg");
	this.shape_11.setTransform(384,357.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(96,217,236,0.859)").s().p("AssMsQlQlQAAncQAAnbFQlRQFRlQHbgBQHcABFQFQQFRFRAAHbQAAHclRFQQlQFSncAAQnbAAlRlSg");
	this.shape_12.setTransform(384,331.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(96,217,236,0.929)").s().p("AssMtQlQlRAAncQAAnbFQlRQFRlQHbAAQHcAAFQFQQFRFRAAHbQAAHclRFRQlQFQncAAQnbAAlRlQg");
	this.shape_13.setTransform(384,305.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#60D9EC").s().p("AssMsQlQlQAAncQAAnbFQlRQFRlRHbAAQHcAAFQFRQFRFRAAHbQAAHclRFQQlQFRncABQnbgBlRlRg");
	this.shape_14.setTransform(384,280);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(96,217,236,0.898)").s().p("ArkNPQlklkg1niQgJm0E4k5QFklkHig1QG0gJE5E4QFkFlA1HhQAJG1k4E3QllFlnhA1IgWAAQmnAAkwkvg");
	this.shape_15.setTransform(383.9,277);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(96,217,236,0.8)").s().p("AqcNwQl3l3hqnnQgTmOEgkgQF4l3HnhqQGOgTEgEgQF3F3BqHoQATGOkgEfQl3F4noBqIguABQlxAAkPkPg");
	this.shape_16.setTransform(383.8,274);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(96,217,236,0.698)").s().p("ApUOTQmLmLifntQgblnEHkHQGLmLHsigQFogcEIEIQGKGLCfHsQAcFokHEHQmLGMntCfQggACgiAAQk+AAjvjug");
	this.shape_17.setTransform(383.7,271);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(96,217,236,0.6)").s().p("AoMO1QmemejUnzQgllADvjwQGemeHyjUQFBglDwDvQGdGeDVHyQAlFBjvDvQmeGfnzDUQgpAFgqAAQkOAAjPjPg");
	this.shape_18.setTransform(383.6,268);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(96,217,236,0.502)").s().p("AnEPXQmxmykKn3QgukbDXjXQGymxH3kJQEbgvDWDXQGyGyEJH3QAvEbjXDWQmyGyn3EJQgxAJgwAAQjgAAixixg");
	this.shape_19.setTransform(383.5,265);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(96,217,236,0.4)").s().p("Al7P5QnFnFk/n9Qg3j0C+i/QHFnFH9k+QD0g3C+C+QHGHFE+H9QA4D0i/C+QnFHFn8E/Qg4AMgzAAQi1AAiTiTg");
	this.shape_20.setTransform(383.4,262);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(96,217,236,0.302)").s().p("AkzQbQnZnYlzoDQhBjNCminQHZnYIClzQDOhBClCmQHZHYFzIDQBBDOimClQnYHZoCFzQg7ASg1AAQiNAAh3h3g");
	this.shape_21.setTransform(383.3,259);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(96,217,236,0.2)").s().p("AjsQ9QnsnsmooHQhKioCOiNQHsnsIHmpQCohKCNCOQHsHsGoIHQBKCoiNCNQnsHsoHGoQg7Aag1AAQhpAAhdhdg");
	this.shape_22.setTransform(383.2,256);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(96,217,236,0.102)").s().p("AijRfQn/n/neoNQhTiBB1h1QH/n/IOneQCAhTB1B1QH/H/HeINQBUCBh1B1Qn/H/oOHeQg3AjgyAAQhJAAhEhFg");
	this.shape_23.setTransform(383.1,253);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(96,217,236,0)").s().p("AvRR9QirABAAirIAA+lQAAiqCrgBIejAAQCsABgBCqIAAelQABCrisgBg");
	this.shape_24.setTransform(383,250,0.766,0.766,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// logo
	this.instance_1 = new lib.logo_3();
	this.instance_1.setTransform(384,640,1,1,0,0,0,115,115);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:614,alpha:0.922},0).wait(1).to({y:587.9,alpha:0.852},0).wait(1).to({y:561.8,alpha:0.781},0).wait(1).to({y:535.8,alpha:0.711},0).wait(1).to({y:509.7,alpha:0.641},0).wait(1).to({y:483.6,alpha:0.57},0).wait(1).to({y:457.5,alpha:0.5},0).wait(1).to({y:431.5,alpha:0.422},0).wait(1).to({y:405.4,alpha:0.352},0).wait(1).to({y:379.3,alpha:0.281},0).wait(1).to({y:353.3,alpha:0.211},0).wait(1).to({y:327.2,alpha:0.141},0).wait(1).to({y:301.1,alpha:0.07},0).wait(1).to({y:275,alpha:0},0).wait(22).to({y:301.1,alpha:0.07},0).wait(1).to({y:327.1,alpha:0.141},0).wait(1).to({y:353.2,alpha:0.211},0).wait(1).to({y:379.3,alpha:0.281},0).wait(1).to({y:405.4,alpha:0.352},0).wait(1).to({y:431.4,alpha:0.422},0).wait(1).to({y:457.5,alpha:0.488},0).wait(1).to({y:483.6,alpha:0.57},0).wait(1).to({y:509.6,alpha:0.641},0).wait(1).to({y:535.7,alpha:0.711},0).wait(1).to({y:561.8,alpha:0.781},0).wait(1).to({y:587.9,alpha:0.852},0).wait(1).to({y:613.9,alpha:0.922},0).wait(1).to({y:640,alpha:1},0).wait(1));

	// up
	this.instance_2 = new lib.up_1();
	this.instance_2.setTransform(383,559,1,1,0,0,0,385,562);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:508.2},0).wait(1).to({y:457.4},0).wait(1).to({y:406.5},0).wait(1).to({y:355.7},0).wait(1).to({y:304.9},0).wait(1).to({y:254},0).wait(1).to({y:203.2},0).wait(1).to({y:152.3},0).wait(1).to({y:101.5},0).wait(1).to({y:50.7},0).wait(1).to({y:-0.2},0).wait(1).to({y:-51},0).wait(1).to({y:-101.8},0).wait(1).to({y:-152.7},0).wait(1).to({y:-203.5},0).wait(1).to({y:-254.4},0).wait(1).to({y:-305.2},0).wait(1).to({alpha:0.852},0).wait(1).to({alpha:0.711},0).wait(1).to({alpha:0.57},0).wait(1).to({alpha:0.422},0).wait(1).to({alpha:0.281},0).wait(1).to({alpha:0.141},0).wait(1).to({alpha:0},0).wait(2).to({y:-254.4,alpha:0.141},0).wait(1).to({y:-203.6,alpha:0.281},0).wait(1).to({y:-152.7,alpha:0.422},0).wait(1).to({y:-101.9,alpha:0.57},0).wait(1).to({y:-51.1,alpha:0.711},0).wait(1).to({y:-0.2,alpha:0.852},0).wait(1).to({y:50.6,alpha:1},0).wait(1).to({y:101.5},0).wait(1).to({y:152.3},0).wait(1).to({y:203.1},0).wait(1).to({y:254},0).wait(1).to({y:304.8},0).wait(1).to({y:355.6},0).wait(1).to({y:406.5},0).wait(1).to({y:457.3},0).wait(1).to({y:508.2},0).wait(1).to({y:559},0).wait(8));

	// down
	this.instance_3 = new lib.down_1();
	this.instance_3.setTransform(383,804,1,1,0,0,0,385,562);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({y:867.6},0).wait(1).to({y:931.3},0).wait(1).to({y:994.9},0).wait(1).to({y:1058.6},0).wait(1).to({y:1122.2},0).wait(1).to({y:1185.8},0).wait(1).to({y:1249.5},0).wait(1).to({y:1313.1},0).wait(1).to({y:1376.8},0).wait(1).to({y:1440.4},0).wait(1).to({y:1504.1},0).wait(1).to({y:1567.7},0).wait(1).to({y:1631.3},0).wait(1).to({y:1695},0).wait(1).to({y:1758.6},0).wait(1).to({y:1822.3},0).wait(1).to({y:1885.9},0).wait(1).to({alpha:0.852},0).wait(1).to({alpha:0.711},0).wait(1).to({alpha:0.57},0).wait(1).to({alpha:0.422},0).wait(1).to({alpha:0.281},0).wait(1).to({alpha:0.141},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.141},0).wait(1).to({alpha:0.281},0).wait(1).to({alpha:0.422},0).wait(1).to({alpha:0.57},0).wait(1).to({alpha:0.711},0).wait(1).to({alpha:0.852},0).wait(1).to({alpha:1},0).wait(1).to({y:1822.3},0).wait(1).to({y:1758.7},0).wait(1).to({y:1695},0).wait(1).to({y:1631.4},0).wait(1).to({y:1567.7},0).wait(1).to({y:1504.1},0).wait(1).to({y:1440.5},0).wait(1).to({y:1376.8},0).wait(1).to({y:1313.2},0).wait(1).to({y:1249.5},0).wait(1).to({y:1185.9},0).wait(1).to({y:1122.3},0).wait(1).to({y:1058.6},0).wait(1).to({y:995},0).wait(1).to({y:931.3},0).wait(1).to({y:867.7},0).wait(1).to({y:804},0).wait(1));

	// 图层 23
	this.instance_4 = new lib.logo_2();
	this.instance_4.setTransform(383,250,1,1,0,0,0,121,121);

	this.instance_5 = new lib.矩形2拷贝2_1();
	this.instance_5.setTransform(382.5,683,1,1,0,0,0,258.5,683);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4}]},21).to({state:[{t:this.instance_5},{t:this.instance_4}]},4).to({state:[]},4).wait(21));

	// p2
	this.instance_6 = new lib.p2();
	this.instance_6.setTransform(384,683.1,0.9,0.9,0,0,0,260,683.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(7).to({_off:false},0).wait(1).to({regX:259.9,scaleX:0.91,scaleY:0.91},0).wait(1).to({regX:260,scaleX:0.91,scaleY:0.91,y:683},0).wait(1).to({regX:259.9,scaleX:0.92,scaleY:0.92,y:683.1},0).wait(1).to({regX:260.1,scaleX:0.92,scaleY:0.92,x:384.1},0).wait(1).to({regX:260,regY:683,scaleX:0.93,scaleY:0.93,x:384,y:683},0).wait(1).to({regX:259.9,regY:683.1,scaleX:0.94,scaleY:0.94,y:683.1},0).wait(1).to({regX:260,scaleX:0.94,scaleY:0.94,y:683},0).wait(1).to({regX:259.9,scaleX:0.95,scaleY:0.95},0).wait(1).to({regX:260.1,scaleX:0.95,scaleY:0.95,x:384.1},0).wait(1).to({regX:260,scaleX:0.96,scaleY:0.96,x:384},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:683.1},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:384.1,y:683},0).wait(1).to({regX:260.1,scaleX:0.98,scaleY:0.98},0).wait(1).to({regX:260,scaleX:0.99,scaleY:0.99,y:683.1},0).wait(1).to({regY:683,scaleX:0.99,scaleY:0.99,x:384,y:683},0).wait(1).to({regY:683.1,scaleX:1,scaleY:1,y:683.1},0).wait(1).to({regY:683,y:683},0).wait(1).to({regX:260.1,scaleX:0.99,scaleY:0.99,x:384.1},0).wait(1).to({regX:260,scaleX:0.99,scaleY:0.99,x:384},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({regX:259.9,scaleX:0.98,scaleY:0.98},0).wait(1).to({regX:260,scaleX:0.97,scaleY:0.97},0).wait(1).to({regX:260.1,scaleX:0.97,scaleY:0.97,x:384.1},0).wait(1).to({regX:260,scaleX:0.96,scaleY:0.96,x:384},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({regX:259.9,scaleX:0.95,scaleY:0.95},0).wait(1).to({regX:260,scaleX:0.94,scaleY:0.94},0).wait(1).to({regX:259.9,scaleX:0.94,scaleY:0.94},0).wait(1).to({regX:260,scaleX:0.93,scaleY:0.93},0).wait(1).to({regX:260.1,scaleX:0.92,scaleY:0.92,x:384.1},0).wait(1).to({regX:259.9,scaleX:0.92,scaleY:0.92,x:384},0).wait(1).to({regX:260,scaleX:0.91,scaleY:0.91},0).wait(1).to({regX:259.9,scaleX:0.91,scaleY:0.91},0).wait(1).to({regX:260,scaleX:0.9,scaleY:0.9},0).to({_off:true},1).wait(7));

	// 矩形 1
	this.touch = new lib.矩形1_1();
	this.touch.setTransform(384,683,1,1,0,0,0,384,683);

	this.timeline.addTween(cjs.Tween.get(this.touch).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(382,680,770,1369);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;