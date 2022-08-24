const accelerator_complex = "https://github.com/rdemaria/pytimber.git";
const basic = "https://github.com/dpiparo/swanExamples.git";
const beam_dynamics = "https://github.com/PyCOMPLETE/PyHEADTAIL-playground.git";
const swan_spark = "https://github.com/prasanthkothuri/swan-spark-notebooks.git";
const lhcb_opendata = "https://github.com/dpiparo/swanExamples.git";
const spark_course = "https://github.com/prasanthkothuri/hadoop-tutorials-2016.git";
const outreach = "https://github.com/cmsopendata-finland/kurssimateriaali.git";
const awake = "https://github.com/prasanthkothuri/awake-notebooks.git";

function openInSWAN(url){
    if ( window.location !== window.parent.location ) 
        window.parent.postMessage(url, 'https://swan-qa001.cern.ch');
    else
        window.open("https://cern.ch/swanserver/cgi-bin/go/?projurl="+url);
    }