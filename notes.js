/**
 * imp: DEFAULT JAVASCRIPT BEHAVIOR
 * Javascript is synchronous and single threaded language. Being a single threaded language, javascript can be comparatively slow if it runs on its own javascript engine. But javascript never runs in its single javascript engine. It runs its code in any run time environment like browsers, nodejs.
 */

/**
 * Execution context - execute one line of code at a time. Each operation waits for the last one to complete before execution.
 * Blocking code - block the flow of program. read file synchronously.
 * Non blocking code - does not block execution. read file asynchronously.
 * Blocking code and non blocking code depends on the use case. reading a file to giving the necessary information and other works can execute simultaneously in non blocking code. user registration data, to write the date in database, to send a successful login message use blocking code.
 * fetch is high priority callback. It is like another task queue. promise queue.
 */

// Topic: setTimeout and clearTimeout
/**
 * setTimeout() methods calls an api. this methods is available in web apis which can be retrieved through browsers. the first parameter of setTimeout() is handler which is basically a callback but it has no identification. It executes one time. 
 * clearTimeout() method takes a reference of which setTimeout is to be cleared.
 * 
 */

// Topic: setInterval and clearInterval
