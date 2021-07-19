//catch uncaught exceptions, trace, then exit normally
process.on('uncaughtException', function (e) {
    console.log('Uncaught Exception...');
    console.log(e.stack);
    process.exit(99);
});

process.on('unhandledRejection', function (reason, promise) {
    console.log('Unhandled Rejection at:', promise, 'reason:', reason);
});
