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
    public partial class Form9 : Form
    {
        public Form9()
        {
            InitializeComponent();
        }

        private void button3_Click(object sender, EventArgs e)
        {
            Form8 a = new Form8();
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
            String a = textBox1.Text;
            String b = textBox2.Text;
            // String c = textBox3.Text;
            //int d = int.Parse(textBox4.Text);

            string query = "insert into facebook.friend values ('" + a + "','" + b + "')";



            MySqlConnection sqlp = new MySqlConnection("server=localhost;User Id=root; password=root;database=facebook");

            try
            {
                sqlp.Open();
                MySqlCommand cmd = new MySqlCommand(query, sqlp);
                cmd.ExecuteNonQuery();
                sqlp.Close();
                MessageBox.Show("added post sucessfully");

            }
            catch (Exception ex)
            {
                MessageBox.Show("error" + ex.Message);
            }

    





        }

        private void button1_Click(object sender, EventArgs e)
        {

        }

    }
}
