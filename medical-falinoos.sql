PGDMP     #                    z           medical-falinos    14.4    14.4     ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    24688    medical-falinos    DATABASE     u   CREATE DATABASE "medical-falinos" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United States.1252';
 !   DROP DATABASE "medical-falinos";
                postgres    false            ?            1259    24696    quests    TABLE       CREATE TABLE public.quests (
    name character varying(30) NOT NULL,
    description character varying(300) NOT NULL,
    phone character varying(10) NOT NULL,
    is_accept boolean NOT NULL,
    id integer NOT NULL,
    datequest character varying NOT NULL
);
    DROP TABLE public.quests;
       public         heap    postgres    false            ?            1259    24701    quests_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.quests_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.quests_id_seq;
       public          postgres    false    210            ?           0    0    quests_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.quests_id_seq OWNED BY public.quests.id;
          public          postgres    false    211            ?            1259    24689    users    TABLE     ?   CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(25),
    email character varying(50),
    password character varying(30),
    is_admin boolean
);
    DROP TABLE public.users;
       public         heap    postgres    false            `           2604    24702 	   quests id    DEFAULT     f   ALTER TABLE ONLY public.quests ALTER COLUMN id SET DEFAULT nextval('public.quests_id_seq'::regclass);
 8   ALTER TABLE public.quests ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    211    210            ?          0    24696    quests 
   TABLE DATA           T   COPY public.quests (name, description, phone, is_accept, id, datequest) FROM stdin;
    public          postgres    false    210   L       ?          0    24689    users 
   TABLE DATA           D   COPY public.users (id, name, email, password, is_admin) FROM stdin;
    public          postgres    false    209   ?       ?           0    0    quests_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.quests_id_seq', 14, true);
          public          postgres    false    211            b           2606    24695    users Users_email_key 
   CONSTRAINT     S   ALTER TABLE ONLY public.users
    ADD CONSTRAINT "Users_email_key" UNIQUE (email);
 A   ALTER TABLE ONLY public.users DROP CONSTRAINT "Users_email_key";
       public            postgres    false    209            d           2606    24693    users Users_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.users
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.users DROP CONSTRAINT "Users_pkey";
       public            postgres    false    209            ?   ?   x?E?M!?u{
O?Ж????

1?	L2???MW?{?]S???I[	??x?	?5????U?d?>ʫ?P?x
??D?k<?E{?V7}B?Ya
qB??2?9+?qw??s?~?_d???A??RGR???e~??|D?7?/?      ?   #   x?3?LL??̃?`R/9????Ș??+F??? ??	?     