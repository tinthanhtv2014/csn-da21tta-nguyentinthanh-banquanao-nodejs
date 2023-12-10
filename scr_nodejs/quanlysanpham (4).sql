-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 10, 2023 at 04:11 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `quanlysanpham`
--

-- --------------------------------------------------------

--
-- Table structure for table `billproduct`
--

CREATE TABLE `billproduct` (
  `mahd` int(11) NOT NULL,
  `idkh` int(11) NOT NULL,
  `diachiship` varchar(255) NOT NULL,
  `thoigiandat` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `billproduct`
--

INSERT INTO `billproduct` (`mahd`, `idkh`, `diachiship`, `thoigiandat`) VALUES
(1, 1, 'bụi lùm', NULL),
(2, 2, 'trà vinh', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `cateproduct`
--

CREATE TABLE `cateproduct` (
  `loaisp` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cateproduct`
--

INSERT INTO `cateproduct` (`loaisp`) VALUES
('áo dài'),
('áo thun'),
('áo vest'),
('quần dài'),
('quần jean'),
('quần short'),
('quần tây');

-- --------------------------------------------------------

--
-- Table structure for table `companyname`
--

CREATE TABLE `companyname` (
  `tenNSX` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `companyname`
--

INSERT INTO `companyname` (`tenNSX`) VALUES
('aaa'),
('bbb'),
('ccc');

-- --------------------------------------------------------

--
-- Table structure for table `detailbillproduct`
--

CREATE TABLE `detailbillproduct` (
  `mahd` int(11) NOT NULL,
  `id` varchar(255) NOT NULL,
  `soluongsp` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` varchar(10) NOT NULL,
  `tensp` varchar(255) NOT NULL,
  `soluong` int(11) NOT NULL,
  `loaisp` varchar(255) NOT NULL,
  `tenNSX` varchar(255) NOT NULL,
  `giatien` float NOT NULL,
  `mota` text DEFAULT NULL,
  `chitietsanpham` text DEFAULT NULL,
  `kichco` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `tensp`, `soluong`, `loaisp`, `tenNSX`, `giatien`, `mota`, `chitietsanpham`, `kichco`) VALUES
('KP001', 'SIGNATURE HOODIE / WHITE COLOR', 10, 'áo vest', 'bbb', 270000, 'profile_pic-1701924529410.jpeg', '', 'S'),
('KP002', 'SIGNATURE HOODIE / GREEN COLOR', 10, 'áo dài', 'bbb', 280000, 'profile_pic-1701924545279.jpeg', 'không có', 'S'),
('KP003', 'SIGNATURE HOODIE / BROWN COLOR', 10, 'áo dài', 'ccc', 270000, 'profile_pic-1701924557287.jpeg', 'không có', 'S'),
('KP004', 'SIGNATURE HOODIE / BLACK COLOR', 10, 'áo thun', 'ccc', 270000, 'profile_pic-1701924567995.jpeg', 'không có', 'XL'),
('KP005', 'Polo Meowment - Meow Collection / White', 10, 'áo thun', 'ccc', 180000, 'profile_pic-1701924799917.jpg', 'không có', 'S'),
('KP006', 'Polo Outerity Collection TES / Green', 10, 'áo thun', 'aaa', 180000, 'profile_pic-1702091344051.jpg', 'không có', 'XXL'),
('KP007', 'Polo Outerity Collection TES / Light Grey', 10, 'áo thun', 'ccc', 180000, 'profile_pic-1701925021504.jpg', 'không có', 'XXL'),
('KP008', 'Polo Outerity Collection TES / Brown', 10, 'áo dài', 'ccc', 180000, 'profile_pic-1701924878198.jpg', 'không có', 'S'),
('QP001', 'BASIC SHORT / BLACK COLOR', 10, 'quần short', 'ccc', 404000, 'profile_pic-1702179106543.jpg', 'không có', 'S'),
('QP002', 'BASIC SHORT / BROWN COLOR', 10, 'quần short', 'bbb', 304000, 'profile_pic-1702179334928.jpg', 'không có', 'XXL'),
('QP003', 'BASIC SHORT / Cream New', 10, 'quần short', 'ccc', 204000, 'profile_pic-1702178410630.jpg', 'không có', 'XXL'),
('QP004', 'BASIC SHORT / DARK GREEN COLOR', 10, 'quần short', 'aaa', 204000, 'profile_pic-1702178470275.jpg', 'không có', 'S'),
('QP005', 'BASIC SHORT / Gray Pinstrip', 10, 'quần short', 'bbb', 304000, 'profile_pic-1702179352754.jpg', 'không có', 'S'),
('QP006', 'BASIC SHORT / GREY COLOR', 10, 'quần short', 'bbb', 204000, 'profile_pic-1702178527232.jpg', 'không có', 'S'),
('QP007', 'BASIC SHORT / WHITE COLOR', 10, 'quần short', 'ccc', 204000, 'profile_pic-1702178551877.jpg', 'không có', 'S'),
('QP008', 'Short Sporty / Black', 10, 'quần short', 'ccc', 204000, 'profile_pic-1702208174534.jpg', 'không có', 'S'),
('SP001', 'Line Dino Tee / Navy - Cano', 10, 'áo thun', 'aaa', 209000, 'profile_pic-1701922121542.jpg', 'không có', 'XXL'),
('SP002', 'Polo  Collection TES / Black', 10, 'áo thun', 'aaa', 209000, 'profile_pic-1702096495658.jpg', 'không có', 'XL'),
('SP003', 'Line Dino Tee / Cano - Black', 10, 'áo dài', 'aaa', 209000, 'profile_pic-1702096240701.jpg', 'không có', 'XXL'),
('SP004', 'Line Dino Tee / Gray - Cano', 10, 'áo dài', 'aaa', 209000, 'profile_pic-1701922278958.jpg', 'không có', 'S'),
('SP005', 'Baby Tee Line Meow / Black', 10, 'áo dài', 'ccc', 131000, 'profile_pic-1702096748916.jpg', 'không có', 'S'),
('SP006', 'Baby Tee Line Meow / Navy Peony', 10, 'áo thun', 'ccc', 131000, 'profile_pic-1702096740969.jpg', 'aduboyysz', 'S'),
('SP007', 'Baby Tee Line Meow / Sky Blue', 10, 'áo thun', 'bbb', 131000, 'profile_pic-1702096716512.jpg', 'không có', 'S'),
('SP008', 'Baby Tee Line Meow / Pink', 10, 'áo dài', 'bbb', 131000, 'profile_pic-1702096309872.jpg', 'không có', 'S'),
('XP001', 'Giza Double Zip Jacket / Black', 10, 'áo vest', 'ccc', 419000, 'profile_pic-1702177497200.jpg', 'không có', 'S'),
('XP002', 'Winter Night Double Zip Jacket / Black', 10, 'áo vest', 'aaa', 418000, 'profile_pic-1702177537985.jpg', 'không có', 'S'),
('XP003', 'Hoodie Double Zip Blue Fish / Canoli Cream', 10, 'áo vest', 'aaa', 319000, 'profile_pic-1702177587951.jpg', 'không có', 'S'),
('XP004', 'Outerity No Internet / Black', 10, 'áo vest', 'aaa', 309000, 'profile_pic-1702177693396.jpg', 'không có', 'S'),
('XP005', 'Hoodie Zip Snow / White', 10, 'áo vest', 'ccc', 308000, 'profile_pic-1702177806514.jpg', 'không có', 'S'),
('XP006', 'HALF TEE v3.0 / NAVY COLOR', 10, 'áo thun', 'aaa', 164000, 'profile_pic-1702177916141.jpeg', 'không có', 'S'),
('XP007', 'SIGNATURE TEE / Ver 2.0 - Light Grey', 10, 'áo thun', 'bbb', 118000, 'profile_pic-1702177970181.jpg', 'không có', 'S'),
('XP008', 'POLO LITTLE CONTAIN / WHITE COLOR', 10, 'áo thun', 'ccc', 194000, 'profile_pic-1702178023357.jpg', 'không có', 'S');

-- --------------------------------------------------------

--
-- Table structure for table `size`
--

CREATE TABLE `size` (
  `kichco` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `size`
--

INSERT INTO `size` (`kichco`) VALUES
('S'),
('X'),
('XL'),
('XXL');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `idkh` int(11) NOT NULL,
  `hotenkh` varchar(255) NOT NULL,
  `sdt` varchar(10) NOT NULL,
  `diachi` varchar(255) NOT NULL,
  `ngaysinh` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`idkh`, `hotenkh`, `sdt`, `diachi`, `ngaysinh`) VALUES
(1, 'Nguyễn Tín Thành', '0395890398', 'trà vinh', '2000-01-01'),
(2, 'Quốc Bảo', '0123456789', 'ở đâu không biết', '2003-01-01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `billproduct`
--
ALTER TABLE `billproduct`
  ADD PRIMARY KEY (`mahd`),
  ADD KEY `idkh` (`idkh`);

--
-- Indexes for table `cateproduct`
--
ALTER TABLE `cateproduct`
  ADD PRIMARY KEY (`loaisp`);

--
-- Indexes for table `companyname`
--
ALTER TABLE `companyname`
  ADD PRIMARY KEY (`tenNSX`);

--
-- Indexes for table `detailbillproduct`
--
ALTER TABLE `detailbillproduct`
  ADD PRIMARY KEY (`mahd`,`id`),
  ADD KEY `id` (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tenNSX` (`tenNSX`),
  ADD KEY `loaisp` (`loaisp`),
  ADD KEY `kichco` (`kichco`);

--
-- Indexes for table `size`
--
ALTER TABLE `size`
  ADD PRIMARY KEY (`kichco`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`idkh`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `billproduct`
--
ALTER TABLE `billproduct`
  MODIFY `mahd` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52148;

--
-- AUTO_INCREMENT for table `detailbillproduct`
--
ALTER TABLE `detailbillproduct`
  MODIFY `mahd` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52148;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `idkh` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59610;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `billproduct`
--
ALTER TABLE `billproduct`
  ADD CONSTRAINT `billproduct_ibfk_1` FOREIGN KEY (`idkh`) REFERENCES `users` (`idkh`);

--
-- Constraints for table `detailbillproduct`
--
ALTER TABLE `detailbillproduct`
  ADD CONSTRAINT `detailbillproduct_ibfk_1` FOREIGN KEY (`id`) REFERENCES `product` (`id`),
  ADD CONSTRAINT `detailbillproduct_ibfk_2` FOREIGN KEY (`mahd`) REFERENCES `billproduct` (`mahd`);

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_2` FOREIGN KEY (`tenNSX`) REFERENCES `companyname` (`tenNSX`),
  ADD CONSTRAINT `product_ibfk_3` FOREIGN KEY (`loaisp`) REFERENCES `cateproduct` (`loaisp`),
  ADD CONSTRAINT `product_ibfk_4` FOREIGN KEY (`kichco`) REFERENCES `size` (`kichco`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
