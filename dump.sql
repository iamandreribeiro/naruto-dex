--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: ninjas; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.ninjas (
    id integer NOT NULL,
    name text NOT NULL,
    clan text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    jutsu text NOT NULL
);


--
-- Name: ninjas_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.ninjas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: ninjas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.ninjas_id_seq OWNED BY public.ninjas.id;


--
-- Name: ninjas id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ninjas ALTER COLUMN id SET DEFAULT nextval('public.ninjas_id_seq'::regclass);


--
-- Data for Name: ninjas; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.ninjas VALUES (6, 'Itachi Uchiha', 'Uchiha', '2023-01-23 14:47:15.564803', 'Amaterasu');
INSERT INTO public.ninjas VALUES (8, 'Minato Namikaze', 'Namikaze', '2023-01-23 14:47:46.704304', 'Flying Thunder God');
INSERT INTO public.ninjas VALUES (9, 'Sasuke Uchiha', 'Uchiha', '2023-01-23 14:51:43.532998', 'Amenotejikara');
INSERT INTO public.ninjas VALUES (7, 'Naruto Uzumaki', 'Uzumaki', '2023-01-23 14:47:26.891506', 'Rasenshuriken');
INSERT INTO public.ninjas VALUES (11, 'Neji Hyuuga', 'Hyuuga', '2023-01-23 15:39:16.177108', 'Gentle Fist');


--
-- Name: ninjas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.ninjas_id_seq', 11, true);


--
-- Name: ninjas ninjas_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ninjas
    ADD CONSTRAINT ninjas_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

