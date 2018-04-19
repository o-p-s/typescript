//------------------------------------------Youtube Page-------------------------------------------
// Class :|-Video
class Video {
    private vId:string;
    private videoTitle:string;
    private views:number;
    private likes:number;
    private dislikes:number;
    private subscribers:number;
    private uDisplayName:string;
    private onPublished:string;
    private description:string;
    private category:string;
    private license:string;
    private upNext:string;

    constructor(){
        this.vId="UIDGenerator()=>"
        this.videoTitle="";
        this.views=0;
        this.likes=0;
        this.dislikes=0;
        this.subscribers=0;
        this.uDisplayName="USER-DEFAULT";
        this.onPublished="published Date";
        this.description="";
        this.category='Music';
        this.license='Standard YouTube License';
        this.upNext="https://youtube.com/"+"";
    }
    
    public addNewVideo=(newObj:any)=>{
        this.videoTitle=newObj.videoTitle;
        this.views=newObj.views;
        this.likes=newObj.likes;
        this.dislikes=newObj.dislikes;
        this.subscribers=newObj.subscribers;
        this.uDisplayName=newObj.uDisplayName;
        this.onPublished=newObj.onPublished;
        this.description=newObj.description;
        this.upNext=newObj.upNext;
    }
       
    protected getVideo=()=>{
        let _video:any={
            'videoTitle':this.videoTitle,
            'views':this.views,
            'likes':this.likes,
            'dislikes':this.dislikes,
            'subscribers':this.subscribers,
            'uDisplayName':this.uDisplayName,
            'onPublished':this.onPublished,
            'description':this.description,
            'category':this.category,
            'license':this.license,
            'upNext':this.upNext
        }
        return _video;
    }
    public checkvId(id:string){
       if(this.vId === id){
            return true;
       }
    }
    public changeProperty(property:string,data:any){
        if(typeof(data)==="number"){
            switch(property){
                case 'views': this.views=data;break;
                case 'likes':this.likes=data;break;
                case 'dislikes':this.dislikes=data;break;
                case 'subscribers':this.subscribers=data;break;
            }
        }
        else if(typeof(data)==="string"){
            switch(property){   
            case 'videoTitle' : this.videoTitle=data;break;      
            case 'uDisplayName':this.uDisplayName=data;break;
            case 'onPublished':this.onPublished=data;break;
            case 'description':this.description=data;break;
            case 'category':this.category=data;break;
            case 'license':this.license=data;break;
            case 'upNext':this.upNext=data;break;
            }
        }
        return this.getVideo();
    }
    public GetProperty(property: any){
        switch(property){
            case 'views': return this.views;
            case 'likes':return this.likes;
            case 'dislikes':return this.dislikes;
            case 'subscribers':return this.subscribers;
            case 'videoTitle' :return this.videoTitle;    
            case 'uDisplayName':return this.uDisplayName;
            case 'onPublished':return this.onPublished;
            case 'description':return this.description;
            case 'category':return this.category;
            case 'license':return this.license;
            case 'upNext':return this.upNext;
        }
    }
}

//Example Object
let newObj:any={
    "videoTitle":"Sample Video",
    'views':'1',
    'likes':'0',
    'dislikes':'0',
    'subscribers':'0',
    'uDisplayName':'ABC',
    'onPublished':'1 min ago',
    'description':'Watch out new Cool Kygo-IseeFire(club mix)',
    'upNext':'https://nextVideoLink'
};

//Initialization & Calling starts
let video1=new Video;
video1.addNewVideo(newObj);
console.log(`



Youtube Video Page`);
console.log(`
A sample class for a Video to store in our channel as well as to get from stroage of our channel`);
console.log(video1.changeProperty("likes",5));
console.log(video1.GetProperty("description"));


// Class :|-VideoComment
class VideoComment extends Video{
    private commentBy:string;
    private message:string;
    private timestamp:string;
    private commentLikes:number;
    private commentDislikes:number;
    constructor(){
        super();
        this.commentBy="";
        this.message="";
        this.timestamp="Current timestamp function()";
        this.commentLikes=0;
        this.commentDislikes=0;
    }
    
    public setComment=(newComment:any)=>{
        this.commentBy=newComment.commentBy;
        this.message=newComment.message;
        this.timestamp=newComment.timestamp;
        this.commentLikes=newComment.likes;
        this.commentDislikes=newComment.dislikes;
    }
    public getComment=()=>{
        let _videoComment:any={
            'commentBy':this.commentBy,
            'message':this.message,
            'timestamp':this.timestamp,
            'likes':this.commentLikes,
            'dislikes':this.commentDislikes
        }
        return _videoComment; 
    }
}
// Class :|-VideoCommentControl
class VideoCommentControl extends VideoComment{
    private videoComments:VideoComment[]=[];

    public setVideoComments=(vId:string,newComment:any)=>{
        if(super.checkvId(vId)){ 
        let comment=new VideoComment;
        comment.setComment(newComment);
        this.videoComments.push(comment);
        }
    }
    public getVideoComments =(vId:string)=>{
        if(super.checkvId(vId)){ 
            let jsonarrOfComments:any[]=[];         
            this.videoComments.forEach(com => {
                jsonarrOfComments.push(com.getComment());
            });
        return jsonarrOfComments;
        }
   }
}
//Example Object
let newComment1:any={
    'commentBy':"ABC",
    'message':`That's cool one!`,
    'timestamp':'0',
    'likes':'0',
    'dislikes':'0'
};
let newComment2:any={
    'commentBy':"xyz",
    'message':'When is the next coming??',
    'timestamp':'0',
    'likes':'0',
    'dislikes':'0'
};
// Intializations & Calling
let _video= new VideoCommentControl;
console.log(`
A class for Video Comment to be added as well as retreive all comments of a saved video`);
_video.setVideoComments("UIDGenerator()=>",newComment1);
_video.setVideoComments("UIDGenerator()=>",newComment2);
console.log(_video.getVideoComments("UIDGenerator()=>"));


// Class :|-VideoQualityURL
class VideoQualityURL extends Video{
    private qualityURL:string;
    constructor(){
        super();
        this.qualityURL='https://youtube.com/'+'UIDgenerator()';
    }
    public setqualityURL=(qualityURL:string)=>{
        this.qualityURL=qualityURL;
    }
    public getqualityURL=()=>{
        return this.qualityURL;
    }
}

// Class :|-VideoQualityControl
class VideoQualityURLControl extends VideoQualityURL{
    private AllQualities:VideoQualityURL[]=[];
    public setavailableQualities=(vId:string,storedQualities:any)=>{
        if(super.checkvId(vId)){
            for(let url in storedQualities){
                let quality=new VideoQualityURL;
                quality.setqualityURL(storedQualities[url]);
                this.AllQualities.push(quality);
            };
        }
    }
    public getavailableQualities=(vId:string)=>{
        if(super.checkvId(vId)){
            let Qualities:any[]=[];
            this.AllQualities.forEach(quality_url => {
               Qualities.push(quality_url.getqualityURL());
            });
            return Qualities;
        }
    }
}

// Intializations & Calling
let newObjForVideoURL=new VideoQualityURLControl;
//URLS of different video quality(144p,240p,360p,480p...) stored on storage.
let storedQualities= {
'480p':'https://url1',
'720p':'https://url2',
'1080p':'https://url3',
'2660p':'https://url4'
}; 
console.log(`
A class for getting different quality urls saved on db`);
newObjForVideoURL.setavailableQualities("UIDGenerator()=>",storedQualities);
console.log(newObjForVideoURL.getavailableQualities("UIDGenerator()=>"));

class RelatedVideos{
    //Method
}

//------------------------------------------FaceBook Page-------------------------------------------
console.log(`



Facebook Page`);

class Person{       // Class to store & retrieve User
    private fbId:any;
    private name:string;
    private email:string;
    constructor(){
        this.name="FBUser";
        this.email=""
    }
    public checkfbId(id:string){
        if(this.fbId===id){      
            return true;
        }
    }
    
    public get getEmail() : string {
        return this.email;
    }
    
    public createProfile(profile:any){
        this.fbId=profile.id;
        this.name=profile.name;
        this.email=profile.email;
    }
    public retrieveProfile(id:string){
        let _profile:any={
            'id':this.fbId,
            'name':this.name,
            'email':this.email
        }
        return _profile;
    }

}
let p1:any={'id':'Person1','name':'ABC XYZ','email':'abc@gmail.com'};
let fbuser=new Person;
fbuser.createProfile(p1);
console.log(fbuser.retrieveProfile(p1.id));



class WorkAndEducation {
    private workplace:string;          // Members workplace & education can be further converted into classes
    private education:string;
    constructor(){
        this.workplace="";
        this.education="";
    }
    public setWorkplaceAndEducation(id:string,objWorkAndEducation:any){
        if(fbuser.checkfbId(id)){
            this.workplace=objWorkAndEducation.workplace;
            this.education=objWorkAndEducation.education;
        }
    }
    public getWorkplaceAndEducation(id:string){
        if(fbuser.checkfbId(id)){
            let _display:any={
                'workplace':this.workplace,
                'education':this.education
            }
            return _display;
        }
    }
}
let objWorkAndEducation:any={
    'workplace':'Name of the Workplace..',
    'education':'Name of Institute..  and other fields'
};   
let workAndEducation = new WorkAndEducation;
workAndEducation.setWorkplaceAndEducation(p1.id,objWorkAndEducation);
console.log(workAndEducation.getWorkplaceAndEducation(p1.id));



class LivedPlaces {
 private places:string[]=[];        //Member 'places' could be array of a 'place' object. 

 public setPlaces(id:string,livedplaces:any){
    if(fbuser.checkfbId(id)){
        for (let place in livedplaces.lived) {
            if (livedplaces.lived.hasOwnProperty(place)) {
                this.places.push(livedplaces.lived[place]);               
            }
        }
    }
 }
 public getPlaces(id:string){
    if(fbuser.checkfbId(id)){
        let _placesLived:any[]=[];
        this.places.forEach(place => {
            _placesLived .push(place);       
        });
        return _placesLived;
    }  
 }
 
}
let jsonOBJ:any={'lived':['place1','place2']}
let livedPlaces = new LivedPlaces;
livedPlaces.setPlaces(p1.id,jsonOBJ);
console.log(livedPlaces.getPlaces(p1.id));



class ContactAndBasicinfo{
    private email:string;
    private address:string;
    private publicKey:string;
    private website:any;
    private socialLink:any;
    private dob:any;
    private year:number;
    private gender:string;
    private interestedIn:string;
    private languages:string;
    private religiousViews:string;
    private politicalViews:string;

    constructor(){
        this.email=fbuser.getEmail;
        this.address="";
        this.publicKey="";
        this.year=0;
        this.gender="";
        this.interestedIn="";
        this.languages="";
        this.religiousViews="";
        this.politicalViews="";
    }
    public setContactAndBasicinfo(id:string,jsonObj:any){
        if(fbuser.checkfbId(id)){
            this.address=jsonObj.address;
            this.year=jsonObj.year;
            this.gender=jsonObj.gender;
            this.languages=jsonObj.languages;
        }
    }
    public getContactAndBasicinfo(id:string){
        if(fbuser.checkfbId(id)){
            let _data={
                'email':this.email,
                'address':this.address,
                'publicKey':this.publicKey,
                'year':this.year,
                'gender':this.gender,
                'interestedIn':this.interestedIn,
                'languages':this.languages,
                'religiousViews':this.religiousViews,
                'politicalViews':this.politicalViews
            }
            return _data;
        }
    }
}
let jsonObj={
    'address':'21 Street',
    'dob':'1 May 19xx',
    'gender':'Male',
    'languages':'English, Hindi',
}
let contactAndBasicinfo=new ContactAndBasicinfo;
contactAndBasicinfo.setContactAndBasicinfo(p1.id,jsonObj);
console.log(contactAndBasicinfo.getContactAndBasicinfo(p1.id));



class FamilyAndRelationships{
private relationship:string;
private familyMembers:string;       
    constructor(){
        this.relationship="single";
        this.familyMembers="";  
    }
    public setFamilyAndRelationships(id:string,object:any){
        if(fbuser.checkfbId(id)){
            this.relationship=object.relationship;
            this.familyMembers=object.familyMembers;
        }
    }
    public getFamilyAndRelationships(id:string){
        if(fbuser.checkfbId(id)){
            let _FandR={
                'relationship':this.relationship,
                'familyMembers':this.familyMembers
            }
            return _FandR;
        }
    }
}
let object ={
    'relationship':'In a relationship',
    'familyMembers':'ABC XYZ'
}
let familyAndRelationships = new FamilyAndRelationships;
familyAndRelationships.setFamilyAndRelationships(p1.id,object);
familyAndRelationships.getFamilyAndRelationships(p1.id);



class AboutDetails{
private aboutYou:string;
private otherNames:string;
private favouriteQuotes:string;
private bloodDonations:any;
    constructor(){
        this.aboutYou="";
        this.otherNames="";
        this.favouriteQuotes="";
        this.bloodDonations=""
    }
    public setAboutDetails(id:string,jsonobj:any){
        if(fbuser.checkfbId(id)){
            this.aboutYou=jsonobj.aboutYou;
            this.otherNames=jsonobj.otherNames;
            this.favouriteQuotes=jsonobj.favouriteQuotes;
            this.bloodDonations=jsonobj.bloodDonations;
        }
    }
    public getAboutDetails(id:string){
        if(fbuser.checkfbId(id)){
            let _details={
                'aboutYou':this.aboutYou,
                'otherNames':this.otherNames,
                'favouriteQuotes':this.favouriteQuotes,
                'bloodDonations':this.bloodDonations
            }
            return _details;
        }
    }
}
let jsonobj={
    'aboutYou':'Faithful',
    'otherNames':'Scooby',
    'favouriteQuotes':'.......',
    'bloodDonations':'Abc Place on so and so date'
}
let aboutDetails= new AboutDetails;
aboutDetails.setAboutDetails(p1.id,jsonobj);
console.log(aboutDetails.getAboutDetails(p1.id));



class LifeEvents{
    private lifeEvents:string[]=[];
    public setLifeEvents(id:string,lifeeventsobj:any){
        if(fbuser.checkfbId(id)){
            for (let lifeevent in lifeeventsobj.event) {
                if (lifeeventsobj.event.hasOwnProperty(lifeevent)) {
                    this.lifeEvents.push(lifeeventsobj.event[lifeevent]);               
                }
            }
        }
     }
     public getLifeEvents(id:string){
        if(fbuser.checkfbId(id)){
            let _lifeevents:any[]=[];
            this.lifeEvents.forEach(_event => {
                _lifeevents.push(_event);       
            });
            return _lifeevents;
        }  
     }
     
}
    let lifeeventsobj:any={'event':['event1','event2']}
    let _lifeEvents = new LifeEvents;
    _lifeEvents.setLifeEvents(p1.id,lifeeventsobj);
    console.log(_lifeEvents.getLifeEvents(p1.id));    

