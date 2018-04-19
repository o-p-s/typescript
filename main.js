var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//------------------------------------------Youtube Page-------------------------------------------
// Class :|-Video
var Video = /** @class */ (function () {
    function Video() {
        var _this = this;
        this.addNewVideo = function (newObj) {
            _this.videoTitle = newObj.videoTitle;
            _this.views = newObj.views;
            _this.likes = newObj.likes;
            _this.dislikes = newObj.dislikes;
            _this.subscribers = newObj.subscribers;
            _this.uDisplayName = newObj.uDisplayName;
            _this.onPublished = newObj.onPublished;
            _this.description = newObj.description;
            _this.upNext = newObj.upNext;
        };
        this.getVideo = function () {
            var _video = {
                'videoTitle': _this.videoTitle,
                'views': _this.views,
                'likes': _this.likes,
                'dislikes': _this.dislikes,
                'subscribers': _this.subscribers,
                'uDisplayName': _this.uDisplayName,
                'onPublished': _this.onPublished,
                'description': _this.description,
                'category': _this.category,
                'license': _this.license,
                'upNext': _this.upNext
            };
            return _video;
        };
        this.vId = "UIDGenerator()=>";
        this.videoTitle = "";
        this.views = 0;
        this.likes = 0;
        this.dislikes = 0;
        this.subscribers = 0;
        this.uDisplayName = "USER-DEFAULT";
        this.onPublished = "published Date";
        this.description = "";
        this.category = 'Music';
        this.license = 'Standard YouTube License';
        this.upNext = "https://youtube.com/" + "";
    }
    Video.prototype.checkvId = function (id) {
        if (this.vId === id) {
            return true;
        }
    };
    Video.prototype.changeProperty = function (property, data) {
        if (typeof (data) === "number") {
            switch (property) {
                case 'views':
                    this.views = data;
                    break;
                case 'likes':
                    this.likes = data;
                    break;
                case 'dislikes':
                    this.dislikes = data;
                    break;
                case 'subscribers':
                    this.subscribers = data;
                    break;
            }
        }
        else if (typeof (data) === "string") {
            switch (property) {
                case 'videoTitle':
                    this.videoTitle = data;
                    break;
                case 'uDisplayName':
                    this.uDisplayName = data;
                    break;
                case 'onPublished':
                    this.onPublished = data;
                    break;
                case 'description':
                    this.description = data;
                    break;
                case 'category':
                    this.category = data;
                    break;
                case 'license':
                    this.license = data;
                    break;
                case 'upNext':
                    this.upNext = data;
                    break;
            }
        }
        return this.getVideo();
    };
    Video.prototype.GetProperty = function (property) {
        switch (property) {
            case 'views': return this.views;
            case 'likes': return this.likes;
            case 'dislikes': return this.dislikes;
            case 'subscribers': return this.subscribers;
            case 'videoTitle': return this.videoTitle;
            case 'uDisplayName': return this.uDisplayName;
            case 'onPublished': return this.onPublished;
            case 'description': return this.description;
            case 'category': return this.category;
            case 'license': return this.license;
            case 'upNext': return this.upNext;
        }
    };
    return Video;
}());
//Example Object
var newObj = {
    "videoTitle": "Sample Video",
    'views': '1',
    'likes': '0',
    'dislikes': '0',
    'subscribers': '0',
    'uDisplayName': 'ABC',
    'onPublished': '1 min ago',
    'description': 'Watch out new Cool Kygo-IseeFire(club mix)',
    'upNext': 'https://nextVideoLink'
};
//Initialization & Calling starts
var video1 = new Video;
video1.addNewVideo(newObj);
console.log("\n\n\n\nYoutube Video Page");
console.log("\nA sample class for a Video to store in our channel as well as to get from stroage of our channel");
console.log(video1.changeProperty("likes", 5));
console.log(video1.GetProperty("description"));
// Class :|-VideoComment
var VideoComment = /** @class */ (function (_super) {
    __extends(VideoComment, _super);
    function VideoComment() {
        var _this = _super.call(this) || this;
        _this.setComment = function (newComment) {
            _this.commentBy = newComment.commentBy;
            _this.message = newComment.message;
            _this.timestamp = newComment.timestamp;
            _this.commentLikes = newComment.likes;
            _this.commentDislikes = newComment.dislikes;
        };
        _this.getComment = function () {
            var _videoComment = {
                'commentBy': _this.commentBy,
                'message': _this.message,
                'timestamp': _this.timestamp,
                'likes': _this.commentLikes,
                'dislikes': _this.commentDislikes
            };
            return _videoComment;
        };
        _this.commentBy = "";
        _this.message = "";
        _this.timestamp = "Current timestamp function()";
        _this.commentLikes = 0;
        _this.commentDislikes = 0;
        return _this;
    }
    return VideoComment;
}(Video));
// Class :|-VideoCommentControl
var VideoCommentControl = /** @class */ (function (_super) {
    __extends(VideoCommentControl, _super);
    function VideoCommentControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.videoComments = [];
        _this.setVideoComments = function (vId, newComment) {
            if (_super.prototype.checkvId.call(_this, vId)) {
                var comment = new VideoComment;
                comment.setComment(newComment);
                _this.videoComments.push(comment);
            }
        };
        _this.getVideoComments = function (vId) {
            if (_super.prototype.checkvId.call(_this, vId)) {
                var jsonarrOfComments_1 = [];
                _this.videoComments.forEach(function (com) {
                    jsonarrOfComments_1.push(com.getComment());
                });
                return jsonarrOfComments_1;
            }
        };
        return _this;
    }
    return VideoCommentControl;
}(VideoComment));
//Example Object
var newComment1 = {
    'commentBy': "ABC",
    'message': "That's cool one!",
    'timestamp': '0',
    'likes': '0',
    'dislikes': '0'
};
var newComment2 = {
    'commentBy': "xyz",
    'message': 'When is the next coming??',
    'timestamp': '0',
    'likes': '0',
    'dislikes': '0'
};
// Intializations & Calling
var _video = new VideoCommentControl;
console.log("\nA class for Video Comment to be added as well as retreive all comments of a saved video");
_video.setVideoComments("UIDGenerator()=>", newComment1);
_video.setVideoComments("UIDGenerator()=>", newComment2);
console.log(_video.getVideoComments("UIDGenerator()=>"));
// Class :|-VideoQualityURL
var VideoQualityURL = /** @class */ (function (_super) {
    __extends(VideoQualityURL, _super);
    function VideoQualityURL() {
        var _this = _super.call(this) || this;
        _this.setqualityURL = function (qualityURL) {
            _this.qualityURL = qualityURL;
        };
        _this.getqualityURL = function () {
            return _this.qualityURL;
        };
        _this.qualityURL = 'https://youtube.com/' + 'UIDgenerator()';
        return _this;
    }
    return VideoQualityURL;
}(Video));
// Class :|-VideoQualityControl
var VideoQualityURLControl = /** @class */ (function (_super) {
    __extends(VideoQualityURLControl, _super);
    function VideoQualityURLControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AllQualities = [];
        _this.setavailableQualities = function (vId, storedQualities) {
            if (_super.prototype.checkvId.call(_this, vId)) {
                for (var url in storedQualities) {
                    var quality = new VideoQualityURL;
                    quality.setqualityURL(storedQualities[url]);
                    _this.AllQualities.push(quality);
                }
                ;
            }
        };
        _this.getavailableQualities = function (vId) {
            if (_super.prototype.checkvId.call(_this, vId)) {
                var Qualities_1 = [];
                _this.AllQualities.forEach(function (quality_url) {
                    Qualities_1.push(quality_url.getqualityURL());
                });
                return Qualities_1;
            }
        };
        return _this;
    }
    return VideoQualityURLControl;
}(VideoQualityURL));
// Intializations & Calling
var newObjForVideoURL = new VideoQualityURLControl;
//URLS of different video quality(144p,240p,360p,480p...) stored on storage.
var storedQualities = {
    '480p': 'https://url1',
    '720p': 'https://url2',
    '1080p': 'https://url3',
    '2660p': 'https://url4'
};
console.log("\nA class for getting different quality urls saved on db");
newObjForVideoURL.setavailableQualities("UIDGenerator()=>", storedQualities);
console.log(newObjForVideoURL.getavailableQualities("UIDGenerator()=>"));
var RelatedVideos = /** @class */ (function () {
    function RelatedVideos() {
    }
    return RelatedVideos;
}());
//------------------------------------------FaceBook Page-------------------------------------------
console.log("\n\n\n\nFacebook Page");
var Person = /** @class */ (function () {
    function Person() {
        this.name = "FBUser";
        this.email = "";
    }
    Person.prototype.checkfbId = function (id) {
        if (this.fbId === id) {
            return true;
        }
    };
    Object.defineProperty(Person.prototype, "getEmail", {
        get: function () {
            return this.email;
        },
        enumerable: true,
        configurable: true
    });
    Person.prototype.createProfile = function (profile) {
        this.fbId = profile.id;
        this.name = profile.name;
        this.email = profile.email;
    };
    Person.prototype.retrieveProfile = function (id) {
        var _profile = {
            'id': this.fbId,
            'name': this.name,
            'email': this.email
        };
        return _profile;
    };
    return Person;
}());
var p1 = { 'id': 'Person1', 'name': 'ABC XYZ', 'email': 'abc@gmail.com' };
var fbuser = new Person;
fbuser.createProfile(p1);
console.log(fbuser.retrieveProfile(p1.id));
var WorkAndEducation = /** @class */ (function () {
    function WorkAndEducation() {
        this.workplace = "";
        this.education = "";
    }
    WorkAndEducation.prototype.setWorkplaceAndEducation = function (id, objWorkAndEducation) {
        if (fbuser.checkfbId(id)) {
            this.workplace = objWorkAndEducation.workplace;
            this.education = objWorkAndEducation.education;
        }
    };
    WorkAndEducation.prototype.getWorkplaceAndEducation = function (id) {
        if (fbuser.checkfbId(id)) {
            var _display = {
                'workplace': this.workplace,
                'education': this.education
            };
            return _display;
        }
    };
    return WorkAndEducation;
}());
var objWorkAndEducation = {
    'workplace': 'Name of the Workplace..',
    'education': 'Name of Institute..  and other fields'
};
var workAndEducation = new WorkAndEducation;
workAndEducation.setWorkplaceAndEducation(p1.id, objWorkAndEducation);
console.log(workAndEducation.getWorkplaceAndEducation(p1.id));
var LivedPlaces = /** @class */ (function () {
    function LivedPlaces() {
        this.places = []; //Member 'places' could be array of a 'place' object. 
    }
    LivedPlaces.prototype.setPlaces = function (id, livedplaces) {
        if (fbuser.checkfbId(id)) {
            for (var place in livedplaces.lived) {
                if (livedplaces.lived.hasOwnProperty(place)) {
                    this.places.push(livedplaces.lived[place]);
                }
            }
        }
    };
    LivedPlaces.prototype.getPlaces = function (id) {
        if (fbuser.checkfbId(id)) {
            var _placesLived_1 = [];
            this.places.forEach(function (place) {
                _placesLived_1.push(place);
            });
            return _placesLived_1;
        }
    };
    return LivedPlaces;
}());
var jsonOBJ = { 'lived': ['place1', 'place2'] };
var livedPlaces = new LivedPlaces;
livedPlaces.setPlaces(p1.id, jsonOBJ);
console.log(livedPlaces.getPlaces(p1.id));
var ContactAndBasicinfo = /** @class */ (function () {
    function ContactAndBasicinfo() {
        this.email = fbuser.getEmail;
        this.address = "";
        this.publicKey = "";
        this.year = 0;
        this.gender = "";
        this.interestedIn = "";
        this.languages = "";
        this.religiousViews = "";
        this.politicalViews = "";
    }
    ContactAndBasicinfo.prototype.setContactAndBasicinfo = function (id, jsonObj) {
        if (fbuser.checkfbId(id)) {
            this.address = jsonObj.address;
            this.year = jsonObj.year;
            this.gender = jsonObj.gender;
            this.languages = jsonObj.languages;
        }
    };
    ContactAndBasicinfo.prototype.getContactAndBasicinfo = function (id) {
        if (fbuser.checkfbId(id)) {
            var _data = {
                'email': this.email,
                'address': this.address,
                'publicKey': this.publicKey,
                'year': this.year,
                'gender': this.gender,
                'interestedIn': this.interestedIn,
                'languages': this.languages,
                'religiousViews': this.religiousViews,
                'politicalViews': this.politicalViews
            };
            return _data;
        }
    };
    return ContactAndBasicinfo;
}());
var jsonObj = {
    'address': '21 Street',
    'dob': '1 May 19xx',
    'gender': 'Male',
    'languages': 'English, Hindi',
};
var contactAndBasicinfo = new ContactAndBasicinfo;
contactAndBasicinfo.setContactAndBasicinfo(p1.id, jsonObj);
console.log(contactAndBasicinfo.getContactAndBasicinfo(p1.id));
var FamilyAndRelationships = /** @class */ (function () {
    function FamilyAndRelationships() {
        this.relationship = "single";
        this.familyMembers = "";
    }
    FamilyAndRelationships.prototype.setFamilyAndRelationships = function (id, object) {
        if (fbuser.checkfbId(id)) {
            this.relationship = object.relationship;
            this.familyMembers = object.familyMembers;
        }
    };
    FamilyAndRelationships.prototype.getFamilyAndRelationships = function (id) {
        if (fbuser.checkfbId(id)) {
            var _FandR = {
                'relationship': this.relationship,
                'familyMembers': this.familyMembers
            };
            return _FandR;
        }
    };
    return FamilyAndRelationships;
}());
var object = {
    'relationship': 'In a relationship',
    'familyMembers': 'ABC XYZ'
};
var familyAndRelationships = new FamilyAndRelationships;
familyAndRelationships.setFamilyAndRelationships(p1.id, object);
familyAndRelationships.getFamilyAndRelationships(p1.id);
var AboutDetails = /** @class */ (function () {
    function AboutDetails() {
        this.aboutYou = "";
        this.otherNames = "";
        this.favouriteQuotes = "";
        this.bloodDonations = "";
    }
    AboutDetails.prototype.setAboutDetails = function (id, jsonobj) {
        if (fbuser.checkfbId(id)) {
            this.aboutYou = jsonobj.aboutYou;
            this.otherNames = jsonobj.otherNames;
            this.favouriteQuotes = jsonobj.favouriteQuotes;
            this.bloodDonations = jsonobj.bloodDonations;
        }
    };
    AboutDetails.prototype.getAboutDetails = function (id) {
        if (fbuser.checkfbId(id)) {
            var _details = {
                'aboutYou': this.aboutYou,
                'otherNames': this.otherNames,
                'favouriteQuotes': this.favouriteQuotes,
                'bloodDonations': this.bloodDonations
            };
            return _details;
        }
    };
    return AboutDetails;
}());
var jsonobj = {
    'aboutYou': 'Faithful',
    'otherNames': 'Scooby',
    'favouriteQuotes': '.......',
    'bloodDonations': 'Abc Place on so and so date'
};
var aboutDetails = new AboutDetails;
aboutDetails.setAboutDetails(p1.id, jsonobj);
console.log(aboutDetails.getAboutDetails(p1.id));
var LifeEvents = /** @class */ (function () {
    function LifeEvents() {
        this.lifeEvents = [];
    }
    LifeEvents.prototype.setLifeEvents = function (id, lifeeventsobj) {
        if (fbuser.checkfbId(id)) {
            for (var lifeevent in lifeeventsobj.event) {
                if (lifeeventsobj.event.hasOwnProperty(lifeevent)) {
                    this.lifeEvents.push(lifeeventsobj.event[lifeevent]);
                }
            }
        }
    };
    LifeEvents.prototype.getLifeEvents = function (id) {
        if (fbuser.checkfbId(id)) {
            var _lifeevents_1 = [];
            this.lifeEvents.forEach(function (_event) {
                _lifeevents_1.push(_event);
            });
            return _lifeevents_1;
        }
    };
    return LifeEvents;
}());
var lifeeventsobj = { 'event': ['event1', 'event2'] };
var _lifeEvents = new LifeEvents;
_lifeEvents.setLifeEvents(p1.id, lifeeventsobj);
console.log(_lifeEvents.getLifeEvents(p1.id));
