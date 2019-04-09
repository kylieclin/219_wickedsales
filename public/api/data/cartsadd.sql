-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 08, 2019 at 08:20 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `c2.19wickedsales`
--

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `test_multi_sets` ()  begin
        select user() as first_col;
        select user() as first_col, now() as second_col;
        select user() as first_col, now() as second_col, now() as third_col;
        end$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `item_count` smallint(5) UNSIGNED NOT NULL,
  `total_price` mediumint(8) UNSIGNED NOT NULL,
  `created` datetime NOT NULL,
  `users_id` bigint(20) UNSIGNED NOT NULL,
  `changed` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `carts`
--

INSERT INTO `carts` (`id`, `item_count`, `total_price`, `created`, `users_id`, `changed`) VALUES
(1, 1, 2000, '2019-04-08 10:59:42', 1, '2019-04-08 17:59:42');

-- --------------------------------------------------------

--
-- Table structure for table `cart_items`
--

CREATE TABLE `cart_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `products_id` mediumint(8) UNSIGNED NOT NULL,
  `quantity` smallint(5) UNSIGNED NOT NULL,
  `carts_id` mediumint(8) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `cart_items`
--

INSERT INTO `cart_items` (`id`, `products_id`, `quantity`, `carts_id`) VALUES
(1, 1, 1, 1),
(2, 2, 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `products_id` mediumint(8) UNSIGNED NOT NULL,
  `url` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `products_id`, `url`) VALUES
(1, 1, 'images/Wicked-Logo.jpg'),
(2, 3, 'images/wicked_shoes.jpg'),
(3, 3, 'images/wicked_shoes2.jpg'),
(4, 4, 'images/wicked_brick.jpg'),
(5, 4, 'images/wicked_brick2.jpg'),
(6, 2, 'images/wicked_poster.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `price` bigint(20) UNSIGNED NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `misc_details` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `description`, `misc_details`) VALUES
(1, 'Wicked Thing', 2000, 'This product will solve all of your ills, cure famine, and make you look more like bradd pitt, regardless if you are male or female', '{\"height\":\"20cm\",\"width\":\"15cm\",\"weight\":4.2,\"manufacturer\":\"Therbal\"}'),
(2, 'Wicked Clock', 3000, 'yayayayayaayayayayayayayaya,yayayayayaayayayayayayayaya,yayayayayaayayayayayayayaya', '{\"height\":\"25cm\",\"width\":\"35cm\",\"weight\":2,\"manufacturer\":\"oldclock\"}'),
(3, 'Wicked Shoes', 42150, 'Super fast shoes that you want which can make you fly to the moon.', ' {\"avaiblesize\":[5,6,7.5,8,10],\r\n\"weight\": 1,\r\n\"manufacturer\": \"smell shoes\"\r\n		}'),
(4, 'Wicked Brick', 525, 'its brick brick brick and brick! its brick brick brick and brick! its brick brick brick and brick! its brick brick brick and brick! its brick brick brick and brick! its brick brick brick and brick! ', ' {\"color\":[\"yellow\",\"red\",\"maroon\"],\r\n\"weight\": 1,\r\n\"height\": 5.1,\r\n\"usage\": \'sleep, build house\'\r\n\"manufacturer\": \"big brick\"\r\n		}');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(150) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`) VALUES
(1, 'Vivian', 'viviv@givivifsf.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cart_items`
--
ALTER TABLE `cart_items`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `cart_product` (`carts_id`,`products_id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `cart_items`
--
ALTER TABLE `cart_items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
