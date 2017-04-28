# Scala Notes

## My Objectives

I'm trying to learn Scala to refresh my existing (_and old_) Java knowledge. Because, I've been in the omniverse of node.js, es6, react, ruby and bunch of others. I last used Java in 2012 if I remember correctly. However, as I see, much of the ecosystem has not changed for me not to keep up with. It's not like Javascript universe (_which is changing daily_). I think, this is one of the benefits of an ancient ecosystem.

I'm also want to learn Scala because I'm in the business of Big Data. However, I didn't use most of the big data tools in the Java community since 2012. So, there are Akka, Kafka, Spark etc. For example, actually, to use Kafka, I don't need to learn Skala. However, much of the ecosystem is revolving around these tools right now, as I see, so it's better to learn it from the roots. I think that will be good for me. I'm also curious about all of these.

### Why I choosed Scala?

Because, it seemlesly works with Java. I can use Java packages and classes directly without doing anything. Java and Scala can work together.

And, the Scala is less verbose than Java (_which was one of the reasons that I didn't prefer Java_), and, shows this in every expression.

And, there's a big and live eco-system for Scala.

## Scala Daily Development

Using sbt tool daily to develop in Scala without IDEs is achievable. To this end, I researched how to do that. And, then, I created a documentation on StackOverflow for other people.

* [Getting started with daily development with sbt](http://stackoverflow.com/documentation/sbt/9842/getting-started-with-daily-development#t=201704281402199032604)

* [Continous daily development with Scala on OSX without IDEs](http://stackoverflow.com/questions/43681064/continous-daily-development-with-scala-on-osx-without-ides/43681065#43681065)

## Interesting Language Features

```scala
object HelloThere {
  def main(args: Array[Strings]) { // <- this becomes a static method
    println("hello there")
  }
}
```

### Singleton classy objectishes 

When I define it like this, it becomes a singleton! Oh my. So, that means, this is a class and an object at the same. Actually, it'll become an object when it's first used. Good. Lazy-evaulation of functional languages.

### There are no static methods or fields

That's cool. Because, the global data is usually not good. However, as you know, they're also practical. Especially for mother space-ship utility classes (_beware!_). 

So, `main` method is defined on a singleton object. So, it's kind of static, however, on an instance, not on a class itself. Java coders know what I mean.

### No need to define return types when there is none

Oh my, my. Cool? Yes. It's slick. Like in the example, `def main(..)` is enough to define a method without a return type. So, we don't need to declare it as in Java with a `void` in front of it like: `public static void main(...)`, what a verbose...

### Interfacing with Java

`java.lang` package are imported automatically. So, I can its classes directly without importing.

I can also import any Java package into Scala and use it.

### One line method definition

```scala
object Hello {
  def run = println("hello there!!") // <- no need for curly braces
}

Hello.run // <- no need for parentheses
```

### Space separated method calls

Methods taking one argument can be used with space syntax instead of dot-notation. This is kind of smells like Clousure? Hmm?

```scala
object TurkishDate {
  def run {
    val now = new Date
    val df = getDateInstance(LONG, Locale.forLanguageTag("tr-TR"))
    println(df format now) // <-- instead of: df.format(now)
  }
}
```

### Everything is an object

This time it's really true. The same claim had been made in Java, however, it wasn't perfectly true.

In Scala, even functions and primitives like numbers are object too. For example: 2 is really an object and there are methods I can apply on it if I want to.

So, for example, +, -, * operators are methods in number objects.

```scala
2.toDouble // -> 2.0
2.3.toInt  // -> 2
```

### Functions are objects and first-class citizens

Any modern programming language without treating functions as first-class citizens is not cool anymore because functional programming is cool again after its long winter.

So, functions can be passed to methods and stored in variables. No more need to define, _holder_ classes or interfaces just to define functions to pass to methods etc, as in Java.

```scala
object FunctionExample {
  def callMeBack(callback: () => Unit) {
    callback()                    // calling the passed function
  }

  def main(args: Array[String]) {
    callMeBack(() => println("is there anybody?"))
                                  // passing the function to another function
                                  // as an argument

                                  // this is an anonymous function
                                  // like in Javascript ES6
                                  // can be created on the fly
  }
}
```

Functions' type is `() => Unit`, if the function has no argument and return nothing. `Unit` type is like `void` in C.

### Weird but there's no ++ and --

I think this is less verbose, however, ++ and -- is not exist in Scala. So, you have to:

```scala
var n = 1
n = n + 1 // instead of: n++
```

### New class defitinion

```scala
class Complex(real: Double, imaginary: Double) {
  def re = real       // defining methods without parenthesis
  def im = imaginary

  // overriding method from Object class which this class has its parent
  override def toString() =
    "" + re + (if (im < 0) "" else "+") + im + "i"
}

// instantiating
val c = new Complex(1.2, 3.4)
println(s"real: ${c.re}, imaginary: ${c.im}")
println(c)

// s"" is for evaluating expressions inside strings
```

As not like in Java, the class takes arguments. So, should I make the assumption that Scala classes has no constructors? Or this is for less verbosity. I'll know for sure when I update this document again.

### Holy type-inferrence

This is one of my favourite feature in a language. The compiler or interpreter is guessing the type by looking the relationships between objects. So, this leads to less verbosity, again.

As recommended in the Scala documentation, beginner Scala programmers should omit the types and see whether the compiler get angry with results and act accordingly.

As in the Complex class example code, the compiler guessing the return type of `re()` method by looking what it returns, and, hence the returning `real` is already has a type in the `Complex`'s constructor as `Double`, the compiler guesses that, `re()` should also be returning a `Double`. Cool, huh?

**For a side-note**: _The invention of the type-inteference algorithm is around 1958 by Haskell Curry and Robert Feys._

### var and val difference

If I understand correctly until this moment by trial and error tactics, `var` is for declaring _mutable variables_ and, `val` is for declaring _immutable variables_. Mutable means, can be changed, immutable is the reverse, which  cannot be changed.
