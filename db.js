var mongoose=require ('mongoose');
mongoose.connect("mongodb+srv://kanjirathingalaibel6190:61905002@cluster0.rupa4gx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("CONNECTED TO DB")}).catch((err)=>{console.log(err)})