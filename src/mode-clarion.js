ace.define("ace/mode/clarion_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

var ClarionHighlightRules = function() {

    this.$rules = {
        start: [{
            include: "#comments"
        }, {
            include: "#classLabels"
        }, {
            include: "#labels"
        }, {
            include: "#langConstants"
        }, {
            include: "#langProps"
        }, {
            include: "#langFunctions"
        }, {
            include: "#userVars"
        }, {
            include: "#implicits"
        }, {
            include: "#hardReservedKeywords"
        }, {
            include: "#softReservedKeywords"
        }, {
            include: "#directives"
        }, {
            include: "#baseTypes"
        }, {
            include: "#specialTypes"
        }, {
            include: "#strings"
        }, {
            include: "#attributes"
        }, {
            include: "#operators"
        }, {
            include: "#currencyInPicture"
        }, {
            include: "#numericConstants"
        }],
        "#comments": [{
            token: "comment.line.clarion",
            regex: /(?:\!|\|).*/,
            comment: "Comments"
        }],
        "#classLabels": [{
            token: [
                "entity.name.class.clarion",
                "entity.other.inherited-class.clarion",
                "entity.name.class.clarion"
            ],
            regex: /^([A-Za-z_][A-Za-z0-9_:]*\.)([A-Za-z_][A-Za-z0-9_:\.]*)(\s)/,
            comment: "label declarations with a different highlight for method names"
        }],
        "#labels": [{
            token: "entity.name.function.clarion",
            regex: /^[A-Za-z_][A-Za-z0-9_:\.]*\s/
        }],
        "#hardReservedKeywords": [{
            token: "keyword.clarion",
            regex: /\b(?:ACCEPT|BREAK|BY|CASE|CHOOSE|CYCLE|DO|ELSE|ELSIF|END|EXECUTE|EXIT|FUNCTION|GOTO|IF|LOOP|MEMBER|NEW|OF|OROF|PARENT|PROCEDURE|PROGRAM|RETURN|ROUTINE|SELF|THEN|TIMES|TO|UNTIL|WHILE)\b/,
            caseInsensitive: true
        }],
        "#softReservedKeywords": [{
            token: "entity.name.tag.clarion",
            regex: /\b(?:APPLICATION|CLASS|CODE|DATA|DETAIL|ENUM|FILE|FOOTER|FORM|GROUP|HEADER|INLINE|ITEM|JOIN|MAP|MENU|MENUBAR|MODULE|OLECONTROL|OPTION|QUEUE|RECORD|REPORT|ROW|SHEET|STRUCT|TAB|TABLE|TOOLBAR|VIEW|WINDOW|PROPERTY|INDEXER)\b/,
            caseInsensitive: true
        }],
        "#directives": [{
            token: "storage.modifier.directives.clarion",
            regex: /\b(?:ASSERT|BEGIN|COMPILE|EQUATE|INCLUDE|ITEMIZE|OMIT|ONCE|SECTION|SIZE)\b/,
            caseInsensitive: true
        }],
        "#baseTypes": [{
            token: "storage.type.base-types.clarion",
            regex: /\b(?:ANY|ASTRING|BFLOAT4|BFLOAT8|BLOB|MEMO|BOOL|BSTRING|BYTE|CSTRING|DATE|DECIMAL|DOUBLE|FLOAT4|LONG|PDECIMAL|PSTRING|REAL|SHORT|SIGNED|SREAL|STRING|TIME|ULONG|UNSIGNED|USHORT|VARIANT)\b/,
            caseInsensitive: true
        }],
        "#specialTypes": [{
            token: "storage.type.specialTypes.clarion",
            regex: /\b(?:APPLICATION|BUTTON|CHECK|CLASS|COMBO|CUSTOM|DETAIL|ELLIPSE|ENTRY|FILE|FOOTER|FORM|GROUP|HEADER|IMAGE|INTERFACE|ITEM|KEY|INDEX|LINE|LIST|MENU|MENUBAR|OCX|OLE|OPTION|PANEL|PROGRESS|PROJECT|PROMPT|QUEUE|RADIO|REGION|REPORT|SEPARATOR|SHEET|SPIN|TAB|TABLE|TEXT|TOOLBAR|VBX|VIEW)\b/,
            caseInsensitive: true
        }],
        "#attributes": [{
            token: "entity.other.attribute-name.clarion",
            regex: /\b(?:ABOVE|ABSOLUTE|ALONE|ALRT|ANGLE|AT|AUTO|AUTOSIZE|AVE|BELOW|BEVEL|BINARY|BINDABLE|BITMAP|BOXED|C|CAP|CENTER|CENTERED|CNT|COLOR|COLUMN|COM|COMPATIBILITY|CONST|CURSOR|DEFAULT|DELAY|DERIVED|DIM|DLL|COM|DOCUMENT|DOCK|DOCKED|DOWN|DRAGID|DRIVER|DROP|DROPID|DUP|ENCRYPT|EXPAND|EXTEND|EXTERNAL|FILL|FILTER|FIRST|FIX|FIXED|FLAT|FONT|FROM|FULL|GLOBALCLASS|GRAY|GRID|HIDE|HLP|HSCROLL|HVSCROLL|ICON|ICONIZE|IMM|IMPLEMENTS|INNER|INS|LANDSCAPE|LAST|LATE|LAYOUT|LENGTH|LFT|LINEWIDTH|LINK|LOCATE|MARK|MASK|MAX|MAXIMIZE|MDI|META|MIN|MM|MODAL|MSG|NAME|NOBAR|NOCASE|NOFRAME|NOMEMO|NOMERGE|NOSHEET|OEM|OPT|ORDER|OUTER|OVER|OVR|OWNER|PAGE|PAGEAFTER|PAGEBEFORE|PALETTE|PAPER|PASCAL|PASSWORD|POINTS|PRE|PREVIEW|PRIMARY|PRIVATE|PROC|PROTECTED|RANGE|RAW|READONLY|RECLAIM|REPEAT|REPLACE|REQ|RESIZE|SCROLL|SINGLE|SMOOTH|SPREAD|STATIC|STD|STEP|STRETCH|SUM|SUPPRESS|TALLY|TARGET|THOUS|TILED|TIMER|TIP|TOGETHER|TOOLBOX|TRN|UP|UPR|USE|VALUE|VERTICAL|VCR|VIRTUAL|VSCROLL|WALLPAPER|WIDTH|WITHNEXT|WITHPRIOR|WIZARD|WRAP|ZOOM|CHECK|DOUBLE|SEPARATOR|PAGENO|RTF|SYSTEM|TYPE)\b/,
            caseInsensitive: true
        }],
        "#langConstants": [{
            token: "support.constant.clarion",
            regex: /\b(?:TRUE|FALSE)\b/,
            caseInsensitive: true
        }],
        "#langFunctions": [{
            token: "support.function.clarion",
            regex: /\b(?:ADD|DISPOSE|ADDRESS|GET|BAND|BUILD|CLEAR|CLOSE|DELETE|DUPLICATE|FIXFORMAT|FREESTATE|GETNULLS|GETSTATE|HOLD|LOCK|OPEN|POINTER|POSITION|RECORDS|REGET|RESET|RESTORESTATE|SET|SETNULLS|STATUS|UNBIND|UNFIXFORMAT|_PROC|_PROC1|_PROC2|_PROC3|ACCEPTED|ACOS|ALERT|ALIAS|ALL|ARC|ASIN|ASK|ATAN|BEEP|BINDEXPRESSION |BLANK|BOF|BOX|BUFFER|BYTES|CALL|CENTER|CHAIN|CHANGE|CHANGES|CHOICE|CHORD|CLIP|CLIPBOARD|CLOCK|CLONE|COLORDIALOG|COMMAND|COMMIT|COMPRESS |CONVERTANSITOOEM|CONVERTOEMTOANSI|CONTENTS|COPY|COS|DATE|DAY|DEBUGHOOK|DECOMPRESS |DELETEREG|DESTROY|DIRECTORY|DIRECTORY|DISABLE|DISPLAY|DRAGID|DROPID|ELLIPSE|EMPTY|ENABLE|ENDPAGE|EOF|ERASE|ERROR|ERRORCODE|ERRORFILE|EVALUATE|EXISTS|FIELD|FILEDIALOG|FILEDIALOGA|FILEERROR|FILEERRORCODE|FIRSTFIELD|FLUSH|FOCUS|FONTDIALOG|FONTDIALOGA|FORWARDKEY|FREE|FREEZE|GETEXITCODE|GETFONT|GETGROUP|GETREG|GETREGSUBKEYS|GETREGVALUES|GETINI|GETPOSITION|HALT|HELP|HIDE|HOWMANY|IDLE|IMAGE|INCOMPLETE|INSTANCE|INSTRING|ISALPHA|ISGROUP|ISLOWER|ISUPPER|ISSTRING|KEYBOARD|KEYCHAR|KEYCODE|KEYSTATE|LASTFIELD|LEFT|LEN|LINE|LOCALE|LOCKTHREAD|LOG10|LOGE|LONGPATH|LOWER|MATCH|MESSAGE|MONTH|MOUSEX|MOUSEY|NAME|NEXT|NOMEMO|NOTIFICATION|NOTIFY|NUMERIC|PACK|PATH|PENCOLOR|PENWIDTH|PENSTYLE|PIE|POLYGON|POPBIND|POPERRORS|POPUP|POST|PRESS|PRESSKEY|PREVIOUS|PRINTERDIALOG|PRINTERDIALOGA|PUSHBIND|PUSHERRORS|PUT|PUTREG|PUTINI|QUOTE|RANDOM|REGISTER|REGISTEREVENT|EVENT|RELEASE|REMOVE|RESUME|RIGHT|ROLLBACK|ROUNDBOX|RUN|RUNCODE|REJECTCODE|SELECT|SELECTED|SEND|SET3DLOOK|SETCLIPBOARD|SETCLOCK|SETCOMMAND|SETCURSOR|SETDROPID|SETEXITCODE|SETFONT|SETFONT|SETKEYCHAR|SETKEYCODE|SETLAYOUT|SETPATH|SETPENWIDTH|SETPENSTYLE|SETPENCOLOR|SETPOSITION|SETPOSITION|SETTARGET|SETTODAY|SHARE|SHORTPATH|SHOW|SHUTDOWN|SIN|SKIP|SQRT|START|STATUS|STOP|STREAM|STRPOS|SUB|SUSPEND|TAN|THREAD|THREADLOCKED|TIE|TIED|TODAY|TYPE|UNFREEZE|UNHIDE|UNLOAD|UNLOCK|UNLOCKTHREAD|UNQUOTE|UNREGISTER|UNREGISTEREVENT|UNTIE|UPDATE|UPPER|WATCH|WHAT|WHAT|WHERE|WHERE|WHO|WHO|YEAR|YIELD|ABS|AFTER|AGE|APPEND|BEFORE|BIND|BINDEXPRESSION|BOR|BSHIFT|BXOR|CHR|COMPRESS|CREATE|DDEACKNOWLEDGE|DDEAPP|DDECHANNEL|DDECLIENT|DDECLOSE|DDEEXECUTE|DDEITEM|DDEPOKE|DDEQUERY|DDEREAD|DDESERVER|DDETOPIC|DDEVALUE|DDEWRITE|DECOMPRESS|DEFORMAT|FILEEXISTS|FORMAT|FULLNAME|INLIST|INRANGE|INT|LOGOUT|OCXLOADIMAGE|OCXREGISTEREVENTPROC|OCXREGISTERPROPCHANGE|OCXREGISTERPROPEDIT|OCXSETPARAM|OCXUNREGISTEREVENTPROC|OCXUNREGISTERPROPCHANGE|OCXUNREGISTERPROPEDIT|OLEDIRECTORY|OMITTED|PEEK|POKE|PRAGMA|PRINT|PRINTER|RENAME|ROUND|SAVEDIALOG|SETNONULL|SETNULL|SHIFT|SORT|VAL|XOR)\b/,
            caseInsensitive: true
        }],
        "#langProps": [{
            token: "support.constant.clarion",
            regex: /\b(?:PROP|EVENT|COLOR|CREATE|BRUSH|FILE|LEVEL|STD|CURSOR|ICON|BEEP|REJECT|FONT|CHARSET|PEN|LISTZONE|BUTTON|MSGMODE|WINDOW|TEXT|FREEZE|DDE|FF_|OCX|DOCK|MATCH|PAPER|DRIVEROP|DATATYPE|GradientTypes):\w*\b/,
            caseInsensitive: true
        }],
        "#userVars": [{
            token: "variable.parameter.clarion",
            regex: /\b(?:LOC|GLO):\w*\b/,
            caseInsensitive: true
        }],
        "#implicits": [{
            token: [
                "constant.numeric.implicit.clarion",
                "keyword.implicit.clarion"
            ],
            regex: /([A-Za-z][A-Za-z0-9_]+)(\$|#|")/
        }],
        "#operators": [{
            token: "keyword.operator.clarion",
            regex: /\?|\{|\}|\+|\-|\*|\*\*|\/|\/\/|%|<|>|&|\||\^|~|=|:=:|,|\(|\)/
        }],
        "#currencyInPicture": [{
            token: "constant.numeric.clarion",
            regex: /@[Nn][\-]?[0-9\.]*\~/,
            push: [{
                token: "constant.numeric.clarion",
                regex: /\~/,
                next: "pop"
            }, {
                defaultToken: "constant.numeric.clarion"
            }]
        }],
        "#numericConstants": [{
            token: "constant.numeric.clarion",
            regex: /\b(?:[0-9][0-9a-fA-F]*(?:h|H)|[0-1]*(?:b|B)|[0-7]*(?:o|O)|(?:[0-9]+\.?[0-9]*|\.[0-9]+)(?:(?:e|E)(?:\+|-)?[0-9]+)?)\b/
        }],
        "#strings": [{
            token: "string.quoted.single.clarion",
            regex: /\'/,
            push: [{
                token: "string.quoted.single.clarion",
                regex: /\'/,
                next: "pop"
            }, {
                defaultToken: "string.quoted.single.clarion"
            }]
        }]
    }
    
    this.normalizeRules();
};

ClarionHighlightRules.metaData = {
    name: "Clarion",
    scopeName: "source.clarion",
    fileTypes: ["clw", "equ", "inc", "int", "txa", "txd", "tpl", "tpw"]
}


oop.inherits(ClarionHighlightRules, TextHighlightRules);

exports.ClarionHighlightRules = ClarionHighlightRules;
});

ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"], function(require, exports, module) {
"use strict";

var oop = require("../../lib/oop");
var Range = require("../../range").Range;
var BaseFoldMode = require("./fold_mode").FoldMode;

var FoldMode = exports.FoldMode = function(commentRegex) {
    if (commentRegex) {
        this.foldingStartMarker = new RegExp(
            this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.start)
        );
        this.foldingStopMarker = new RegExp(
            this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.end)
        );
    }
};
oop.inherits(FoldMode, BaseFoldMode);

(function() {
    
    this.foldingStartMarker = /([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/;
    this.foldingStopMarker = /^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/;
    this.singleLineBlockCommentRe= /^\s*(\/\*).*\*\/\s*$/;
    this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/;
    this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/;
    this._getFoldWidgetBase = this.getFoldWidget;
    this.getFoldWidget = function(session, foldStyle, row) {
        var line = session.getLine(row);
    
        if (this.singleLineBlockCommentRe.test(line)) {
            if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line))
                return "";
        }
    
        var fw = this._getFoldWidgetBase(session, foldStyle, row);
    
        if (!fw && this.startRegionRe.test(line))
            return "start"; // lineCommentRegionStart
    
        return fw;
    };

    this.getFoldWidgetRange = function(session, foldStyle, row, forceMultiline) {
        var line = session.getLine(row);
        
        if (this.startRegionRe.test(line))
            return this.getCommentRegionBlock(session, line, row);
        
        var match = line.match(this.foldingStartMarker);
        if (match) {
            var i = match.index;

            if (match[1])
                return this.openingBracketBlock(session, match[1], row, i);
                
            var range = session.getCommentFoldRange(row, i + match[0].length, 1);
            
            if (range && !range.isMultiLine()) {
                if (forceMultiline) {
                    range = this.getSectionRange(session, row);
                } else if (foldStyle != "all")
                    range = null;
            }
            
            return range;
        }

        if (foldStyle === "markbegin")
            return;

        var match = line.match(this.foldingStopMarker);
        if (match) {
            var i = match.index + match[0].length;

            if (match[1])
                return this.closingBracketBlock(session, match[1], row, i);

            return session.getCommentFoldRange(row, i, -1);
        }
    };
    
    this.getSectionRange = function(session, row) {
        var line = session.getLine(row);
        var startIndent = line.search(/\S/);
        var startRow = row;
        var startColumn = line.length;
        row = row + 1;
        var endRow = row;
        var maxRow = session.getLength();
        while (++row < maxRow) {
            line = session.getLine(row);
            var indent = line.search(/\S/);
            if (indent === -1)
                continue;
            if  (startIndent > indent)
                break;
            var subRange = this.getFoldWidgetRange(session, "all", row);
            
            if (subRange) {
                if (subRange.start.row <= startRow) {
                    break;
                } else if (subRange.isMultiLine()) {
                    row = subRange.end.row;
                } else if (startIndent == indent) {
                    break;
                }
            }
            endRow = row;
        }
        
        return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);
    };
    this.getCommentRegionBlock = function(session, line, row) {
        var startColumn = line.search(/\s*$/);
        var maxRow = session.getLength();
        var startRow = row;
        
        var re = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/;
        var depth = 1;
        while (++row < maxRow) {
            line = session.getLine(row);
            var m = re.exec(line);
            if (!m) continue;
            if (m[1]) depth--;
            else depth++;

            if (!depth) break;
        }

        var endRow = row;
        if (endRow > startRow) {
            return new Range(startRow, startColumn, endRow, line.length);
        }
    };

}).call(FoldMode.prototype);

});

ace.define("ace/mode/clarion",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/clarion_highlight_rules","ace/mode/folding/cstyle"], function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextMode = require("./text").Mode;
var ClarionHighlightRules = require("./clarion_highlight_rules").ClarionHighlightRules;
var FoldMode = require("./folding/cstyle").FoldMode;

var Mode = function() {
    this.HighlightRules = ClarionHighlightRules;
    this.foldingRules = new FoldMode();
};
oop.inherits(Mode, TextMode);

(function() {
    this.$id = "ace/mode/clarion.js";
}).call(Mode.prototype);

exports.Mode = Mode;
});
                (function() {
                    ace.require(["ace/mode/clarion"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            