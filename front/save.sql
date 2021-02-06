--
-- PostgreSQL database dump
--

-- Dumped from database version 12.5 (Ubuntu 12.5-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.5 (Ubuntu 12.5-0ubuntu0.20.04.1)

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

DROP DATABASE localhub;
--
-- Name: localhub; Type: DATABASE; Schema: -; Owner: localhub
--

CREATE DATABASE localhub WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';


ALTER DATABASE localhub OWNER TO localhub;

\connect localhub

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

--
-- Name: pgcrypto; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;


--
-- Name: EXTENSION pgcrypto; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';


--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: comments; Type: TABLE; Schema: public; Owner: localhub
--

CREATE TABLE public.comments (
    id integer NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    content text NOT NULL,
    project_id integer,
    author integer
);


ALTER TABLE public.comments OWNER TO localhub;

--
-- Name: comments_id_seq; Type: SEQUENCE; Schema: public; Owner: localhub
--

ALTER TABLE public.comments ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.comments_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: favorites; Type: TABLE; Schema: public; Owner: localhub
--

CREATE TABLE public.favorites (
    id integer NOT NULL,
    user_id integer,
    project_id integer
);


ALTER TABLE public.favorites OWNER TO localhub;

--
-- Name: favorites_id_seq; Type: SEQUENCE; Schema: public; Owner: localhub
--

ALTER TABLE public.favorites ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.favorites_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: needs; Type: TABLE; Schema: public; Owner: localhub
--

CREATE TABLE public.needs (
    id integer NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    completed boolean DEFAULT false,
    project_id integer
);


ALTER TABLE public.needs OWNER TO localhub;

--
-- Name: needs_id_seq; Type: SEQUENCE; Schema: public; Owner: localhub
--

ALTER TABLE public.needs ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.needs_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: projects; Type: TABLE; Schema: public; Owner: localhub
--

CREATE TABLE public.projects (
    id integer NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    expiration_date timestamp with time zone NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    location text NOT NULL,
    lat double precision NOT NULL,
    long double precision NOT NULL,
    image text,
    file text,
    archived boolean DEFAULT false,
    author integer
);


ALTER TABLE public.projects OWNER TO localhub;

--
-- Name: projects_id_seq; Type: SEQUENCE; Schema: public; Owner: localhub
--

ALTER TABLE public.projects ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.projects_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: users; Type: TABLE; Schema: public; Owner: localhub
--

CREATE TABLE public.users (
    id integer NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    avatar text,
    activated boolean DEFAULT true
);


ALTER TABLE public.users OWNER TO localhub;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: localhub
--

ALTER TABLE public.users ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: comments; Type: TABLE DATA; Schema: public; Owner: localhub
--

COPY public.comments (id, created_at, updated_at, content, project_id, author) FROM stdin;
1	2021-02-05 14:03:16.680718+01	2021-02-05 14:03:16.680718+01	ceci est un commentaire	1	1
2	2021-02-05 14:03:16.680718+01	2021-02-05 14:03:16.680718+01	ca a lair bien, je peux venir avec ma ptite soeur?	2	1
3	2021-02-05 14:03:16.680718+01	2021-02-05 14:03:16.680718+01	oui par contre le repas nest pas assuré	2	2
\.


--
-- Data for Name: favorites; Type: TABLE DATA; Schema: public; Owner: localhub
--

COPY public.favorites (id, user_id, project_id) FROM stdin;
2	2	3
16	5	5
17	5	1
18	5	6
19	3	5
20	3	2
21	3	3
22	3	6
26	1	3
27	1	7
\.


--
-- Data for Name: needs; Type: TABLE DATA; Schema: public; Owner: localhub
--

COPY public.needs (id, created_at, updated_at, title, description, completed, project_id) FROM stdin;
1	2021-02-05 14:03:16.680718+01	2021-02-05 14:03:16.680718+01	5 developpeurs	Necessite 5 fantastiques developpeurs  en JS	f	1
2	2021-02-05 14:03:16.680718+01	2021-02-05 14:03:16.680718+01	1 architecte	Concevoir une étude de faisabilité du projet sur le site la Vallée	t	2
3	2021-02-05 14:03:16.680718+01	2021-02-05 14:03:16.680718+01	1 mettreur	Réaliser les mesures necessaires lors de la construction	f	2
4	2021-02-05 14:03:16.680718+01	2021-02-05 14:03:16.680718+01	1 chargé de travaux	Prendre en charge la direction d’une équipe de 90 personnes chargée de la réalisation des travaux	f	2
5	2021-02-05 14:03:16.680718+01	2021-02-05 14:03:16.680718+01	3 jardiniers paysagistes	L’équipe de jardinier sera chargée de la réalisation du jardin	t	3
6	2021-02-05 14:03:16.680718+01	2021-02-05 14:03:16.680718+01	1 maçon	Construire les bacs necessaires selon les plans de l’architecte	t	3
9	2021-02-05 17:30:34.539343+01	2021-02-05 17:30:34.539343+01	Chargé-e-s d’accompagnement socio-professionnel	accueil,\nl’information, l’orientation et l’accompagnement de personnes en insertion. Ils travaillent en partenariat\navec d’autres structures (services sociaux, emploi, formation, logement, santé, services administratifs…)	f	5
12	2021-02-05 17:40:56.435141+01	2021-02-05 17:40:56.435141+01	Un développeur back end - Node js	Langage: Typescript\nBackend: Node.js \nFrontend : Angular9 (core, material, @ngrx)\nBase de données relationnelle : PostgreSQL\nEnvironnement de déploiement : Docker / Docker Swarm / AWS	f	6
11	2021-02-05 17:38:58.826793+01	2021-02-05 17:38:58.826793+01	Un développeur front end : REACT	Concevoir et développer les applications en React.JS\nDévelopper les éléments graphiques\nMise en place de l’intégration continue\nOptimisation du code\nParticiper à des POC technologiques\nTravailler en méthode Agile (Scrum)	t	6
10	2021-02-05 17:32:22.145161+01	2021-02-05 17:32:22.145161+01	Encadrant-e-s techniques	Assurer la formation en situation de production, gérer l'organisation et le suivi de la production et coordonner avec des professionnels chargés de l'accompagnement social et socioprofessionnel (hors AI et ETTI)	t	5
13	2021-02-06 18:08:18.010938+01	2021-02-06 18:08:18.010938+01	Une / un associé	Une ou un professionnel de la couture souhaitant s'associer pour démarrer un petit atelier de couture et retouche indépendant.	f	7
\.


--
-- Data for Name: projects; Type: TABLE DATA; Schema: public; Owner: localhub
--

COPY public.projects (id, created_at, updated_at, expiration_date, title, description, location, lat, long, image, file, archived, author) FROM stdin;
3	2021-02-05 14:03:16.680718+01	2021-02-05 14:03:16.680718+01	2020-07-14 12:00:00+02	Potager Urbain	L’agriculture urbaine est en plein essor et ce, partout dans le monde. Les agglomérations se sont progressivement vidées de leur maraîchers. C’est dans ce contexte qu’ECOVEGETAL a développé un système permettant de reconquérir ce territoire perdu au profit de l’urbanisation.\nL’intérêt est de raccourcir le circuit entre consommateur et producteur, de fournir de la nourriture localement et de revaloriser des variétés anciennes (pommes, tomates, salades …). L’agriculture urbaine est aussi source d’emplois, de lieux de partage et de convivialité comme peuvent l’être un parc ou un jardin.	Nantes	47.2272	-1.5631	/project-images/36239-potager-urbain-ouvre-sur-toit-hotel-parisien-recolter-propres-produits-saison.webp	\N	t	4
2	2021-02-05 14:03:16.680718+01	2021-02-05 14:03:16.680718+01	2021-03-20 12:00:00+01	Crèche de Saint-Herblain	Les bâtiments en direction des scolaires ou de la petite enfance sont un terrain de prédilection de l’agence et un volet important de son activité. Construits ou réhabilités, souvent dans des communes de moins de 1 500 habitants, ils répondent aux besoins d’une population en augmentation. Lieu de vie principal des communes ou des quartiers, nos constructions dans ce domaine respectent et valorisent, dans un souci d’intégration la nature et l’histoire du pays où ils sont implantés. Tous nos groupes scolaires intègrent (en plus des espaces destinés aux différentes classes d’âge) des espaces...	Saint-Herblain	47.2259	-1.6394	/project-images/2014-Narbonne-060-Patio-central-Architecte-Pascale-Deffayet_cr1-1170x539.jpg	\N	t	1
5	2021-02-05 17:27:21.676005+01	2021-02-05 17:27:21.676005+01	2021-05-02 00:00:00+02	Une entreprise de réinsertion par le travail 	Une entreprise d’insertion est une entreprise ayant une finalité sociale et concourant à l'insertion sociale et professionnelle de personnes rencontrant des difficultés particulières.	COUERON	47.2115054	-1.7271466	/project-images/290f28ba-67d1-11eb-8f12-00155d45730d.jpg	\N	f	1
1	2021-02-05 14:03:16.680718+01	2021-02-05 14:03:16.680718+01	2021-02-08 12:00:00+01	Local-hub	Developper une super appli qui permettra de mettre en relation les acteurs d’un périmètre géographique de même intérêt afin de faciliter le démarrage de projets	Coueron	47.230998	-1.72929	/project-images/809e3744-688d-11eb-921d-00155d457bc4.PNG	\N	f	3
7	2021-02-06 18:06:39.712555+01	2021-02-06 18:06:39.712555+01	2021-06-02 00:00:00+02	Un atelier de couture	Dans le métier depuis 15 ans je souhaites démarrer un petit atelier de couture et retouches indépendant. \nJe cherche un petit locale et une/un associé(e) pour démarrer l'activité.	Saint Herblain	47.2233007	-1.6346964	/project-images/f64fb336-689d-11eb-ab33-00155d457bc4.jpg	\N	f	3
6	2021-02-05 17:37:27.870241+01	2021-02-05 17:37:27.870241+01	2021-02-05 00:00:00+01	Une plateforme de mise en relation	Mettre en liaison ou en contact deux personnes ou un groupe de personnes par différents moyens. La mise en relation peut s'effectuer via un formulaire de contact, une demande de devis, une mise en relation avec un numéro surtaxé, un appel d'offre, par messagerie interne sur la plateforme, par prise rendez-vous, par un achat d'un produit ou d'un service, billetterie en ligne, cagnotte en ligne et par toute autres actions.	Paris	48.8566969	2.3514616	/project-images/35e7ce3e-67d1-11eb-b1db-00155d45730d.jpg	\N	f	1
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: localhub
--

COPY public.users (id, created_at, updated_at, name, email, password, avatar, activated) FROM stdin;
2	2021-02-05 14:03:16.680718+01	2021-02-05 14:03:16.680718+01	Bruce Reynolds	bruce@reynolds	$1$6xZOMgbt$4smIIyMstyUXmdg3MWuEH.	\N	t
3	2021-02-05 14:03:16.680718+01	2021-02-05 14:03:16.680718+01	Johann Kehl	johannkehl@oclock.com	$1$ubCygl98$uE9NpJEj5Qa8IcT0JukkL0	\N	t
4	2021-02-05 14:03:16.680718+01	2021-02-05 14:03:16.680718+01	Johanna Rolland	johannarolland@oclock.com	$1$SffpiJPb$6cYSnwciShx.ji.Uec9gI.	\N	t
1	2021-02-05 14:03:16.680718+01	2021-02-05 14:03:16.680718+01	Michel	michel@michel	$1$trs/kSfp$EbQW0y7mXJPWmJbQNCHzT.	/avatars/b6489b74-67ce-11eb-8ef7-00155d45730d.jpg	t
5	2021-02-05 17:44:35.534185+01	2021-02-05 17:44:35.534185+01	Albert	albert.dupont@domai.fr	$1$8hjLwfxQ$E9e8oecmQKzBEzAAUmHFU1	/avatars/b1e1276a-67d1-11eb-919a-00155d45730d.PNG	t
\.


--
-- Name: comments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: localhub
--

SELECT pg_catalog.setval('public.comments_id_seq', 3, true);


--
-- Name: favorites_id_seq; Type: SEQUENCE SET; Schema: public; Owner: localhub
--

SELECT pg_catalog.setval('public.favorites_id_seq', 27, true);


--
-- Name: needs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: localhub
--

SELECT pg_catalog.setval('public.needs_id_seq', 16, true);


--
-- Name: projects_id_seq; Type: SEQUENCE SET; Schema: public; Owner: localhub
--

SELECT pg_catalog.setval('public.projects_id_seq', 8, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: localhub
--

SELECT pg_catalog.setval('public.users_id_seq', 6, true);


--
-- Name: comments comments_pkey; Type: CONSTRAINT; Schema: public; Owner: localhub
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_pkey PRIMARY KEY (id);


--
-- Name: favorites favorites_pkey; Type: CONSTRAINT; Schema: public; Owner: localhub
--

ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_pkey PRIMARY KEY (id);


--
-- Name: needs needs_pkey; Type: CONSTRAINT; Schema: public; Owner: localhub
--

ALTER TABLE ONLY public.needs
    ADD CONSTRAINT needs_pkey PRIMARY KEY (id);


--
-- Name: projects projects_pkey; Type: CONSTRAINT; Schema: public; Owner: localhub
--

ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: localhub
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: localhub
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: comments comments_author_fkey; Type: FK CONSTRAINT; Schema: public; Owner: localhub
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_author_fkey FOREIGN KEY (author) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: comments comments_project_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: localhub
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_project_id_fkey FOREIGN KEY (project_id) REFERENCES public.projects(id) ON DELETE CASCADE;


--
-- Name: favorites favorites_project_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: localhub
--

ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_project_id_fkey FOREIGN KEY (project_id) REFERENCES public.projects(id) ON DELETE CASCADE;


--
-- Name: favorites favorites_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: localhub
--

ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: needs needs_project_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: localhub
--

ALTER TABLE ONLY public.needs
    ADD CONSTRAINT needs_project_id_fkey FOREIGN KEY (project_id) REFERENCES public.projects(id) ON DELETE CASCADE;


--
-- Name: projects projects_author_fkey; Type: FK CONSTRAINT; Schema: public; Owner: localhub
--

ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_author_fkey FOREIGN KEY (author) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

