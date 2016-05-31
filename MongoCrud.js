var _getallJokes = function(callback){
    var db = connect.get();
    db.collection("jokes").find({}).toArray(function(err,data){     // This is our seach thing
        if(err){
            callback(err);
        }else{
            callback(null,data);
        }
    });
}

var _getOneJoke = function(id,callback){
    var db = connect.get();
    db.collection("jokes").find({"_id" : ObjectId(id)}).toArray (function(err,data){     // This is our seach thing
        if(err){
            callback(err);
        }else{
            callback(null,data);
        }
    });
}


var _updateOneJoke = function(id, toUpdate,callback){
    var db = connect.get();
    db.collection("jokes").updateOne({"_id": id},toUpdate,function(err,data){
        if(err){
            callback(err);
        }
        else{
            callback(null,'The Joke was succesfully edited'+data);
        }
    });
}

var _createOneJoke = function(theJoke,callback){
    var db = connect.get();
    db.collection("jokes").insertOne(theJoke,function(err,data){
        if(err){
            callback(err);
        }
        else{
            callback(null,'This Joke was succesfully added'+data);
        }
    });
}

var _deleteOneJoke = function(id,callback){
    var db = connect.get();
    db.collection("jokes").deleteOne({"_id": ObjectId(id)}, function(err,data){
        if(err){
            callback(err);
        }
        else{
            callback(null,'Joke was succesfully deleted'+data);
        }
    });
}