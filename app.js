const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

// customize yargs

yargs.version("1.1.0");

// add,remove,read,list

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: "read",
  describe: "read the note",
  handler: function () {
    console.log("Reading the note...");
  },
});

yargs.command({
  command: "list",
  describe: "list the notes",
  handler: function () {
    console.log("Listing out all notes...");
  },
});
yargs.parse();
