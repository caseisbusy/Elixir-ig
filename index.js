//Before reading anything, this is a remake of the programming langauge "Elixir"
//this isn't everything in the programming language but it also isn't nothing. 

class string {
    duplicate(text, number) {
        return text.repeat(number)
    } // Repeat a text an amount of times
    reverse(text) {
      return text.split("").reverse().join("");
    } // Reverse a text
	length(text){
		return text.length
	} // Return the length of the text
	contains(firsttext, text) {
		return firsttext.toLowerCase().includes(text) || firsttext.toUpperCase().includes(text)
	} // Checks if the first text contains the word or letter in the second text
	at(text, position) {
		return text.charAt(position - 1)
	} // Returns the letter in the index
	capitalize(text) {
		return `${text[0].toUpperCase()}${text.slice(1)}`
	} // Capitalizes first letter in a text
	downcase(text) {
		return text.toLowerCase()
	} // Returns the whole text in lowercase
	last(text){
		if(!text) return `null`
		else return text.charAt(text.length -1)
	} // Returns last letter in a text
	
jaro_distance(text, text2) {

var shortLen = text.length;var longLen = text2.length;if (text === text2) return `Distance: 0`;if ( !shortLen || !longLen )   return `Distance: 1`;var short = text;var long = text2;var matches = 0;var transposes = 0;var swindow = Math.floor( Math.max( shortLen, longLen ) / 2 ) - 1;var matchedChars = [];var i, j;var char;var longMatchedAt;var winStart, winEnd;var smlrty; if ( shortLen > longLen ) { short = [ long, long = short ][ 0 ]; shortLen = [ longLen, longLen = shortLen ][ 0 ];}; longMatchedAt = new Array( longLen ); for ( i = 0; i < longLen; i += 1 ) longMatchedAt[ i ] = false; for ( i = 0; i < shortLen; i += 1 ) { char = short[ i ]; winStart = Math.max( i - swindow, 0 ); winEnd = Math.min( i + swindow + 1, longLen ); for ( j = winStart; j < winEnd; j += 1 ) { if ( ( !longMatchedAt[ j ] ) && ( char === long[ j ] ) ) { matches += 1;longMatchedAt[ j ] = true;matchedChars.push( char );break;}}}; for ( i = 0, j = 0; j < matches; i += 1 ) { if ( longMatchedAt[ i ] ) { if ( long[ i ] !== matchedChars[ j ] ) transposes += 1;j += 1;}}; transposes /= 2; smlrty = ( matches === 0 ) ? 0 : ( ( matches / shortLen ) + ( matches / longLen ) + ( ( matches - transposes ) / matches ) ) / 3; return `Distance: ${1 - smlrty}` 

 } // Returns the difference between 2 texts
	first(text) {
		if(!text) return `null`
		else return text.charAt(text.length - text.length)
	} // Returns first letter in a text
	codepoints(text) {
		return [...text]
	} // Returns the text in codepoints - []
	ends_with(text, suffix) {
		return text.endsWith(suffix)
	} // Checks if the text ends with the letter or word
	equivalent(text, suffix) {
		return suffix.toLowerCase() === text || suffix.toUpperCase() === text;
	} // Check if the first text is equivalent to the second text
	next_codepoint(text) {
		let a = text.charAt(text.length - text.length) 
		let b = text.replace(text.charAt(text.length - text.length), "")
		return [a,b]
	} // Return the next text in code points - []
	replace(text, suffix, args, global) {
		return text.replace(suffix, args) 	
	} // Replace a text with another text
	to_float(int) {
		if(isNaN(parseFloat(int))) throw new Error('if(isNaN(parseFloat(int))) throw new Error()\nValue "int" must be a stringed number')
		return parseFloat(int)
	} // Parses a float int
	to_integer(int) {
		if(isNaN(parseInt(int))) throw new Error('if(isNaN(parseInt(int))) throw new Error()\nValue "int" must be a string number')
		return parseInt(int)
	} // Turns first arguement to a int
}

class integer {
	is_even(int) {
		if(int % 2 === 0) {
			return true
		} else {
			return false
		}
	} // Check if the integer is even
	is_odd(int) {
    if(int % 2 === 0) {
			return false
		} else {
			return true
		}
	} // Check if the integer is odd
	floor_div(number, number2) {
		return Math.floor(number / number2)
	} // Returns the largest integer less than or equal to the second integer
  gcd(int, int2) {
  int = Math.abs(int);
  int2 = Math.abs(int2);
  while(int2) {
    var t = int2;
    int2 = int % int2;
    int = t;
  }
  return int;
} // Returns Greatest Common Divisor
 mod(int, int2) {
	 let remainder = Math.floor(int % int2)
	 if(remainder * int2 < 0) {
		 return remainder + int2
	 } else {
		 return remainder
	 }
 } // Calculate modulo
	pow(int, int2) {
		return Math.pow(int, int2)
	} // Return a number to the power of a number
	parse(int) {
		return [parseInt(int)]
	} // Parse an integer
	to_string(int) {
		return int.toLocaleString()
	} // Change an integer to string
	undigits(int, int2) {
		int = int.toLocaleString().replace(/,/gi, "")
		int2 = int2.toLocaleString().replace(/,/gi, "")
		if(typeof int2 === "undefined") int2 = ""
		if(int && int2) return int + int2
			else return int
	} // Undigit integers 1 and 2
}

function div(number1, number2) {
     if(typeof number1 !== "number") return 'ERROR: Field: "number1" must be a number'
     if(typeof number2 !== "number") return 'ERROR: Field: "number2" must be a number'
     return number1 / number2
 } // Divide integers

function rem(number1, number2) {
	if(typeof number1 !== "number") return 'ERROR: Field: "number1" must be a number'
	if(typeof number2 !== "number") return 'ERROR: Field: "number2" must be a number'
	return number1 % number2
} // Remainder of integers

class Io {
 puts(text) { 
  return console.log(text) 
 } // Same function as console.log
}

let String = new string() // Create a new String instance
let Integer = new integer() // Create a new Integer instance
let IO = new Io() // Create a new IO instance


IO.puts("Hi") // "Hi"
IO.puts(String.duplicate("Hi", 13)) // "HiHiHiHiHiHiHiHiHiHiHiHiHi"
IO.puts(String.reverse("olleh")) // "hello"
IO.puts(div(1,2)) //0.5
IO.puts(String.length(["a", "alpha"])) // 2 - So this checks the length of the strings in the array and not the letters
IO.puts(String.contains?.("this", "this")) // true
IO.puts(String.contains?.("that", "this")) // false
IO.puts(String.at("position", 3)) // s
IO.puts(String.capitalize("non-capitalized")) // "Non-capitalized"
IO.puts(String.downcase("CAPITALIZED"))  // capitalized
IO.puts(rem(-4, 2)) // -0
IO.puts(String.last("Hello")) // 0
IO.puts(String.jaro_distance("hi", "oai")) // "Distance: 1"
IO.puts(String.first("Ola")) // "O"
IO.puts(String.codepoints("Thing")) // [ 'T', 'h', 'i', 'n', 'g' ]
IO.puts(String.ends_with?.("Content", "thing")) // false
IO.puts(String.ends_with?.("Content", "ent")) // true
IO.puts(String.equivalent?.("hi", "hi")) // true
IO.puts(String.next_codepoint("text")) // ["t", "ext"]
IO.puts(String.to_float("2.2017764e+0")) // 2.2017764
IO.puts(String.to_integer("10")) // 10
IO.puts(Integer.is_even(2)) // true
IO.puts(Integer.is_odd(4)) // false
IO.puts(Integer.floor_div(-99, 2)) // -50
IO.puts(Integer.gcd(8, -12)) // 4
IO.puts(Integer.mod(4,5)) // 4
IO.puts(Integer.pow(2, 11)) // 2048
IO.puts(Integer.parse("98j")) // [ 98 ]
IO.puts(Integer.to_string(882_681_651, 36)) // "882,681,651"
IO.puts(Integer.undigits([1, 2, 3], 2)) // "1232"