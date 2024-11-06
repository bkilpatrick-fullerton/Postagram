-------------------
-------------------
### POSTMAN CALLS
-------------------
-------------------

*********************
*********************
## /posts/ CALLS
*********************
*********************

##################
### posts/myfeed
##################

GET:
http://localhost:3001/posts/myfeed

PAYLOAD:
{
    "username": "@BrandonK"
}

RESPONSE:
{
    "posts": [
        {
            "_id": "67280e986c3361164f5a0d59",
            "postbody": "This is @DoctorJ's 2nd post",
            "username": "@DoctorJ",
            "hashtags": [
                "coffee",
                "pancakes"
            ],
            "created": "2024-11-04T00:00:24.497Z",
            "__v": 0
        },
        {
            "_id": "67280e986c3361164f5a0d5f",
            "postbody": "This is a @JrSeniors 1st post",
            "username": "@JrSenior",
            "hashtags": [
                "eggs",
                "pancakes"
            ],
            "created": "2024-11-04T00:00:24.762Z",
            "__v": 0
        },
        {
            "_id": "67280e986c3361164f5a0d61",
            "postbody": "This is a @JrSeniors 2nd post",
            "username": "@JrSenior",
            "hashtags": [
                "bacon",
                "toast"
            ],
            "created": "2024-11-04T00:00:24.852Z",
            "__v": 0
        }
    ]
}

###########################
### posts/hashtag/:hashtag
###########################

GET:
http://localhost:3001/posts/hashtag/eggs

PAYLOAD:
none

RESPONSE:
{
    "posts": [
        {
            "_id": "67280e986c3361164f5a0d53",
            "postbody": "This is @BrandonK's 1st post",
            "username": "@BrandonK",
            "hashtags": [
                "eggs",
                "bacon"
            ],
            "created": "2024-11-04T00:00:24.227Z",
            "__v": 0
        },
        {
            "_id": "67280e986c3361164f5a0d55",
            "postbody": "This is a @BrandonK's 2nd post",
            "username": "@BrandonK",
            "hashtags": [
                "eggs",
                "toast"
            ],
            "created": "2024-11-04T00:00:24.320Z",
            "__v": 0
        },
        {
            "_id": "67280e986c3361164f5a0d5b",
            "postbody": "This is @MrMister's 1st post",
            "username": "@MrMister",
            "hashtags": [
                "eggs",
                "coffee"
            ],
            "created": "2024-11-04T00:00:24.582Z",
            "__v": 0
        },
        {
            "_id": "67280e986c3361164f5a0d5f",
            "postbody": "This is a @JrSeniors 1st post",
            "username": "@JrSenior",
            "hashtags": [
                "eggs",
                "pancakes"
            ],
            "created": "2024-11-04T00:00:24.762Z",
            "__v": 0
        }
    ]
}


#############################
### posts/username/:username
#############################

GET:
http://localhost:3001/posts/user/@BrandonK

PAYLOAD:
none

RESPONSE:
{
    "posts": [
        {
            "_id": "672a2f691281b5ae1cf270fd",
            "postbody": "This is @BrandonK's 1st post",
            "username": "@BrandonK",
            "hashtags": [
                "eggs",
                "bacon"
            ],
            "created": "2024-11-05T14:44:57.401Z",
            "__v": 0
        },
        {
            "_id": "672a2f691281b5ae1cf270ff",
            "postbody": "This is a @BrandonK's 2nd post",
            "username": "@BrandonK",
            "hashtags": [
                "eggs",
                "toast"
            ],
            "created": "2024-11-05T14:44:57.493Z",
            "__v": 0
        }
    ]
}

###################
### posts/add-post
###################

PUT:
http://localhost:3001/posts/add-post

PAYLOAD:
       {
            "postbody": "This is @BrandonK's 3rd post",
            "username": "@BrandonK",
            "hashtags": ["muffins", "coffee"]
        }

RESPONSE:
{
    "posts": {
        "postbody": "This is @BrandonK's 3rd post",
        "username": "@BrandonK",
        "hashtags": [
            "muffins",
            "coffee"
        ],
        "_id": "672a2b3dd7d5c4235c6a97f1",
        "created": "2024-11-05T14:27:09.155Z",
        "__v": 0
    }
}

######################
### posts/delete-post
######################

DELETE:
http://localhost:3001/posts/delete-post

PAYLOAD:
{
    "_id": "67280e986c3361164f5a0d53"
}

RESPONSE:
{
    "posts": [
        {
            "_id": "67280e986c3361164f5a0d53",
            "postbody": "This is @BrandonK's 1st post",
            "username": "@BrandonK",
            "hashtags": [
                "eggs",
                "bacon"
            ],
            "created": "2024-11-04T00:00:24.227Z",
            "__v": 0
        }
    ]
}


*********************
*********************
## /user/ CALLS
*********************
*********************

##################
### user/follow
##################

POST:
http://localhost:3001/user/follow

PAYLOAD:
{
    "username":"@BrandonK",
    "usernameFollowed":"@DrDoom"
}
RESPONSE:
{
    "status": "user followed"
}

##################
### user/unfollow
##################s

POST:
http://localhost:3001/user/unfollow

PAYLOAD:
{
    "username":"@BrandonK",
    "usernameFollowed":"@DrDoom"
}
RESPONSE:
{
    "status": "user unfollowed"
}

##################
### user/signup
##################

PUT:
http://localhost:3001/user/signup

PAYLOAD:
{
         "username": "@MrsDoom",
         "email": "dd@test.com",
         "password": "ddpass",   
}
RESPONSE:
{
    "status": "user created"
}

##################
### user/login
##################
POST:
http://localhost:3001/user/login

PAYLOAD:
{
    "username":"@BrandonK",
    "password":"bkpass"
}
RESPONSE:
{
    "status": "accepted"
}