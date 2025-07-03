import React, { useState } from 'react';
import { Search, Grid, List, ArrowLeft, GitCompare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import ProductTables from '@/components/ProductTables';
import SizeComparator from '@/components/SizeComparator';
import ProductImageGallery from '@/components/ProductImageGallery';
import VideoExplainer from '@/components/VideoExplainer';

interface Product {
  id: string;
  name: string;
  team: string;
  price: string;
  sport: string;
  category: string[];
  image: string;
  badges: string[];
  images?: string[];
  description?: string;
  features?: string[];
}

// 🔥 PRODUCTOS COMPLETOS - AQUÍ PUEDES AGREGAR MÁS PRODUCTOS
// Archivo: src/components/ProductGallery.tsx - Líneas 20-200
// Para agregar más productos, simplemente agrega nuevos objetos al array 'allProducts'
// Cada producto necesita: id, name, team, price, sport, category (array), image, badges (array)
const allProducts: Product[] = [
  // ⚽ FÚTBOL - HOMBRE - NUEVA TEMPORADA - VERSIÓN JUGADOR
  { id: '1', name: 'Real Madrid Home 24/25', team: 'Real Madrid', price: '$650', sport: 'futbol', category: ['hombre', 'nueva-temporada', 'version-jugador'], image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400', badges: ['Nueva Temporada', 'Versión Jugador'] },
  { id: '2', name: 'Barcelona Home 24/25', team: 'FC Barcelona', price: '$650', sport: 'futbol', category: ['hombre', 'nueva-temporada', 'version-jugador'], image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400', badges: ['Nueva Temporada', 'Versión Jugador'] },
  { id: '3', name: 'Manchester City Home 24/25', team: 'Manchester City', price: '$650', sport: 'futbol', category: ['hombre', 'nueva-temporada', 'version-jugador'], image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400', badges: ['Nueva Temporada', 'Versión Jugador'] },
  { id: '4', name: 'PSG Home 24/25', team: 'Paris Saint-Germain', price: '$650', sport: 'futbol', category: ['hombre', 'nueva-temporada', 'version-jugador'], image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400', badges: ['Nueva Temporada', 'Versión Jugador'] },
  { id: '5', name: 'Chelsea Home 24/25', team: 'Chelsea FC', price: '$650', sport: 'futbol', category: ['hombre', 'nueva-temporada', 'version-jugador'], image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400', badges: ['Nueva Temporada', 'Versión Jugador'] },

  // ⚽ FÚTBOL - HOMBRE - NUEVA TEMPORADA - VERSIÓN AFICIONADO
  { id: '6', name: 'Real Madrid Fan 24/25', team: 'Real Madrid', price: '$450', sport: 'futbol', category: ['hombre', 'nueva-temporada', 'version-aficionado'], image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400', badges: ['Nueva Temporada', 'Versión Aficionado'] },
  { id: '7', name: 'Barcelona Fan 24/25', team: 'FC Barcelona', price: '$450', sport: 'futbol', category: ['hombre', 'nueva-temporada', 'version-aficionado'], image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400', badges: ['Nueva Temporada', 'Versión Aficionado'] },
  { id: '8', name: 'Manchester City Fan 24/25', team: 'Manchester City', price: '$450', sport: 'futbol', category: ['hombre', 'nueva-temporada', 'version-aficionado'], image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400', badges: ['Nueva Temporada', 'Versión Aficionado'] },
  { id: '9', name: 'PSG Fan 24/25', team: 'Paris Saint-Germain', price: '$450', sport: 'futbol', category: ['hombre', 'nueva-temporada', 'version-aficionado'], image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400', badges: ['Nueva Temporada', 'Versión Aficionado'] },
  { id: '10', name: 'Chelsea Fan 24/25', team: 'Chelsea FC', price: '$450', sport: 'futbol', category: ['hombre', 'nueva-temporada', 'version-aficionado'], image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400', badges: ['Nueva Temporada', 'Versión Aficionado'] },

  // ⚽ FÚTBOL - HOMBRE - JERSEYS RETRO - SELECCIONES - VERSIÓN JUGADOR
  { id: '11', name: 'Brasil Retro 02', team: 'Selección Brasil', price: '$580', sport: 'futbol', category: ['hombre', 'jerseys-retro', 'selecciones', 'version-jugador'], image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400', badges: ['Retro', 'Selección', 'Versión Jugador'] },
  { id: '12', name: 'Argentina Retro 86', team: 'Selección Argentina', price: '$580', sport: 'futbol', category: ['hombre', 'jerseys-retro', 'selecciones', 'version-jugador'], image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400', badges: ['Retro', 'Selección', 'Versión Jugador'] },
  { id: '13', name: 'México Retro 98', team: 'Selección México', price: '$580', sport: 'futbol', category: ['hombre', 'jerseys-retro', 'selecciones', 'version-jugador'], image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400', badges: ['Retro', 'Selección', 'Versión Jugador'] },
  { id: '14', name: 'España Retro 10', team: 'Selección España', price: '$580', sport: 'futbol', category: ['hombre', 'jerseys-retro', 'selecciones', 'version-jugador'], image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400', badges: ['Retro', 'Selección', 'Versión Jugador'] },
  { id: '15', name: 'Italia Retro 06', team: 'Selección Italia', price: '$580', sport: 'futbol', category: ['hombre', 'jerseys-retro', 'selecciones', 'version-jugador'], image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400', badges: ['Retro', 'Selección', 'Versión Jugador'] },

  // ⚽ FÚTBOL - HOMBRE - JERSEYS RETRO - SELECCIONES - VERSIÓN AFICIONADO
  { id: '16', name: 'Brasil Retro Fan 02', team: 'Selección Brasil', price: '$380', sport: 'futbol', category: ['hombre', 'jerseys-retro', 'selecciones', 'version-aficionado'], image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400', badges: ['Retro', 'Selección', 'Versión Aficionado'] },
  { id: '17', name: 'Argentina Retro Fan 86', team: 'Selección Argentina', price: '$380', sport: 'futbol', category: ['hombre', 'jerseys-retro', 'selecciones', 'version-aficionado'], image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400', badges: ['Retro', 'Selección', 'Versión Aficionado'] },
  { id: '18', name: 'México Retro Fan 98', team: 'Selección México', price: '$380', sport: 'futbol', category: ['hombre', 'jerseys-retro', 'selecciones', 'version-aficionado'], image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400', badges: ['Retro', 'Selección', 'Versión Aficionado'] },
  { id: '19', name: 'España Retro Fan 10', team: 'Selección España', price: '$380', sport: 'futbol', category: ['hombre', 'jerseys-retro', 'selecciones', 'version-aficionado'], image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400', badges: ['Retro', 'Selección', 'Versión Aficionado'] },
  { id: '20', name: 'Italia Retro Fan 06', team: 'Selección Italia', price: '$380', sport: 'futbol', category: ['hombre', 'jerseys-retro', 'selecciones', 'version-aficionado'], image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400', badges: ['Retro', 'Selección', 'Versión Aficionado'] },

  // ⚽ FÚTBOL - HOMBRE - JERSEYS RETRO - EQUIPOS - VERSIÓN JUGADOR
  { id: '21', name: 'Milan Retro 07', team: 'AC Milan', price: '$580', sport: 'futbol', category: ['hombre', 'jerseys-retro', 'equipos', 'version-jugador'], image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400', badges: ['Retro', 'Equipos', 'Versión Jugador'] },
  { id: '22', name: 'Arsenal Retro 04', team: 'Arsenal FC', price: '$580', sport: 'futbol', category: ['hombre', 'jerseys-retro', 'equipos', 'version-jugador'], image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400', badges: ['Retro', 'Equipos', 'Versión Jugador'] },
  { id: '23', name: 'Inter Retro 10', team: 'Inter Milan', price: '$580', sport: 'futbol', category: ['hombre', 'jerseys-retro', 'equipos', 'version-jugador'], image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400', badges: ['Retro', 'Equipos', 'Versión Jugador'] },
  { id: '24', name: 'Liverpool Retro 05', team: 'Liverpool FC', price: '$580', sport: 'futbol', category: ['hombre', 'jerseys-retro', 'equipos', 'version-jugador'], image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400', badges: ['Retro', 'Equipos', 'Versión Jugador'] },
  { id: '25', name: 'Juventus Retro 96', team: 'Juventus FC', price: '$580', sport: 'futbol', category: ['hombre', 'jerseys-retro', 'equipos', 'version-jugador'], image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400', badges: ['Retro', 'Equipos', 'Versión Jugador'] },

  // ⚽ FÚTBOL - HOMBRE - JERSEYS RETRO - EQUIPOS - VERSIÓN AFICIONADO
  { id: '26', name: 'Milan Retro Fan 07', team: 'AC Milan', price: '$380', sport: 'futbol', category: ['hombre', 'jerseys-retro', 'equipos', 'version-aficionado'], image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400', badges: ['Retro', 'Equipos', 'Versión Aficionado'] },
  { id: '27', name: 'Arsenal Retro Fan 04', team: 'Arsenal FC', price: '$380', sport: 'futbol', category: ['hombre', 'jerseys-retro', 'equipos', 'version-aficionado'], image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400', badges: ['Retro', 'Equipos', 'Versión Aficionado'] },
  { id: '28', name: 'Inter Retro Fan 10', team: 'Inter Milan', price: '$380', sport: 'futbol', category: ['hombre', 'jerseys-retro', 'equipos', 'version-aficionado'], image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400', badges: ['Retro', 'Equipos', 'Versión Aficionado'] },
  { id: '29', name: 'Liverpool Retro Fan 05', team: 'Liverpool FC', price: '$380', sport: 'futbol', category: ['hombre', 'jerseys-retro', 'equipos', 'version-aficionado'], image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400', badges: ['Retro', 'Equipos', 'Versión Aficionado'] },
  { id: '30', name: 'Juventus Retro Fan 96', team: 'Juventus FC', price: '$380', sport: 'futbol', category: ['hombre', 'jerseys-retro', 'equipos', 'version-aficionado'], image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400', badges: ['Retro', 'Equipos', 'Versión Aficionado'] },

  // ⚽ FÚTBOL - HOMBRE - KITS COMPLETOS
  { id: '31', name: 'Real Madrid Kit Completo', team: 'Real Madrid', price: '$850', sport: 'futbol', category: ['hombre', 'kits-completos'], image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400', badges: ['Kit Completo', 'Jersey + Shorts'] },
  { id: '32', name: 'Barcelona Kit Completo', team: 'FC Barcelona', price: '$850', sport: 'futbol', category: ['hombre', 'kits-completos'], image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400', badges: ['Kit Completo', 'Jersey + Shorts'] },
  { id: '33', name: 'PSG Kit Completo', team: 'Paris Saint-Germain', price: '$850', sport: 'futbol', category: ['hombre', 'kits-completos'], image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400', badges: ['Kit Completo', 'Jersey + Shorts'] },
  { id: '34', name: 'Chelsea Kit Completo', team: 'Chelsea FC', price: '$850', sport: 'futbol', category: ['hombre', 'kits-completos'], image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400', badges: ['Kit Completo', 'Jersey + Shorts'] },
  { id: '35', name: 'Manchester City Kit Completo', team: 'Manchester City', price: '$850', sport: 'futbol', category: ['hombre', 'kits-completos'], image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400', badges: ['Kit Completo', 'Jersey + Shorts'] },

  // ⚽ FÚTBOL - MUJERES - VERSIÓN JUGADOR
  { id: '36', name: 'Real Madrid Femenil', team: 'Real Madrid Femenil', price: '$620', sport: 'futbol', category: ['mujeres', 'version-jugador'], image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400', badges: ['Mujeres', 'Versión Jugador'] },
  { id: '37', name: 'Barcelona Femenil', team: 'FC Barcelona Femenil', price: '$620', sport: 'futbol', category: ['mujeres', 'version-jugador'], image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400', badges: ['Mujeres', 'Versión Jugador'] },
  { id: '38', name: 'Chelsea Femenil', team: 'Chelsea FC Women', price: '$620', sport: 'futbol', category: ['mujeres', 'version-jugador'], image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400', badges: ['Mujeres', 'Versión Jugador'] },
  { id: '39', name: 'PSG Femenil', team: 'PSG Féminin', price: '$620', sport: 'futbol', category: ['mujeres', 'version-jugador'], image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400', badges: ['Mujeres', 'Versión Jugador'] },
  { id: '40', name: 'Manchester City Femenil', team: 'Manchester City Women', price: '$620', sport: 'futbol', category: ['mujeres', 'version-jugador'], image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400', badges: ['Mujeres', 'Versión Jugador'] },

  // ⚽ FÚTBOL - MUJERES - VERSIÓN AFICIONADO
  { id: '41', name: 'Real Madrid Femenil Fan', team: 'Real Madrid Femenil', price: '$420', sport: 'futbol', category: ['mujeres', 'version-aficionado'], image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400', badges: ['Mujeres', 'Versión Aficionado'] },
  { id: '42', name: 'Barcelona Femenil Fan', team: 'FC Barcelona Femenil', price: '$420', sport: 'futbol', category: ['mujeres', 'version-aficionado'], image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400', badges: ['Mujeres', 'Versión Aficionado'] },
  { id: '43', name: 'Chelsea Femenil Fan', team: 'Chelsea FC Women', price: '$420', sport: 'futbol', category: ['mujeres', 'version-aficionado'], image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400', badges: ['Mujeres', 'Versión Aficionado'] },
  { id: '44', name: 'PSG Femenil Fan', team: 'PSG Féminin', price: '$420', sport: 'futbol', category: ['mujeres', 'version-aficionado'], image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400', badges: ['Mujeres', 'Versión Aficionado'] },
  { id: '45', name: 'Manchester City Femenil Fan', team: 'Manchester City Women', price: '$420', sport: 'futbol', category: ['mujeres', 'version-aficionado'], image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400', badges: ['Mujeres', 'Versión Aficionado'] },

  // ⚽ FÚTBOL - NIÑOS - KITS COMPLETOS
  { id: '46', name: 'Real Madrid Kit Niños', team: 'Real Madrid', price: '$650', sport: 'futbol', category: ['ninos', 'kits-completos'], image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400', badges: ['Niños', 'Kit Completo'] },
  { id: '47', name: 'Barcelona Kit Niños', team: 'FC Barcelona', price: '$650', sport: 'futbol', category: ['ninos', 'kits-completos'], image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400', badges: ['Niños', 'Kit Completo'] },
  { id: '48', name: 'PSG Kit Niños', team: 'Paris Saint-Germain', price: '$650', sport: 'futbol', category: ['ninos', 'kits-completos'], image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400', badges: ['Niños', 'Kit Completo'] },
  { id: '49', name: 'Chelsea Kit Niños', team: 'Chelsea FC', price: '$650', sport: 'futbol', category: ['ninos', 'kits-completos'], image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400', badges: ['Niños', 'Kit Completo'] },
  { id: '50', name: 'Manchester City Kit Niños', team: 'Manchester City', price: '$650', sport: 'futbol', category: ['ninos', 'kits-completos'], image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400', badges: ['Niños', 'Kit Completo'] },

  // 🏎️ F1 - TIPO POLO
  { id: '51', name: 'Red Bull Racing Polo', team: 'Red Bull Racing', price: '$420', sport: 'f1', category: ['tipo-polo'], image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400', badges: ['F1', 'Tipo Polo'] },
  { id: '52', name: 'Mercedes AMG Polo', team: 'Mercedes AMG', price: '$420', sport: 'f1', category: ['tipo-polo'], image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400', badges: ['F1', 'Tipo Polo'] },
  { id: '53', name: 'Ferrari Polo', team: 'Scuderia Ferrari', price: '$420', sport: 'f1', category: ['tipo-polo'], image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400', badges: ['F1', 'Tipo Polo'] },
  { id: '54', name: 'McLaren Polo', team: 'McLaren F1', price: '$420', sport: 'f1', category: ['tipo-polo'], image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400', badges: ['F1', 'Tipo Polo'] },
  { id: '55', name: 'Alpine Polo', team: 'Alpine F1', price: '$420', sport: 'f1', category: ['tipo-polo'], image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400', badges: ['F1', 'Tipo Polo'] },

  // 🏎️ F1 - TIPO PLAYERA
  { id: '56', name: 'Red Bull Racing Playera', team: 'Red Bull Racing', price: '$380', sport: 'f1', category: ['tipo-playera'], image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400', badges: ['F1', 'Tipo Playera'] },
  { id: '57', name: 'Mercedes AMG Playera', team: 'Mercedes AMG', price: '$380', sport: 'f1', category: ['tipo-playera'], image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400', badges: ['F1', 'Tipo Playera'] },
  { id: '58', name: 'Ferrari Playera', team: 'Scuderia Ferrari', price: '$380', sport: 'f1', category: ['tipo-playera'], image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400', badges: ['F1', 'Tipo Playera'] },
  { id: '59', name: 'McLaren Playera', team: 'McLaren F1', price: '$380', sport: 'f1', category: ['tipo-playera'], image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400', badges: ['F1', 'Tipo Playera'] },
  { id: '60', name: 'Alpine Playera', team: 'Alpine F1', price: '$380', sport: 'f1', category: ['tipo-playera'], image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400', badges: ['F1', 'Tipo Playera'] },

  // 🏎️ F1 - MANGA LARGA
  { id: '61', name: 'Red Bull Racing Manga Larga', team: 'Red Bull Racing', price: '$480', sport: 'f1', category: ['manga-larga'], image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400', badges: ['F1', 'Manga Larga'] },
  { id: '62', name: 'Mercedes AMG Manga Larga', team: 'Mercedes AMG', price: '$480', sport: 'f1', category: ['manga-larga'], image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400', badges: ['F1', 'Manga Larga'] },
  { id: '63', name: 'Ferrari Manga Larga', team: 'Scuderia Ferrari', price: '$480', sport: 'f1', category: ['manga-larga'], image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400', badges: ['F1', 'Manga Larga'] },
  { id: '64', name: 'McLaren Manga Larga', team: 'McLaren F1', price: '$480', sport: 'f1', category: ['manga-larga'], image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400', badges: ['F1', 'Manga Larga'] },
  { id: '65', name: 'Alpine Manga Larga', team: 'Alpine F1', price: '$480', sport: 'f1', category: ['manga-larga'], image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400', badges: ['F1', 'Manga Larga'] },

  // 🏎️ F1 - HOODIES
  { id: '66', name: 'Red Bull Racing Hoodie', team: 'Red Bull Racing', price: '$680', sport: 'f1', category: ['hoodies'], image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400', badges: ['F1', 'Hoodie'] },
  { id: '67', name: 'Mercedes AMG Hoodie', team: 'Mercedes AMG', price: '$680', sport: 'f1', category: ['hoodies'], image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400', badges: ['F1', 'Hoodie'] },
  { id: '68', name: 'Ferrari Hoodie', team: 'Scuderia Ferrari', price: '$680', sport: 'f1', category: ['hoodies'], image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400', badges: ['F1', 'Hoodie'] },
  { id: '69', name: 'McLaren Hoodie', team: 'McLaren F1', price: '$680', sport: 'f1', category: ['hoodies'], image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400', badges: ['F1', 'Hoodie'] },
  { id: '70', name: 'Alpine Hoodie', team: 'Alpine F1', price: '$680', sport: 'f1', category: ['hoodies'], image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400', badges: ['F1', 'Hoodie'] },

  // 🏈 NFL - VERSIÓN DE CAMPO
  { id: '71', name: 'Tom Brady Buccaneers', team: 'Tampa Bay Buccaneers', price: '$750', sport: 'nfl', category: ['version-campo'], image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400', badges: ['NFL', 'Versión de Campo'] },
  { id: '72', name: 'Aaron Rodgers Packers', team: 'Green Bay Packers', price: '$750', sport: 'nfl', category: ['version-campo'], image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400', badges: ['NFL', 'Versión de Campo'] },
  { id: '73', name: 'Josh Allen Bills', team: 'Buffalo Bills', price: '$750', sport: 'nfl', category: ['version-campo'], image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400', badges: ['NFL', 'Versión de Campo'] },
  { id: '74', name: 'Patrick Mahomes Chiefs', team: 'Kansas City Chiefs', price: '$750', sport: 'nfl', category: ['version-campo'], image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400', badges: ['NFL', 'Versión de Campo'] },
  { id: '75', name: 'Lamar Jackson Ravens', team: 'Baltimore Ravens', price: '$750', sport: 'nfl', category: ['version-campo'], image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400', badges: ['NFL', 'Versión de Campo'] },

  // 🏈 NFL - VERSIÓN AFICIONADO
  { id: '76', name: 'Tom Brady Buccaneers Fan', team: 'Tampa Bay Buccaneers', price: '$550', sport: 'nfl', category: ['version-aficionado'], image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400', badges: ['NFL', 'Versión Aficionado'] },
  { id: '77', name: 'Aaron Rodgers Packers Fan', team: 'Green Bay Packers', price: '$550', sport: 'nfl', category: ['version-aficionado'], image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400', badges: ['NFL', 'Versión Aficionado'] },
  { id: '78', name: 'Josh Allen Bills Fan', team: 'Buffalo Bills', price: '$550', sport: 'nfl', category: ['version-aficionado'], image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400', badges: ['NFL', 'Versión Aficionado'] },
  { id: '79', name: 'Patrick Mahomes Chiefs Fan', team: 'Kansas City Chiefs', price: '$550', sport: 'nfl', category: ['version-aficionado'], image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400', badges: ['NFL', 'Versión Aficionado'] },
  { id: '80', name: 'Lamar Jackson Ravens Fan', team: 'Baltimore Ravens', price: '$550', sport: 'nfl', category: ['version-aficionado'], image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400', badges: ['NFL', 'Versión Aficionado'] },

  // ⚾ MLB - VERSIÓN DE CAMPO
  { id: '81', name: 'Dodgers Betts Jersey', team: 'Los Angeles Dodgers', price: '$720', sport: 'mlb', category: ['version-campo'], image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400', badges: ['MLB', 'Versión de Campo'] },
  { id: '82', name: 'Yankees Judge Jersey', team: 'New York Yankees', price: '$720', sport: 'mlb', category: ['version-campo'], image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400', badges: ['MLB', 'Versión de Campo'] },
  { id: '83', name: 'Angels Trout Jersey', team: 'Los Angeles Angels', price: '$720', sport: 'mlb', category: ['version-campo'], image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400', badges: ['MLB', 'Versión de Campo'] },
  { id: '84', name: 'Braves Acuña Jersey', team: 'Atlanta Braves', price: '$720', sport: 'mlb', category: ['version-campo'], image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400', badges: ['MLB', 'Versión de Campo'] },
  { id: '85', name: 'Astros Altuve Jersey', team: 'Houston Astros', price: '$720', sport: 'mlb', category: ['version-campo'], image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400', badges: ['MLB', 'Versión de Campo'] },

  // ⚾ MLB - VERSIÓN AFICIONADO
  { id: '86', name: 'Dodgers Betts Fan Jersey', team: 'Los Angeles Dodgers', price: '$520', sport: 'mlb', category: ['version-aficionado'], image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400', badges: ['MLB', 'Versión Aficionado'] },
  { id: '87', name: 'Yankees Judge Fan Jersey', team: 'New York Yankees', price: '$520', sport: 'mlb', category: ['version-aficionado'], image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400', badges: ['MLB', 'Versión Aficionado'] },
  { id: '88', name: 'Angels Trout Fan Jersey', team: 'Los Angeles Angels', price: '$520', sport: 'mlb', category: ['version-aficionado'], image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400', badges: ['MLB', 'Versión Aficionado'] },
  { id: '89', name: 'Braves Acuña Fan Jersey', team: 'Atlanta Braves', price: '$520', sport: 'mlb', category: ['version-aficionado'], image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400', badges: ['MLB', 'Versión Aficionado'] },
  { id: '90', name: 'Astros Altuve Fan Jersey', team: 'Houston Astros', price: '$520', sport: 'mlb', category: ['version-aficionado'], image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400', badges: ['MLB', 'Versión Aficionado'] },

  // 🏀 NBA - VERSIÓN JUGADOR
  { id: '91', name: 'LeBron James Lakers', team: 'Los Angeles Lakers', price: '$680', sport: 'nba', category: ['version-jugador'], image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400', badges: ['NBA', 'Versión Jugador'] },
  { id: '92', name: 'Stephen Curry Warriors', team: 'Golden State Warriors', price: '$680', sport: 'nba', category: ['version-jugador'], image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400', badges: ['NBA', 'Versión Jugador'] },
  { id: '93', name: 'Giannis Bucks', team: 'Milwaukee Bucks', price: '$680', sport: 'nba', category: ['version-jugador'], image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400', badges: ['NBA', 'Versión Jugador'] },
  { id: '94', name: 'Luka Doncic Mavericks', team: 'Dallas Mavericks', price: '$680', sport: 'nba', category: ['version-jugador'], image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400', badges: ['NBA', 'Versión Jugador'] },
  { id: '95', name: 'Jayson Tatum Celtics', team: 'Boston Celtics', price: '$680', sport: 'nba', category: ['version-jugador'], image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400', badges: ['NBA', 'Versión Jugador'] },

  // 🏀 NBA - VERSIÓN AFICIONADO
  { id: '96', name: 'LeBron James Lakers Fan', team: 'Los Angeles Lakers', price: '$480', sport: 'nba', category: ['version-aficionado'], image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400', badges: ['NBA', 'Versión Aficionado'] },
  { id: '97', name: 'Stephen Curry Warriors Fan', team: 'Golden State Warriors', price: '$480', sport: 'nba', category: ['version-aficionado'], image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400', badges: ['NBA', 'Versión Aficionado'] },
  { id: '98', name: 'Giannis Bucks Fan', team: 'Milwaukee Bucks', price: '$480', sport: 'nba', category: ['version-aficionado'], image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400', badges: ['NBA', 'Versión Aficionado'] },
  { id: '99', name: 'Luka Doncic Mavericks Fan', team: 'Dallas Mavericks', price: '$480', sport: 'nba', category: ['version-aficionado'], image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400', badges: ['NBA', 'Versión Aficionado'] },
  { id: '100', name: 'Jayson Tatum Celtics Fan', team: 'Boston Celtics', price: '$480', sport: 'nba', category: ['version-aficionado'], image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400', badges: ['NBA', 'Versión Aficionado'] }
];

interface ProductGalleryProps {
  selectedSport: string;
  selectedPath: string[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ 
  selectedSport, 
  selectedPath 
}) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showComparator, setShowComparator] = useState(false);
  const [showImageGallery, setShowImageGallery] = useState(false);

  // Filtrar productos según el deporte y la ruta seleccionada
  const filteredProducts = allProducts.filter(product => {
    const matchesSport = product.sport === selectedSport;
    const matchesPath = selectedPath.every(step => product.category.includes(step));
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.team.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesSport && matchesPath && matchesSearch;
  });

  // 🔥 NOMBRES DE DEPORTES - Cambio de "Catálogo" a "Muestrario"
  const getGalleryTitle = () => {
    const sportNames: { [key: string]: string } = {
      futbol: 'Fútbol',
      nfl: 'NFL',
      nba: 'NBA',
      mlb: 'MLB',
      f1: 'Fórmula 1'
    };
    
    return `Muestrario de ${sportNames[selectedSport]}`;
  };

  const isProductFinalLevel = selectedPath.length > 0;

  // Función para manejar click en etiquetas
  const handleBadgeClick = (badge: string, e: React.MouseEvent) => {
    e.stopPropagation();
    
    // Mapear badges a rutas de navegación
    const badgeToPath: { [key: string]: string } = {
      'Versión Jugador': 'version-jugador',
      'Versión Aficionado': 'version-aficionado',
      'Nueva Temporada': 'nueva-temporada',
      'Retro': 'jerseys-retro',
      'Selección': 'selecciones',
      'Equipos': 'equipos',
      'Kit Completo': 'kits-completos',
      'Mujeres': 'mujeres',
      'Niños': 'ninos'
    };

    const pathSegment = badgeToPath[badge];
    if (pathSegment) {
      // Aquí se podría implementar navegación automática
      console.log(`Navegando a: ${pathSegment}`);
    }
  };

  const handleProductClick = (product: Product) => {
    // Expandir imágenes del producto
    const expandedProduct = {
      ...product,
      images: [
        product.image,
        'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800',
        'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800'
      ],
      description: `Jersey oficial de ${product.team}. Confeccionado con tecnología de alto rendimiento que absorbe el sudor para mantenerte seco y cómodo durante el juego.`,
      features: [
        'Tecnología de control de humedad',
        'Diseño oficial del equipo',
        'Corte atlético moderno',
        'Escudo bordado de alta calidad',
        'Materiales premium',
        'Personalización disponible'
      ]
    };
    setSelectedProduct(expandedProduct);
  };

  const handleBackToGallery = () => {
    setSelectedProduct(null);
  };

  const handleWhatsAppContact = (city: string, product: Product) => {
    const message = `Hola, vi este modelo en su muestrario: ${product.name}, ¿me pueden ayudar con más información y opciones disponibles?`;
    const phoneNumber = city === 'mazatlan' ? '526699123456' : '523312345678';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleImageClick = (imageIndex: number) => {
    setShowImageGallery(true);
  };

  // Vista del producto individual
  if (selectedProduct) {
    return (
      <section className="section-padding bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Botón de regreso */}
          <div className="mb-6">
            <Button 
              onClick={handleBackToGallery}
              variant="outline"
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al muestrario
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
            {/* Galería de imágenes mejorada */}
            <div className="space-y-4">
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg cursor-pointer" onClick={() => handleImageClick(0)}>
                <img 
                  src={selectedProduct.images?.[0] || selectedProduct.image} 
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {selectedProduct.images?.slice(1).map((image: string, index: number) => (
                  <div key={index} className="aspect-square rounded-lg overflow-hidden shadow-md cursor-pointer" onClick={() => handleImageClick(index + 1)}>
                    <img 
                      src={image} 
                      alt={`${selectedProduct.name} ${index + 2}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Información del producto */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  {selectedProduct.badges.map((badge: string) => (
                    <Badge 
                      key={badge} 
                      className="text-xs bg-white/90 text-gray-800 cursor-pointer hover:bg-primary hover:text-white transition-colors"
                      onClick={(e) => handleBadgeClick(badge, e)}
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{selectedProduct.name}</h1>
                <p className="text-lg text-gray-600 mb-4">{selectedProduct.team}</p>
                <p className="text-3xl font-bold text-primary">{selectedProduct.price}</p>
              </div>

              <div>
                <p className="text-gray-700 mb-4">{selectedProduct.description}</p>
                <h3 className="text-lg font-semibold mb-3">Características:</h3>
                <ul className="space-y-2">
                  {selectedProduct.features?.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tallas disponibles */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Tallas disponibles</h3>
                <div className="flex flex-wrap gap-2">
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size: string) => (
                    <Button key={size} variant="outline" size="sm">
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <h4 className="font-semibold text-gray-900 mb-2">💡 Este es un muestrario</h4>
                <p className="text-sm text-amber-700 mb-3">
                  Estos son algunos ejemplos de nuestros modelos disponibles. Tenemos acceso a cientos de jerseys adicionales.
                </p>
                <Button 
                  size="sm" 
                  className="bg-amber-600 hover:bg-amber-700"
                  onClick={() => handleWhatsAppContact('mazatlan', selectedProduct)}
                >
                  Consultar más opciones por WhatsApp
                </Button>
              </div>
            </div>
          </div>

          {/* Tablas de tallas y precios para el producto individual */}
          <ProductTables 
            selectedSport={selectedSport}
            selectedPath={selectedPath}
          />
        </div>

        {/* Galería de imágenes en pantalla completa */}
        {showImageGallery && selectedProduct.images && (
          <ProductImageGallery
            images={selectedProduct.images}
            productName={selectedProduct.name}
            onClose={() => setShowImageGallery(false)}
          />
        )}
      </section>
    );
  }

  // Vista de la galería principal
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {getGalleryTitle()}
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            {filteredProducts.length} modelos de muestra disponibles
          </p>
          <p className="text-sm text-amber-600 bg-amber-50 inline-block px-4 py-2 rounded-full border border-amber-200">
            💡 Este es nuestro muestrario - Tenemos cientos de modelos adicionales disponibles
          </p>
        </div>

        {/* Video explicativo para jerseys de fútbol */}
        <VideoExplainer 
          sport={selectedSport} 
          categories={selectedPath}
        />

        {/* Barra de herramientas */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Buscar en el muestrario..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setShowComparator(true)}
                className="flex items-center gap-2"
              >
                <GitCompare className="w-4 h-4" />
                Comparador
              </Button>
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Grid de productos */}
        {filteredProducts.length > 0 ? (
          <>
            <div className={`grid gap-6 mb-12 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1'
            }`}>
              {filteredProducts.map((product) => (
                <Card 
                  key={product.id} 
                  className="jersey-card cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 border-0 shadow-lg"
                  onClick={() => handleProductClick(product)}
                >
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className={`w-full object-cover ${
                        viewMode === 'grid' ? 'h-48' : 'h-32'
                      }`}
                    />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                      {product.badges.map((badge) => (
                        <Badge 
                          key={badge} 
                          className="text-xs bg-white/90 text-gray-800 cursor-pointer hover:bg-primary hover:text-white transition-colors"
                          onClick={(e) => handleBadgeClick(badge, e)}
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-1">{product.team}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-bold text-primary">{product.price}</p>
                      <Button size="sm" variant="ghost" className="text-xs text-primary hover:bg-primary/10">
                        Ver detalles →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Tablas y CTA solo cuando es nivel final */}
            {isProductFinalLevel && (
              <>
                <ProductTables 
                  selectedSport={selectedSport}
                  selectedPath={selectedPath}
                />
                {/* CTA de contacto */}
                <div className="mt-12 text-center bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl border">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    ¿Buscas algo específico?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Este muestrario representa solo una pequeña muestra. Tenemos acceso a cientos de modelos adicionales, equipos y ligas de todo el mundo.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => handleWhatsAppContact('mazatlan', filteredProducts[0])}>
                      📱 WhatsApp Mazatlán
                    </Button>
                    <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white" onClick={() => handleWhatsAppContact('guadalajara', filteredProducts[0])}>
                      📱 WhatsApp Guadalajara
                    </Button>
                  </div>
                </div>
              </>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No se encontraron modelos en el muestrario
            </h3>
            <p className="text-gray-600 mb-4">
              ¡Pero tenemos muchos más modelos disponibles! Contáctanos por WhatsApp para ver opciones adicionales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <Button 
                size="lg"
                onClick={() => handleWhatsAppContact('mazatlan', filteredProducts[0])}
              >
                📱 Consultar más modelos
              </Button>
            </div>
            <Button 
              variant="outline"
              onClick={() => setSearchTerm('')}
            >
              Limpiar búsqueda
            </Button>
          </div>
        )}
      </div>

      {/* Comparador de medidas */}
      <SizeComparator 
        isOpen={showComparator} 
        onClose={() => setShowComparator(false)} 
      />
    </section>
  );
};

export default ProductGallery;
