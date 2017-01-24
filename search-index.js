var searchIndex = {};
searchIndex["difference"] = {"doc":"Functions to find the difference between two texts (strings).\nUsage\n----------","items":[[3,"Changeset","difference","The information about a full changeset",null,null],[12,"diffs","","An ordered vector of `Difference` objects, coresponding\nto the differences within the text",0,null],[12,"split","","The split used when creating the `Changeset`\nCommon splits are `&quot;&quot;` for char-level, `&quot; &quot;` for word-level and `&quot;\\n&quot;` for line-level.",0,null],[12,"distance","","The edit distance of the `Changeset`",0,null],[4,"Difference","","Defines the contents of a changeset\nChangesets will be delivered in order of appearance in the original string\nSequences of the same kind will be grouped into one Difference",null,null],[13,"Same","","Sequences that are the same",1,null],[13,"Add","","Sequences that are an addition (don&#39;t appear in the first string)",1,null],[13,"Rem","","Sequences that are a removal (don&#39;t appear in the second string)",1,null],[5,"diff","","Calculates the edit distance and the changeset for two given strings.\nThe first string is assumed to be the &quot;original&quot;, the second to be an\nedited version of the first. The third parameter specifies how to split\nthe input strings, leading to a more or less exact comparison.",null,null],[5,"print_diff","","Prints a colorful visual representation of the diff.\nThis is just a convenience function for those who want quick results.",null,{"inputs":[{"name":"str"},{"name":"str"},{"name":"str"}],"output":null}],[11,"fmt","","",0,null],[11,"eq","","",1,null],[11,"ne","","",1,null],[11,"fmt","","",1,null],[11,"new","","Calculates the edit distance and the changeset for two given strings.\nThe first string is assumed to be the &quot;original&quot;, the second to be an\nedited version of the first. The third parameter specifies how to split\nthe input strings, leading to a more or less exact comparison.",0,{"inputs":[{"name":"str"},{"name":"str"},{"name":"str"}],"output":{"name":"changeset"}}],[14,"assert_diff","","Assert the difference between two strings. Works like diff, but takes\na fourth parameter that is the expected edit distance (e.g. 0 if you want to\ntest for equality).",null,null]],"paths":[[3,"Changeset"],[4,"Difference"]]};
searchIndex["getopts"] = {"doc":"Simple getopt alternative.","items":[[3,"Options","getopts","A description of the options that a program can handle.",null,null],[3,"Matches","","The result of checking command line arguments. Contains a vector\nof matches and a vector of free strings.",null,null],[12,"free","","Free string fragments",0,null],[4,"ParsingStyle","","What parsing style to use when parsing arguments.",null,null],[13,"FloatingFrees","","Flags and &quot;free&quot; arguments can be freely inter-mixed.",1,null],[13,"StopAtFirstFree","","As soon as a &quot;free&quot; argument (i.e. non-flag) is encountered, stop\nconsidering any remaining arguments as flags.",1,null],[4,"HasArg","","Describes whether an option has an argument.",null,null],[13,"Yes","","The option requires an argument.",2,null],[13,"No","","The option takes no argument.",2,null],[13,"Maybe","","The option argument is optional.",2,null],[4,"Occur","","Describes how often an option may occur.",null,null],[13,"Req","","The option occurs once.",3,null],[13,"Optional","","The option occurs at most once.",3,null],[13,"Multi","","The option occurs zero or more times.",3,null],[4,"Fail","","The type returned when the command line does not conform to the\nexpected format. Use the `Debug` implementation to output detailed\ninformation.",null,null],[13,"ArgumentMissing","","The option requires an argument but none was passed.",4,null],[13,"UnrecognizedOption","","The passed option is not declared among the possible options.",4,null],[13,"OptionMissing","","A required option is not present.",4,null],[13,"OptionDuplicated","","A single occurrence option is being used multiple times.",4,null],[13,"UnexpectedArgument","","There&#39;s an argument being passed to a non-argument option.",4,null],[4,"FailType","","The type of failure that occurred.",null,null],[13,"ArgumentMissing_","","",5,null],[13,"UnrecognizedOption_","","",5,null],[13,"OptionMissing_","","",5,null],[13,"OptionDuplicated_","","",5,null],[13,"UnexpectedArgument_","","",5,null],[6,"Result","","The result of parsing a command line with a set of options.",null,null],[11,"new","","Create a blank set of options.",6,{"inputs":[],"output":{"name":"options"}}],[11,"parsing_style","","Set the parsing style.",6,null],[11,"opt","","Create a generic option group, stating all parameters explicitly.",6,null],[11,"optflag","","Create a long option that is optional and does not take an argument.",6,null],[11,"optflagmulti","","Create a long option that can occur more than once and does not\ntake an argument.",6,null],[11,"optflagopt","","Create a long option that is optional and takes an optional argument.",6,null],[11,"optmulti","","Create a long option that is optional, takes an argument, and may occur\nmultiple times.",6,null],[11,"optopt","","Create a long option that is optional and takes an argument.",6,null],[11,"reqopt","","Create a long option that is required and takes an argument.",6,null],[11,"parse","","Parse command line arguments according to the provided options.",6,null],[11,"short_usage","","Derive a short one-line usage summary from a set of long options.",6,null],[11,"usage","","Derive a usage message from a set of options.",6,null],[11,"clone","","",1,null],[11,"eq","","",1,null],[11,"clone","","",2,null],[11,"eq","","",2,null],[11,"clone","","",3,null],[11,"eq","","",3,null],[11,"clone","","",0,null],[11,"eq","","",0,null],[11,"ne","","",0,null],[11,"clone","","",4,null],[11,"fmt","","",4,null],[11,"eq","","",4,null],[11,"ne","","",4,null],[11,"description","","",4,null],[11,"clone","","",5,null],[11,"eq","","",5,null],[11,"opt_present","","Returns true if an option was matched.",0,null],[11,"opt_count","","Returns the number of times an option was matched.",0,null],[11,"opts_present","","Returns true if any of several options were matched.",0,null],[11,"opts_str","","Returns the string argument supplied to one of several matching options or `None`.",0,null],[11,"opt_strs","","Returns a vector of the arguments provided to all matches of the given\noption.",0,null],[11,"opt_str","","Returns the string argument supplied to a matching option or `None`.",0,null],[11,"opt_default","","Returns the matching string, a default, or `None`.",0,null],[11,"fmt","","",4,null]],"paths":[[3,"Matches"],[4,"ParsingStyle"],[4,"HasArg"],[4,"Occur"],[4,"Fail"],[4,"FailType"],[3,"Options"]]};
initSearch(searchIndex);
