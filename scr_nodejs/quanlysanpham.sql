-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 03, 2023 at 11:21 AM
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
  `thoigiandat` date DEFAULT NULL
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

--
-- Dumping data for table `detailbillproduct`
--

INSERT INTO `detailbillproduct` (`mahd`, `id`, `soluongsp`) VALUES
(1, 'SP007', 10);

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
  `giatien` varchar(255) NOT NULL,
  `mota` text DEFAULT NULL,
  `chitietsanpham` varchar(255) DEFAULT NULL,
  `kichco` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `tensp`, `soluong`, `loaisp`, `tenNSX`, `giatien`, `mota`, `chitietsanpham`, `kichco`) VALUES
('SP001', 'Áo dài', 20, 'áo dài', 'aaa', '50000', 'profile_pic-1701009619146.jpg', 'vãi l luôn đầu cắt moii', 'S'),
('SP002', 'Quần ', 10, 'áo thun', 'bbb', '130000', 'profile_pic-1700925677639.jpg', 'vãi l luôn đầu cắt moii', 'X'),
('SP003', 'áo thun nam đẹp', 20, 'áo thun', 'aaa', '130000', 'profile_pic-1700732120198.jpg', 'vãi đạn luôn đầu bồi', 'XL'),
('SP004', 'áo thun nam ádklashdophasds', 10, 'áo dài', 'aaa', '50000', 'profile_pic-1701265398626.png', 'vãi l luôn đầu cắt moiiiádasdasdasd', 'S'),
('SP005', 'áo', 10, 'áo dài', 'aaa', '100000', 'profile_pic-1701340460181.jpg', 'aduboyysz', 'S'),
('SP006', 'áo', 10, 'áo dài', 'aaa', '100000', 'profile_pic-1701354288069.jpg', 'aduboyysz', 'S'),
('SP007', 'Quần tây', 20, 'áo dài', 'ccc', '130000', 'profile_pic-1701339730275.jpg', 'vãi mèo luôn đầu card', 'XL'),
('SP008', 'áo thun nam đẹp', 20, 'áo dài', 'aaa', '150000', 'profile_pic-1701263609841.jpg', 'vãi l luôn đầu cắt moiii', 'XL'),
('SP009', 'áo', 10, 'áo dài', 'aaa', '100000', 'profile_pic-1701526221378.jpg', 'aduboyysz', 'S'),
('SP010', 'áo', 10, 'áo dài', 'aaa', '100000', 'profile_pic-1701526299037.jpg', 'aduboyysz', 'S'),
('SP011', 'áo', 10, 'áo dài', 'aaa', '100000', 'profile_pic-1701526232745.jpg', 'aduboyysz', 'S'),
('SP012', 'áo', 10, 'áo dài', 'aaa', '100000', 'profile_pic-1701526280533.jpg', 'aduboyysz', 'S'),
('SP013', 'áo', 10, 'áo dài', 'aaa', '100000', 'profile_pic-1701526244741.jpg', 'aduboyysz', 'S'),
('SP014', 'áo', 10, 'áo dài', 'aaa', '100000', 'profile_pic-1701526256654.jpg', 'aduboyysz', 'S'),
('SP015', 'áo', 10, 'áo dài', 'aaa', '100000', 'profile_pic-1701526321411.jpg', 'aduboyysz', 'S'),
('SP016', 'áo', 10, 'áo dài', 'aaa', '100000', 'profile_pic-1701526332490.jpg', 'aduboyysz', 'S'),
('SP017', 'áo', 10, 'áo dài', 'aaa', '100000', 'profile_pic-1701526361750.jpg', 'aduboyysz', 'S'),
('SP018', 'áo', 10, 'áo dài', 'aaa', '100000', 'profile_pic-1701528186975.jpg', 'aduboyysz', 'S'),
('SP019', 'áo', 10, 'áo dài', 'aaa', '100000', 'profile_pic-1701528202149.jpg', 'aduboyysz', 'S'),
('SP020', 'áo', 10, 'áo dài', 'aaa', '100000', 'profile_pic-1701528217299.jpg', 'aduboyysz', 'S');

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
(2, 'Quốc Bảo', '0123456789', 'ở đâu không biết', '2003-01-01'),
(3, 'đâsasd', 'ádasdad', 'adadđ', NULL),
(4, 'sadsad', 'ádasdad', 'adadđ', NULL);

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
  MODIFY `mahd` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `detailbillproduct`
--
ALTER TABLE `detailbillproduct`
  MODIFY `mahd` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `idkh` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

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
