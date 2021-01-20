-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Окт 17 2020 г., 14:49
-- Версия сервера: 10.3.22-MariaDB
-- Версия PHP: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `fh`
--

-- --------------------------------------------------------

--
-- Структура таблицы `exercises`
--

CREATE TABLE `exercises` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `techniqueDescription` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Структура таблицы `meal_planer_infos`
--

CREATE TABLE `meal_planer_infos` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `targetProtein` float DEFAULT NULL,
  `targetFats` float DEFAULT NULL,
  `targetCarb` float DEFAULT NULL,
  `targetWeight` float DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `imgUrl` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Структура таблицы `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `weight` float DEFAULT NULL,
  `protein` float DEFAULT NULL,
  `fats` float DEFAULT NULL,
  `carb` float DEFAULT NULL,
  `kkal` float DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `favorite` tinyint(1) DEFAULT NULL,
  `userProduct` tinyint(1) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `products`
--

INSERT INTO `products` (`id`, `title`, `weight`, `protein`, `fats`, `carb`, `kkal`, `category`, `favorite`, `userProduct`, `userId`, `createdAt`, `updatedAt`) VALUES
(1, 'Гречневая крупа (ядрица)', 100, 12.6, 3.3, 62.1, 313, 'Крупы, злаки', 0, 1, 1, '2020-09-01 16:42:41', '2020-09-30 17:58:22'),
(2, 'Куриная грудка', 100, 23.6, 1.9, 0.4, 113, 'Мясо', 0, 1, 1, '2020-09-08 17:00:31', '2020-09-30 17:58:22'),
(4, 'Рис белый', 100, 6.7, 0.7, 78.9, 344, 'Крупы, злаки', 0, 1, 1, '2020-10-03 10:14:19', '2020-10-07 04:42:55'),
(5, 'Макароны (высший сорт)', 100, 10.4, 1.1, 69.7, 337, 'Мука, продукты из муки', 0, 1, 1, '2020-10-03 10:15:46', '2020-10-07 04:42:55'),
(6, 'Чечевица', 100, 24, 1.5, 42.7, 284, 'Крупы, злаки', 0, 1, 1, '2020-10-03 10:17:44', '2020-10-07 04:42:56'),
(7, 'Яблоко', 100, 0.4, 0.4, 9.8, 47, 'Фрукты, ягоды, сухофрукты', 0, 1, 1, '2020-10-03 10:18:23', '2020-10-03 10:18:23'),
(8, 'Банан', 100, 1.5, 0.2, 21.8, 95, 'Фрукты, ягоды, сухофрукты', 0, 1, 1, '2020-10-03 10:18:56', '2020-10-17 10:02:15'),
(9, 'Груша', 100, 0.4, 0.3, 10.9, 42, 'Фрукты, ягоды, сухофрукты', 0, 1, 1, '2020-10-03 10:20:05', '2020-10-03 10:20:05'),
(10, 'Мука пшеничная', 100, 9.2, 1.2, 74.9, 342, 'Мука, продукты из муки', 0, 1, 1, '2020-10-03 10:20:55', '2020-10-03 10:20:55'),
(11, 'Яйцо куриное', 100, 12.7, 10.9, 0.7, 157, 'Яйца, яичные продукты', 0, 1, 1, '2020-10-03 10:21:44', '2020-10-03 10:21:44'),
(12, 'Морковь', 100, 1.3, 0.1, 6.9, 32, 'Овощи, овощные продукты', 0, 1, 1, '2020-10-03 10:22:35', '2020-10-03 10:22:35'),
(13, 'Лук (репчатый)', 100, 1.4, 0, 10.4, 47, 'Зелень, травы, листья, салаты', 0, 1, 1, '2020-10-03 10:23:25', '2020-10-03 10:25:37'),
(14, 'Лук (красный)', 100, 1.4, 0, 9.1, 42, 'Зелень, травы, листья, салаты', 0, 1, 1, '2020-10-03 10:24:06', '2020-10-03 10:25:30'),
(15, 'Лук (зеленый)', 100, 1.3, 0, 4.6, 19, 'Зелень, травы, листья, салаты', 0, 1, 1, '2020-10-03 10:24:47', '2020-10-03 10:25:19'),
(16, 'Капуста белокочанная', 100, 1.8, 0.1, 4.7, 27, 'Овощи, овощные продукты', 0, 1, 1, '2020-10-03 10:26:24', '2020-10-03 10:26:24'),
(17, 'Картофель', 100, 2, 0.4, 16.1, 76, 'Овощи, овощные продукты', 0, 1, 1, '2020-10-03 10:27:37', '2020-10-03 10:27:37'),
(18, 'Чеснок', 100, 6.5, 0.5, 29.9, 143, 'Овощи, овощные продукты', 0, 1, 1, '2020-10-03 10:28:46', '2020-10-03 10:28:46');

-- --------------------------------------------------------

--
-- Структура таблицы `recipes`
--

CREATE TABLE `recipes` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `cookingTimes` int(11) DEFAULT NULL,
  `cookingSkill` int(11) DEFAULT NULL,
  `portions` int(11) DEFAULT NULL,
  `likes` int(11) DEFAULT NULL,
  `dislikes` int(11) DEFAULT NULL,
  `shares` int(11) DEFAULT NULL,
  `marks` varchar(255) DEFAULT NULL,
  `media` varchar(255) DEFAULT NULL,
  `products` varchar(255) DEFAULT NULL,
  `cookingSteps` varchar(255) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `recipes`
--

INSERT INTO `recipes` (`id`, `title`, `description`, `cookingTimes`, `cookingSkill`, `portions`, `likes`, `dislikes`, `shares`, `marks`, `media`, `products`, `cookingSteps`, `userId`, `createdAt`, `updatedAt`) VALUES
(1, 'Рождественский кекс', 'Низкокалорийный рецепт кекса на основе сывороточного протеина', 45, 3, 6, 34815, 5268, 8125, '[\"Низкокалорийное\", \"Без ГМО\", \"Для снижения веса\", \"Десерт\"]', '[\"/uploads/recipes/1/recipe-01.jpg\"]', '[{\"id\":1,\"weight\":100},{\"id\":2,\"weight\":200}]', '[{\"image\":\"/uploads/recipes/1/recipe-01.jpg\",\"description\":\"step 1\"},{\"image\":\"/uploads/recipes/1/recipe-01.jpg\",\"description\":\"step 2. long text description\"}]', NULL, '2020-09-07 21:26:01', '2020-09-07 21:26:01');

-- --------------------------------------------------------

--
-- Структура таблицы `training_programs`
--

CREATE TABLE `training_programs` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `trainingDays` varchar(255) DEFAULT NULL,
  `addedMarks` varchar(255) DEFAULT NULL,
  `likes` int(11) DEFAULT NULL,
  `dislikes` int(11) DEFAULT NULL,
  `shares` int(11) DEFAULT NULL,
  `views` int(11) DEFAULT NULL,
  `addToFavorite` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `exercises`
--
ALTER TABLE `exercises`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `meal_planer_infos`
--
ALTER TABLE `meal_planer_infos`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `recipes`
--
ALTER TABLE `recipes`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `training_programs`
--
ALTER TABLE `training_programs`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `exercises`
--
ALTER TABLE `exercises`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `meal_planer_infos`
--
ALTER TABLE `meal_planer_infos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT для таблицы `recipes`
--
ALTER TABLE `recipes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `training_programs`
--
ALTER TABLE `training_programs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
