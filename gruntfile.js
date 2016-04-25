module.exports = function (grunt) {

    grunt.initConfig({
        shell: {
            options: {
                stdout: true,
                stderr: true
            },
            server: {
                command: 'java -cp L1.2-1.0-jar-with-dependencies.jar main.Main 8080' /* запуск сервера */
            }
        }
    });

    // Загрузка плагинов, на примере "concat".
    grunt.loadNpmTasks('grunt-shell');

    // Определение задач, default должен быть всегда.
    //grunt.registerTask('default', ['shell']);
};