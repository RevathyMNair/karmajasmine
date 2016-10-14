app.factory("fact",function(){
	var obj=[];
	obj.taskarr=[];
	obj.insert1=function(id,name){
		obj.taskarr.push({id:id,name:name});
	}
	obj.take1=function(){
		return obj.taskarr;
	}
	return obj;
});
