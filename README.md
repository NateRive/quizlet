# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version
2.3.1
* System dependencies

* Configuration

* Database creation
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null:false|
|avatar|string|

### association
* has_many :folders
* has_many :subjects


## Foldersテーブル
|Column|Type|Options|
|------|----|-------|
|title|string|unique:true;null:false|
|user_id|reference|

### association
* has_many :subjects


## subjectsテーブル
|Column|Type|Options|
|------|----|-------|
|title|string|null:false;unique:true|
|user_id|reference|
|folder_id|reference|

### association
* belongs_to :folder
* belongs_to :user
* has_many :words

## wordsテーブル
|Column|Type|Options|
|------|----|-------|
|face|text|null:false;|
|flip|text|
|subject_id|reference|
|image_url|string|
