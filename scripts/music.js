/*
client id: d445ca7e8ea944e9a3db41fa115384c8:9a1b66e6baac4ff6bcdb2e0b4c6b1dbf

https://accounts.spotify.com/authorize?client_id=d445ca7e8ea944e9a3db41fa115384c8&response_type=code&scope=user-read-currently-playing&redirect_uri=https%3A%2F%2Fapi-university.com%2F


curl -H "Authorization: Basic ZDQ0NWNhN2U4ZWE5NDRlOWEzZGI0MWZhMTE1Mzg0Yzg6OWExYjY2ZTZiYWFjNGZmNmJjZGIyZTBiNGM2YjFkYmY=" -d grant_type=authorization_code -d code=AQBqCMgB6NIQQcTnIPTOsKQuanxB1PIi-a7ZPJGiRyW-sCMXs-cjsVPdq55Faa2zxnuxz6XCIlvdnqYVJCheDPzuNeGA5Tln3Qx00koXskaYVx-DBL9bDAce-ftXXTXwzZ7VPC-IxxrGvUlH51TqMBDrR5Jzb1ELwE0w7j7GrYnNMpQ0kQvRy28bPkF3kbhK0z-Ntjj56VBuZEsAX5WKxm1iQYrPIEw1-fHxBDtJ -d redirect_uri=https%3A%2F%2Fapi-university.com%2F https://accounts.spotify.com/api/token


*/


/*
access token: BQAfXGAVDyO3JA1hcGU2KcYCnwn4cAL98IadKTElz3xOUJ3xrkqKxC3kiv4lgXujXHdX4eN_ydCQSrtcP2ZrIXNk6Oe_QHOZXbaB0zIoEGm2J0p4guB6aALVWf7Z7Dz9zg9zrW7XTPkhot6fAOwvtwgn7J2kUUc0-ALEkgR13t4
refresh token: AQAcgblRIECkxv3QLeYJqtUsRtX3XYJmMakMvrPwBWEYmMQ_LrSuwa1He_nKQI4yRo8Z0nhtKSN_3v3hOFmLvY89cvWQPOGb93eBuh_jVlorwEPVkVy8dmVqYiKozivqdFw
get current track object
https://api.spotify.com/v1/me/player/currently-playing
auth: required

*/

var currentPlay_url = "https://api.spotify.com/v1/me/player/currently-playing";
var accessToken = "BQAfXGAVDyO3JA1hcGU2KcYCnwn4cAL98IadKTElz3xOUJ3xrkqKxC3kiv4lgXujXHdX4eN_ydCQSrtcP2ZrIXNk6Oe_QHOZXbaB0zIoEGm2J0p4guB6aALVWf7Z7Dz9zg9zrW7XTPkhot6fAOwvtwgn7J2kUUc0-ALEkgR13t4";
var user_id = "222g5rmsycgfeoh7bidgm6ary";
var currentSong;

var refreshToken_url = "https://accounts.spotify.com/api/token";
var token_type = "Bearer";
var refreshTimeStamp;
var refreshToken;
var client_id="ZDQ0NWNhN2U4ZWE5NDRlOWEzZGI0MWZhMTE1Mzg0Yzg6OWExYjY2ZTZiYWFjNGZmNmJjZGIyZTBiNGM2YjFkYmY=";




function getCurrentSong(){
	fetch(currentPlay_url, {
	"method": "GET",
	"headers": {
		"Authorization": token_type + " " + accessToken
		}		
	}).then(response => {
		console.log(response.json());
	})
	.catch(err => {
		console.log(err);
	});
}

function getRefreshToken()
{
	fetch(refreshToken_url, {
	"method": "POST",
	"headers": {
		"Authorization": "Basic " + client_id
	},
	"body": {
		"grant_type": "refresh_token",
		"refresh_token": refreshToken
	}
	}).then(response => {
		console.log(response.json());
	})
	.catch(err => {
		console.log(err);
	});
}