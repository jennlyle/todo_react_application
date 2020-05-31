-- MySQL dump 10.13  Distrib 8.0.20, for Linux (x86_64)
--
-- Host: todo-application.c9awbrnnudph.eu-west-2.rds.amazonaws.com    Database: todo_app
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '';

--
-- Table structure for table `complete_status`
--

DROP TABLE IF EXISTS `complete_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `complete_status` (
  `complete_status_id` int(11) NOT NULL AUTO_INCREMENT,
  `text` varchar(255) NOT NULL,
  PRIMARY KEY (`complete_status_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `complete_status`
--

LOCK TABLES `complete_status` WRITE;
/*!40000 ALTER TABLE `complete_status` DISABLE KEYS */;
INSERT INTO `complete_status` VALUES (1,'Active'),(2,'Completed'),(3,'Deleted');
/*!40000 ALTER TABLE `complete_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tasks`
--

DROP TABLE IF EXISTS `tasks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tasks` (
  `task_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `text` varchar(255) DEFAULT NULL,
  `complete_status_id` int(11) NOT NULL,
  PRIMARY KEY (`task_id`),
  KEY `user_id` (`user_id`),
  KEY `complete_status_id` (`complete_status_id`),
  CONSTRAINT `tasks_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `tasks_ibfk_2` FOREIGN KEY (`complete_status_id`) REFERENCES `complete_status` (`complete_status_id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tasks`
--

LOCK TABLES `tasks` WRITE;
/*!40000 ALTER TABLE `tasks` DISABLE KEYS */;
INSERT INTO `tasks` VALUES (1,1,'Water the plants',3),(2,2,'Dishes',1),(3,3,'Dinner',1),(4,4,'Wash the car',1),(5,5,'Wash the dog',1),(6,6,'Grocery shopping',1),(7,7,'Make bed',1),(8,8,'Do laundry',1),(9,9,'Homework',1),(10,10,'Write letter to council',1),(11,11,'Follow up on CV',1),(12,12,'Rewirte meeting notes',1),(13,13,'Set up meeting with governors',1),(14,14,'Feed the cat',1),(15,1,'Buy things from Amazon',2),(16,1,'Run errands',3),(17,1,'Pick up medicine',1),(18,2,'Drop off kids at football',2),(19,2,'Write questions for next meeting',3),(20,2,'Buy sticky-notes',1),(21,2,'Print out kids homework',2),(22,3,'Make time for reading',3),(23,3,'Take out the trash',1),(24,3,'Buy new shoes',2),(25,3,'Make haircut appointment',1),(26,1,'Call school',1);
/*!40000 ALTER TABLE `tasks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(36) NOT NULL,
  `first_name` varchar(36) NOT NULL,
  `surname` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'jennifer.g.lyle@gmail.com','dsgx6TusavTzQd4F','Jennifer','Calland'),(2,'unreal@gmail.com','AeHYV2v4sJ58cdKb','Chris',''),(3,'sherzodr@live.com','CBWq6fTgtFhps44E','Sherry','Zodr'),(4,'khris@optonline.net','L9pGpyR32B5yD8LV','Khris','Jenkins'),(5,'isaacson@mac.com','7hkHta4KJRqJw3GH','Issac','Son'),(6,'jugalator@sbcglobal.net','UENvNjB9Z4a97K4P','Jurien','Lattor'),(7,'shawnce@me.com','wEHe6fGRJJAtgzCW','Shawn',''),(8,'sbmrjbr@comcast.net','nf8phC38vf5b2QtQ','Sam',''),(9,'ianbuck@sbcglobal.net','3cDb8G9gbqhbfmry','Ian','Buck'),(10,'citadel@hotmail.com','UCBRAAe3CA4nm6tG','Tony','Stark'),(11,'sfoskett@outlook.com','yTnug2uTbqDqAA6x','Sarah','Kett'),(12,'ryanshaw@mac.com','jyLMVEcPZDTXr6GD','Ryan','Shaw'),(13,'gator@live.com','fQ4u5S76KTtKC842','Troy',''),(14,'andersbr@aol.com','36PSRaX4zeSCTmVB','Andrea','Bower');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-31 15:45:01
