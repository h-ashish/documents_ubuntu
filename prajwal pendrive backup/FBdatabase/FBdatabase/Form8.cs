using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using MySql.Data.MySqlClient;



namespace FBdatabase
{
    public partial class Form8 : Form
    {
        public Form8()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            Form9 a = new Form9();
            a.Show();
            this.Hide();
        }

        private void label7_Click(object sender, EventArgs e)
        {

        }

        private void button3_Click(object sender, EventArgs e)
        {
            Form4 a = new Form4();
            a.Show();
            this.Hide();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            Form10 a = new Form10();
            a.Show();
            this.Hide();
        }

        

        private void button4_Click(object sender, EventArgs e)
        {


            DataSet d = new DataSet();
            try
            {
                MySqlConnection sql_con = new MySqlConnection("server=localhost;User Id=root; password=root;database=facebook");
                String str_query = "select * from facebook.friend";
                sql_con.Open();
                MySqlDataAdapter DTA = new MySqlDataAdapter(str_query, sql_con);
                DTA.Fill(d);
                sql_con.Close();

            }
            catch (Exception)
            {


            }

            dataGridView1.DataSource = d.Tables[0];




        }

        private void dataGridView1_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {

        }
    }
}
