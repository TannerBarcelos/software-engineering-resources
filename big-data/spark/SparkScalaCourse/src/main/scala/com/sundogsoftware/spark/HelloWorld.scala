package com.sundogsoftware.spark

import org.apache.spark._
import org.apache.log4j._
import org.apache.spark.rdd.RDD

object HelloWorld {
  def main(args: Array[String]): Unit = {

    Logger.getLogger("org").setLevel(Level.ERROR)

    val clusterURL:String = "local[*]"
    val appName:String = "HelloWorld"

    val sc = new SparkContext(clusterURL, appName) // Step 1 - Create new spark context as entry point for master program (see docs for all options - need cluster url and app name always)

    val textFile:String = "data/ml-100k/u.data"

    val lines:RDD[String] = sc.textFile(textFile) // Step 2 - Load data from some type of source (in this case, a text file from local FS)

    // Step 3 - Invoke a new Spark Action - At this point we are doing work. In our case, we are counting number of lines in this file
    val numLines: Long = lines.count()

    println(s"Hello world! The u.data file has $numLines lines.")

    sc.stop()
  }
}
