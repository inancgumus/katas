package example

import java.util.{Date, Locale}
import java.text.DateFormat
import java.text.DateFormat._

object TurkishDate {
  def run {
    val now = new Date
    val df = getDateInstance(LONG, Locale.forLanguageTag("tr-TR"))
    println(df format now)
  }
}
