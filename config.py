#数据库配置
HOSTNAME = '127.0.0.1'
PORT     = '3306'
DATABASE = 'zlckqa'
USERNAME = 'root'
PASSWORD = 'xxx'
DB_URI = 'mysql+pymysql://{}:{}@{}:{}/{}?charset=utf8'.format(USERNAME,PASSWORD,HOSTNAME,PORT,DATABASE)
SQLALCHEMY_DATABASE_URI = DB_URI

SQLALCHEMY_TRACK_MODIFICATIONS = True

SECRET_KEY = "asdfghjkl123"

#邮箱配置
MAIL_SERVER = "smtp.qq.com"
MAIL_PORT = 465
MAIL_USE_TLS = False
MAIL_USE_SSL =True
MAIL_DEBUG =True
MAIL_USERNAME = "xxx@qq.com"
MAIL_PASSWORD = "xxx"
MAIL_DEFAULT_SENDER = "xxx@qq.com"
