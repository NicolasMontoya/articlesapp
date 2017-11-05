-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 05-11-2017 a las 01:27:56
-- Versión del servidor: 5.7.18-0ubuntu0.16.04.1
-- Versión de PHP: 7.0.15-0ubuntu0.16.04.4

--
-- Base de datos: `dbarticles`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `article`
CREATE DATABASE  IF NOT EXISTS dbarticles;

USE dbarticles;

CREATE TABLE `article` (
  `id` int(11) NOT NULL,
  `title` varchar(45) NOT NULL,
  `message` varchar(250) NOT NULL,
  `img` varchar(2000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `article`
--

INSERT INTO `article` (`id`, `title`, `message`, `img`) VALUES
(1, 'Oficinas 2017 - Poblado', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate ut est vel sagittis. Donec feugiat maximus dui vitae interdum. Duis vel commodo nibh. Quisque posuere orci felis, a euismod tortor tempus et.', 'uploads/mesa.jpg'),
(2, 'Nuevo Iphone X', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate ut est vel sagittis. Donec feugiat maximus dui vitae interdum. Duis vel commodo nibh. Quisque posuere orci felis, a euismod tortor tempus et.', 'uploads/iphonex.jpg'),
(3, 'Sale Surface Pro 2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate ut est vel sagittis. Donec feugiat maximus dui vitae interdum. Duis vel commodo nibh. Quisque posuere orci felis, a euismod tortor tempus et.', 'uploads/surface.jpg'),
(4, 'Samsung Galaxy S8 - El mas rapido', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate ut est vel sagittis. Donec feugiat maximus dui vitae interdum. Duis vel commodo nibh. Quisque posuere orci felis, a euismod tortor tempus et.', 'uploads/galaxy.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `article`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

