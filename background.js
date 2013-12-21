chrome.browserAction.setBadgeText({text: "note"});

//an array of notes
var notes = [];

function SingleNote(content, address) {
	this.content = content;
	this.address = address;
};

//adds a new note to the array
addNotes = function(newNote){
	notes.push(newNote);

	//prints it out to the list
	$('#list').append($('<li><a href="' + newNote.address + '" target="_blank"">' + 
		newNote.content + '</a></li>'));

	var string = makeString(notes);

	chrome.storage.sync.set({'some': string});

};


function makeString(temp) {

	var string = "";

	for (var i = 0; i < temp.length; i++) {
		string = string + String(temp[i].content) + "|" + String(temp[i].address) + "~";
	};

	return string;
};

clearData = function() {

	$('#list').remove();
	$('body').prepend('<ul id="list"></ul>');

	chrome.storage.sync.clear(function() {
		alert("Storage Cleared");
	});
};

getData = function() {
	chrome.storage.sync.get('some', function(obj) {
		var stringnote1 = obj["some"];
		reverseString(stringnote1);
	});
};

reverseString = function(string) {
	var split = string.split("~");
	for (var i = 0; i < (split.length - 1); i++) {
		var temp = String(split[i]);
		var eachelem = temp.split("|");
		var newnote = new SingleNote(eachelem[0],eachelem[1]);
		addNotes(newnote);
	}
}