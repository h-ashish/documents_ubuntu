using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace FBdatabase
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

       

        private void button1_Click(object sender, EventArgs e)
        {
            Form2 a = new Form2();
            a.Show();
            this.Hide();
        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void button2_Click_1(object sender, EventArgs e)
        {

            if ((textBox2.Text == "oracle") && (textBox1.Text == "100"))
            {
                Form2 a = new Form2();
                a.Show();
                this.Hide();
            }

            else
            {
                MessageBox.Show("Invalid User name or Password");
            }



        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }
    }
}
