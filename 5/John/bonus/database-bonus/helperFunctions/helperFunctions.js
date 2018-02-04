class HelperFunctions {


    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    QUERY INTERPRETER - MAIN FUNCTION
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/



    queryInterpreter(query) {

       try {
           let output = {
               table: '',
               operation: '',
               hasWhere: false,
               query: '',
               queryValues: {} //used in insert VALUES(x,y,z)
           };

           //first lets search for the table

           if (query.indexOf('SELECT') > -1) {
               output.operation = 'SELECT';
           } else if (query.indexOf('DELETE') > -1) {
               output.operation = 'DELETE';
           } else if (query.indexOf('INSERT') > -1) {
               output.operation = 'INSERT';
           }

           switch (output.operation) {

               case 'SELECT':
                   //getting query
                   if (query.indexOf('WHERE') > -1) {
                       output.hasWhere = true;
                       output.query = this.parseBetween('WHERE', ';', query).trim();
                       output.query = this.removeQuotes(output.query);
                       output.table = this.parseBetween('FROM','WHERE',query).trim();

                   } else {
                       output.table = this.parseBetween('FROM',';',query).trim();
                       output.query = '';
                   }


                   break;

               case 'INSERT':
                   output.table = this.parseBetween('INTO', 'VALUES', query).trim();
                   output.query = this.removeQuotes(this.parseBetween('(', ');', query));
                   output.queryValues = output.query.split(',');

                   break;

               case 'DELETE':
                   if (query.indexOf('WHERE') > -1) {
                       output.hasWhere = true;
                       output.table = this.parseBetween('DELETE FROM', 'WHERE', query).trim();
                       output.query = this.removeQuotes(this.parseBetween('WHERE', ';', query).trim());



                   } else {
                       //todo delete without where === death
                   }


                   break


           }

           return output;
       } catch(error){
           console.log('Error in your SQL syntax. Check it and try again!');
           return false;
       }

    }

    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    QUERY MANIPULATION
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/


      getQueryPropValue(query) {

        query = query.split('=');
        let property = query[0].trim();
        let value = query[1].trim();
        value = this.removeQuotes(value).trim();

       return {
            property: property,
            value: value
        }



    }

    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    STRING AND ARRAY MANIPULATION
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    parseBetween(beginString, endString, originalString) {
        let beginIndex = originalString.indexOf(beginString);
        if (beginIndex === -1) {
            return null;
        }
        let beginStringLength = beginString.length;
        let substringBeginIndex = beginIndex + beginStringLength;
        let substringEndIndex = originalString.indexOf(endString, substringBeginIndex);
        if (substringEndIndex === -1) {
            return null;
        }
        return originalString.substring(substringBeginIndex, substringEndIndex);
    }


    //https://stackoverflow.com/questions/14867835/get-substring-between-two-characters-using-javascript
    extractString(str, delim1, delim2) {
        return str.substring(str.lastIndexOf(delim1) + 1, str.lastIndexOf(delim2))
    };

    removeQuotes(str) {

        if (str.indexOf("'") > -1) {
            return this.replaceAll(str, "'");
        } else if (str.indexOf('"') > -1) {
            return this.replaceAll(str, '"');
        } else {
            return str;
        }


    };

    replaceAll(str, char) {
        return str.split(char).join("");
    };


}



module.exports.HelperFunctions = HelperFunctions;
