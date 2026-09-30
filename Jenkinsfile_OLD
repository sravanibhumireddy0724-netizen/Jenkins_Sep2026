pipeline {
    agent any

    tools {
        maven 'Maven-3.9'
        jdk 'JDK_17'
    }

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out code...'
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Build stage started'
                bat 'echo Building application'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests'
                bat 'echo Running test cases'
            }
        }

        stage('Deploy to DEV') {
            steps {
                echo 'Deploying application to DEV'
                bat 'echo Deployment successful'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully ✅'
        }

        failure {
            echo 'Pipeline failed ❌'
        }

        always {
            echo 'Pipeline execution finished'
        }
    }
}